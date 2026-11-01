
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { useState } from "react";

import ProductList from "./components/ProductList";
import StringConCat from "./components/StringConCat";
import TicTacToe from "./components/TicTacToe";
import "./App.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <section className="home">
      <p className="eyebrow">WELCOME</p>
      <h1>Welcome to my app</h1>
      <p className="subtitle">
        Explore images, browse products, and learn React.
      </p>

      <button
        className="counter-btn"
        onClick={() => setCount(count + 1)}
      >
        Clicked {count} times
      </button>
    </section>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        React<span>Space</span>
      </NavLink>

      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/image"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Image
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/game"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Game
        </NavLink>
      </div>
    </nav>
  );
}

export default function MyApp() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/image" element={<StringConCat />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/game" element={<TicTacToe />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
