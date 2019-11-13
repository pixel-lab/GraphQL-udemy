//Type Definition (schema)
let Users = [
    {id: '1',name : 'Sankha Banerjee',email: 'sankha@city.com', age: 32, post:'1'},
    {id: '2',name : 'Santanu Shau',email: 'Santanu@city.com', age: 32, post:'2'},
    {id: '3',name : 'Suman Adak',email: 'Suman@city.com', age: 34, post:'3'},
]
let blogData = [
    {id: '1', title : 'What is Lorem Ipsum?', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s', isPublished: true, user: '1'},
    {id: '2', title : 'Why do we use it?', body: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ', isPublished: true, user: '2'},
    {id: '3', title : 'Where can I get some?', body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected', isPublished: false, user: '3'},
]
let postcomments = [
    {id: '101', text : 'Great', author:'1', post:'1'},
    {id: '102', text : 'Awesome', author:'2',post:'2'},
    {id: '103', text : 'Good', author:'3',post:'3'},
]

 const db =  {Users,blogData,postcomments};
 export {db as default}