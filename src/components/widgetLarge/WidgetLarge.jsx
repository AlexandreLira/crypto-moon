import React from 'react';
import "./widgetLarge.css";

export default function WidgetLarge() {

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
                    <th className="widgetLargeTh">Customer</th>
                    <th className="widgetLargeTh">Date</th>
                    <th className="widgetLargeTh">Amount</th>
                    <th className="widgetLargeTh">Status</th>
                </tr>
                {latestTransactions.map((item, index) => (
                    <tr className="widgetLargeTr" key={index}>
                        <td className="widgetLargeUser">
                            <img
                                src={item.image}
                                alt="profile"
                                className="widgetLargeImage"
                            />
                            <span className="widgetLargeName">{item.name}</span>
                        </td>
                        <td className="widgetLargeDate">{item.date}</td>
                        <td className="widgetLargeAmount">R${item.amount}</td>
                        <td className="widgetLargeStatus"><Button type={item.status} /></td>
                    </tr>
                ))}
            </table>
        </div>
    );
}