const posts = require('./data/posts.js')
const express = require('express');
const postsRouter = require('./routers/posts.js');
const app = express();
const port = 3000;


app.use('/posts', postsRouter)

app.listen(port, () =>{
   console.log('check')
})