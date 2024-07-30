import React from 'react'
import {Link,Outlet} from "react-router-dom";
const Layout = () => {
  return (
    <>
     <div>
     <div>
      <div>Magnet Brains</div>
     </div>
     <div>
      <a href="#"><Link>fsbj</Link></a>
     </div>
      <div><div>image</div></div>
     </div>

       <Outlet/>
    </>
  )
}

export default Layout
