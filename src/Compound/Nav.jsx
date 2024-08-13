import React from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { LiaSearchSolid } from "react-icons/lia";
import { IoMdMenu } from "react-icons/io";



class Open extends React.Component{





    render(){


        return(

            <>
            <div className=" sm:h-56 h-20 w-full bg-white ">
                <div className="sm:h-9 sm:w-full hidden  sm:flex">
                    <div className=" h-full w-[50%]  flex justify-center items-center text-sm gap-8">
                        <p>SUPER DEALS</p>
                        <p>FEAUTURED BRANDS</p>
                        <p>TRENDING STYLES</p>
                        <p>GIFT CARDS</p>
                        
                    </div>
                    <div className=" h-full w-[50%]  flex justify-center items-center">
                        <div></div>
                        <p>STORE LOCATOR</p>
                        <p>TRACK YOUR ORDER</p>
                        <p>MY ACCOUNT</p>
                        <p>MY ACCOUNT</p>
                        <p>MY ACCOUNT</p>
                        <p>MY ACCOUNT</p>
                    </div>
                </div>
                <div className="h-32 w-full  flex">
                    <div className=" h-full w-96  flex justify-start  sm:justify-end items-start pt-4 sm:pt-0 sm:items-center font-bold text-3xl sm:text-4xl">

                        <h2>CYBERSTORE<span className="text-blue-700 font-bold">.</span></h2>
                        <IoMdMenu className="sm:hidden pt-2" />
                    </div>
                    <div className=" sm:h-full sm:w-[60%] hidden  sm:flex justify-center items-center">
                        <div className=" h-14 w-[91%] border flex">
                        <div className=" h-full w-32 bg-gray-300 flex items-center justify-center text-sm">
                            <label>ALL CATEGORIES</label>
                        </div>
                        
                        <input className="  h-full w-[76%] pl-10" placeholder="Search for product..." type="text"/>
                        <button className=" h-full w-16 text-3xl text-white flex justify-center items-center bg-blue-700"><LiaSearchSolid /></button>
                    </div>
                    </div>
                    <div className=" sm:h-full sm:w-72 hidden  text-2xl sm:flex justify-start gap-4 items-center">
                    <MdFormatListBulletedAdd />
                    <FaRegHeart />
                    <div className=" h-10 w-10  flex justify-end items-center relative">
                    <LuShoppingCart />
                        <div className=" h-3  w-3 rounded-full bg-blue-700 absolute top-2 text-[10px] text-white flex justify-center items-center ">0</div>
                   
                    </div>
                    <h2 className="text-sm">($0)</h2>

                    </div>
                </div>
                <div className="sm:h-14 hidden sm:w-full  sm:flex">
                    <div className=" h-full w-[54%]  flex justify-end items-center">
                        <ul className=" h-full w-96  flex justify-center items-center  gap-8 ">
                            <li className="hover:text-blue-600">Home</li>
                            <li className="hover:text-blue-600">Pages</li>
                            <li className="hover:text-blue-600">Shop</li>
                            <li className="hover:text-blue-600">Blog</li>
                            <li className="hover:text-blue-600">Elements</li>
                        </ul>
                    </div>
                    <div className=" h-full w-[38%]   flex justify-end items-center">
                        <h2>Call us toll free: 03164466401</h2>
                    </div>
                </div>
            </div>
       
            
            </>


        )
    }
}
export default Open