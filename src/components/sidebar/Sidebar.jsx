import React from "react";
import {
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
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
                title: 'Users',
                icon: <PermIdentity />,
                to: 'users'
            },
            {
                title: 'Products',
                icon: <Storefront />
            },
            {
                title: 'Transactions',
                icon: <AttachMoney />
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
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                {sidebarMenuOptions.map((item, itemIndex) => (
                    <div className="sidebarMenu" key={itemIndex}>
                        <h3 className="sidebarTitle">{item.title}</h3>
                        <ul className="sidebarList">
                            {item.subOptions.map((elem, elemIndex) => (
                                <li className={`sidebarListItem ${itemIndex === 0 && elemIndex === 0 && 'active'}`} key={elemIndex}>
                                        {elem.icon}
                                   <Link to={elem.to ? elem.to : '/'}>
                                        <span>{elem.title}</span>
                                   </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                
             
            </div>
        </div>
    );
}
