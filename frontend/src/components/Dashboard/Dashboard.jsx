import './Dashboard.css';
import Header from './Header';
import Body from './Body';
import Tabbar from './Tabbar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <section className="section">
        <Tabbar />
      </section>
      <section className="section">
        <Header />
        <Body />
      </section>
    </div>
  );
};

export default Dashboard;
