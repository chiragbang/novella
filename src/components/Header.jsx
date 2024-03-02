import React from 'react'
import "../styles/Header.css"
import Link from 'next/link'
import { CiShop } from "react-icons/ci";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className='header'>
        <div className="header-left">
            <h2>Novella</h2>
        </div>
        <div className="header-right">
            <Link href="/">Home</Link>
            <Link href="/">Apparels</Link>
            <Link href="/">Shoes</Link>
            <Link href="/">Watches</Link>
        </div>

        <div className='cart'>
        <IoSearchSharp style={{fontSize:"25px"}}/>
        <RiAccountCircleFill style={{fontSize:"25px"}}/>
        <CiShop style={{fontSize:"25px"}}/>
        </div>
    </div>
  )
}

export default Header