const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

let smallPizzaCost =0;
let mediumPizzaCost =0;
let largePizzaCost =0;
let overAllTotal=0;
// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
var session = require('express-session')


app.get('/', function(req, res) {
	res.render('index', {
		small:smallPizzaCost, medium: mediumPizzaCost, large:largePizzaCost
	});
});

app.post('/buy', function(req, res) {
	let size = req.body.pizzaType
	if(size == "small"){
		smallPizzaCost += 34.99;
		overAllTotal ++

	}else if 
	(size == "medium"){
		mediumPizzaCost += 67.99;
		overAllTotal ++
	}else if 
	(size == "large"){
		largePizzaCost += 87.99;
		overAllTotal ++
	}
	res.redirect('/')
});


// start  the server and start listening for HTTP request on the PORT number specified...
const PORT = process.env.PORT || 5001;

app.listen(PORT, function () {
    console.log("app started at", PORT)
});