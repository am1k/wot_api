define([
    'backbone',
    'jquery',
    './views/MainView',
    './views/UserView',
    './views/VehiclesView'
], function(Backbone, $, MainView, UserView, VehiclesView){

    var MyRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'users/:id': 'user',
            'vehicles/:id': 'vehicles'
        },

/*        initialize: function () {
            Backbone.history.start({ pushState: true });
            $('body').on('click', 'a', function(e) {
                var href = $(e.target).attr("href").slice(1);

                console.log(href, this.routes[href], this.routes)
                return false;

                if (this.routes[href]) {
                    e.preventDefault();
                    this.navigate(href, true);
                }
            }.bind(this));
        },*/

        initialize: function(){
          Backbone.history.start();
        },

        home: function(){
            $('#applictaion').append((new MainView).$el);
        },

        user: function(id){
            $('#applictaion').append(
                (new UserView({
                    account_id: id
                })).$el
            );
        },

        vehicles: function(id){
            $('#applictaion').append(
                (new VehiclesView({
                    account_id: id
                })).$el
            );
        }


//        http://mikeygee.com/blog/backbone.html  - remove view;

//        loadView: function(view){
//            console.log(view);
//            this.view && this.view.remove();
//            this.view = view;
//        }
    });

    return MyRouter;


});