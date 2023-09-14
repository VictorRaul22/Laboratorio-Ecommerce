import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingCartContext, ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'
import { useContext } from 'react'

const AppRoutes = () => {
  const context=useContext(ShoppingCartContext);

  let routes = useRoutes([
    { path: '/', element:context.auth? <Home />: <Navigate to="/sing-in" replace={true} />},
    { path: '/clothes', element:context.auth? <Home /> : <Navigate to="/sing-in" replace={true}/>},
    { path: '/electronics', element:context.auth? <Home />: <Navigate to="/sing-in" replace={true}/> },
    { path: '/furnitures', element:context.auth? <Home />: <Navigate to="/sing-in" replace={true}/> },
    { path: '/toys', element:context.auth? <Home />: <Navigate to="/sing-in" replace={true}/> },
    { path: '/othes', element:context.auth? <Home />: <Navigate to="/sing-in" replace={true}/> },
    { path: '/my-account', element:context.auth? <MyAccount />: <Navigate to="/sing-in" replace={true}/> },
    { path: '/my-order', element:context.auth? <MyOrder />: <Navigate to="/sing-in" replace={true}/> },
    { path: '/my-orders', element:context.auth? <MyOrders /> : <Navigate to="/sing-in" replace={true}/>},
    { path: '/my-orders/last', element:context.auth? <MyOrder /> : <Navigate to="/sing-in" replace={true}/>},
    { path: '/my-orders/:id', element: context.auth?<MyOrder />: <Navigate to="/sing-in" replace={true}/> },

    { path: '/sing-in', element:context.auth?<Navigate to="/" replace={true} /> : <SignIn />},
    { path: '/sing-up', element: context.auth?<Navigate to="/" replace={true} /> : <SignUp /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
