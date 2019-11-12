const Query = {
    Users(parent, args, { db }, info) {
        return args.name ?
            db.Users.filter(i => i.name.toLowerCase().indexOf(args.name.toLowerCase()) > -1) :
            db.Users;
    },
    Posts(parent, args, { db }, info) {
        return args.title ?
            db.blogData.filter(i => i.title.toLowerCase().indexOf(args.title.toLowerCase()) > -1) :
            db.blogData;
    },
    Comment(parent, args, { db }, info) {
        return db.postcomments;
    },
    me() {
        return {
            id: 'abc-123',
            name: 'Sankha Banerjee',
            email: 'sankhabanerjee92@gmail.com',
            age: 32
        }
    },
    post() {
        return {
            id: 'abc-134',
            title: 'Lorem Ipsum is a simple dummy text',
            body: 'Hope is good thing, maybe the best thing, no good thing ever dies',
            isPublished: true
        }
    }
}

export {Query as default}