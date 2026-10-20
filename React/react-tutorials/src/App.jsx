import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ProductList from "./components/ProductList";
import StringConCat from "./components/StringConCat";

function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Welcome to my app</h1>
      <button onClick={handleClick}>Clicked {count} times</button>
    </>
  );
}

export default function MyApp() {
  return (
    <BrowserRouter>
      <div>
        <br />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image" element={<StringConCat />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
