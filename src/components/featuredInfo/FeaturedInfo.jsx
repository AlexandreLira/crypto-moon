import React, { useEffect, useState } from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { apiGet } from "../../services/api";

export default function FeaturedInfo() {
    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await apiGet(
                "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false"
            );
         
            setData(response);
    
        }
        getData();
    }, []);
  
    return (
        <div className="featured">
            {data.map((item) => (
                <div className="featuredItem">
                    <div className="featuredTitleContainer">
                        <img src={item.image} alt="coin" className="featuredCoinImage"/>
                        <span className="featuredTitle">{item.name}</span>
                    </div>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">${item.current_price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</span>
                        <span className="featuredMoneyRate">
                            {item.price_change_percentage_24h.toFixed(2)} {item.price_change_percentage_24h < 0 ? <ArrowDownward className="featuredIcon negative" /> : <ArrowUpward className="featuredIcon"/>}
                        </span>
                    </div>
                    <span className="featuredSub">Compared to last 24H</span>
                </div>
            ))}
        </div>
    );
}
