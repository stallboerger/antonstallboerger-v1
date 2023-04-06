import React from 'react'
import Image from 'next/image'
import Footer from './Footer'

export const SustainableGoods = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-4'>Sustainable Goods</h2>
                <p className='pb-10 pt-4 text-zinc-500'>
                Mass consumption of goods became the new normal nowadays. We buy things we don&apos;t need, we throw them away after a few uses, and we buy new ones. We need to change this. We need to buy less, buy better, and buy things that last. A place where everyone can share their favorite sustainable products to create a better future with less, but better goods.
                </p>
                <Image 
                    src="/assets/playground/sgoods1.png" 
                    alt='' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-2' 
                    priority='true'
                />  
                <p className='mb-10 text-zinc-500 text-sm'>Collection of goods</p>    

                <Image 
                    src="/assets/playground/sgoods2.png" 
                    alt='Great Finds Clos up' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-2' 
                    priority='true'
                />    
                <p className='mb-10 text-zinc-500 text-sm'>Details with impact stats</p> 

                <Image 
                    src="/assets/playground/sgoods3.png" 
                    alt='Great Finds Clos up' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-2' 
                    priority='true'
                />    
                <p className='mb-10 text-zinc-500 text-sm'>Chrome extension</p>

                <Image 
                    src="/assets/playground/sgoods4.png" 
                    alt='Great Finds Clos up' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-2' 
                    priority='true'
                />    
                <p className='mb-10 text-zinc-500 text-sm'>Submit a product</p>  

                <Footer />
            </div>
        </div>
    )
}

export default SustainableGoods