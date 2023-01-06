import { useEffect, useState } from 'react';
import axios from 'axios';



const useStocks = (ticker: string = "AMZN") => {
    const [stocks, setStocks] = useState<any>([]);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchStock = async (ticker: string) => {
        setIsLoading(true);

        const options = {
            method: 'GET',
            url: 'https://finnhub.io/api/v1/search',
            params: { token: process.env.VITE_FINNHUB_API_KEY, q: ticker },
        }
        const response = await axios.request(options);

        if (response.status !== 200) {
            console.log('Error fetching stocks');
            return;
        }

        setStocks(response.data.result);
        setIsLoading(false);
    }

    useEffect(() => {
        if (ticker !== '') {
            fetchStock(ticker);
        }
    }, [ticker]);

    return { stocks, error, isLoading };
}

export default useStocks;