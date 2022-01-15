import React from "react";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import "./user.css";
import { Link } from "react-router-dom";

export default function User(){
    return(
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>

            <div className="userContainer">
                <div className="userShow">

                    <div className="userShowTop">
                        <img 
                            alt="user" 
                            src="https://images.pexels.com/photos/9396861/pexels-photo-9396861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                            className="userShowImage" 
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>

                    <div className="userShowBottom">
                        <span className="userShowBottomTitle">Account Details</span>

                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>

                        <span className="userShowBottomTitle">Contant Details</span>


                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+55 85 1234 5678</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Fortaleza - CE | BRA</span>
                        </div>
                    </div>
                </div>

                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>

                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <UserUpdateItem
                                label="Username"
                                placeholder="annabeck99"
                            />

                            <UserUpdateItem
                                label="Full Name"
                                placeholder="Anna Beck"
                            />

                            <UserUpdateItem
                                label="Email"
                                placeholder="annabeck99@gmail.com"
                            />


                            <UserUpdateItem
                                label="Phone"
                                placeholder="+55 85 1234 5678"
                            />

                            <UserUpdateItem
                                label="Address"
                                placeholder="Fortaleza - CE | BRA"
                            />

                        </div>
                        
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    alt="user"
                                    src="https://images.pexels.com/photos/9396861/pexels-photo-9396861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    className="userUpdateImage"
                                />
                                <label htmlFor="file" className="userUpdateIcon"><Publish/></label>
                                <input type="file" id="file"/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
}

function UserUpdateItem({label, placeholder}){
    return(
        <div className="userUpdateItem">
            <label>{label}</label>
            <input 
                type="text" 
                className="userUpdateInput" 
                placeholder={placeholder}
            />
        </div>
    );
}