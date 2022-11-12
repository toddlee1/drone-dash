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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: '대기 중 농도',
        },
    },
};

type GasDataType = {
    id: number;
    oxy: string;
    sensed: string;
}

type Props = {
    gasDataList: GasDataType[];
}

export function LineChart(props: Props) {
    const { gasDataList } = props;
    const data: ChartData<'line'> = {
        labels: gasDataList.map(it => it.sensed),
        datasets: [
            {
                label: '산소',
                data: gasDataList.map(it => Number(it.oxy)),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    }
    return <Line options={options} data={data} />;
}