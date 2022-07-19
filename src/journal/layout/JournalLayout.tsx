import { Box, Toolbar } from "@mui/material"
import { NavBar, Sidebar } from "../components"
import React from "react"

interface Props {
  children: React.ReactNode
}

const drawerWidth = 240

export const JournalLayout = ({ children }: Props) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar drawerWidth={drawerWidth} />

      <Sidebar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
