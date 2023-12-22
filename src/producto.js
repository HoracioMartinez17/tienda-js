const producto = document.getElementById("producto");
const productoImagen = producto.querySelector(".producto__imagen");
const thumbs = producto.querySelector(".producto__thumbs");
const propiedadColor = producto.querySelector("#propiedad-color");
const btnDisminuirCantidad = producto.querySelector("#disminuir-cantidad");
const btnAumentarCantidad = producto.querySelector("#incrementar-cantidad");
const inputcantidad = producto.querySelector("#cantidad");

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
