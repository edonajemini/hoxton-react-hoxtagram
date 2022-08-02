export function AddPost ({ createPost }) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        createPost(event.target.text.value)
        event.target.reset()
      }}
    >
      <input
        type='text'
        placeholder='enter text...'
        name='text'
        required
        minLength={3}
      />
      <input
      type='url'
      />
      <button>ADD POST</button>
    </form>
  )
}
