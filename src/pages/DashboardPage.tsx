import React from 'react';
import { Link } from 'react-router-dom';

interface DashboardPageProps {}

const DashboardPage = ({ ...restProps }: DashboardPageProps) => {
    return (
        <>
            DashboardPage
            <div>
                <Link to={'/'}>Home</Link>
            </div>
        </>
    );
};

export default DashboardPage;
