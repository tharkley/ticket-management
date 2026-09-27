import './ActivityEntry.css';

const ActivityEntry = ({ icon, activity, description, timeElapsed }) => {
  return (
    <div className="activity-entry">
      <div className="icon">{icon}</div>
      <div className="content">
        <p className="activity">{activity}</p>
        <p className="description">{description}</p>
      </div>
      <p className="time-elapsed">{timeElapsed}</p>
    </div>
  );
};

export default ActivityEntry;
