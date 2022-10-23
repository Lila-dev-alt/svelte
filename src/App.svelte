<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import { cats } from "./Cats.js";
  import MiniProfile from "./miniProfile.svelte";
  const dataProfile = {
    img: "https://www.zooplus.fr/magazine/wp-content/uploads/2019/08/chat-siberien-sur-un-lit.jpg",
    name: "Mochi",
    race: "Chat Sibérien",
    age: "2 mois",
  };
</script>

<main>
  <h1 class="bold">Annuaire de chats</h1>

  {#if $cats.length === 0}
    <p>Loading...</p>
  {:else}
    <MiniProfile {...dataProfile} />
    <div class="container">
      {#each $cats as data}
        <div class="cats">
          <div class="list-content">
            <p class="title">{data.name}</p>
            <p>{data.description}</p>
            <p>Origine: {data.origin}</p>
            <img src={data.image?.url} alt="cat" />
          </div>
        </div>
      {/each}
    </div>
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
  .cats {
    display: flex;
    padding: 0.5em;
    width: 400px;
  }
  .list-content {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    justify-content: center;
    padding: 1em;
    width: 50%;
  }
  .list-content p {
    flex: 1 0;
  }
  .title {
    font-weight: 500;
    font-size: 20px;
  }
  img {
    width: 50vw;
    height: 70vh;
    max-width: 310px;
    max-height: 250px;
  }
</style>
