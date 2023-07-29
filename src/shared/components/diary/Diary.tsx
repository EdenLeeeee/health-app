import './Diary.scss';

export interface IDiary {
  date: string;
  content: string;
}

function Diary(props: IDiary) {
  return (
    <div className="diary-wrapper">
      <p className="date">
        {props.date}
      </p>
      <p className="content text-ellipsis">
        {props.content}
      </p>
    </div>
  );
}

export default Diary;
