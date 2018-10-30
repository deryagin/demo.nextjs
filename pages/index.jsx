import Link from 'next/link';

const Index = () => (
    <div>
        <Link href="/about">
            <a style={{fontSize: '20px'}}>About</a>
        </Link>
        <Link href="/about">
            <button>About</button>
        </Link>
        <p>Hello Next.js</p>
    </div>
);

export default Index;