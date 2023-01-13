import React, { useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar"
import SideBar from "../../components/SideBar"

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px")
  const [isSidebarOpen, serIsSidebarOpen] = useState(true)
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <SideBar
        // @ts-ignore
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={serIsSidebarOpen}
      />
      <Box>
        <NavBar
          // @ts-ignore
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={serIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
