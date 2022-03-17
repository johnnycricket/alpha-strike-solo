import React from "react";
import {Link} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <section>
                <h1>Movement</h1>
                <Link to='/movement'></Link>
            </section>
            <section>
                <h1>Targeting</h1>
                <Link to='/targeting'></Link>
            </section>
            <section>
                <h1>Firing</h1>
                <Link to='/firing'></Link>
            </section>
            <section>
                <h1>Deployment</h1>
                <Link to='/deployment'></Link>
            </section>
        </div>
    )
}

export default Dashboard;