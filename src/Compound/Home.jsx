import React , { Component} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { FaStar } from "react-icons/fa";



class Home1 extends Component{

    state={
        Product:[]
    }

    componentDidMount(){
       this.data()
    }
    
    data=()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{
            // console.log(res , "Here");
            this.setState({
                Product:res.data.products
            })
        })   
    }

    render(){
        console.log(this.state.Product);

    return(
        <>
             <div className='Home m-auto   sm:py-12 py-0  w-full flex items-center pl-4 sm:pl-48'>
                    <div className='   flex flex-col gap-5 pt-20' >
                        <h2 className=' text-2xl sm:text-5xl font-light'>We Carry the Latest<br/> <span className=" font-semibold">Equipment</span></h2>
                        <p className=' sm:text-sm text-[12px]  font-normal'>We shine a spotlight on ss18/s runway hits, from gucci<br/> to Maison
                            margiela and valentino.</p>
                        <div className=' h-16 w-full flex gap-6 '>
                            <button className=' sm:h-12 h-10 sm:w-36 w-28 rounded-3xl border-none bg-blue-500 text-white hover:text-black hover:bg-white border-2 border-black duration-300 font-medium text-[11px] sm:text-sm'>FIND OUR MORE</button>
                        

                        </div>
                    </div>
                </div>

        <div className=" min-h-screen h-auto w-full pt-3">
            <div className=" h-20 w-96 sm:flex justify-start sm:justify-end gap-7 text-[10px] sm:text-lg font-medium items-center ">
                <h2 className=" hover:text-blue-600">Hot Releases</h2>
                <h2 className=" hover:text-blue-600">Featured</h2>
                <h2 className=" hover:text-blue-600">Popular</h2>
              

            </div>
            <div className=" h-auto   sm:flex justify-center pl-16 sm:pl-0 items-center flex-wrap  sm:gap-14">
        {
            this.state.Product.map((ele)=>(
              <>
              
              <div className=" sm:h-[50vh] h-[55vh] sm:border-r-2 sm:w-[19%] w-[100%] flex flex-col gap-6 ">
            <div className=" w-full   flex justify-center items-center">
            <Link to={`products/${ele.id}`}> <img src={ele.thumbnail} className="h-48 w-full" alt="" /> </Link>
            
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
            
              </>
            ))
        }
        </div>
        </div>
        </>
    )
 }
}

export default Home1;



// import axios from 'axios'
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// export default class Home extends Component {
//     state={
//        Product:[]
//     }


//     componentDidMount(){
//         this.allproduct()
//     }

//     allproduct=()=>{
//         axios.get('https://dummyjson.com/products').then((res)=>{
//             // console.log(res , 'here');
//             this.setState({
//                 Product:res.data.products
//             })
//         })
//     }

//   render() {
//     // console.log(this.state.Product);
//     return (
//       <>
//       {
//        this.state.Product.map((ele)=>(
//         <>
//         <h1>{ele.title}</h1>
//       <Link to={`/products/${ele.id}`}><img src={ele.thumbnail} alt="" /></Link>
//         </>
//        ))
//       }
//       </>
//     )
//   }
// }
