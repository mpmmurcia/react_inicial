import React from "react";

function Header({ carrito, setMostrarCarrito }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#f8f8f8",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h1 className="titulo-animado">Rotiseria La Ideal</h1>
      <div>
        <button
          onClick={() => setMostrarCarrito(true)}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          🛒 Carrito ({carrito})
        </button>
      </div>
    </header>
  );
}

export default Header;

