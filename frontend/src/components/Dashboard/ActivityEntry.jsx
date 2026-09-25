import './ActivityEntry.css';

const ActivityEntry = ({ icon, activity, description, timeElapsed }) => {
  return (
    <div className="activity-entry">
      <div className="icon">{icon}</div>
      <div className="content">
        <h4 className="activity">{activity}</h4>
        <p className="description">{description}</p>
      </div>
      <span className="time-elapsed">{timeElapsed}</span>
    </div>
  );
};

export default ActivityEntry;
