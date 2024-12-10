import React from "react";

function Carrito({
  carrito,
  calcularTotal,
  confirmarCompra,
  vaciarCarrito,
  eliminarProductoDelCarrito,
}) {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="titulo-animado">Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {carrito.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            >
              <span>
                {item.nombre} x {item.cantidad} - ${item.precio * item.cantidad}
              </span>
              <button
                onClick={() => eliminarProductoDelCarrito(item.id)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Eliminar
              </button>
            </div>
          ))}
          <h3>Total: ${calcularTotal()}</h3>
          <button
            onClick={vaciarCarrito}
            style={{
              backgroundColor: "#ffc107",
              color: "#000",
              border: "none",
              padding: "10px 15px",
              cursor: "pointer",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            Vaciar Carrito
          </button>
          <button
            onClick={confirmarCompra}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Confirmar Compra
          </button>
        </div>
      )}
    </div>
  );
}

export default Carrito;
