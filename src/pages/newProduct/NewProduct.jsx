import React from "react";
import "./newProduct.css";

export default function NewProduct(){
    return(
        <div className="addProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form action="" className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" />
                </div>

                <div className="addProductItem">
                    <label>Name</label>
                    <input 
                        type="text" 
                        placeholder="Apple Airpods"  
                        className="addProductInput"
                    />
                </div>

                <div className="addProductItem">
                    <label>Stock</label>
                    <input 
                        type="number" 
                        placeholder="76" 
                        className="addProductInput"
                    />
                </div>

                <div className="addProductItem">
                    <label>Active</label>
                    <select name="active" id="active" className="addProductInput">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                
                <div className="addProductItem">
                    <button className="addProductButton">Create</button>
                </div>

            </form>
        </div>
    );
}