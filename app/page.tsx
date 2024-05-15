import { getEvents } from '../app/actions/index';
import EventCard from '@/components/eventCard';
import { cookies } from 'next/headers';

export default async function Index() {
  const cookieStore = cookies();

  const {data: events} = await getEvents();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 px-3">
        <main className="flex-1 flex flex-col gap-6">
          <div>
            <img src='/IMG_4328.jpg'/>
            <h1 className="text-5xl text-center mt-5">Tuned Nation</h1>
          </div>

          <h2 className="text-3xl mt-5 ml-2">Events</h2>
          <EventCard events={events || []}/>
        </main>
      </div>
    </div>
  );
}
