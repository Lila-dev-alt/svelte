<script>
    export let name;
    export let description;
    export let origin;
    export let image;
</script>

<div class="cats">
    <div class="list-content">
        <p class="title">{name}</p>
        <p>{description}</p>
        <p>Origine: {origin}</p>
        <img src={image?.url} alt="cat" />
    </div>
</div>

<style>
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
