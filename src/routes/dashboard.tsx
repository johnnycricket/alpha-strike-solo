import React from "react";
import {Link} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <section>
                <Link to='/movement'>
                    <h1>Movement</h1>
                </Link>
            </section>
            <section>
                <Link to='/targeting'>
                    <h1>Targeting</h1>
                </Link>
            </section>
            <section>
                <Link to='/firing'>
                    <h1>Firing</h1>
                </Link>
            </section>
            <section>
                <Link to='/deployment'>
                    <h1>Deployment</h1>
                </Link>
            </section>
        </div>
    )
}

export default Dashboard;