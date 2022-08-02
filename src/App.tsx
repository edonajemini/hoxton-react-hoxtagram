import { useState } from 'react'
import './App.css'

import { AddPost } from './components/AddPost'
import { Logo } from './components/Logo'
import { PostList } from './components/PostList'

function App () {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([])


  function deletePost (id: number) {
    const PostCopy = posts.filter(post => post.id !== id)

    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
    })

    setPosts(postsCopy)
  }

  function createPost (text: string) {
    let newPost = {
      text: text,
      completed: false
    }

    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
      .then(resp => resp.json())
      .then(postFromServer => {
        setPosts([...posts, postFromServer])
      })
  }

  return (
    <div className='App'>
      <Logo />
      <AddPost createPost={createPost} />
      <PostList
        posts={posts}
        setTodos={setPosts}
        deletePost={deletePost}
      />
    </div>
  )
}

export default App