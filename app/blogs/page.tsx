

const Blogs = () => {
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
    return(
        <div>
            <h2>Blog Listing</h2>

            <div>
                {blogs.map(blog => (
                 <li key={blog.id}>
                    <a href={blog.url}> {blog.title} </a>
                     by {blog.author}
                 </li>
                ))}
            </div>
        </div>
    )
}

export default Blogs;