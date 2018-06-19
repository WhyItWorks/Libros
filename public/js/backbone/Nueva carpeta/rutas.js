var app = app || {};
var rutas = Backbone.Router.extend({
    routes: {
        'libros': 'book',
        'libros/:id': 'detalle'
    },

    detalle: function (id) {

    },
    book: function () {
        console.log('bienvenido');
    }

});

app.route = new rutas();