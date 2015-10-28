define([
    'backbone',
    'text!../../templates/main.html',
    '../models/MainModel',
    '../collections/MainCollection',
    './ListUsersView',
    '../request'

], function(Backbone, myTemplate, MainModel, MainCollection, ListUsersView, request){

    var MainView = Backbone.View.extend({

        el: '#application',

        model: new MainModel,

        collection: new MainCollection,

        template: _.template(myTemplate),

        events: {
            'click #search' : 'getNameSearch'
        },

        initialize: function(){
            this.listenTo(this.model, 'change', this.render);
            request.registerRequest(function(){
                return this.get('name');
            }.bind(this.model), 'name');
            this.listenTo(this.collection, 'add', _.debounce(this.renderItems.bind(this)), 100);
            this.render();
            return this;
        },

        render: function(){

            this.$el.html(this.template(this.model.toJSON() ));
            return this;
        },

        renderItems: function(){
            var docFrag = document.createDocumentFragment();
            this.collection.forEach(function(model){
                docFrag.appendChild((new ListUsersView({model: model})).$el[0])
            });
            this.$el.find('.list-users').append(docFrag);
        },

        getNameSearch: function(){
            var currentName = $('.search-area').val();
            this.model.set('name', currentName);
            this.collection.fetch();
        }
    });

    return MainView;


});