import { useNavigate } from 'react-router-dom';

interface HomePageProps {}

const HomePage = ({ ...restProps }: HomePageProps) => {
    const navigate = useNavigate();

    const handleDashbord = () => {
        navigate('dashboard');
    };

    return (
        <>
            Dashboard
            <div className='flex flex-col'>
                {/* <Link to={'dashboard'}>Dashboard</Link> */}
                <button className='btn' onClick={handleDashbord}>
                    New gamebook
                </button>
                <button className='btn' onClick={handleDashbord}>
                    Dashboard
                </button>
            </div>
        </>
    );
};

export default HomePage;
