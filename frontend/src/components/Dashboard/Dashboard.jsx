import './Dashboard.css';
import Header from './Header';
import Body from './Body';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <section className="section">
        <Header />
        <Body />
      </section>
    </div>
  );
};

export default Dashboard;
