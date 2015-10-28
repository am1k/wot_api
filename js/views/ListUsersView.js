define([
    'backbone',
    'text!../../templates/list-users.html',
    '../models/MainModel',
    '../collections/MainCollection'

], function(Backbone, myTemplate, MainModel, MainCollection){

    var ListUsers = Backbone.View.extend({

        tagName: 'div',

        className: 'list-users',

        model: new MainModel,

        collection: new MainCollection,

        template: _.template(myTemplate),

        initialize: function(){
            this.render();
            return this;
        },

        render: function(){
            this.listenTo(this.model, 'remove', this.remove);
            this.$el.html(this.template(this.model.toJSON() ));
            return this;
        }

    });
    return ListUsers;

});