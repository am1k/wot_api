define(['underscore', 'backbone'], function(_, Backbone){
   var eventAggregator = _.extend({}, Backbone.Events);

    return eventAggregator;
});