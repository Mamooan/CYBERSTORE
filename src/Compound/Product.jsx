import axios from "axios";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";



class Product extends React.Component {


    state = {
        id: this.props.match.params.id,
        product: {},
        Productall:[]
    }


    componentDidMount() {
        this.detail()
        this.mydata()

    }

    detail = () => {
        axios.get(`https://dummyjson.com/products/${this.state.id}`).then((res) => {
            console.log(res, 'test');

            this.setState({
                product: res.data

            })
        })
    }
    mydata=()=>{
        axios.get('https://dummyjson.com/products?limit=4').then((res)=>{
            // console.log(res , "Here");
            this.setState({
                Productall:res.data.products
            })
        })   
    }



    render() {
        console.log(this.state, 'test');

        return (
            <>
            <div className=" h-48  main w-full flex justify-center items-center">
                <div className=" h-36 flex flex-col justify-center items-center sm:w-2/4 w-full  text-white gap-4">
                    <h2 className=" text-5xl">Shop</h2>
                    <p className=" sm:text-lg text-[12px] pl-2 sm:pl-0">Home  /  Shop  /  Laptop & Tablet  /  MacBook Rose Gold 1.2GHz 256GB butterfly mechanism</p>
                </div>
            </div>
                <div className=" h-[200vh] sm:h-[90vh]   w-full sm:flex justify-center" >
                    
                    <div className=" sm:h-full h-[30vh] w-full   sm:w-[50%]  sm:flex justify-center   items-center">
                             <div className=' sm:h-[30vh] pt-12 sm:w-52   items-center justify-center flex sm:flex-nowrap flex-wrap sm:flex-col gap-5'>
                            {this.state.product.images?.map((ele) => (
                            <img src={ele} className="border-2 border-black h-28 w-32" alt="" />
                        ))}
                        </div>
                    <div className=" pt-5">
                      <img src={this.state.product.thumbnail} alt="" />
                    </div>
                   

                    </div>

                    <div className=" h-full sm:w-[40%] pl-4 sm:pl-0 w-full justify-center pt-10  sm:pt-0 font-sans flex flex-col gap-4">
                    <h2 className="sm:text-lg text-2xl  font-normal text-black">  {this.state.product.description}</h2>
                    <div className=" w-full justify-start  flex text-yellow-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                    <h2 className=" text-2xl font-semibold text-red-600"><span className=" text-gray-300"><del>$1095</del></span> ${this.state.product.price}</h2>
                    <h3 className=" text-gray-400 sm:text-lg text-[12px]"><span className="sm:text-4xl text-2xl text-gray-600 font-bold">. </span> Lorem ipsum dolor sit amet dico</h3>
                    <h3 className=" text-gray-400 sm:text-lg text-[12px]"><span className="sm:text-4xl text-2xl text-gray-600 font-bold">. </span> Mea volumus verterem adipisci at</h3>
                    <h3 className=" text-gray-400 sm:text-lg text-[12px] "><span className="sm:text-4xl text-2xl text-gray-600 font-bold">. </span> Mel ex mundi scripta gloriatur</h3>
                    <div className=" h-12 w-80 flex sm:flex-nowrap   flex-wrap border">
                        <div className=" h-full w-[30%]  text-gray-600 flex justify-center items-center">Quantity</div>
                        <div className=" h-full w-[30%]  flex justify-between items-center text-gray-600">
                            <button className=" h-full w-8 "><IoIosArrowBack /></button>
                            1
                            <button className=" h-full w-8"><IoIosArrowForward /></button>
                        </div>
                        <div className=" h-full w-[42%] ">
                            <button className=" h-full w-full  bg-blue-500 text-white">Add To Cart</button>
                        </div>


                    </div>
                    <div className=" h-10 w-80  flex pt-16 sm:pt-0 ">
                    <button className=" h-full w-full  bg-white border text-black flex justify-center items-center gap-2">   <MdFormatListBulletedAdd /> Add To Wishlist</button>
                    <button className=" h-full w-full  bg-white border text-black flex justify-center items-center gap-2">  <FaRegHeart /> Compare</button>

                    
                    </div>
                    <div className=" pt-4 sm:pt-0">
                    <h2 className=" text-[14px] font-medium">Category: <span className=" text-gray-500">{this.state.product.category}</span></h2>
            
                        <h2 className=" text-[14px] font-medium">Rating: <span className=" text-gray-500">{this.state.product.rating}</span></h2>
                        
                        <h2 className=" text-[14px] font-medium">Stock: <span className=" text-gray-500">{this.state.product.stock}</span></h2>
                       
                        </div>
                        


                    </div>


                  
         
                </div>
                <div className="  w-full sm:flex justify-center gap-12  ">
                    {this.state.Productall.map((ele)=>{
                        return(
                            <div className="  sm:h-[50vh] h-[55vh] sm:border-r-2 sm:w-[19%] w-[100%] flex flex-col gap-6 ">
                            <div className=" w-full   flex justify-center items-center">
                            <img src={ele.images[0]} className="h-48 w-full" alt="" />
                             </div>
                             <div className="h-1/3 w-full bg-white flex justify-center items-center flex-col gap-4">
                                <div className=" w-full justify-start  flex text-yellow-600">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                </div>
                                
                                <h2 className=" text-[14px]  font-  font-medium">{ele.description}</h2>
                                <div className="flex justify-between items-between w-4/5">
                                    <div>
                                    <h3 className=" sm:text-lg text-[16px] font-semibold"> ${ele.price}</h3>
                                    </div>
                                    <div>
                                    <LuShoppingCart className="sm:text-2x sm:h-8 sm:w-8 h-5 w-5 text-gray-500 rounded-full  hover:bg-blue-700 hover:text-white" />
                                    </div>
                
                                </div>
                               
                               
                             </div>
                            </div>
                        )
                    })}

                </div>


            </>
        )
    }
}
export default Product;


// import axios from 'axios'
// import React, { Component } from 'react'

// export default class Product extends Component {

//     state={
//         id:this.props.match.params.id,
//         class:{}
//     }


//     componentDidMount(){
//       this.product()
//     }

//     product=()=>{
//       axios.get(`https://dummyjson.com/products/${this.state.id}`)
//       .then((sef)=>{
//         console.log(sef , 'here')
//         this.setState({
//           class:sef.data
//         })
//       })
//     }
    

//   render() {
//     return (
//       <>
//         <h1>{this.state.class.title}</h1>
//       </>
//     )
//   }
// }
