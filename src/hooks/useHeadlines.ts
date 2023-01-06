import React, { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.VITE_FINNHUB_API_KEY;

const options = {
    method: "GET",
    url: "https://finnhub.io/api/v1/news/?category=general",
    params: { token: apiKey },
}

const useHeadlines = () => {
    const [headlines, setHeadlines] = useState<any>([]);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchHeadlines = async () => {
        try {
            setIsLoading(true);
            const response = await axios.request(options);

            if (response.status !== 200) {
                console.log("Error fetching stocks");
                return;
            }

            setHeadlines(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchHeadlines();
    }, [apiKey]);

    return { headlines, error, isLoading };
}

export default useHeadlines;