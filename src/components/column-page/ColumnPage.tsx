import { MealHistory, Recommended } from 'shared';
import './ColumnPage.scss';
import { IDummyColumnList, IResponseAPI } from 'interfaces';
import { useEffect, useState } from 'react';
import { getColumnList } from 'apis';
import { t } from 'i18next';

function ColumnPage() {
  const recommendedArray = [
    {
      title: 'COLUMN_PAGE.RECOMMENDED_COLUMN_TITLE',
      subTitle: 'COLUMN_PAGE.RECOMMENDED_COLUMN_SUBTITLE'
    },
    {
      title: 'COLUMN_PAGE.RECOMMENDED_DIET_TITLE',
      subTitle: 'COLUMN_PAGE.RECOMMENDED_DIET_SUBTITLE'
    },
    {
      title: 'COLUMN_PAGE.RECOMMENDED_BEAUTY_TITLE',
      subTitle: 'COLUMN_PAGE.RECOMMENDED_BEAUTY_SUBTITLE'
    },
    {
      title: 'COLUMN_PAGE.RECOMMENDED_HEALTH_TITLE',
      subTitle: 'COLUMN_PAGE.RECOMMENDED_HEALTH_SUBTITLE'
    }
  ];
  const [columnList, setColumnList] = useState([] as IDummyColumnList[]);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const height: number = 144;
  const width: number = 234;

  useEffect(() => {
    if (isLoadMore) {
      getColumnList().then((res: IResponseAPI<IDummyColumnList[]>) => {
        setColumnList([...columnList, ...(res?.data || [])]);
        setIsLoadMore(false);
      }).catch(() => setIsLoadMore(false));
    }

    return () => setIsLoadMore(false);
  }, [isLoadMore,columnList]);

  return (
    <div className="column-wrapper main-container">
      <div className="recommended-menu d-flex">
        {recommendedArray.map((item, index) =>
          <Recommended
            key={index}
            titleRecommend={item.title}
            subTitle={item.subTitle}
          />
        )}
      </div>

      <div className="meal-history d-flex">
        {columnList.map(item =>
          <MealHistory
            key={item.id}
            height={height}
            width={width}
            backgroundImage={item.img}
            backgroundSize="100%"
            imgText={item.date}
            content={item.content}
            hashTag={item.hashTag}
            isColumnPage={true}
          />
        )}
      </div>

      <div className="button-style d-flex">
        <button onClick={() => setIsLoadMore(true)} type="button" className="btn">
          {t('COLUMN_PAGE.SEE_MORE_COLUMNS')}
        </button>
      </div>
    </div>
  );
}

export default ColumnPage;
