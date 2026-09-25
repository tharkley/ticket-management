import ActivityEntry from './ActivityEntry';
import './RecentActivity.css';

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h3 className="heading">Recent Activity</h3>
      <ActivityEntry
        icon=""
        activity="Sarah assigned Ticket #521"
        description="Login issue"
        timeElapsed="2m ago"
      />
    </div>
  );
};

export default RecentActivity;
