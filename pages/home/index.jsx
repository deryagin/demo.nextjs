import Layout from '../../comps/Layout';
import Link from 'next/link';

const Index = () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <li><PostLink id={loweredDashed('Hello Next.js')} title="Hello Next.js" /></li>
            <li><PostLink id={loweredDashed('Learn Next.js is awesome')} title="Learn Next.js is awesome" /></li>
            <li><PostLink id={loweredDashed('Deploy apps with Zeit')} title="Deploy apps with Zeit" /></li>
        </ul>
    </Layout>
);

const PostLink = (props) => (
    <Link
        as={`/posts/${props.id}`}
        href={`/posts?title=${props.title}`}
    >
        <a>{props.title}</a>
    </Link>
);

const loweredDashed = (str) => {
    return str.toLowerCase().replace(/ /g, '-')
}

export default Index;
