import React from 'react';
import Modal from './Modal';
import { useAppSelector } from '../redux/storeHooks';
import { getMetadata } from '../redux/gamebookSlice';

interface MetadataModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MetadataModal = ({
    visible,
    setVisible,
    ...restProps
}: MetadataModalProps) => {
    const nameRef = React.useRef<HTMLInputElement>(null);
    const titleRef = React.useRef<HTMLInputElement>(null);
    const { authorName, gamebookTitle, introduction } =
        useAppSelector(getMetadata);

    React.useEffect(() => {}, []);

    function handleSubmit(event: React.FormEvent): void {
        event.preventDefault();
        console.log(nameRef?.current?.value + ' | ' + titleRef?.current?.value);
        // TODO: dokonczyc zapisywanie stanu metadanych
    }

    return (
        <Modal title='Add Metadata' visible={visible} setVisible={setVisible}>
            <form
                className='flex flex-col space-y-5 text-2xl'
                onSubmit={handleSubmit}
            >
                <div className='space-y-2'>
                    <label htmlFor='name'>Author's name</label>
                    <input
                        ref={nameRef}
                        id='name'
                        type='text'
                        className='border w-full p-2'
                        defaultValue={authorName || ''}
                    />
                </div>
                <div className='space-y-2'>
                    <label htmlFor=''>Gamebook Title</label>
                    <input
                        ref={titleRef}
                        type='text'
                        className='border w-full p-2'
                        defaultValue={gamebookTitle || ''}
                    />
                </div>
                <button className='btn'>Save meta</button>
            </form>
        </Modal>
    );
};

export default MetadataModal;
