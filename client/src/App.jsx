import { Routes, Route } from "react-router-dom";


import { AuthProvider } from "./contexts/authContext";
import Path from "./paths";


import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NotFound from "./components/not-found/NotFound";
import Profile from "./components/profile/Profile";
import SingUp from "./components/singup/SingUp";
import Order from "./components/order/Order";
import Login from "./components/login/Login";
import Binds from "./components/binds/Binds";
import BecomeADeliver from "./components/become-a-deliver/BecomeADeliver";

import "./style1.css";
import "./public/scss2/main.scss";
import "./public/scss3/style.scss";

import Logout from "./components/logout/Logout";
import LearnMore from "./components/learn-more/LearnMore";
import BindEdit from "./components/binds/BindEdit";


import AuthGuard from "./components/guards/AuthGuard";
import { ProfileProvider } from "./contexts/profileContext";
import DeliverSingup from "./components/deliver-ingup/DeliverSingUp";
import DeliverLogin from "./components/deliver-login/DeliverLogin";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import AllBlogs from "./components/blog/AllBlogs";
function App() {
  return (
    // <ErrorBoundary>
      <AuthProvider>
        <ProfileProvider>
          <Navigation />

          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.LearnMore} element={<LearnMore />} />
            <Route path={Path.Orders} element={<Order />} />
            <Route path={Path.Binds} element={<Binds />} />
            <Route path={Path.OrderEdit} element={<BindEdit />} />
            <Route path={Path.About} element={<About />} />
            <Route path={Path.Blog} element={<AllBlogs />} />
            <Route path={Path.Cart} element={<ShoppingCart />} />
            <Route element={<AuthGuard />}>
              <Route path={Path.BeADeliver} element={<BecomeADeliver />} />

              <Route path={Path.Profile} element={<Profile />} />
              <Route path={Path.Logout} element={<Logout />} />

              <Route path={Path.DeliverSingup} element={<DeliverSingup />} />
              <Route path={Path.DeliverLogin} element={<DeliverLogin />} />
            </Route>

            <Route path={Path.SingUp} element={<SingUp />} />
            <Route path={Path.LogIn} element={<Login />} />

            <Route path={Path.WildCard} element={<NotFound />} />
          </Routes>

          <Footer />
        </ProfileProvider>
      </AuthProvider>
    // </ErrorBoundary>
  );
}

export default App;
