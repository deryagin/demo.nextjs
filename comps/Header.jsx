import Link from 'next/link';

const Header = () => (
    <>
        <Link href="/">
            <a style={style}>Home</a>
        </Link>
        <Link href="/about">
            <a style={style}>About</a>
        </Link>
    </>
);

const style = {
    marginRight: '12px',
};

export default Header;