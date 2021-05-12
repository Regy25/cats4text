$(document).ready(function () {
    $("#btn-mostrar").click(function () {

        // texto del acordeon 
        var combo = document.getElementById("categoria");
        var tipo_cotegoria = combo.options[combo.selectedIndex].text;

        if (tipo_cotegoria == 'Cuerpo Completo') {
            $("#tabla-categorias").empty();
            var fila = "<thead><tr><th scope='col'></th><th scope='col'> Id </th><th scope='col'> Gato </th><th scope='col'> Nombre </th><th scope='col'> Descripción</th><th scope='col'> Copiar </th></tr></thead>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 1 </td>  <td> <img src='../images/Eusebia.png'> <td> Eusebia </td><td> Eusebia es una gatita que fue rescatada en un chat en el año 2007, si la rescatas no tendrás mas ratones en tu casa, ya que ella los debora. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 2 </td> <td> <img src='../images/Rallita.png'> <td> Rallita </td><td> Rallita es una fiel gata guardiana, estará todo el día vigilando que no le pase nada a tu hogar, incluso vigila mas que la tipica vecina del barrio. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 3 </td><td> <img src='../images/Carlitos.png'> <td> Carlitos </td><td> Jerry es un gato triste que fue abandonado en yahoo respuestas. Muchos gatos le hacen bullying por tener nombre de ratón, es por eso que Jerry te necesita mas que nunca. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 4 </td><td> <img src='../images/Jerry.png'> <td> Jerry </td><td> Carlitos... un gato feliz que fue desechado, aun así, no pierde la sonrisa en su cara esperando que lo rescates y lo utilices en algún foro. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);


        } else if (tipo_cotegoria == 'Detallado'){
            $("#tabla-categorias").empty();
            var fila = "<thead><tr><th scope='col'></th><th scope='col'> Id </th><th scope='col'> Gato </th><th scope='col'> Nombre </th><th scope='col'> Descripción</th><th scope='col'> Copiar </th></tr></thead>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 1 </td><td><img src='../images/Felix.png'><td> Felix </td><td> Félix. Uno de los primeros michis en nacer (o ser digitado). Este michi posee mucha experiencia, es un gato maduro y conocedor del código fuente de muchas webs. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 2 </td><td><img src='../images/Cleo.png'><td> Cleo </td><td> Cleo es una Preciosa gatita albina, tiene heterocromía y es muy juguetona, le gustan las piñas coladas y caminar bajo la lluvia. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 3 </td><td><img src='../images/Shere Khan.png'><td> Shere Khan </td><td> Shere Khan es un hábil cazador, puede olfatear a su presa a gran distancia. Este hábil felino se crio en las selvas de India. Se dice que allí fue el más temido de toda la jungla. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 4 </td><td><img src='../images/Trio.png'><td> Trio </td><td> Son Shanell, Spencer y Diva. Estos 3 gatos son inseparables, aunque no hacen mucho la verdad, solo se la pasan viendo y juzgando a todo el que pasa. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);

        } else if (tipo_cotegoria == 'Extra Grande'){
            $("#tabla-categorias").empty();
            var fila = "<thead><tr><th scope='col'></th><th scope='col'> Id </th><th scope='col'> Gato </th><th scope='col'> Nombre </th><th scope='col'> Descripción</th><th scope='col'> Copiar </th></tr></thead>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 1 </td><td><img src='../images/XL 1.png'><td> Alex </td><td> Este gato lo encontramos hace un tiempo en los comentarios de una pagina de los mejores spa del país, estuvo ahí por mucho tiempo, por lo que decidimos traerlo a esta pagina. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 2 </td><td><img src='../images/XL 2.png'><td> Felix </td><td> Este amigo lleva un buen tiempo con nosotros, nos lo paso otra persona diciendo que nadie lo usaba por lo que decido entregárnoslo. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 3 </td><td><img src='../images/XL 3.png'><td> Jorge </td><td> Este gato en adopcion fue encontrado en un post acerca de los mejores restaurantes del país, en el cual fue completamente ignorado, por lo cual, se decidio cuidarlo y encontrarle un hogar. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 4 </td><td><img src='../images/XL Calabaza.png'><td> Charlie </td><td> Este gato lo encontramos en un chat de una organización para una fiesta de halloween. Después de haber sido utilizado un par de veces lo tenemos aquí. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            
        } else if (tipo_cotegoria == 'Cara'){
            $("#tabla-categorias").empty();
            var fila = "<thead><tr><th scope='col'></th><th scope='col'> Id </th><th scope='col'> Gato </th><th scope='col'> Nombre </th><th scope='col'> Descripción</th><th scope='col'> Copiar </th></tr></thead>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 1 </td><td><img src='../images/Bear.png'><td> Bear </td><td> Bear es un gato de gran corazón, posteado en perfil de myspace. No mucha gente busca gatos con cara seria, por lo que ha sido tan difícil encontrarle un nuevo hogar. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 2 </td><td><img src='../images/Max.png'><td> Max </td><td> Este pequeño se llama Max, rescatado de un post de 2004, abandonado junto a fotolog. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 3 </td><td><img src='../images/Neko.png'><td> Neko </td><td> Neko es un travieso minino que fue rescatado de un foro de anime, del que fue importado por un extranjero. Hoy en dia espera aqui a que se le de un nuevo hogar en la segunda temporada. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
            var fila = "<tr><td>  </td><td> 4 </td><td><img src='../images/Toby.png'><td> Toby </td><td> Toby es de una raza muy común en los chats, incluso al día de hoy. Fue abandonado debido a la gran sobrepoblación de esta y, busca un nuevo hogar en tus chats. </td><td> Copiar </td></tr>"
            $("#tabla-categorias").append(fila);
        }
    });
});
 