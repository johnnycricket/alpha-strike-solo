import React from "react";
import {Link} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <section>
                <h1>Add Units</h1>
                <Link to='/addunits'></Link>
            </section>
            <section>
                <h1>Create Force</h1>
                <Link to='/createforce'></Link>
            </section>
            <section>
                <h1>List Units</h1>
                <Link to='/listunits'></Link>
            </section>
            <section>
                <h1>List Forces</h1>
                <Link to='/listforces'></Link>
            </section>
            <section>
                <h1>Run AI</h1>
                <Link to='/play'></Link>
            </section>
        </div>
    )
}

export default Dashboard;