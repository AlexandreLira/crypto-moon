import React from 'react';
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo(){
    return(
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4.22</span>
                    <span className="featuredMoneyRate">
                        -9.43 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last monthe</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$64.85</span>
                    <span className="featuredMoneyRate">
                        +11.44 <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last monthe</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$10.64</span>
                    <span className="featuredMoneyRate">
                        -2.09 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last monthe</span>
            </div>
        </div>    
    );
}   