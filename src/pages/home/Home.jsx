import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
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
        </div>
    );
}