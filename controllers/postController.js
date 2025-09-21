//Import posts data
const posts = require('../data/posts')

function index(req, res) {
    let filtered_posts= posts
    if(req.query.title){
        filtered_posts = posts.filter(post => post.title.includes(req.query.title))
    }

    res.status(200)
    .json({
        filtered_posts
    })
}

function show(req, res) {
    
    const post_id = parseInt(req.params.id)
    const post = posts.find(post => post.id == post_id) 
    if(!post){
        res.status(404)
        .json({
            error: true,
            message: "Post not found"
        })
    }else{
        res.status(200)
        .json({
            post
        })
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
   
    const post_id = parseInt(req.params.id)
   
    const post = posts.find(post => post.id == post_id) 
   
    if(!post){
        res.json({
            status: 404,
            error: true,
            message: "Post not found"
        })
    }

    posts.splice(posts.indexOf(post), 1)
    res.sendStatus(204)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}