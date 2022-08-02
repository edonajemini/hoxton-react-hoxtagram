export function PostItem ({ post,  deletePost }) {
  return (
    <li className={post.completed ? 'completed' : ''}>
      <span
        onClick={() => {
          toggleCompleted(post.id)
        }}
      >
        {post.text}
      </span>

      <button
        onClick={() => {
          deletePost(post.id)
        }}
      >
        X
      </button>
    </li>
  )
}