import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar.jsx";           // 導覽列元件
import Home from "./home/Home";          // 首頁元件
import Posts from "./posts/Posts";       // 文章列表元件
import Future from "./future/Future";    // 未來規劃元件
import About from "./about/About";       // 關於頁元件

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/future" element={<Future />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

