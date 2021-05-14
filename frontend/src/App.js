import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
    <div class ="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776; 
                    </button>
                    <Link to="/">Raj Collection</Link>
                </div>
                <div className="header-links">
                    <a href = "cart.html"> Cart </a>
                    <link to="/signin"></link>
                </div>
            </header>
            <aside className="sidebar"> 
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Shorts</a>
                    </li>
                    <li>
                        <a href="index.html">T-Shirts</a>
                    </li>
                    <li>
                        <a href="index.html">Pants</a>
                    </li>
                </ul>

            </aside>
            <main className="main">
                <div className="content">
                  <Route path="/signin" component={SigninScreen} />
                  <Route path="/product/:id" component = {ProductScreen} />
                  <Route path="/cart/:id?" component = {CartScreen} />
                  <Route path="/" exact={true} component={HomeScreen} />
                    
                </div>
            </main>
            <footer className="footer">
                All rights reserved.
            </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
