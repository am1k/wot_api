requirejs.config({
    baseUrl: 'js/lib',
    paths:{
        jquery: 'jquery-2.1.4.min',
        underscore: 'underscore',
        backbone: 'backbone',
        text: 'text',
        moment: 'moment',
        stickit: 'backbone.stickit'
    }
});

require([
        '../main',
        'stickit'
    ],
    function(App) {
        new App();
    }
);