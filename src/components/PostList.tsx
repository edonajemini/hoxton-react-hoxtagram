import { useEffect, useState } from 'react'
import { PostItem } from './PostItem'

export function PostList ({
  search,
  posts,
  setPosts,
  deletePost
}) {
  const filteredPosts = posts.filter(post =>
    post.text.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(resp => resp.json())
      .then(postsFromServer => setPosts(postsFromServer))
  }, [])

  return (
    <ul>
      {filteredPosts.map(post => (
        <PostItem
          key={post.id}
          post={post}
          deletePost={deletePost}
        />
      ))}
    </ul>
  )
}