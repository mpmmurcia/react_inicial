import React from "react";

function Navbar({ setMostrarCarrito }) {
  return (
    <nav
      style={{
        padding: "10px 20px",
        backgroundColor: "#f0f0f0",
        borderBottom: "1px solid #ddd",
      }}
    >
      <button
        onClick={() => setMostrarCarrito(false)}
        style={{
          marginRight: "15px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Productos
      </button>
      <button
        onClick={() => setMostrarCarrito(true)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Carrito
      </button>
    </nav>
  );
}

export default Navbar;
