//Import posts data
const posts = require('../data/posts')

function index(req, res) {
    res.json(posts)
}

function show(req, res) {
    
    const post_id = req.params.id
    const post = posts.find(post => post.id == parseInt(post_id)) 
    if(!post){
        res.status(404)
        .json({
            error: true,
            message: "Post not found"
        })
    }else{
        res.json(post)
    }
}

function store(req, res) {
    res.send("Create a new post")
}

function update(req, res) {
    res.send("Update the entire single post with ID:" + req.params.id)
}

function modify(req, res) {
    res.send("Partial update the single post with ID:" + req.params.id)
}


function destroy(req, res) {
    res.send("Delete the single post with ID:" + req.params.id)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}