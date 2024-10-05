const productos = [
    { nombre: 'Laptop', precio: 15000 },
    { nombre: 'Mouse', precio: 500 },
    { nombre: 'Teclado', precio: 1200 },
    { nombre: 'Monitor', precio: 7000 },
    { nombre: 'Silla', precio: 3000 }
];

// Mostrar todos los productos al cargar la página
window.onload = () => {
    mostrarProductos(productos);
};

// Función para mostrar los productos
function mostrarProductos(listaProductos) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';  // Limpiar lista antes de mostrar nuevos resultados
    listaProductos.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        productList.appendChild(li);
    });
}

// Función para filtrar por precio
function filtrarPorPrecio() {
    const minPrice = document.getElementById('min-price').value;
    const maxPrice = document.getElementById('max-price').value;

    const productosFiltrados = productos.filter(producto => 
        producto.precio >= minPrice && producto.precio <= maxPrice
    );
    mostrarProductos(productosFiltrados);
}

// Función para buscar por nombre
function buscarPorNombre() {
    const searchQuery = document.getElementById('product-search').value.toLowerCase();

    const productoEncontrado = productos.find(producto => 
        producto.nombre.toLowerCase().includes(searchQuery)
    );

    if (productoEncontrado) {
        mostrarProductos([productoEncontrado]);
    } else {
        document.getElementById('product-list').innerHTML = '<li>No se encontraron resultados</li>';
    }
}
