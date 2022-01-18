import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { apiGet } from "../../services/api";
import "./product.css";

export default function Product(){

    const [data, setData] = useState([])
    const [chartData, setChartData] = useState([])
    const { productId } = useParams()
    const [amount, setAmount] = useState(1)
    useEffect(() => {
        async function getData() {
            
            const response = await apiGet(`coins/${productId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false`);

            const prices = response.tickers.map(item => ({price: item.last, name: format(new Date(item.timestamp), "KK:mm")}))
            
            setChartData(prices.splice(10, 10))
            setData(response)

    
        }
        getData();
    }, [])
    return(
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Coin</h1>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart 
                        data={chartData} 
                        dataKey="price"
                        title="Sales Performance"
                    />
                </div>

                <div className="productTopRight">

                    <div className="productInfoTop">
                        <img 
                            src={data.image?.large}
                            alt="product" 
                            className="productImage" 
                        />
                        <span className="productName">{data.name}</span>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Market cap rank:</span>
                            <span className="productInfoValue">{data.market_cap_rank}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Hashing algorithm:</span>
                            <span className="productInfoValue">{data.hashing_algorithm}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Liquidity score:</span>
                            <span className="productInfoValue">{data.liquidity_score}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Block time in minutes:</span>
                            <span className="productInfoValue">{data.block_time_in_minutes}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Current price:</span>
                            <span className="productInfoValue">${data.market_data?.current_price.usd}</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label>Amount</label>
                        <input type="number" value={amount} onChange={value => setAmount(value.currentTarget.value)}/>
                        <label>Total</label>
                        <input type="number" value={(data.market_data?.current_price.usd * amount).toFixed(7)} disabled />
                        
                        <button className="productButton">Buy</button>
                    </div>

                
                
                </form>
            </div>
        </div>
    )
}