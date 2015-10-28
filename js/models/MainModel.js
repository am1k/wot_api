define(['../lib/backbone'], function(Backbone){

    var MainInfoModel = Backbone.Model.extend({

        defaults: {
            name: '',
            nickname: '',
            account_id: ''
        }
    });

    return MainInfoModel;

});