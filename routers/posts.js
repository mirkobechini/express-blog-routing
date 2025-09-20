const express = require ('express')
const router = express.Router()


const posts = [
    {
        id: 1,
        title: "First Post",
        content: "This is the content of the first post."
    },
    {
        id: 2,
        title: "Second Post",
        content: "This is the content of the second post."
    },
    {
        id: 3,
        title: "Third Post",
        content: "This is the content of the third post."
    },
    {
        id: 4,
        title: "Fourth Post",
        content: "This is the content of the fourth post."
    },
    {
        id: 5,
        title: "Fifth Post",
        content: "This is the content of the fifth post."
    }
]

//Index (R)
router.get("/", (req, res) => {
    res.json(posts)
})

//Show (R)
router.get("/:id", (req, res) => {
    
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
})

//Store (C)
router.post('/', (req, res) => {
    res.send("Create a new post")
})

//Update (U)
router.put('/:id', (req, res) => {
    res.send("Update the entire single post with ID:" + req.params.id)
})

//Modify (U)
router.patch('/:id', (req, res) => {
    res.send("Partial update the single post with ID:" + req.params.id)
})


//Destroy (D)
router.delete('/:id', (req, res) => {
    res.send("Delete the single post with ID:" + req.params.id)
})

module.exports = router