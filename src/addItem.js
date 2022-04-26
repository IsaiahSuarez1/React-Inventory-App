import { useState } from "react";


function AddItem(props) {
    const [name, setName] = useState ("");
    const [price, setPrice] = useState (0);
    const [type, setType] = useState ("");
    const [brand, setBrand] = useState ("");

    const addItemButtonPressed = () =>{
        props.addItem({name:name, price:price, type:type, brand:brand});
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
    };

    return(
        <div className="container">
            <h2>Add a Item</h2>
                <div className="row">
                    <div className="col">
                        <label htmlFor="name-field">Name:</label>
                        <input 
                        id="name-field" 
                        type = "text"
                        className="form-control" 
                        value = {name} 
                        onChange = {(e) => setName(e.target.value)}/>
                    </div>
                    <div className="col"/>
                </div>
                <div className="row">
                    <div className="col mt-4">
                        <label htmlFor="price-field">Price:</label>
                        <input 
                        id="price-field" 
                        type = "number" 
                        className="form-control" 
                        value = {price} 
                        onChange = {(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className="col" />
                </div>
                <div className="row">    
                    <div className="col mt-4">
                        <label htmlFor="type-field">Type:</label>
                        <input 
                        id="type-field" 
                        type = "text" 
                        className="form-control" 
                        value = {type} 
                        onChange = {(e) => setType(e.target.value)}/>
                    </div>
                    <div className="col" />
                </div>
                <div className="row">
                    <div className="col mt-4">
                        <label htmlFor="brand-field">Brand:</label>
                        <input 
                        id="brand-field" 
                        type = "text" 
                        className="form-control" 
                        value = {brand} 
                        onChange = {(e) => setBrand(e.target.value)}/>
                    </div>
                    <div className="col" />
                </div>

                <div className="col mt-4">
                    <button 
                    type="button" 
                    className="col btn btn-primary"
                    onClick = {addItemButtonPressed}>Add Item</button>
                </div>    
        </div>
    )
}

export default AddItem;