import React, { useState } from "react";
import Header from "./component/header";
import Navbar from "./component/Navbar";
import Producto from "./component/producto";
import Carrito from "./component/carrito";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const agregarProductoAlCarrito = (producto, cantidad) => {
    if (cantidad > 0) {
      const productoExistente = carrito.find((item) => item.id === producto.id);
      if (productoExistente) {
        setCarrito(
          carrito.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + cantidad }
              : item
          )
        );
      } else {
        setCarrito([...carrito, { ...producto, cantidad }]);
      }
    }
  };

  const eliminarProductoDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  const confirmarCompra = () => {
    const nombre = prompt("Por favor, ingresa tu nombre:");
    const direccion = prompt("Por favor, ingresa tu dirección:");
    if (nombre && direccion) {
      alert("¡Felicitaciones! Tu pedido está en marcha.");
      vaciarCarrito();
    } else {
      alert("Debes completar ambos campos para confirmar la compra.");
    }
  };


  const listaProductos = [
    {
      id: 1,
      nombre: "Empanadas",
      descripcion: "Empanadas de carne, pollo y verduras",
      precio: 100,
      imagen: "/src/assets/product1.jpg",
    },
    {
      id: 2,
      nombre: "Pizzas",
      descripcion: "Pizzas de diferentes sabores",
      precio: 200,
      imagen: "/src/assets/product2.jpg",
    },
    {
      id: 3,
      nombre: "Sandwiches",
      descripcion: "Sandwiches de carne, pollo, cerdo",
      precio: 300,
      imagen: "/src/assets/product3.jpg",
    },
    {
      id: 4,
      nombre: "Hamburguesas",
      descripcion: "3 Hamburguesas con cebolla, queso, tomate y lechuga",
      precio: 400,
      imagen: "/src/assets/product4.jpg",
    },
  ];

  return (
    <div>
      <Header
        carrito={carrito.reduce((total, item) => total + item.cantidad, 0)}
        setMostrarCarrito={setMostrarCarrito}
      />
      <Navbar setMostrarCarrito={setMostrarCarrito} />
      {mostrarCarrito ? (
        <Carrito
          carrito={carrito}
          calcularTotal={calcularTotal}
          confirmarCompra={confirmarCompra}
          vaciarCarrito={vaciarCarrito}
          eliminarProductoDelCarrito={eliminarProductoDelCarrito}
        />
      ) : (
        <div
          id="productos"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {listaProductos.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
              agregarProductoAlCarrito={agregarProductoAlCarrito}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

