const BlogPostLayout = ({ children }) => {
    return children;
};

export default BlogPostLayout;

export async function generateMetadata({params}) {
    return {
       title:params.post.split('-').join(' ')
    };
}
