import React from 'react'
import Footer from './Footer'
import Image from 'next/image'
import Link from 'next/link'

export const Thoughts = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-10'>Thoughts</h2>

                <div id='perfection'>
                    <p className='text-sm mb-4 text-zinc-500'>
                        Fri Apr 28, 2023
                    </p>                
                    <Image 
                        src="/assets/thoughts/norm.png" 
                        alt='Anton Stallbörger Pursuit of Perfection' 
                        width="593" 
                        height="305" 
                        className='rounded-xl object-cover mb-4 max-h-[305px]' 
                        priority='true'
                    />
                    <h4 className='mb-4 text-xl'>The Pursuit of Perfection</h4>
                    <p className='leading-relaxed text-zinc-500'>
                    <i>“[Human beings are] an entity in a universe and [they are] striving to find order in [themselves] in relation to that universe we desire a perfect understanding-a perfect balance-a full rightness in life.”</i> - Ray Eames
                    <br />
                    <br />
                    Ray Eames&apos; quote is a powerful reminder of our innate desire for order, balance, and understanding in our lives. As human beings, we exist within a vast and complex universe, and we are constantly striving to find our place and purpose within it. We seek to understand the world around us and our relationship with it, as to create a sense of order and balance in our own lives.
                    <br />
                    <br />
                    However, the pursuit of perfection and full rightness in life is a journey that is fraught with challenges and obstacles. Life is unpredictable and constantly changing, and our quest for perfection can often lead to disappointment and frustration. It is important to recognize that the pursuit of perfection is not about achieving a static state of being, but rather about embracing the process of growth and evolution.
                    <br />
                    <br />
                    Ultimately, the search for order, balance, and understanding is a deeply personal and subjective journey. Each individual must find their own path and their own sense of meaning in life. However, by embracing the journey and striving towards our own personal ideals of perfection, we can find a sense of purpose and fulfillment in our lives, even in the midst of the chaos and uncertainty of the universe. Ray Eames&apos; quote reminds us that while the pursuit of perfection may be challenging, it is a journey that is worth taking.

                    </p>
                </div>

                <div className="w-full h-[1px] bg-zinc-200 my-10"></div>

                <div id='gratitude'> 
                    <p className='text-sm mb-4 text-zinc-500'>
                        Fri Apr 14, 2023
                    </p>                
                    <Image 
                        src="/assets/thoughts/gratitude.png" 
                        alt='Anton Stallbörger Gratitute' 
                        width="593" 
                        height="305" 
                        className='rounded-xl object-cover mb-4 max-h-[305px]' 
                    />
                    <h4 className='mb-4 text-xl'>Gratitude</h4>
                    <p className='leading-relaxed text-zinc-500'>
                    Gratefulness is a powerful force in our lives that has the ability to transform our perspective, our relationships, and our overall well-being. It&apos;s an essential ingredient to living a fulfilling and meaningful life. By cultivating a sense of gratitude, we can shift our focus away from what we lack and instead, appreciate the abundance that surrounds us. This simple shift in mindset can have a profound impact on our mental and emotional health, creating a ripple effect that extends beyond ourselves and into the lives of those we interact with.                   
                    <br />
                    <br />
                    It plays a crucial role in fostering and maintaining strong, healthy relationships. When we express gratitude to others, we are not only acknowledging their efforts and contributions, but we are also reinforcing the bond that connects us. This simple act of appreciation can strengthen trust, promote open communication, and increase overall satisfaction within our relationships. Furthermore, when we practice gratitude, we become more empathetic and understanding, allowing us to navigate conflicts with greater ease and compassion. In essence, gratefulness serves as a catalyst for deepening our connections with others, fostering a sense of belonging and unity that is essential to our overall well-being.
                    <br />
                    <br />
                    In a world that often emphasizes the pursuit of more, embracing gratefulness as a daily practice can be a transformative and grounding experience. By cultivating a sense of gratitude, we can improve our mental health, strengthen our relationships, and ultimately, lead more meaningful and fulfilling lives. As we begin to recognize and appreciate the abundance that surrounds us, we not only enrich our own lives, but we also contribute to the collective well-being of our communities and the world at large.
                    </p>
                </div>

                <div className="w-full h-[1px] bg-zinc-200 my-10" />

                <div id='details'>  
                    <p className='text-sm mb-4 text-zinc-500'>
                        Mon Apr 3, 2023
                    </p>               
                    <Image 
                        src="/assets/thoughts/details1.png" 
                        alt='Anton Stallbörger Seemingly Insignificant' 
                        width="593" 
                        height="305" 
                        className='rounded-xl object-cover mb-4 max-h-[305px]' 
                    />
                    <h4 className='mb-4 text-xl'>The Beauty in the Seemingly Insignificant</h4>
                    <p className='leading-relaxed text-zinc-500'>
                    <i>“The details are not the details. They make the design.”</i> - Charles Eames
                    <br />
                    <br />
                    The love for details is a journey of discovery, an invitation to explore the intricate tapestry of life. It is the realization that even the smallest elements of our existence have a story to tell, a purpose to fulfill. By embracing the details, we develop a deeper appreciation for the world around us, finding meaning and beauty in the most unexpected places.                    
                    <br />
                    <br />
                    Cultivating a love for details requires a heightened sense of presence. It is the practice of being fully engaged in the moment, allowing ourselves to be captivated by the subtleties that often go unnoticed. This level of mindfulness not only enriches our understanding of the world but also fosters a sense of gratitude for the countless wonders that surround us. In this state of awareness, we are reminded that even the tiniest details contribute to the grand tapestry of life.                    
                    <br />
                    <br />
                    A love for details is also a path to connection. By recognizing the importance of the seemingly insignificant, we are able to forge deeper connections with others, our environment, and ourselves. This attention to detail allows us to empathize more fully, to understand the nuances of human emotion, and to appreciate the delicate balance that exists within nature. As we learn to cherish the details, we cultivate a greater sense of harmony with the world and a more profound understanding of our place within it.                    
                    </p>
                </div>

                <div className="w-full h-[1px] bg-zinc-200 my-10" />

                <div id='ambientcomputing'>
                    <p className='text-sm mb-4 text-zinc-500'>
                        Thu Mar 30, 2023
                    </p>                 
                    <Image 
                        src="/assets/thoughts/ambientcomputing.png" 
                        alt='Anton Stallbörger Ambient Computing' 
                        width="593" 
                        height="305" 
                        className='rounded-xl object-cover mb-4 max-h-[305px]'
                    />
                    <h4 className='mb-4 text-xl'>Ambient Computing</h4>
                    <p className='leading-relaxed text-zinc-500'>
                    As we enter a new era of technology, ambient computing emerges as a powerful force, seamlessly integrating technology into our surroundings and connecting humans on a deeper level. This innovative field transcends traditional computing by embedding capabilities into everyday environments, operating discreetly in the background to anticipate our needs. As a result, ambient computing paves the way for more natural, intuitive, and efficient interactions between humans and technology, redefining interfaces for a new era.
                    <br />
                    <br />
                    Ambient computing can help us achieve greater mindfulness, improved work-life balance, personalized experiences, and heightened environmental awareness. As ambient computing becomes more prevalent, we can anticipate a more conscious and meaningful existence, where technology serves as an enabler rather than a barrier. By seamlessly integrating technology into our environments, we can look forward to a future where we are more connected and fulfilled.
                    <br />
                    <br />
                    As we continue to innovate and explore the potential of ambient computing, it&apos;s essential to keep human values and well-being at the forefront of our endeavors. By doing so, we can ensure that the dawn of ambient computing leads to a brighter, more connected, and more fulfilling future for all.
                    </p>
                </div>

                <div className="w-full h-[1px] bg-zinc-200 my-10" />

                <div id='quality'>
                    <p className='text-sm mb-4 text-zinc-500'>
                        Fri Feb 3, 2023 
                    </p>    
                    <Image 
                        src="/assets/thoughts/recyclingmoebel-iittala-raami-recycelt-jpg--71872-.webp" 
                        alt='Anton Stallbörger Quality' 
                        width="593" 
                        height="305" 
                        className='rounded-xl object-cover mb-4 max-h-[305px]'
                    />
                    <h4 className='mb-4 text-xl'>Quality</h4>
                    <p className='leading-relaxed text-zinc-500'>
                    In this fast-moving and demanding world, we often get swept away by the temptation of affordability and comfort. It is natural to desire the maximum value for our money, but unfortunately, this pursuit can lead us to compromise on quality.
                    <br />
                    <br />
                    However, I believe it is imperative to take a moment to reflect on the long-term consequences of our purchasing choices. Opting for products of high quality not only extends their lifespan but also enhances our overall experience, reducing the need for frequent repairs and maintenance.
                    <br />
                    <br />
                    It&apos;s true that high-quality goods often come with a higher cost. Not everyone can afford to indulge in expensive items. But in certain aspects of our lives where quality truly matters, it may be worth prioritizing it over saving a few dollars. For instance, investing in a sturdy office chair or durable shoes can have a profound impact on our daily comfort and well-being.
                    </p>
                </div>

                <div className="w-full h-[1px] bg-zinc-200 my-10" />

                <div className='mb-10' id='lifesjourney'>
                    <p className='text-sm mb-4 text-zinc-500'>
                        Fri Feb 3, 2023
                    </p>                 
                    <Image 
                        src="/assets/thoughts/life.webp" 
                        alt='Anton Stallbörger Life' 
                        width="593" 
                        height="305" 
                        className='rounded-xl object-cover mb-4 max-h-[305px]' 
                    />
                    <h4 className='mb-4 text-xl'>Life&apos;s Journey</h4>
                    <p className='leading-relaxed text-zinc-500'>
                    As we wander through the void of life, it&apos;s important to remember that we are not alone in our journey. Our experiences, both good and bad, shape us into the person we are and will become. It&apos;s up to us to embrace them and use them to our advantage, to grow and evolve. The path may not always be clear, but it is through adversity and uncertainty that we find strength and purpose. So let us not fear the unknown, but instead embrace it as an opportunity to discover our true selves and what truly matters in life.
                    </p>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Thoughts