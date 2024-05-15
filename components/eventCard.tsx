
interface EventsPageProps {
  events: {
    id: string;
    name: string;
    description: string;
    date: string;
    start_time: string;
    end_time: string;
    location: string;
    image: string;
  }[];
}


const EventCard: React.FC<EventsPageProps> = ({ events }) => {
  return (
    <ul className="flex flex-wrap justify-center md:justify-start">
    {events && events.map(event => (
        <li key={event.id} 
        className="border-2 border-solid border-white rounded-lg w-80 mb-3 md:mr-5 text-center">
        <div>
        </div>
        <div className='h-auto'>
          <img width='350px' height='150px' src={event.image} className="object-cover" style={{height:'80%'}} />
        </div>
        <div className='text-2xl'>{event.name}</div>
        <div>Date: {event.date}</div>
        <div>
          Time: {new Date(`${new Date().toISOString().split('T')[0]}T${event.start_time}`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Los_Angeles' })} - {new Date(`${new Date().toISOString().split('T')[0]}T${event.end_time}`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Los_Angeles' })}
        </div>
        <div>Description: {event.description}</div>
    </li>
    ))}
  </ul>
  );
}


export default EventCard;