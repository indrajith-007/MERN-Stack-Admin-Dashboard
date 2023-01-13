import React, { useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar"
import SideBar from "../../components/SideBar"
import { useGetUserQuery } from "../../state/api"
import { useSelector } from "react-redux"

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px")
  const [isSidebarOpen, serIsSidebarOpen] = useState(true)
  // @ts-ignore
  const userId = useSelector((state) => state.global.userId)
  const { data } = useGetUserQuery(userId)

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <SideBar
        // @ts-ignore
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={serIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <NavBar
          // @ts-ignore
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={serIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
