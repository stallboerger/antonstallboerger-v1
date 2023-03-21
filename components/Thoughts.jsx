import React from 'react'
import Footer from './Footer'
import Image from 'next/image'

export const Thoughts = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Thoughts</h2>
                <div className=''>
                    <Image src="/assets/thoughts/recyclingmoebel-iittala-raami-recycelt-jpg--71872-.webp" alt='Anton Stallbörger Quality' width="593" height="305" className='rounded-xl object-cover mb-4 max-h-[305px]' priority='true'></Image>
                    <h4 className='mb-2 text-xl'>Quality</h4>
                    <p className='leading-relaxed'>
                    In this fast-moving and demanding world, we often get swept away by the temptation of affordability and comfort. It is natural to desire the maximum value for our money, but unfortunately, this pursuit can lead us to compromise on quality.
                    <br />
                    <br />
                    However, I believe it is imperative to take a moment to reflect on the long-term consequences of our purchasing choices. Opting for products of high quality not only extends their lifespan but also enhances our overall experience, reducing the need for frequent repairs and maintenance.
                    <br />
                    <br />
                    It&apos;s true that high-quality goods often come with a higher cost. Not everyone can afford to indulge in expensive items. But in certain aspects of our lives where quality truly matters, it may be worth prioritizing it over saving a few dollars. For instance, investing in a sturdy office chair or durable shoes can have a profound impact on our daily comfort and well-being.
                    </p>
                </div>
                <div className="w-full h-[1px] bg-zinc-200 my-10"></div>
                <div className='mb-10'>                
                    <Image src="/assets/thoughts/life.webp" alt='Anton Stallbörger Life' width="593" height="305" className='rounded-xl object-cover mb-4 max-h-[305px]' priority='true'></Image>
                    <h4 className='mb-2 text-xl'>Life&apos;s Journey</h4>
                    <p className='leading-relaxed'>
                    As we wander through the void of life, it&apos;s important to remember that we are not alone in our journey. Our experiences, both good and bad, shape us into the person we are and will become. It&apos;s up to us to embrace them and use them to our advantage, to grow and evolve. The path may not always be clear, but it is through adversity and uncertainty that we find strength and purpose. So let us not fear the unknown, but instead embrace it as an opportunity to discover our true selves and what truly matters in life.
                    </p>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Thoughts