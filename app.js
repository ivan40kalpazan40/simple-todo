const express = require('express');
const ejs = require('ejs');
const app = express();
const today = require(__dirname + '/datium');
const port = process.env.PORT || 3000;
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
const items = ['Walk the dog', 'Cook tasty dinner', 'Read an interesting book', 'Movie night'];
const workItems = [];
app.get('/', function(req, res) {
    res.render('index', { listTitle: today, items });
});

app.post('/', function(req, res){
    let todo = req.body.todo;
    if(req.body.list === 'Work') {
        workItems.push(todo);
        res.redirect('/work');
        return;
    }
    items.push(todo);
    res.redirect('/');
});

app.get('/work', function(req, res){
    res.render('index', { listTitle: 'Work List', items: workItems });
});

app.post('/work', function(req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect('/work');
});

app.get('/about', function(req, res){
    res.render('about');
});
app.listen(port, ()=>{
    console.log(`Server started on port ${port}...`);
});
