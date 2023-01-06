import { useEffect, useState } from 'react';
import axios from 'axios';
const useChartData = (ticker: string = '') => {
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const options = {
        method: 'GET',
        url: 'https://finnhub.io/api/v1/stock/candle',
        params: {
            token: import.meta.env.VITE_FINNHUB_API_KEY,
            symbol: ticker,
            resolution: 'D',
            from: Math.floor(new Date().getTime() / 1000) - 2592000,
            to: Math.floor(new Date().getTime() / 1000),
        }
    }

    const fetchChartData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.request(options);
            if (response.status !== 200) {
                console.log('Error fetching chart data');
                setData([]);
                setError(true);
                setIsLoading(false);

                return;
            }

            if (response.data.s !== 'ok') {
                console.log('Error fetching chart data');
                setData([]);
                setError(true);
                setIsLoading(false);

                return;
            } else {
                setData(response.data);
            }

            setIsLoading(false);
        } catch (e) {
            console.log('Error fetching chart data');
            setData([]);
            setError(true);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (ticker !== '') {
            fetchChartData();
        }
    }, [ticker]);

    return { data, error, isLoading };
}

export default useChartData;