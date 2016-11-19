var express = require('express');
var app = express();
var PORT = process.env.PORT || 3001;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
},{
	id: 2,
	description: 'Go to market',
	completed: false
},{
	id: 3,
	description: 'Do homework',
	completed: false
}];

app.get('/', function (req,res) {
	res.send('Todo API root');
});

// GET /todos
app.get('/todos', function(req,res){
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function(req,res){
	var todoId = req.params.id;
	var matchedTodo;
	// Itarate of todos array. Find the match

	todos.forEach(function(todo) {
		if(todo.id === todoId){
			matchedTodo = todo;
		}
	})

	if(matchedTodo){
		req.json(matchedTodo);
	} else {
		req.status(404).send();
	}
	
});

app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT + '!');
});

