import React, { useEffect, useState } from 'react';
import "./widgetLarge.css";
import { apiGet } from '../../services/api';
export default function WidgetLarge() {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            
            const response = await apiGet(
                "coins/markets?vs_currency=usd&order=volume_desc&per_page=4&page=1&sparkline=false"
            );

            setData(response)
    
        }
        getData();
    }, [])

    const latestTransactions = [
        {
            name: "Anna Keller",
            title: "Soft Enginner",
            image: "https://images.pexels.com/photos/10013070/pexels-photo-10013070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            date: "2 Jun 2021",
            amount: 128.38,
            status: "Approved"
        },
        {
            name: "Diane O'Gallagher",
            title: "Design",
            image: "https://images.pexels.com/photos/9948310/pexels-photo-9948310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            date: "10 Jun 2021",
            amount: 135.82,
            status: "Declined"
        },
        {
            name: "Diane O'Gallagher",
            title: "Design",
            image: "https://images.pexels.com/photos/9948310/pexels-photo-9948310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            date: "10 Jun 2021",
            amount: 135.82,
            status: "Pending"
        },
        {
            name: "Diane O'Gallagher",
            title: "Design",
            image: "https://images.pexels.com/photos/9948310/pexels-photo-9948310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            date: "10 Jun 2021",
            amount: 135.82,
            status: "Approved"
        },
    ];

    const Button = ({ type }) => {
        return (
            <button className={"widgetLargeButton " + type}>{type}</button>
        )
    }

    return (
        <div className="widgetLarge">
            <h3 className="widgetLargeTitle">Latest transactions</h3>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">Coin</th>
                    <th className="widgetLargeTh widgetLargeThDate">Date</th>
                    <th className="widgetLargeTh">Price</th>
                    <th className="widgetLargeTh widgetLargeStatus">Status</th>
                </tr>
                {data.map((item, index) => (
                    <tr className="widgetLargeTr" key={index}>
                        <td className="widgetLargeUser">
                            <img
                                src={item.image}
                                alt="profile"
                                className="widgetLargeImage"
                            />
                            <span className="widgetLargeName">{item.name}</span>
                        </td>
                        <td className="widgetLargeDate">{latestTransactions[index].date}</td>
                        <td className="widgetLargeAmount">${item.current_price}</td>
                        <td className="widgetLargeStatus"><Button type={latestTransactions[index].status}/></td>
                    </tr>
                ))}
            </table>
        </div>
    );
}