import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./UI/AppLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddStock from "./pages/AddStock";
import PendindOrders from "./pages/PendingOrders";
import Returns from "./pages/Returns";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

import './index.css'
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./login/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <BrowserRouter>
      <Routes>
        <Route element={
          <ProtectedRoute >
            <AppLayout />
          </ProtectedRoute >
          }>
         <Route index element={<Navigate replace to = "Home" />}/>
          <Route path="home" element={<Home />}/>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add stock" element={<AddStock />}/>
          <Route path="pending orders" element={<PendindOrders />}/>
          <Route path="returns" element={<Returns />} />
        </Route>
        <Route path="login" element={<Login />}/>
        <Route path="*" element={<PageNotFound />}  />
      </Routes>
    </BrowserRouter>

    <Toaster 
      position="top-center"
      gutter={12}
      containerStyle={{margin: "18px"}}
      toastOptions = {{
        success: {
          duration: 3000,
          style: {
            background: "#00FA9A",
            borderBottom: '5px solid #3CB371'
          }
        },
        error: {
          duration: 5000,
          style: {
            background: "#FFA07A",
            borderBottom: '5px solid red',
          },
          
        },
        className: " rounded px-5 py-3 shadow-lg",
        style: {
          color: "white",
          fontSize: "20px",
        }
      }}
    />
    </QueryClientProvider>
  )
}

export default App;