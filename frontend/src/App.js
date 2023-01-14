import React, { useMemo } from "react"
import { useSelector } from "react-redux"
import { createTheme } from "@mui/material/styles"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { themeSettings } from "./theme"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./views/layout"
import Dashboard from "./views/dashboard"
import Products from "./views/products"
import Customers from "./views/customers"
import Transactions from "./views/transactions"
import Geography from "./views/geography"

function App() {
  // @ts-ignore
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
