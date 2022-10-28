<script>
    export let searchTerm;
</script>

<div id="search-input">
    <p>😸</p>
    <input
        type="text"
        id="search"
        placeholder="Enter Cat Breed"
        autocomplete="off"
        bind:value={searchTerm}
        on:input
    />
    <p>😸</p>
</div>

<style>
    #search-input {
        width: 40%;
        display: flex;
        align-items: center;
        margin: 0 0 0 10px;
    }

    #search {
        width: 100%;
        font-size: 1.3rem;
        border: 1px solid rgb(128, 128, 128);
        border-radius: 5px;
        padding: 8px;
        margin: 0 10px 0;
    }
</style>
