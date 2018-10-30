import Link from 'next/link';

const Header = () => (
    <>
        <Link href="/" style={style}>Index</Link>
        <Link href="/about" style={style}>About</Link>
    </>
);

const style = {
    marginRight: '12px',
};

export default Header;