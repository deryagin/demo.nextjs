import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../../comps/Layout';

const Shows = (props) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({ show }) => (
                <li key={show.id}>
                    <Link as={`/posts/${show.id}`} href={`/posts?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Shows.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    console.log('data', data);
    return {
        shows: data,
    };
}

export default Shows;
