import { Visibility } from '@mui/icons-material';
import React from "react";
import "./widgetSmall.css";

export default function WidgetSmall() {
    const newMembers = [
        {
            name: "Anna Keller",
            title: "Soft Enginner",
            image:
                "https://images.pexels.com/photos/10013070/pexels-photo-10013070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            name: "Diane O'Gallagher",
            title: "Design",
            image:
                "https://images.pexels.com/photos/9948310/pexels-photo-9948310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            name: "Ailish Mercado",
            title: "Product Manager",
            image:
                "https://images.pexels.com/photos/9780689/pexels-photo-9780689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            name: "Anna Keller",
            title: "Soft Enginner",
            image:
                "https://images.pexels.com/photos/10013070/pexels-photo-10013070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            name: "Diane O'Gallagher",
            title: "Design",
            image:
                "https://images.pexels.com/photos/9948310/pexels-photo-9948310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            name: "Ailish Mercado",
            title: "Product Manager",
            image:
                "https://images.pexels.com/photos/9780689/pexels-photo-9780689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
    ];

    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Join Members</span>
            <ul className="widgetSmallList">
                {newMembers.map((item, index) => (
                    <li className="widgetSmallItem" key={index}>
                        <img src={item.image} alt="profile" className="widgetSmallImage" />
                        <div className="widgetSmallUser">
                            <span className="widgetSmallUserName">{item.name}</span>
                            <span className="widgetSmallUserTitle">{item.title}</span>
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
