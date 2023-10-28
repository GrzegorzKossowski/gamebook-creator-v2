interface ChaptersTreeProps {}

const ChaptersTree = ({ ...restProps }: ChaptersTreeProps) => {
    return (
        <div className='h-screen flex flex-col p-4 space-y-4 min-w-[20%] w-[400px]'>
            <input
                type='text'
                placeholder='Filter paragraphs by title or number'
                className='border w-full p-2 flex-none'
            />
            <div className='grow border overflow-auto p-2 shadow-inner bg-white space-y-2'>
                {Array.from({ length: 40 }, (_, i) => (
                    <div key={i}>{i}) lorem ipsum sid dolor</div>
                ))}
            </div>
            <button className='btn'>New chapter</button>
        </div>
    );
};

export default ChaptersTree;
