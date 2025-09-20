const express = require('express')
const app = express()
const PORT = 3000

//Routers
const postsRouter = require('./routers/posts')


app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})

app.use('/api/posts', postsRouter)


app.get("/", (req, res) => {
    res.send("home")
})