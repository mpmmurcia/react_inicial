import React, { useState } from "react";

function Producto({ producto, agregarProductoAlCarrito }) {
  const [cantidad, setCantidad] = useState(0);

  const manejarAgregarAlCarrito = () => {
    agregarProductoAlCarrito(producto, cantidad);
    setCantidad(0); // Resetea el contador a 0 después de agregar
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
        backgroundColor: "#f3f3f5",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3 style={{ color: "#5e35b1", margin: "10px 0" }}>{producto.nombre}</h3>
      <p style={{ color: "#757575", fontSize: "14px" }}>{producto.descripcion}</p>
      <p style={{ fontWeight: "bold", color: "#333" }}>Precio: ${producto.precio}</p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button
          onClick={() => setCantidad(cantidad > 0 ? cantidad - 1 : 0)}
          style={{
            backgroundColor: "#5e35b1",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          -
        </button>
        <span style={{ fontSize: "16px", margin: "0 10px" }}>{cantidad}</span>
        <button
          onClick={() => setCantidad(cantidad + 1)}
          style={{
            backgroundColor: "#5e35b1",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={manejarAgregarAlCarrito}
        style={{
          marginTop: "10px",
          backgroundColor: "#673ab7",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 20px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}

export default Producto;

