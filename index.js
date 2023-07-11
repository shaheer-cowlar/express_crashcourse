const express = require('express');
const path = require('path');
const members = require('./Members');
const { use } = require('./routes/api/members');


const app = express();

// const logger = (req, res , next) => {
//     console.log('Hello');
//     console.log(req.protocol+'://'+req.get('host')+req.originalUrl) ;
//     next();
// };

// app.use(logger);

//body parser middleware
app.use(express.json ());
app.use(express.urlencoded({extended:false}));

//set static folder
app.use(express.static(path.join(__dirname,'public',)));
app.use('/api/members',require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log('Server started on port'+ PORT));