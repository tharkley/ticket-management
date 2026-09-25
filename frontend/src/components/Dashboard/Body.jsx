import TicketOverview from './TicketOverview'
import RecentTickets from './RecentTickets'
import RecentActivity from './RecentActivity'
import './Body.css'

const Body = () => {
  return (
    <div className="body">
      <div className="body-container">
        <div className="body-header">
          <h2>Welcome back, Taylor!</h2>
          <p>Here's a quick overview of your support tickets.</p>
        </div>
        <div className="ticket-overview-container">
          <TicketOverview
            icon=""
            title="Open Tickets"
            numTickets={12}
            percentage={{ amount: 25, isPositiveChange: true }}
          />
          <TicketOverview
            icon=""
            title="Assigned to You"
            numTickets={5}
            percentage={{ amount: 38, isPositiveChange: true }}
          />
          <TicketOverview
            icon=""
            title="Resolved Today"
            numTickets={28}
            percentage={{ amount: 12, isPositiveChange: true }}
          />
        </div>
        <div className="recent-tickets-container">
          <RecentTickets />
        </div>
      </div>
      <div className="recent-activity-container">
        <RecentActivity />
      </div>
    </div>
  )
}

export default Body
