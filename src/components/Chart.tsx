import React from 'react';
import 'chart.js/auto';
import { Chart as ChartLib } from 'react-chartjs-2';
import { format } from 'date-fns';

import useChartData from "../hooks/useChartData";
import { useParams } from 'react-router-dom';

export function Chart() {

    // get :symbol param from url.
    const { symbol } = useParams();

    const { data: chartData, error, isLoading } = useChartData(symbol);

    if (error) {
        return <div className='error'>Could not display chart.</div>
    }

    if (isLoading) {
        return <div className='loading'>Loading...</div>
    }

    const labels = getDays(chartData.t);


    // Create a sample line chart.
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Closing Price',
                fill: false,
                data: chartData.c
            }
        ]
    };

    return (
        <div className='chart'>
            <h2>{symbol}</h2>
            <ChartLib type='line' data={data} />
        </div>
    );


}

export default Chart;


function getDays(timestamps: any) {
    if (!timestamps) {
        return [];
    }
    
    return timestamps.map((timestamp: any) => {
        return format(timestamp * 1000, 'yyyy-MM-dd');
    });
}
