interface NavbarProps {}

const Navbar = ({ ...restProps }: NavbarProps) => {
    return (
        <nav className='flex flex-col space-y-8 p-4'>
            <button className='btn'>New</button>
            <button className='btn'>Import</button>
            <button className='btn'>Export</button>
            <button className='btn'>Add</button>
            <button className='btn'>Shuffle</button>
            <button className='btn'>Intro</button>
            <button className='btn'>Metadata</button>
            <button className='btn'>Stats</button>
            <button className='btn'>Prev</button>
            <button className='btn'>Play</button>
            <button className='btn'>About</button>
        </nav>
    );
};

export default Navbar;
