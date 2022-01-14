import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import { userData } from '../../dummyData';
import "./home.css"

export default function Home(){
    
    return(
        <div className="home">
            <FeaturedInfo/>
            <Chart
                title="Users Analytics"
                data={userData}
                grid={true}
                dataKey="Active User"
            />
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    );
}