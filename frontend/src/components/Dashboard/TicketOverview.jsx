/* eslint-disable no-unused-vars */
import './TicketOverview.css'

const TicketOverview = ({
  icon,
  title,
  numTickets,
  percentage: { amount, isPositiveChange },
}) => {
  return (
    <section className="ticket-overview">
      {/* place for svg up iconw */}
      <h3>{title}</h3>
      <h1>{numTickets}</h1>
      <div className="ticket-overview-change">
        {/* place for svg up up/down arrow */}
        <span></span>
        <span>{amount}% vs last week</span>
      </div>
    </section>
  )
}

export default TicketOverview
