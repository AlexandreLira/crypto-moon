import React, { useState } from "react";
import {
    Timeline,
    TrendingUp,
    AccountBalanceWallet,   
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
    HomeOutlined,
  } from '@mui/icons-material';
import "./sidebar.css";
import { Link } from "react-router-dom";

const sidebarMenuOptions = [
    {
        title: 'Dashboard',
        subOptions: [
            {
                title: 'Home',
                icon: <HomeOutlined />,
                to: '/',
            },
            {
                title: 'Analytics',
                icon: <Timeline />
            },
            {
                title: 'Sales',
                icon: <TrendingUp />
            },
        ]
    },
    {
        title: 'Quick Menu',
        subOptions: [
            {
                title: 'My wallet',
                icon: <AccountBalanceWallet />,
                to: 'users'
            },
            {
                title: 'Buy Crypto',
                icon: <AttachMoney />,
                to: 'products'
            },
            {
                title: 'Reports',
                icon: <BarChart />
            },
        ]
    },
    {
        title: 'Notifications',
        subOptions: [
            {
                title: 'Mail',
                icon: <MailOutline />
            },
            {
                title: 'Feedback',
                icon: <DynamicFeed />
            },
            {
                title: 'Messages',
                icon: <ChatBubbleOutline />
            },
        ]
    },
    {
        title: 'Staff',
        subOptions: [
            {
                title: 'Manage',
                icon: <WorkOutline />
            },
            {
                title: 'Analytics',
                icon: <Timeline />
            },
            {
                title: 'Reports',
                icon: <Report />
            },
        ]
    },
]

export default function Sidebar() {

    const [selected, setSelected] = useState({title: 'Dashboard', subTitle: 'Home'})
    

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                {sidebarMenuOptions.map((item, itemIndex) => (
                    <div className="sidebarMenu" key={itemIndex}>
                        <h3 className="sidebarTitle">{item.title}</h3>
                        <ul className="sidebarList">
                            {item.subOptions.map((elem, elemIndex) => (
                                <Link to={elem.to ? elem.to : '/'} onClick={() => setSelected({title: item.title, subTitle: elem.title})}>
                                    <li className={`sidebarListItem ${selected.title === item.title && selected.subTitle === elem.title  && 'active'}`} key={elemIndex}>
                                        {elem.icon}
                                        <span>{elem.title}</span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                ))}
                
             
            </div>
        </div>
    );
}
