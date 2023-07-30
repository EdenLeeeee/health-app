import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import { t } from 'i18next';
import { Line } from 'react-chartjs-2';
import './LineChart.scss';
import { Constant } from 'constants/common';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export interface ILineChart {
  isShowButton: boolean;
  isShowHeader: boolean;
  height?: number;
  width?: number;
}

function LineChart(props: ILineChart) {
  const positionXLabel = 4;
  const positionXExtendLabel = 10;
  const positionXExtendLabelWithOneChar = 6;
  const positionYLabel = 19;

  const options = {
    layout: {
      padding: {
        bottom: 20,
        right: 20,
        left: 20
      }
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    scales: {
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          color: Constant.grayStripe
        },
        ticks: {
          display: false
        }
      }
    }
  };
  const fakeLabels = [
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '1',
    '2',
    '3',
    '4',
    '5'
  ];
  const data = {
    labels: fakeLabels,
    datasets: [
      {
        clip: 0,
        data: fakeLabels.map(() => fakeData(100, 500)),
        borderColor: Constant.primary300,
        backgroundColor: Constant.primary300
      },
      {
        data: fakeLabels.map(() => fakeData(450, 700)),
        borderColor: Constant.secondaryColor,
        backgroundColor: Constant.secondaryColor
      }
    ]
  };
  const plugins = [
    {
      id: 'custom_label',
      beforeDraw: chart => {
        const { ctx } = chart;
        var xAxis = chart.scales['x'];
        var yAxis = chart.scales['y'];
        ctx.save();
        chart.data.labels.forEach((l: string) => {
          const x = xAxis.getPixelForValue(l);
          ctx.font = `12px ${Constant.primaryFont}`;
          ctx.fillStyle = Constant.whiteColor;
          ctx.fillText(
            l + ' ',
            x - positionXLabel,
            yAxis.bottom + positionYLabel
          );
          ctx.font = `8px ${Constant.secondaryFont}`;
          ctx.fillStyle = Constant.whiteColor;
          const distance: number =
            l.length > 1
              ? positionXExtendLabel
              : positionXExtendLabelWithOneChar;
          ctx.fillText(
            t('MY_RECORDS.MY_BODY.MONTH'),
            x + distance,
            yAxis.bottom + positionYLabel - 1
          );
        });
        ctx.restore();
      }
    }
  ];

  function fakeData(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="line-chart-wrapper">
      {props.isShowHeader &&
        <div className="header d-flex">
          <span className="title">
            {t('MY_RECORDS.BODY_RECORD_TITLE')}
          </span>
          <span className="date">2021.05.21</span>
        </div>}

      <div className="line-chart">
        <Line
          options={options}
          data={data}
          width={props.width}
          height={props.height}
          plugins={plugins}
        />
      </div>

      {props.isShowButton &&
        <div className="button-chart d-flex">
          <button className="btn d-flex">
            {t('MY_RECORDS.MY_BODY.SUN')}
          </button>
          <button className="btn d-flex">
            {t('MY_RECORDS.MY_BODY.WEEK')}
          </button>
          <button className="btn d-flex">
            {t('MY_RECORDS.MY_BODY.MONTH')}
          </button>
          <button className="btn d-flex active">
            {t('MY_RECORDS.MY_BODY.YEAR')}
          </button>
        </div>}
    </div>
  );
}

LineChart.defaultProps = {
  isShowButton: true,
  isShowHeader: true
};

export default LineChart;
