<script>
    let name;
    let description;
    let origin;
    export let addToArray = (data) => {};
</script>

<h2>Ajout d'un chat dans l'annuaire</h2>
<input bind:value={name} type="text" placeholder="breed name" />
<input bind:value={description} type="text" placeholder="breed description" />
<input bind:value={origin} type="text" placeholder="breed origin" />
<button
    on:click={() => {
        addToArray({ name, description, origin });
    }}
    >Add cat breed
</button>
