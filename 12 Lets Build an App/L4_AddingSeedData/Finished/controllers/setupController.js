var Todos = require('../models/todoModel');

module.exports = function(app) {
    
   app.get('/api/setupTodos', function(req, res) {
       
       // seed database
       var starterTodos = [
           {
               username: 'test',
               todo: 'Buy milk',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'test',
               todo: 'Feed dog',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'test',
               todo: 'Learn Node',
               isDone: false,
               hasAttachment: false
           }
       ];
       Todos.create(starterTodos, function(err, results) {
           res.send(results);
       }); 
   });
    
}