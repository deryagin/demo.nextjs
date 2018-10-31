import Layout from '../comps/Layout';
import Link from 'next/link';

const Index = () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <li><PostLink id="" title="Hello Next.js" /></li>
            <li><PostLink id="" title="Learn Next.js is awesome" /></li>
            <li><PostLink id="" title="Deploy apps with Zeit" /></li>
        </ul>
    </Layout>
);

const PostLink = (props) => (
    <Link
        as={`/post/${loweredDashed(props.title)}`}
        href={`/post?title=${props.title}`}
    >
        <a>{props.title}</a>
    </Link>
);

const loweredDashed = (str) => {
    return str.toLowerCase().replace(/ /g, '-')
}

export default Index;
