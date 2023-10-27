import React from 'react';

interface ModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    title?: React.ReactNode;
}

const Modal = ({
    visible,
    setVisible,
    children,
    title,
    ...restProps
}: ModalProps) => {
    function parentClick() {
        setVisible(false);
    }

    function childClick(event: React.MouseEvent) {
        event.stopPropagation();
        console.log(`child clicked`);
    }
    if (!visible) return null;

    return (
        <div
            className='absolute top-0 left-0 bg-modal h-full w-full flex justify-center items-center'
            onClick={parentClick}
        >
            <div
                onClick={childClick}
                className='border border-slate-800 rounded-lg p-4 max-w-lg'
            >
                <div className='flex justify-end mb-2'>
                    {title && (
                        <div className='mr-4 truncate text-xl'>{title}</div>
                    )}
                    <div className='w-fit  ml-auto'>
                        <svg
                            className='cursor-pointer'
                            onClick={parentClick}
                            width={24}
                            height={24}
                            fill='current'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <g>
                                <path d='M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29ZM19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z'></path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
