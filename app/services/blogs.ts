

 const blogs = [
    {
        "id": 1,
        "author": "Caleb Wilderman",
        "title": "Internal Quality Engineer",
        "url": "https://idealistic-union.org",
        "likes": 100,
    },
    {
        "id": 2,
        "author": "Unique Koepp",
        "title": "Chief Markets Consultant",
        "url": "https://creepy-jam.com",
        "likes": 10,
    },
    {
        "id": 3,
        "author": "Coralie Schneider",
        "title": "International Accounts Orchestrator",
        "url": "http://soulful-synergy.org",
        "likes": 40,
    },
 ]

 let nextId = 4;

 export const getBlogs = () => {
    return blogs
 }

 export const addBlog = (title: string, author: string, url: string) => { blogs.push({id: nextId++, title, author, url})
 }

 export const getBlogById = (id: number) => {
    return blogs.find((blog) => blog.id === id)
 }

 export const likeBlog = (id : number ) => {
    const blogs = getBlogs();
    const blog = blogs.find( b => b.id === id )

    if(blog) {
         blog.likes = (blog.likes ?? 0) + 1
    }
 }
