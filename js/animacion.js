const iconoCarrito = document.getElementById('icono-carrito');
const resumenCompra = document.getElementById('resumen-compra');
const cerrarResumen = document.getElementById('cerrar-resumen');

// Mostrar el resumen de la compra al hacer clic en el carrito
iconoCarrito.addEventListener('click', function() {
  resumenCompra.classList.add('open'); // Agregar la clase 'open' para mostrar el resumen
});

// Cerrar el resumen de la compra
cerrarResumen.addEventListener('click', function() {
  resumenCompra.classList.remove('open'); // Remover la clase 'open' para ocultar el resumen
});

document.querySelector('.marquesina-container').addEventListener('mouseenter', function() {
    document.querySelector('.marquesina-texto').style.animationPlayState = 'paused';
  });
  
  document.querySelector('.marquesina-container').addEventListener('mouseleave', function() {
    document.querySelector('.marquesina-texto').style.animationPlayState = 'running';
  });