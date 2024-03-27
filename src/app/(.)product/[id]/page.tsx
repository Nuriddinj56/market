'use client'
import {useParams,useRouter} from 'next/navigation'
import { useEffect ,useState} from 'react';
import { ProductType } from '@/app/interfaces';
import {Dialog} from '@headlessui/react';
import CustomImage from '@/app/components/image'
const ProductDatailedPage = () => {
const [loading,setLoading]= useState(false)
const [product,setProduct]= useState<ProductType>()
const [isOpen, setIsOpen] =useState(true)

 const {id}=useParams();
 const router=useRouter()
    useEffect(()=>{
async function getData(){
    setLoading(true);
    const res=await fetch(
      `https://fakestoreapi.com/products/${id}`  
    );
    const product = await res.json();
    setProduct(product)
    setLoading(false)
}
getData()
    },[id])
  return (
   <Dialog open={isOpen} onClose={()=>{
    setIsOpen(false)
router.back()

}} className='relative z-40'>
    <div className= 'fixed inset-0 bg-black/30' aria-hidden='true'/>

    <div className='fixed inset-0 overflow-y-auto'>
        <div className='fixed min-h-full items-center justify-center p-4'>
            <Dialog.Panel className='{mx-auto max-w-3xl rounded bh-white p-10'>
{
    loading ?(
    <div className='h-8 w-8 rounded-full border-2 border-dotted border-blue-600'/>
    ):(
<div className='flex gap-x-8 h-92'>
    {product ?.image &&(
        <div className='relative w-72 h-full hidden md:inline'>
            <CustomImage product={product} fill />
        </div>
    )}
</div>
    )
}
            </Dialog.Panel>

        </div>

    </div>
</Dialog>
  )
}

export default ProductDatailedPage