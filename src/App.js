import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import { auth } from "./components/firebase";
import { useEffect } from "react";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
const promise = loadStripe(
  "pk_test_51LxyGfE0AVHSIowq9ViOM8hZUQSjIYXYVcmDvTIxwn32qVdt8ZGUJYXXrvVOM0owtgBfQyr3NxbbQi1jOKBsibKl00nFEOJEZR"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
          // user: "",
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
                <Footer />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
                <Footer />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
