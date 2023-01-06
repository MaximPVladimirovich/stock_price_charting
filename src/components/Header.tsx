import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            alignItems: 'center',
            backgroundColor: 'navy',
        }}>
            <div className='header-title'>
                <h1>Welcome to Stock-Tastic</h1>
            </div>
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '10%',
            }}>
                <Link className="link" to="/">Home</Link>
                {/* <Link className="link" to="/stocks">Stocks</Link> */}
            </nav>
        </header>


    )
}

export default Header;