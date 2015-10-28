define([
    'backbone',
    'text!../../templates/user-page.html',
    '../models/InfoModel',

], function(Backbone, myTemplate, InfoModel){

    var UserView = Backbone.View.extend({

        el: '#application',

        model: new InfoModel,

        template: _.template(myTemplate),

        initialize: function(options){
            this.model = new InfoModel({
                account_id: options.account_id
            });
            this.model.fetch();
            // add listenTo for get information from server
            this.listenTo(this.model, 'sync', this.render);
            return this;
        },

        render: function(){
            this.$el.html(this.template(  this.model.toJSON() ));
            return this;
        }
    });

    return UserView;


});