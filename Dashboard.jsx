import React from 'react';

import './App.css'
//import Header from './Header'
//import Sidebar from './Sidebar'
import Home from './component/Home'

function Dashboard() {
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle)
  // }

  return (
    <div className='grid-container'>
     {/* <Header OpenSidebar={OpenSidebar}/> */}
      {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      <Home />
    </div>
  )
}

export default Dashboard;
