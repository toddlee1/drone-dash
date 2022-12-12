import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import {formatTime} from "../../utils/util";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

type Props = {
    gasDataList: GasDataType[];
}

export function LineChart(props: Props) {
    const options: ChartOptions<'line'> = {
        responsive: false,
        scales: {
            xAxis: {
                // The axis for this scale is determined from the first letter of the id as `'x'`
                // It is recommended to specify `position` and / or `axis` explicitly.
                // type: 'time',
                display: false,
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
        },
    };

    const { gasDataList } = props;

    const data: ChartData<'line'> = {
        labels: gasDataList.map(it => formatTime(it.sensed)),
        datasets: [
            {
                label: '산소',
                data: gasDataList.map(it => Number(it.oxy)),
                borderColor: 'rgb(104,255,99)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 4,
                pointHoverRadius: 4,
            },
        ],
    }

    return <Line options={options} width={550} data={data} />;
}