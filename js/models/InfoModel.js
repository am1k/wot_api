define(['../lib/backbone','../lib/moment'], function(Backbone, moment){

    var InfoModel = Backbone.Model.extend({

        urlRoot: 'https://api.worldoftanks.ru/wot/account/info/?application_id=7ba049d760f54661ad540048df648c14',

        url: function(){
              return this.urlRoot + '&account_id=' + this.get('account_id');
        },

        defaults: {
            account_id: '0' // important user id
        },

        parse: function(res){
            var obj = res.data[this.get('account_id')];
            obj.last_battle_time = moment(obj.last_battle_time*1000).format('MM/DD/YYYY');
            obj.created_at = moment(obj.created_at*1000).format('MM/DD/YYYY');
            console.log(obj);
            return obj;
            // return info from difficult object
        }
    });

    return InfoModel;

});