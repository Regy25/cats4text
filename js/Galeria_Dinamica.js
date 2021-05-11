$(document).ready(function () {
    $("#btn-mostrar").click(function () {

        // texto del acordeon
        var combo = document.getElementById("categoria");
        var tipo_cotegoria = combo.options[combo.selectedIndex].text;

        if (tipo_cotegoria == 'Cuerpo Completo') {
            $("#tabla-categorias").empty();
            var fila = "<thead><tr><th scope='col'></th><th scope='col'> Id </th><th scope='col'> Gato </th><th scope='col'> Nombre </th><th scope='col'> Descripción</th><th scope='col'> Copiar </th></tr></thead>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> Id </td><td><img src='../images/Completo.png'><td> Nombre </td><td> Descripcion </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);

        } else if (tipo_cotegoria == 'Detallado'){
            $("#tabla-categorias").empty();
            var fila = "<thead><tr><th scope='col'></th><th scope='col'> Id </th><th scope='col'> Gato </th><th scope='col'> Nombre </th><th scope='col'> Descripción</th><th scope='col'> Copiar </th></tr></thead>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> Id </td><td><img src='../images/Detallado.png'><td> Nombre </td><td> Descripcion </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);

        } else if (tipo_cotegoria == 'Extra Grande'){
            $("#tabla-categorias").empty();
            var fila = "<thead><tr><th scope='col'></th><th scope='col'> Id </th><th scope='col'> Gato </th><th scope='col'> Nombre </th><th scope='col'> Descripción</th><th scope='col'> Copiar </th></tr></thead>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> Id </td><td><img src='../images/XL.png'><td> Nombre </td><td> Descripcion </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            
        } else if (tipo_cotegoria == 'Cara'){
            $("#tabla-categorias").empty();
            var fila = "<thead><tr><th scope='col'></th><th scope='col'> Id </th><th scope='col'> Gato </th><th scope='col'> Nombre </th><th scope='col'> Descripción</th><th scope='col'> Copiar </th></tr></thead>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> Id </td><td><img src='../images/Cara.png'><td> Nombre </td><td> Descripcion </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
        }
    });
});
