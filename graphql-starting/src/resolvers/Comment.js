const Comment = {
    author(parent, args, { db }, info) {
        //console.log(parent); 
        return db.Users.find(user => user.id === parent.author);
    },
    Bulletin(parent, args, { db }, info) {
        // console.log(parent)           
        return db.blogData.find(post => post.id === parent.post);
    }
}

export {Comment as default}