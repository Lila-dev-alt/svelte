<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import { cats } from "./Cats.js";
  import MiniProfile from "./miniProfile.svelte";
  import Image from "./Image.svelte";
  import Cat from "./Cat.svelte";
  import Search from "./Search.svelte";
  import NotFound from "./NotFound.svelte";
  const dataProfile = {
    img: "https://www.zooplus.fr/magazine/wp-content/uploads/2019/08/chat-siberien-sur-un-lit.jpg",
    name: "Mochi",
    race: "Chat Sibérien",
    age: "2 mois",
  };
  const images = $cats.flatMap((data) => data.image.url);
  let searchTerm = "";
  let filteredCats = [];

  const searchCats = () => {
    return (filteredCats = $cats.filter((cat) => {
      let catName = cat.name.toLowerCase();
      return catName.includes(searchTerm.toLowerCase());
    }));
  };
</script>

<main>
  <h1 class="bold">🐱 Annuaire de chats 🐱</h1>
  <div class="search-input">
    <Search bind:searchTerm on:input={searchCats} />
  </div>

  {#if searchTerm && filteredCats.length === 0}
    <NotFound />
  {:else if filteredCats.length > 0}
    {#each filteredCats as data}
      <div class="container-only-cat">
        <Cat
          name={data.name}
          description={data.description}
          origin={data.origin}
          image={data.image}
        />
      </div>
    {/each}
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
  .container-only-cat {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .search-input {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2% 0;
  }
</style>
