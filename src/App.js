import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';

const postsPerPage = 5;

// 假文章資料（可換成 API 或其他資料）
const posts = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  title: `文章標題 ${i + 1}`,
}));

function PostList() {
  const { page } = useParams();
  const pageNum = parseInt(page, 10) || 1;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  if (pageNum < 1 || pageNum > totalPages) {
    // 頁數不合理導向第一頁
    return <Navigate to="/page/1" replace />;
  }

  // 計算該頁的文章範圍
  const startIndex = (pageNum - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const pagePosts = posts.slice(startIndex, endIndex);

  return (
    <div>
      <h2>文章列表 - 第 {pageNum} 頁</h2>
      <ul>
        {pagePosts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Pagination currentPage={pageNum} totalPages={totalPages} />
    </div>
  );
}

function Pagination({ currentPage, totalPages }) {
  return (
    <div>
      {currentPage > 1 && (
        <Link to={`/page/${currentPage - 1}`}>上一頁</Link>
      )}
      {' '}
      {currentPage < totalPages && (
        <Link to={`/page/${currentPage + 1}`}>下一頁</Link>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/page/1">首頁</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/page/1" replace />} />
        <Route path="/page/:page" element={<PostList />} />
        <Route path="*" element={<h2>找不到頁面</h2>} />
      </Routes>
    </Router>
  );
}

