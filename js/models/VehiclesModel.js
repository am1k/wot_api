define(['../lib/backbone'], function(Backbone){

    var VechiclesModel = Backbone.Model.extend({

        urlRoot: 'https://api.worldoftanks.ru/wot/account/tanks/?application_id=7ba049d760f54661ad540048df648c14',

        url: function(){
            return this.urlRoot + '&account_id=' + this.get('account_id');
        },

        defaults: {
            account_id: '0' // important user id
        },

        parse: function(res, options){
            console.log(res);
            var obj = {items: res.data[this.get('account_id')]};
            return obj;
            // return info from difficult object
        }
    });

    return VechiclesModel;

});