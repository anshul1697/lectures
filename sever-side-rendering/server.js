const express = require('express');
const srv = express();
const todosRoute =require('./routes/todoRoute')

srv.use(express.json());
srv.use(express.urlencoded({extended: true}));
srv.set('/todos',)

srv.listen(8080, function(){
    console.log("Server started at 8080 port");
})