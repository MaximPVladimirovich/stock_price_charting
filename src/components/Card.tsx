import { useNavigate } from "react-router-dom";

const Card = ({ ticker }: any) => {
    const navigate = useNavigate();

    return (
        <div className="card">
            <div className="card_body">
                <h2 className="card_title">{ticker.description}</h2>
                <p className="card_subtitle">{ticker.symbol}</p>
            </div>
            <button className="card_btn" onClick={() => navigate(`/stocks/${ticker.symbol}`, { state: ticker })}>View Details</button>
        </div>
    );
};

export default Card;