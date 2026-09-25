import './RecentTickets.css'

const RecentTickets = () => {
  return (
    <div className="recent-tickets-container">
      <div className="recent-tickets-header">
        <h3>Recent Tickets</h3>
        <p>View all</p>
      </div>
      <table>
        <thead>
          <th>ID</th>
          <th>Subject</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Updated</th>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}

export default RecentTickets
