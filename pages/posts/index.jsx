import fetch from 'isomorphic-unfetch';
import Layout from '../../comps/Layout';

const Post = (props) => (
    <Layout>
        {/* {console.log(props)} */}
        <h1>{props.show.name}</h1>
        <p>This is the blog post content.</p>
        <img src={props.show.image.medium} />
    </Layout>
);

Post.getInitialProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show}`)
    return { show }
};

export default Post;
