import ReactApexChart from "react-apexcharts";
import React from "react";

class InsightsChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Sales",
          data: [4, 3, 10, 9, 29, 19, 22],
        },
      ],
      options: {
        chart: {
          height: 150,
          type: "line",
          toolbar: {
            show: false,
          },
        },
        forecastDataPoints: {
          count: 1,
        },
        grid: {
          show: false,
        },
        stroke: {
          width: 5,
          curve: "smooth",
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          type: "datetime",
          categories: [
            "1/11/2000",
            "2/11/2000",
            "3/11/2000",
            "4/11/2000",
            "5/11/2000",
            "6/11/2000",
            "7/11/2000",
          ],
          tickAmount: 10,
          labels: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#d9551c"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={125}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
export default InsightsChart;
