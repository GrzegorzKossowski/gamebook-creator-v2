import { Outlet } from 'react-router-dom';

interface RootProps {}

const Root = ({ ...restProps }: RootProps) => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default Root;
