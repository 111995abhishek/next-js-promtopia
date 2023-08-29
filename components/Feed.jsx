'use client'
import {useState, useEffect} from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({data,handleTagClick,searchText}) =>{
  return(
    <div className='mt-16 prompt_layout'>
      {data.filter((post)=>post.tag.indexOf(searchText)>-1).map((post)=>{
        return(
          <PromptCard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
          />
        )
      })}
    </div>
  )
}
const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(()=>{
    const fetchPost = async() => {
      const response  = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    }
    fetchPost();
  },[])
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
        type='text'
        placeholder='search for a tag'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input peer'
        />
      </form>
      <PromptCardList
      data={posts}
      handleTagClick={()=>{}}
      searchText={searchText}
      />
    </section>
  )
}

export default Feed