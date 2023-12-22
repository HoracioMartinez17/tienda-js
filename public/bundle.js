'use strict';

const producto$1 = document.getElementById("producto");
const productoImagen = producto$1.querySelector(".producto__imagen");
const thumbs = producto$1.querySelector(".producto__thumbs");
const propiedadColor = producto$1.querySelector("#propiedad-color");
const btnDisminuirCantidad = producto$1.querySelector("#disminuir-cantidad");
const btnAumentarCantidad = producto$1.querySelector("#incrementar-cantidad");
const inputcantidad = producto$1.querySelector("#cantidad");

thumbs.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const imagenSrc = e.target.src;
    const lastIndex = imagenSrc.lastIndexOf("/");

    const nombreImagen = imagenSrc.substring(lastIndex + 1);

    productoImagen.src = `./img/tennis/${nombreImagen}`;
  }
});

propiedadColor.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
  }
});

btnAumentarCantidad.addEventListener("click", (e) => {
  inputcantidad.value = parseInt(inputcantidad.value) + 1;
});
btnDisminuirCantidad.addEventListener("click", (e) => {
    if(parseInt(inputcantidad.value) > 1){
        inputcantidad.value = parseInt(inputcantidad.value) - 1;
    }
});

var data = {
  productos: [
    {
      id: '1',
      nombre: "tennis converse standard",
      descripcion: "converse standard ultra comodo.",
      precio: 500.0,
      colores: ["negro", "rojo", "amarillo"],
      tamaños: ["1,5", "2", "2,5", "3", "4"],
    },
    {
      id: 2,
      nombre: "zapatillas nike air max",
      descripcion: "zapatillas nike air max ultra ligeras.",
      precio: 700.0,
      colores: ["negro", "rojo", "amarillo"],
      tamaños: ["36", "37", "38", "39", "40"],
    },
    {
      id: 3,
      nombre: "botas timberland",
      descripcion: "botas timberland ultra resistentes.",
      precio: 900.0,
      colores: ["negro", "rojo", "amarillo"],
      tamaños: ["39", "40", "41", "42", "43"],
    },
    {
      id: 4,
      nombre: "sandalias adidas",
      descripcion: "sandalias adidas ultra cómodas.",
      precio: 600.0,
      colores: ["negro", "rojo", "amarillo"],
      tamaños: ["36", "37", "38", "39", "40"],
    },
    {
      id: 5,
      nombre: "zapatos de vestir clarks",
      descripcion: "zapatos de vestir clarks ultra elegantes.",
      precio: 800.0,
      colores: ["negro", "rojo", "amarillo"],
      tamaños: ["39", "40", "41", "42", "43"],
    },
  ],
};

const botonesAbrirCarrito = document.querySelectorAll('[data-accion ="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion ="cerrar-carrito"]');
const ventanaCarrito = document.getElementById("carrito");
const btnAgregarcarrito = document.getElementById("agregar-al-carrito");
const producto = document.getElementById("producto");
const formatearMoneda = new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'EUR'});
const carrito = [];

const rendercarrito = () => {
  ventanaCarrito.classList.add("carrito--active");

  const productosAnteriores = ventanaCarrito.querySelectorAll(".carrito__producto");

  productosAnteriores.forEach((producto) => producto.remove());
  carrito.forEach((productoCarrito) => {
    data.productos.forEach((productoBaseDatos) => {
      if (productoBaseDatos.id === productoCarrito.id) {
        productoCarrito.precio = productoBaseDatos.precio;
       
      }
    });
    let thumbSrc = producto.querySelectorAll(".producto__thumb-img")[0].src;

    if (productoCarrito.color === "rojo") {
      thumbSrc = "./img/thumbs/rojo.jpg";
    } else if (productoCarrito.color === "amarillo") {
      thumbSrc = "./img/thumbs/amarillo.jpg";
    }
    const plantilla = `
    <div class="carrito__producto-info">
								<img src="${thumbSrc}" alt="" class="carrito__thumb" />
								<div>
									<p class="carrito__producto-nombre">
										<span class="carrito__producto-cantidad">${productoCarrito.cantidad} x </span>${productoCarrito.nombre}
									</p>
									<p class="carrito__producto-propiedades">
										Tamaño:<span>${productoCarrito.tamaño}</span> Color:<span>${productoCarrito.color}</span>
									</p>
								</div>
							</div>
							<div class="carrito__producto-contenedor-precio">
								<button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path
											d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
										/>
									</svg>
								</button>
								<p class="carrito__producto-precio"> ${formatearMoneda.format(productoCarrito.precio)}</p>
							</div>
    `;
    const itemCarrito = document.createElement("div");
    itemCarrito.classList.add("carrito__producto");
    itemCarrito.innerHTML = plantilla;

    ventanaCarrito.querySelector(".carrito__body").appendChild(itemCarrito);
    console.log(carrito);
    console.log(productoCarrito.precio);
  });
};

botonesAbrirCarrito.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    rendercarrito();
  });
});

botonesCerrarCarrito.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    ventanaCarrito.classList.remove("carrito--active");
  });
});

btnAgregarcarrito.addEventListener("click", (e) => {
  const id = producto.dataset.productoId;
  const nombre = producto.querySelector(".producto__nombre").innerText;
  const cantidad = parseInt(producto.querySelector("#cantidad").value);
  const color = producto.querySelector("#propiedad-color input:checked").value;
  const tamaño = producto.querySelector("#propiedad-tamaño input:checked").value;

  if (carrito.length > 0) ;else {
    carrito.push({
      id: id,
      nombre: nombre,
      cantidad: cantidad,
      color: color,
      tamaño: tamaño,
    });
  }

});
