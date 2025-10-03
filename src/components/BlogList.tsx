import * as React from 'react';

interface Blog {
    title: string;
    body: string;
    author: string;
    id: number;
}

interface BlogListProps {
    blogs: Blog[];
    title: string;
    handleDelete: (id: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({blogs, title, handleDelete}) => {

    return (
        <div className={'blog-list'}>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className={'blog-preview'} key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default BlogList;