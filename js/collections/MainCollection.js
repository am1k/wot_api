define(['backbone','../models/MainModel', '../request'], function(Backbone, MainModel, request){

    var MainCollection = Backbone.Collection.extend({

        model: MainModel,

        url: function(){
            return 'https://api.worldoftanks.ru/wot/account/list/?application_id=7ba049d760f54661ad540048df648c14&search=' + this.getName();
        },

        getName: function(){
            return request.get('name');
        },

        parse: function(res){
            return res.data;
        }

    });

    return MainCollection;

});