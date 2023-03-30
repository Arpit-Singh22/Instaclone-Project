import React, { useState, useEffect } from 'react'
import NavigationBar from './NavigationBar'
import Posts from './Posts'
import axios from "axios"

function PostView() {
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/api/v1/postFetch')
      .then(response => {
        console.log(response.data.post);
        setUserPosts(response.data.post)
      })
  }, []);

  return <>
    <NavigationBar />
    <div className='post-container'>
      {
        userPosts.map(post => <Posts key={post._id} post={post} />)
      }
    </div>
  </>
}

export default PostView