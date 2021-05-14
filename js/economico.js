$('#btn-dolar').click(function (event) {
    event.preventDefault();

    $.ajax({
        url: 'https://api.libreapi.cl/economy/indicators',
        data: {
            format: 'json'
        },
        error: function () {
            $('#info').html('<p>Un error ha ocurrido!!!!</p>');
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
                var $val_dolar = $('<h1>').text(('US$ ')+data.data.dolar);
            $("#info").empty();
            $('#info').append($val_dolar);               
        },
        type: 'GET'
    });
});

$('#btn-euro').click(function (event) {
    event.preventDefault();

    $.ajax({
        url: 'https://api.libreapi.cl/economy/indicators',
        data: {
            format: 'json'
        },
        error: function () {
            $('#info').html('<p>Un error ha ocurrido!!!!</p>');
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
                var $val_euro = $('<h1>').text(('EURЄ ')+data.data.euro);
            $("#info").empty();
            $('#info').append($val_euro);               
        },
        type: 'GET'
    });
});

$('#btn-uf').click(function (event) {
    event.preventDefault();

    $.ajax({
        url: 'https://api.libreapi.cl/economy/indicators',
        data: {
            format: 'json'
        },
        error: function () {
            $('#info').html('<p>Un error ha ocurrido!!!!</p>');
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
                var $val_uf = $('<h1>').text(('CLP$ ')+data.data.uf);
            $("#info").empty();
            $('#info').append($val_uf);               
        },
        type: 'GET'
    });
});

$('#btn-bitcoin').click(function (event) {
    event.preventDefault();

    $.ajax({
        url: 'https://api.libreapi.cl/economy/crypto',
        data: {
            format: 'json'
        },
        error: function () {
            $('#info').html('<p>Un error ha ocurrido!!!!</p>');
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
                var $val_bitcoin = $('<h1>').text(('CLP$ ')+data.data[0].price_clp);
            $("#info").empty();
            $('#info').append($val_bitcoin);               
        },
        type: 'GET'
    });
});

$('#btn-ethereum').click(function (event) {
    event.preventDefault();

    $.ajax({
        url: 'https://api.libreapi.cl/economy/crypto',
        data: {
            format: 'json'
        },
        error: function () {
            $('#info').html('<p>Un error ha ocurrido!!!!</p>');
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
                var $val_ethereum = $('<h1>').text(('CLP$ ')+data.data[1].price_clp);
            $("#info").empty();
            $('#info').append($val_ethereum);               
        },
        type: 'GET'
    });
});