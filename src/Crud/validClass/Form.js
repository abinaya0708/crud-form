import React, { Component } from "react";
export class Form extends Component{
    constructor(){
        super()
        this.state={prtname:"samsung",prtprice:30000,prtimg:"",arr:[],isFill:false,index:[],isEdit:false}
    }
    render(){
        const x=(e)=>{
            if(e.target.name==='pName'){
                this.setState({prtname:e.target.value})
                console.log(e.target.value)
            }
            else if(e.target.name==='pPrice'){
                this.setState({prtprice:e.target.value})
                console.log(e.target.value);
            }
            else{
                this.setState({prtimg:e.target.value})
                console.log(e.target.value);
            }
        }
        const click=(e)=>{
            e.preventDefault();
            if(this.state.prtname===""||this.state.prtprice===""||this.state.prtimg===""){
                this.setState({isFill:true});
            }
            else if(this.state.isEdit){
                let obj={name:this.state.prtname,price:this.state.prtprice,img:this.state.prtimg};
                let check=this.state.arr.map((v,i)=>{
                    return this.state.index===i ? obj:v
                })
                this.setState({arr:check});
                this.setState({isEdit:false})
            }
            else{
            let obj={name:this.state.prtname,price:this.state.prtprice,img:this.state.prtimg}
            this.setState({arr:[...this.state.arr,obj]})
            console.log(obj);
            this.setState({prtname:""});
            this.setState({prtprice:""})
            this.setState({prtimg:""})
            this.setState({isFill:false});
            }
        }
        const delbtn=(i)=>{
            let x= this.state.arr.filter((e,index)=>{
              return  i!==index 
              
            })  
            console.log(x);
            this.setState({arr:x});
          // console.log(Product)
          }
          const editbtn=(val,i)=>{
                  
                  this.setState({prtname:val.name})
                  this.setState({prtprice:val.price})
                  this.setState({prtimg:val.img})
                  this.setState({isEdit:true})
                  this.setState({index:i})
              }
        return(
            <div>
                <form>
                    <div>
                        <label>Product Name</label>
                        <input type="text" value={this.state.prtname} name="pName" onChange={x}/>
                        {this.state.isFill&&this.state.prtname===""?<p style={{color:"red"}}>Enter Product Name</p> : ""}
                    </div>
                    <div>
                        <label>Product Price</label>
                        <input type="number"  value={this.state.prtprice} name="pPrice" onChange={x}/>
                        {this.state.isFill&&this.state.prtprice===""?<p style={{color:"red"}}>Enter Product Price</p> : ""}
                    </div>
                    <div>
                        <label>Product Image</label>
                        <input type="text"  value={this.state.prtimg} onChange={x}/>
                        {this.state.isFill&&this.state.prtimg===""?<p style={{color:"red"}}>Enter Product Image</p> : ""}
                    </div>
                    <button onClick={click}>submit</button>
                </form>
                <div style={{display:"flex"}}>
                    {
                        this.state.arr.map((val,i)=>{
                            return (
                                <div key={i} style={{width:"33.33%",padding:"10px"}}>
                                    <img src={val.img} alt='images' style={{width:"100%"}}/>
                                    <h3>{val.name}</h3>
                                    <h4>{val.price}</h4>
                                    <button onClick={()=>editbtn(val,i)}>Edit</button>
                                    <button onClick={()=>delbtn(i)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}