import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Profile from './Pages/Profile'
import Users from './Pages/Users'
import RegisterUser from './Pages/RegisterUser'
import Header from './Components/CommonElements/Header'
import Footer from './Components/CommonElements/Footer'
import reportWebVitals from './reportWebVitals'
import { Route, Routes, BrowserRouter } from "react-router-dom"

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<>
          <Header />
          <Home />
        </>} />
        <Route path="/alltasks" element={<>
          <Header />
          <Home />
        </>} />
        <Route path="/users" element={<>
          <Header />
          <Users />
        </>} />
        <Route path="/categories" element={<>
          <Header />
          <Categories />
        </>} />
        <Route path="/register-user" element={<>
          <Header />
          <RegisterUser />
        </>} />
        <Route path="/profile" element={<Profile />} />
        <Route index element={<App />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
