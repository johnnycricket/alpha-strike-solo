import React from "react";
import {Link} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <section className="dashboard-header">
                <h1>Solo Alpha Strike</h1>
                <sub>Simple AI and Dice rolling for playing Battletech Alpha Strike solo.</sub>
            </section>
            
            <section className="route">
                <Link to='/movement'>
                    <h1>Movement</h1>
                </Link>
            </section>
            <section className="route">
                <Link to='/targeting'>
                    <h1>Targeting</h1>
                </Link>
            </section>
            <section className="route">
                <Link to='/firing'>
                    <h1>Firing</h1>
                </Link>
            </section>
            <section className="route">
                <Link to='/attack'>
                    <h1>Attack</h1>
                </Link>
            </section>
            {/* <section>
                <Link to='/deployment'>
                    <h1>Deployment</h1>
                </Link>
            </section> */}
        </div>
    )
}

export default Dashboard;