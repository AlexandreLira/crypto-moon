import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import { userData } from '../../dummyData';
import { apiGet } from '../../services/api';
import "./home.css"

export default function Home(){
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        async function getData() {
            
            const response = await apiGet(
                "coins/bitcoin/market_chart?vs_currency=usd&days=200"
            );

            const prices = response.prices.map(item => ({name: format(new Date(item[0]), "dd/MM/yyyy"), price: item[1] }))
            setChartData(prices)
    
        }
        getData();
    }, [])
    return(
        <div className="home">
            <FeaturedInfo/>
            <div className="homeChart">
                <Chart
                    title="Analytics"
                    data={chartData}
                    grid={true}
                    dataKey="price"
                />
            </div>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    );
}