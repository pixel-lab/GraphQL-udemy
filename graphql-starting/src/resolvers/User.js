const User = {
    Bulletin(parent, args, {db}, info){           
        return  db.blogData.find(post => post.id === parent.post);  
    }
}


export {User as default}