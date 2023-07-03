import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Space,
  Dropdown,
  Checkbox,
  Typography,
  Divider,
} from "antd";
import ECharts, { EChartsReactProps } from "echarts-for-react";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  PlusCircleFilled,
  DownOutlined,
  CloseOutlined,
} from "@ant-design/icons";
//BasicMultiLineChart
//흠냐
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
      <div>
        <table className="ScoreCardTable">
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
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const score = [
    {
      key: 1,
      title: "총 광고비",
      value: "3,283,872",
      unit: "원",
      persent: 100,
    },
    {
      key: 2,
      title: "총 매출액",
      value: "7.554.857",
      unit: "원",
      persent: -2,
    },
    {
      key: 3,
      title: "ROAS(%)",
      value: "542",
      unit: "%",
      persent: 100,
    },
    {
      key: 4,
      title: "CTR",
      value: "542",
      unit: "%",
      persent: 100,
    },
    {
      key: 5,
      title: "총 노출수",
      value: "123123123",
      unit: "회",
      persent: 40,
    },
    {
      key: 6,
      title: "평균 노출수",
      value: "300",
      unit: "회",
      persent: 10,
    },
    {
      key: 7,
      title: "총 클릭수",
      value: "600",
      unit: "회",
      persent: 100,
    },
    {
      key: 8,
      title: "평균 클릭 수",
      value: "100",
      unit: "회",
      persent: -20,
    },
    {
      key: 9,
      title: "평균 CTR",
      value: "120",
      unit: "%",
      persent: 30,
    },
  ];
  const FilterOptions = score.map(({ key, title }) => ({
    label: title,
    value: key,
    disabled: key >= 1 && key <= 4,
  }));

  const defaultCheckedKeys = score
    .filter(({ key }) => key >= 1 && key <= 4)
    .map(({ key }) => key);

  const chartAdd = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const HandleChangeValue = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };
  return (
    <div>
      <Row>
        {score
          .filter((item) => item.key <= 4)
          .map((item) => (
            <Col lg={3} key={item.key} className="ScoreChartCol">
              <h3 className="ScoreChartTitle">{item.title}</h3>
              <div className="ScoreChartValueDiv">
                <span className="ScoreChartValue">{item.value}</span>
                <span className="ScoreChartUnit"> {item.unit}</span>
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
              <div>
                <AreaLineChart />
              </div>
            </Col>
          ))}
        <Col className="ScoreChartAdd1" lg={3}>
          <div className="ScoreChartAddContainer">
            <div>
              <Dropdown
                className="chartDropdown"
                open={dropdownVisible}
                overlay={
                  <div className="DropDownLayer">
                    <div className="DropDownHeader">
                      <span className="DropdownHeaderText">표현 항목</span>
                      <div className="DropDownCloseContainer">
                        <CloseOutlined
                          className="DropDownClose"
                          onClick={closeDropdown}
                        />
                      </div>
                    </div>
                    <Row>
                      <Checkbox.Group
                        className="ChartFilter"
                        options={FilterOptions}
                        onChange={HandleChangeValue}
                        defaultValue={defaultCheckedKeys}
                      >
                        <Row>
                          {FilterOptions.map((option) => (
                            <Col span={8} key={option.value}>
                              <Checkbox value={option.value}>
                                {option.label}
                              </Checkbox>
                            </Col>
                          ))}
                        </Row>
                      </Checkbox.Group>
                    </Row>
                  </div>
                }
              >
                <PlusCircleFilled className="ChartAdder" onClick={chartAdd} />
              </Dropdown>
            </div>
          </div>
        </Col>
        <Col className="ScoreChartAdd2" lg={3}>
          <div className="ScoreChartAddContainer">
            <PlusCircleFilled className="ChartAdder" />
          </div>
        </Col>
      </Row>
    </div>
  );
};
const AreaLineChart = (colors) => {
  const data = [2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 2];
  const minValues = [];
  const minValue = Math.min(...data);

  const maxValues = [];
  const maxValue = Math.max(...data);

  data.forEach((value, index) => {
    if (value === minValue) {
      minValues.push(index);
    }
    if (value === maxValue) {
      maxValues.push(index);
    }
  });

  const option = {
    tooltip: {
      backgroundColor: "#636465",
      textStyle: {
        color: "white",
      },
      trigger: "axis",
      axisPointer: {
        label: {
          show: false,
        },
      },
      formatter: function (params) {
        var tooltipContent = "";
        params.forEach(function (item) {
          var color = "#30c7e9";
          var value = item.data;
          tooltipContent +=
            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' +
            color +
            ';"></span>';
          tooltipContent += value;
        });
        return tooltipContent;
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      show: false,
    },
    yAxis: {
      type: "value",
      min: 2,
      show: false,
    },
    series: [
      {
        data: data,
        type: "line",
        areaStyle: {
          color: "rgba(65,128,236,0.2)",
        },
        color: "rgba(65,128,236,0.5)",
        symbol: "none",
        markPoint: {
          symbol: "circle",
          symbolSize: 3.5,
          lsbel: {
            show: false,
          },
          data: [
            ...maxValues.map((index) => ({
              type: "max",
              name: "max",
              itemStyle: { color: "green" },
              coord: [index, maxValue],
            })),
            ...minValues.map((index) => ({
              type: "min",
              name: "min",
              itemStyle: { color: "orange" },
              coord: [index, minValue],
            })),
          ],
        },
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
        </div>
        <br />
        <div>
          <ScoreCardChart colors={color} />
        </div>
      </div>
    </div>
  );
};

export default App;
