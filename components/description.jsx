import React from 'react'
import Image from 'next/image'

const description = () => {
  return (
    <>
    
    {/*  <div className='m-5 text-3xl text-black'> <p>Welcome to Antonine, a site where I publish articles on classical texts. It is my attempt to both explore and share the ideas that drives our species. My aim with this is to give the reader the spark of curiosity and wonder needed to delve into the interconnected world of ideas. In each category are the selection of books I have picked for this project so the reader can simply use this as a book recommendation system and jump into the texts themselves if they so please.</p>
    </div> 
    */}
    
    <div>



    


    <div >

  
    <div>
      <Image
        src={"/images/hero-img.png"}
        width={1000}
        height={600}
        alt="Picture of the author"
      />
    </div>


      <div class="">

        <h2>"Soon you would've forggotten all things, Soon all things would've forgotten you"</h2>

        <p>Marcus Aurelius</p>

      </div>

    </div>

    </div>
      
      </>
  )
}

export default description