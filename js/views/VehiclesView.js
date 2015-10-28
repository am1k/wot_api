define([
    'backbone',
    'text!../../templates/list-vehicles.html',
    '../models/VehiclesModel'

], function(Backbone, myTemplate, VehiclesModel){

    var VehiclesView = Backbone.View.extend({

        el: '#application',

        model: new VehiclesModel,

        template: _.template(myTemplate),

        initialize: function(options){
            this.model = new VehiclesModel({
                account_id: options.account_id
            });
            this.model.fetch();
            // add listenTo for get information from server
            console.log(this.model );
            this.listenTo(this.model, 'sync', this.render);
            return this;
        },

        render: function(){
            this.$el.html(this.template( this.model.toJSON() ));
            return this;
        }
    });

    return VehiclesView;


});