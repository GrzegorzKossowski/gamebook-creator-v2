import React from 'react';
import Modal from './Modal';
import MetadataModal from './MetadataModal';

interface NavbarProps {}

const Navbar = ({ ...restProps }: NavbarProps) => {
    const [isVisibleMetadataModal, setIsVisibleMetadataModal] =
        React.useState<boolean>(true);
    return (
        <>
            <nav className='flex flex-col space-y-8 p-4'>
                <button disabled className='btn'>New</button>
                <button disabled className='btn'>Import</button>
                <button disabled className='btn'>Export</button>
                <button disabled className='btn'>Add</button>
                <button disabled className='btn'>Shuffle</button>
                <button disabled className='btn'>Intro</button>
                <button
                    className='btn'
                    onClick={() => setIsVisibleMetadataModal(true)}
                >
                    Metadata
                </button>
                <button disabled className='btn'>Stats</button>
                <button disabled className='btn'>Prev</button>
                <button disabled className='btn'>Play</button>
                <button disabled className='btn'>
                    About
                </button>
            </nav>
            <MetadataModal
                visible={isVisibleMetadataModal}
                setVisible={setIsVisibleMetadataModal}
            />
        </>
    );
};

export default Navbar;
