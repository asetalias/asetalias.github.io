<script>
  import { MapIcon, CalendarIcon, RadioIcon } from 'svelte-feather-icons';
  import { google } from 'calendar-link';
  import { parse, format } from 'date-fns';

  let currentSlide = 0;
  import events from '@/data/events.json';
</script>

<div class="not-prose flex flex-col align-middle w-full items-stretch">
  <h3 class="text-4xl font-bold font-mono text-center">Upcoming Events</h3>
  <div class="flex flex-row align-middle justify-around my-12">
    <button
      class="text-5xl my-8 w-16 rounded hover:bg-gray-800"
      id="previous"
      on:click={() => {
        currentSlide = (currentSlide - 1 + events.length) % events.length;
      }}
    >
      &langle;
    </button>
    <div>
      {#each events as event, i}
        <div class={'slide flex flex-row justify-around items-stretch ' + (currentSlide === i ? 'block' : 'hidden')}>
          <img src={event.poster} alt="event poster" class="w-1/2 min-h-full m-0 object-cover rounded-lg" />
          <div class="flex flex-col justify-between">
            <p><RadioIcon class="inline-block mr-4 text-emerald-300" /><span>{event.title}</span></p>
            <p><CalendarIcon class="inline-block mr-4 text-purple-300" /><span>{format(parse(event.start, 'yyyy-MM-dd HH:mm', new Date()), 'do MMM yy')}</span></p>
            <p><MapIcon class="inline-block mr-4 text-rose-300" /><span>{event.location}</span></p>
            <a
              href={google({
                title: event.title,
                description: event.description,
                start: parse(event.start, 'yyyy-MM-dd HH:mm', new Date()).toJSON(),
                end: parse(event.end, 'yyyy-MM-dd HH:mm', new Date()).toJSON(),
                location: event.location,
              })}
              target="_blank"
              rel="noopener noreferrer"
              class="no-underline bg-gray-200 text-gray-900 font-mono font-bold rounded px-3 py-1.5 hover:bg-gray-50">Add to Calender</a
            >
          </div>
        </div>
      {/each}
    </div>
    <button
      class="text-5xl w-16 rounded hover:bg-gray-800"
      id="next"
      on:click={() => {
        currentSlide = (currentSlide + 1) % events.length;
      }}
    >
      &rangle;
    </button>
  </div>
</div>
