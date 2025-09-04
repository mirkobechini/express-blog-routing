const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})


//CRUD Operation


//Index (R)
app.get("/api/posts", (req, res) => {
    res.send("Posts")
})

//Show (R)
app.get("/api/posts/:id", (req, res) => {
    res.send("Show single post with ID:" + req.params.id)
})

//Store (C)
app.post('/api/posts', (req, res) => {
    res.send("Create a new post")
})

//Update (U)
app.put('/api/posts/:id', (req, res) => {
    res.send("Update the entire single post with ID:" + req.params.id)
})

//Modify (U)
app.patch('/api/posts/:id', (req, res) => {
    res.send("Partial update the single post with ID:" + req.params.id)
})


//Destroy (D)
app.delete('/api/posts/:id', (req, res) => {
    res.send("Delete the single post with ID:" + req.params.id)
})