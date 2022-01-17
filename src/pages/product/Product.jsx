import { Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData, ProductRows } from "../../dummyData";
import "./product.css";

export default function Product(){
    return(
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart 
                        data={productData} 
                        dataKey="Active User"
                        title="Sales Performance"
                    />
                </div>

                <div className="productTopRight">

                    <div className="productInfoTop">
                        <img 
                            src={ProductRows[0].avatar}
                            alt="product" 
                            className="productImage" 
                        />
                        <span className="productName">{ProductRows[0].username}</span>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id:</span>
                            <span className="productInfoValue">123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">74</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">In stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="product Name" />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img 
                                src={ProductRows[0].avatar} 
                                alt="product"
                                className="productUploadImage"
                            /> 
                            <label htmlFor="file" >
                                <Publish className="productUploadIcon"/>
                            </label>
                            <input type="file" id="file"/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}