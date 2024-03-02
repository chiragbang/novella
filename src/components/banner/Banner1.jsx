import React from 'react'
import "../banner/styles/Banner1.css"
import Image from 'next/image'

const Banner1 = () => {
  return (
    <div className='banner1'>
        <div className='banner1-left'>
       {/* <h3>Dress to impress: where style meets convenience in every click!</h3> */}
       <h1>Discover Your Signature Style : <span>Explore Our Apparel Collection!</span></h1>
       <button>Shop Now</button>
        </div>
        <div className='banner1-right'>
       <Image width={500} height={500} src="/banner/banner1.webp"/> 
        </div>
      
    </div>
  )
}

export default Banner1