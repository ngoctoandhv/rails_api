import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from './features/posts/PostsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <h1>React on Rails Blog</h1>
        <PostsList />
      </div>
    </>
  )
}

export default App
