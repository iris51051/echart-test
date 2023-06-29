import React from "react";
import { Row, Col } from "antd";
import ECharts, { EChartsReactProps } from "echarts-for-react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
//BasicMultiLineChart
const BLchart = (colors) => {
  const option = {
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      icon: "circle",
      bottom: -3,
      left: "6%",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "8%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };
  return (
    <ECharts
      style={{
        width: "65%",
      }}
      option={option}
    />
  );
};
//BasicBarChart
const BarChart = (colors) => {
  const option = {
    title: {
      text: "World Population",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
    },
    series: [
      {
        name: "2011",
        type: "bar",
        data: [18203, 23489, 29034, 104970, 131744, 630230],
      },
    ],
  };
  return <ECharts color={colors} style={{ width: "30%" }} option={option} />;
};
//스코어카드
const ScoreCard = (colors) => {
  const score = [
    { key: 1, label: "페이지뷰", value: 32 },
    { key: 2, label: "전체 방문수", value: 27 },
    { key: 3, label: "북마크/직접입력 방문수", value: 17 },
    { key: 4, label: "외부유입 방문 랜딩페이지 통과율", value: "44.44%" },
    { key: 5, label: "전체 반송수", value: 22 },
  ];
  return (
    <>
      <div style={{ width: "flex" }}>
        <table className="ScoreCard">
          <tr className="ScoreCardRow">
            {score.map((item) => (
              <td
                style={{ align: "center" }}
                className="ScoreCardCol"
                key={item.key}
              >
                {item.label}
                <br />
                <strong>{item.value}</strong>
              </td>
            ))}
          </tr>
        </table>
      </div>
    </>
  );
};
//스코어카드 차트
const ScoreCardChart = (colors) => {
  const score = [
    {
      key: "1",
      title: "총 광고비",
      value: "3,283,872",
      unit: "원",
      persent: 100,
    },
    {
      key: "2",
      title: "총 매출액",
      value: "7.554.857",
      unit: "원",
      persent: -2,
    },
    {
      key: "3",
      title: "ROAS(%)",
      value: "542",
      unit: "%",
      persent: 100,
    },
    {
      key: "4",
      title: "CTR",
      value: "542",
      unit: "%",
      persent: 100,
    },
  ];
  const option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      show: false,
    },
    yAxis: {
      type: "value",
      min: 2,
      show: false,
      axisPointer: {
        label: {
          formatter: function (params) {
            return params.value;
          },
        },
      },
    },
    series: [
      {
        data: [2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 2],
        type: "line",
        areaStyle: {},
        symbol: "none",
      },
    ],
  };

  return (
    <div align="center" className="ScoreChartRow">
      {score.map((item) => (
        <div key={item.key} className="ScoreChartCol">
          <h4 className="ScoreChartTitle">{item.title}</h4>
          <div className="ScoreChartValue">
            {item.value}
            {item.unit}
          </div>
          <div className="ScoreChartPersent">
            ({item.persent}%
            {item.persent > 0 ? (
              <CaretUpOutlined className="ArrowUp" />
            ) : (
              <CaretDownOutlined className="ArrowDown" />
            )}
            )
          </div>
          <div className="ScoreChartDiv">
            <AreaLineChart />
          </div>
        </div>
      ))}
    </div>
  );
};
const AreaLineChart = (colors) => {
  const option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      show: false,
    },
    yAxis: {
      type: "value",
      min: 2,
      show: false,
      axisPointer: {
        label: {
          formatter: function (params) {
            return params.value;
          },
        },
      },
    },
    series: [
      {
        data: [2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 2],
        type: "line",
        areaStyle: {},
        symbol: "none",
      },
    ],
  };
  return <ECharts className="ScoreChart" option={option} color={colors} />;
};

const App = () => {
  const color = [
    "#c23531",
    "#2f4554",
    "#61a0a8",
    "#d48265",
    "#91c7ae",
    "#749f83",
    "#ca8622",
    "#bda29a",
    "#6e7074",
    "#546570",
    "#c4ccd3",
  ];
  return (
    <div style={{ padding: 30 }}>
      <div>
        <div style={{ padding: "20px", display: "flex" }}>
          <BLchart colors={color} />
          <BarChart colors={color} />
        </div>
        <div>
          <ScoreCard colors={color} />
          <ScoreCardChart colors={color} />
        </div>
      </div>
    </div>
  );
};

export default App;
