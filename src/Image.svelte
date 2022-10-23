<script>
    import { fade } from "svelte/transition";

    export let images = [];
    let index = 0;
    const next = () => {
        if (index < images.length - 1) {
            index = (index + 1) % images.length;
        }
    };
    const prev = () => {
        if (index > 0) {
            index = (index - 1) % images.length;
        }
    };
</script>

<h2>This is cat images of the breeds</h2>
<div class="container">
    {#each [images[index]] as src (index)}
        <img transition:fade {src} alt="" />
    {/each}
    <button class="prev" on:click={prev}>Previous</button>
    <button class="next" on:click={next}>Next!</button>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
    }
    img,
    button {
        position: absolute;
    }
    .prev {
        left: 39.2%;
    }
    .next {
        left: 55%;
    }
    img {
        max-width: 300px;
    }
</style>
