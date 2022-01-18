import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@mui/icons-material'
export default function TopBar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">CryptoMoon</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img 
                        src="https://i.pinimg.com/236x/c9/20/93/c92093a3264fa374b7523c3e190e7ad5.jpg" 
                        alt="profile" 
                        className="topAvatar"
                    />
                </div>
            </div>
        </div>
    );

}