import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setOpen(false); // 寬螢幕時自動關漢堡
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    navbar: {
      background: "#333",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      zIndex: 1000,
    },
    logo: {
      fontWeight: "bold",
      fontSize: "20px",
    },
    hamburger: {
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      width: "25px",
      height: "20px",
      justifyContent: "space-between",
      zIndex: 1100,
    },
    hamburgerSpan: {
      background: "white",
      height: "3px",
      borderRadius: "2px",
      transition: "all 0.3s ease",
    },
    navLinks: {
      listStyle: "none",
      display: isMobile ? (open ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "20px",
      margin: 0,
      padding: isMobile ? "60px 20px 20px 20px" : 0,
      position: isMobile ? "absolute" : "static",
      top: isMobile ? "50px" : "auto",
      right: isMobile ? "0" : "auto",
      background: isMobile ? "#222" : "transparent",
      width: isMobile ? "100%" : "auto",
      boxShadow: isMobile ? "0 2px 10px rgba(0,0,0,0.3)" : "none",
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      fontWeight: "500",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>My Blog</div>

      {isMobile && (
        <div
          style={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            style={{
              ...styles.hamburgerSpan,
              transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              ...styles.hamburgerSpan,
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              ...styles.hamburgerSpan,
              transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </div>
      )}

      <ul style={styles.navLinks}>
        <li>
          <Link style={styles.navLink} to="/" onClick={() => setOpen(false)}>
            首頁
          </Link>
        </li>
        <li>
          <Link style={styles.navLink} to="/posts" onClick={() => setOpen(false)}>
            文章列表
          </Link>
        </li>
        <li>
          <Link style={styles.navLink} to="/future" onClick={() => setOpen(false)}>
            未來規劃
          </Link>
        </li>
        <li>
          <Link style={styles.navLink} to="/about" onClick={() => setOpen(false)}>
            關於此網站
          </Link>
        </li>
      </ul>
    </nav>
  );
}




