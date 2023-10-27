interface ChapterEditorProps {}

const ChapterEditor = ({ ...restProps }: ChapterEditorProps) => {
    return (
        <div className='h-screen flex flex-col p-4 space-y-4 w-[50%] min-w-[500px]'>
            <div className='flex-none space-y-4'>
                <div className='flex flex-row justify-between'>
                    <div className='space-x-4'>
                        <button className='btn'>New chapter</button>
                        <button className='btn'>Shuffle</button>
                    </div>
                    <button className='btn'>Delete</button>
                </div>
                <hr />
                <input
                    type='text'
                    placeholder='Title'
                    className='border w-full p-2'
                />
            </div>
            <div className='space-x-4'>
                <label htmlFor='victory' className='space-x-3'>
                    <input type='checkbox' name='victory' id='victory' />
                    <span>Victory</span>
                </label>
                <label htmlFor='death' className='space-x-3'>
                    <input type='checkbox' name='death' id='death' />
                    <span>Death</span>
                </label>
                <label htmlFor='isFixed' className='space-x-3'>
                    <input type='checkbox' name='isFixed' id='isFixed' />
                    <span>Is Fixed</span>
                </label>
                <label htmlFor='isReady' className='space-x-3'>
                    <input type='checkbox' name='isReady' id='isReady' />
                    <span>Is Ready</span>
                </label>
            </div>
            <textarea
                className={`border grow resize-none w-full p-2 text-xl`}
                name='editor'
                id='editor'
                placeholder='Create a new chapter using the "New Chapter" buttons or just start writing.'
            ></textarea>
            <div className='flex-none'>
                <button className='btn w-full'>Save</button>
            </div>
        </div>
    );
};

export default ChapterEditor;
