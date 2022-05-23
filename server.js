const express = require('express'); //Import Express
const path = require('path'); //Module to help retrieve files from anywhere regardless of what folder you're in when starting the server

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

const PORT = 3000;

//Middleware - Responsible for collecting data
app.use((req, res, next) => {
    const start = Date.now();
    next(); // **must include**
    //actions go here...
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

//Middleware - uses the html file located in public folder, in order to make it used at the root level, remove the /site
app.use('/site', express.static(path.join(__dirname, 'public')));

//Middleware - Responsible for parsing JSON on POST requests
app.use(express.json());

//Renders the template engine (hbs) and provides the info to be rendered
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Express Server',
        caption: 'I Love Coffee!'
    });
});

//Middleware allowing for routes involving /friends to be handled by friendsRouter located in other folder
app.use('/friends', friendsRouter);

//Middleware allowing for routes involving /messages to be handled by messagesRouter located in other folder
app.use('/messages', messagesRouter);

//Initialize server on a given port number
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});