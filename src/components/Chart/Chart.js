import "./Chart.css"
import ChartBar from "./ChartBar";

function Chart(props) {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxValueDataPoint = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {
                props.dataPoints.map((dataPoint, index) => {
                    return <ChartBar
                                key={index}
                                value={dataPoint.value}
                                label={dataPoint.label}
                                maxValue={maxValueDataPoint}
                            />
                })
            }
        </div>
    );
}

export default Chart;