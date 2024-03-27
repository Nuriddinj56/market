import Image from "next/image";
import Product from '@/app/components/product'
import Hero from '@/app/components/hero'
import { ProductType } from "./interfaces";


export default async function Home() {


  const res = await fetch('https://fakestoreapi.com/products')
  const products:ProductType[] = await res.json()

  return (
    <main className=" min-h-screen max-w-7xl mx-auto px-8 xl:px-0 pt-40 "> 
   
      <section className="flex flex-col space-y12">
        <h1 className="text-5xl font-bold text-center pb-10">AZAT ONLINE SHOPPING</h1>
        <div className='grid grid-cols-1 gap-y-10 gap-x-x6 xl:grid-cols-4 xl:gap-x-8'>
          {products.map(product =>(
            <Product key={product.id} product={product}/>
          ))}
        </div>
      </section>
      </main>
  );
}
