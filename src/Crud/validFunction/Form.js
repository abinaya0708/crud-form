import React ,{useState}from "react";

export const Forms=()=>{
    
    const [productName,setName]=useState("");
    const [productPrice,setPrice]=useState(0);
    const [productImg,setImage]=useState("");
    const[Product,setProduct]=useState([]);
    const[index,setIndex]=useState([])
    const [isFill,setFill]=useState(false);
    const [isEdit,setEdit]=useState(false);

    const handleInput=(e)=>{
        if(e.target.name==="pName"){
            console.log(e.target.value)
            setName(e.target.value)
        }
        else if(e.target.name==="pPrice"){
            console.log(e.target.value)
            setPrice(e.target.value)
        }
        else{
            console.log(e.target.value)
            setImage(e.target.value)
        }
    }
    const click=(e)=>{
        e.preventDefault();
        console.log(e);
        

        if(productName===""||productPrice===""||productImg===""){
            setFill(true)
        }
        else if(isEdit){
            let obj={productName,productPrice,productImg};
            let check=Product.map((v,i)=>{
                return index===i ? obj:v
            })
            setProduct(check);
            setEdit(false)
        }
        else{
            console.log(productName,productPrice,productImg)

            let obj={productName,productPrice,productImg}
            console.log(obj);
        
            setProduct([...Product,obj]);
            setName("");
            setPrice("");
            setImage("");
            setFill(false)
        }
        
       
    }
    const delbtn=(i)=>{
      let x= Product.filter((e,index)=>{
        return  i!==index 
        
      })  
      console.log(x);
      setProduct(x);
    // console.log(Product)
    }
    const editbtn=(val,i)=>{
            
            setName(val.productName)
            setPrice(val.productPrice)
            setImage(val.productImg)
            setEdit(true);
            setIndex(i);
        }
    // console.log(Product);
    return(
        <div>
        <form>
        <div>
            <label>Product name</label>
            <input type="text" value={productName} name="pName" onChange={handleInput}/>
            {isFill&&productName===""?<p style={{color:"red"}}>Enter Product Name</p> : ""}
        </div>

        <div>
            <label>Product Price</label>
=            <input type="number" value={productPrice} name="pPrice" onChange={handleInput}/>
            {isFill&&productPrice===""?<p style={{color:"red"}}>Enter Product price</p> : ""}
        </div>

        <div>
            <label>Product Image</label>
            <input type="text" value={productImg} name="img" onChange={handleInput}/>
            {isFill&&productImg===""?<p style={{color:"red"}}>Enter Product Image</p> : ""}
        </div>

        <button onClick={click}>Submit</button>
    </form>
    <div style={{display:"flex",flexWrap:"wrap"}}>
        {Product.map((val,i)=>{
            return (
                <div key={i}>
                    <div style={{width:"33.33%",padding:"10px"}}>
                        <img src={val.productImg} alt="proimg" style={{width:"100%"}}/>
                        <h2>{val.productName}</h2>
                        <h4>{val.productPrice}</h4>
                        <button onClick={()=>editbtn(val,i)}>Edit</button>
                        <button onClick={()=>delbtn(i)}>Delete</button>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
    )
}