import React from 'react';
import "../styles/NewArrivals.css";
import Image from 'next/image';

const products = [
  { id: 1, name: "Shirt", description: "Novella Heritage Collection", price: 999, image: "/shirt.png" },
  { id: 2, name: "Shoe", description: "Novella Retro Sole Classics", price: 999, image: "/shoe.png" },
  { id: 3, name: "Watch", description: "Novella Timeless Elegance", price: 999, image: "/watch.png" }
];

const NewArrivals = () => {
  return (
    <>
      <h1 className='bestseller-heading'>New Arrivals</h1>
      <div className='bestseller-container'>
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <Image width={350} height={250} src={product.image}/>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4>Starting from Rs.{product.price}</h4>
            <button>Explore More</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default NewArrivals;
