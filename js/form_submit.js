$(document).ready(function() {
    $("#contact-form").validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        historia: {
            required: true,
            minlength: 6
        },
        categoria:{
            required: true,
        },
        ascii: {
            required: true,
            minlength: 2
        }
      },
      messages : {
        name: {
          required: "Ingrese Nombre",
          minlength: "Largo minimo 3 caracteres"
        },
        historia: {
            required: "Ingrese Historia",
            minlength: "Largo minimo 6 caracteres"
        },
        categoria: {
            required: "Escoja una categoria",
        },
        ascii: {
            required: "Ingresa el gatito",
            minlength: "Largo min 2 caracteres"
        }
      }
    });
  });