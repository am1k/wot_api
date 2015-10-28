define([], function(){
    var requests = {},
        request = {
        registerRequest: function(fn, name){
            requests[name] = fn;
        },
        get: function(name){
            return requests[name]();
        }
   };

    return request;
});