import React from 'react'
import '@components/Feed';
import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full text-center flex-col'>
        <h1 className='head_text text-center'>Discover and Share</h1>
        <br className='max-md:hidden'/>
        <span className='orange_gradient text-center font-bold text-4xl'>AI-Powered Prompts</span>
        <p>Promptopia is an open-source Ai promting tool modern world to discover, create and share creative prompts</p>
        <Feed/>
    </section>
  )
}

export default Home;