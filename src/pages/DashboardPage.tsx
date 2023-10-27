import Navbar from '../components/Navbar';
import ChaptersTree from '../components/ChaptersTree';
import ChapterEditor from '../components/ChapterEditor';

interface DashboardPageProps {}

const DashboardPage = ({ ...restProps }: DashboardPageProps) => {
    return (
        <div className='flex'>
            <Navbar />
            <ChaptersTree />
            <ChapterEditor />
        </div>
    );
};

export default DashboardPage;
