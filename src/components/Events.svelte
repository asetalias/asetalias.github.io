<script>
  let currentSlide = 0;
  import slides from "@/data/events.json";
</script>

<div>
  <h3>Upcoming Events</h3>
  <button
    id="previous"
    on:click={() => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }}>Previous</button
  >
  <div class="carousel-container">
    {#each slides as slide, i}
      <div class={"slide " + (currentSlide === i ? "block" : "hidden")}>
        <img src="./image1.png" alt="img" />
        <div>
          <p>{slide.title}</p>
          <p>{slide.date}</p>
          <p>{slide.location}</p>
          <button>Add to Calender</button>
        </div>
      </div>
    {/each}
  </div>
  <button
    id="next"
    on:click={() => {
      currentSlide = (currentSlide + 1) % slides.length;
    }}>Next</button
  >
</div>
