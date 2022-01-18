import { Visibility } from '@mui/icons-material';
import React, { useEffect, useState } from "react";
import { apiGet } from '../../services/api';
import "./widgetSmall.css";

export default function WidgetSmall() {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            
            const response = await apiGet(
                "coins/markets?vs_currency=usd&order=gecko_asc&per_page=5&page=1&sparkline=false"
            );

            setData(response)
    
        }
        getData();
    }, [])
 

    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Coins</span>
            <ul className="widgetSmallList">
                {data.map((item, index) => (
                    <li className="widgetSmallItem" key={index}>
                        <img src={item.image} alt="profile" className="widgetSmallImage" />
                        <div className="widgetSmallUser">
                            <span className="widgetSmallUserName">{item.name}</span>
                            <span className="widgetSmallUserTitle">${item.current_price}</span>
                        </div>
                        <button className="widgetSmallButton">
                            <Visibility />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
