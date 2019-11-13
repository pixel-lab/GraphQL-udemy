const Subscription = {
    //Count same as type defination    
    count : {
        subscribe(parent, args, { pubsub }, info){  
            let count = 0;              
            setInterval(() => {
                count++;
                pubsub.publish('count', {
                    count
                });
            },1000);
            return  pubsub.asyncIterator('count')
        }
    },
    Comment : {
        subscribe(parent, {postid}, { db,pubsub }, info){  
            const comment = db.blogData.find(i => i.id == postid);
            //console.log(postid);
            if(!comment){
                throw new Error('Invalid Comment in subscription');
            }
            return  pubsub.asyncIterator(`comment ${postid}`);
        }
    }
}

export {Subscription as default};