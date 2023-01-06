import { useEffect, useState } from "react";
import useStocks from "../hooks/useStocks";
import Card from "./Card";
import Search from "./Search";

const Cards = () => {
    const [searchString, setSearchString] = useState<string>("");
    const { stocks, error, isLoading } = useStocks(searchString);

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="stocks-page">
            <Search searchStringUpdated={setSearchString} />
            {isLoading ?
                <div className="loading-cards">Loading...</div> :
                stocks.map((stock: any, index: number) => {
                    return <Card key={index} ticker={stock} />
                })

            }
        </div>
    )
}

export default Cards;