import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <section className="header dashboard-header">
                <sub>Alpha Strike Solo</sub>
                <h1>Solo Alpha Strike</h1>
            </section>
            <section className="content dashboard-content">
                <div className="route">
                    <Link to='/movement'>
                        <h1>Movement</h1>
                    </Link>
                </div>
                <div className="route">
                    <Link to='/targeting'>
                        <h1>Targeting</h1>
                    </Link>
                </div>
                <div className="route">
                    <Link to='/firing'>
                        <h1>Firing</h1>
                    </Link>
                </div>
                <div className="route">
                    <Link to='/attack'>
                        <h1>Attack</h1>
                    </Link>
                </div>
                <div className="route">
                    <Link to='/about'>
                        <h1>About</h1>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Dashboard;
