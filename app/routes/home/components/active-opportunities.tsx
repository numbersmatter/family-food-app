import OpportunityCard from "./opportunity-card"


const events = [
  { id: "a", name: "Food Pickup", date: "2021-10-01", description: "Aug. 4 -6 Pickup Event" },
  { id: "b", name: "Drive-Thru Event", date: "2021-10-01", description: "Pick up food from the local food bank and deliver it to the shelter" },
  { id: "c", name: "Food Pickup", date: "2021-10-01", description: "Pick up food from the local food bank and deliver it to the shelter" },
  { id: "d", name: "Food Pickup", date: "2021-10-01", description: "Pick up food from the local food bank and deliver it to the shelter" },
]



export function ActiveOpportunitiesList() {

  return (
    <div className="container mx-auto py-3  sm:py-6 sm:px-6 lg:px-8">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 "
      >
        {events.map((event) => (
          <li
            key={event.id}
            className=""
          >
            <OpportunityCard opportunity={event} />
          </li>
        ))}
      </ul>
    </div>
  )

}




