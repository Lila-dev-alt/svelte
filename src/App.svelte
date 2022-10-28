<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import { cats } from "./Cats.js";
  import MiniProfile from "./miniProfile.svelte";
  import Image from "./Image.svelte";
  import Cat from "./Cat.svelte";
  const dataProfile = {
    img: "https://www.zooplus.fr/magazine/wp-content/uploads/2019/08/chat-siberien-sur-un-lit.jpg",
    name: "Mochi",
    race: "Chat Sibérien",
    age: "2 mois",
  };
  const images = $cats.flatMap((data) => data.image.url);
</script>

<main>
  <h1 class="bold">🐱 Annuaire de chats 🐱</h1>

  {#if $cats.length === 0}
    <p>Loading...</p>
  {:else}
    <MiniProfile {...dataProfile} />
    <div class="container">
      {#each $cats as data}
        <Cat
          name={data.name}
          description={data.description}
          origin={data.origin}
          image={data.image}
        />
      {/each}
    </div>
    <Image {images} />
  {/if}
</main>

<style>
  .bold {
    font-weight: 600;
    font-weight: 30px;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
