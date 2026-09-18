const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 3000;

// Konfiguracja widoku
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));


app.listen(port, () => {
    console.log(`Dziala na http://localhost:${port}`);
});
app.get("/",(req, res)=>{
    res.render("index");
});