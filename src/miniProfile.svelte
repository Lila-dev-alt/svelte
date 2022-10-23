<script>
    import { dataset_dev } from "svelte/internal";
    export let img;
    export let name;
    export let race;
    export let age;
</script>

<div class="miniProfile">
    <h2 class="title">Mon profile</h2>
    <div class="container">
        <div>
            <img src={img} alt="cat" />
        </div>
        <div class="text-container">
            <div>
                {name}
            </div>
            <div>
                {race}
            </div>
            <div>
                {age}
            </div>
        </div>
    </div>
</div>

<style>
    .title {
        text-align: right;
    }
    img {
        max-width: 150px;
    }
    .container {
        display: flex;
        justify-content: end;
        align-items: center;
    }
    .text-container {
        margin-left: 2%;
    }
</style>
