import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>this is </h1>
      <Link>code</Link>
      <Outlet/>
    </div>
  )
}

export default Home
