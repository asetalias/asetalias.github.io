<script>
  let currentSlide = 0;
  import events from "@/data/events.json";
</script>

<div>
  <h3>Upcoming Events</h3>
  <button
    id="previous"
    on:click={() => {
      currentSlide = (currentSlide - 1 + events.length) % events.length;
    }}>Previous</button
  >
  <div class="carousel-container">
    {#each events as event, i}
      <div class={"slide " + (currentSlide === i ? "block" : "hidden")}>
        <img src={event.poster} alt="img" />
        <div>
          <p>{event.title}</p>
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <p>{event.location}</p>
          <button>Add to Calender</button>
        </div>
      </div>
    {/each}
  </div>
  <button
    id="next"
    on:click={() => {
      currentSlide = (currentSlide + 1) % events.length;
    }}>Next</button
  >
</div>
