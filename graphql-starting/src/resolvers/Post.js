const blog = {
    author(parent, args, {db}, info){            
        const id = parent.user ? parent.user : parent.author;
        return  db.Users.find(user => user.id === id);          
    }
}

export {blog as default}