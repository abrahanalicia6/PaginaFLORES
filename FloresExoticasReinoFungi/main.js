document.addEventListener("DOMContentLoaded", function() {
    const florList = document.getElementById('flor-list');

    florData.forEach(flor => {
        const item = document.createElement('div');
        item.className = 'col-md-4 item';
        
        const img = document.createElement('img');
        img.src = flor.imagen;
        img.alt = flor.nombre;
        
        const nombre = document.createElement('h3');
        nombre.textContent = flor.nombre;
        
        const descripcion = document.createElement('p');
        descripcion.textContent = flor.descripcion;
        
        item.appendChild(img);
        item.appendChild(nombre);
        item.appendChild(descripcion);
        
        florList.appendChild(item);
    });
});

