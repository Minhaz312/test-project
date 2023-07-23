import React from 'react'
import ProductItem from './ProductItem'

        
export default function ProductList({className,title}) {

    const productList = [
        {id:1,title:"Women's Rayon Kurta and Palazzo with Dupatta Set",image:"/images/products/p1.jpg",price:1300,discount:10,type:"featured"},
        {id:2,title:"NYDJ Women's Marilyn Straight in Black",image:"/images/products/p2.jpg",price:1300,discount:10,type:"featured"},
        {id:3,title:"GAP Women's Long Sleeve Plaid Shirt Dress",image:"/images/products/p3.jpg",price:1300,discount:10,type:"featured"},
        {id:4,title:"Dokotoo Women's V Neck Lace Crochet Tunic Tops Flowy Casual Blouses Shirts",image:"/images/products/p12.jpg",price:1300,discount:10,type:"featured"},
        {id:5,title:"The Drop Women's Anaya Square-Neck Cut-Out Tiered Maxi Dress",image:"/images/products/p4.jpg",price:1300,discount:10,type:"featured"},
        {id:6,title:"Women's Rayon Kurta and Palazzo with Dupatta Set",image:"/images/products/p5.jpg",price:1300,discount:10,type:"featured"},
        {id:7,title:"Buffalo David Bitton Women's My Treat Wrap Top",image:"/images/products/p6.jpg",price:1300,discount:10,type:"featured"},
        {id:8,title:"Women's Cotton Floral Printed Anarkali Kurta",image:"/images/products/p7.jpg",price:1300,discount:10,type:"featured"},
        {id:9,title:"Buffalo David Bitton Women's Darling You Printed Top",image:"/images/products/p8.jpg",price:1300,discount:10,type:"featured"},
        {id:10,title:"Buffalo David Bitton Women's Jeanne Ruffle Short Sleeve Tshirt",image:"/images/products/p9.jpg",price:1300,discount:10,type:"featured"},
        {id:11,title:"Venum Women's Standard Short Sleeve T-Shirt",image:"/images/products/p10.jpg",price:1300,discount:10,type:"featured"},
        {id:12,title:"Women's Cotton Anarkali Kurti",image:"/images/products/p11.jpg",price:1300,discount:10,type:"featured"},
    ]


  return (
    <section className="my-5">
        <p className={`font-bold text-2xl my-5 md:text-22 text-gray-12 uppercase dm-bold ${className}`}>{title}</p>
        <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-5 mt-5 md:mt-0'>
            {
                productList.map((product,i)=><ProductItem key={i} title={product.title} image={product.image} price={product.price} discount={product.discount} type={product.type} />)
            }
        </div>
    </section>
  )
}
