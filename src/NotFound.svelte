<script>
    import catMeme from "./assets/chatmeme.png";
</script>

<div class="container">
    <div class="not-found">
        <p>Veuillez mettre une race de chat svp en anglais</p>
        <img src={catMeme} alt="meme of cat" />
    </div>
    <div />
</div>

<style>
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .not-found {
        width: 70%;
        padding: 20px;
        font-size: 2rem;
        text-align: center;
        background-color: hsl(19, 66%, 74%);
        border-left: 6px solid #ba5626;
    }
    p {
        line-height: 30px;
    }
    img {
        max-width: 300px;
    }
</style>
