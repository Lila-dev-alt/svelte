<script>
    import Greetings from "./Greetings.svelte";
    const dataProfile = {
        img: "https://www.zooplus.fr/magazine/wp-content/uploads/2019/08/chat-siberien-sur-un-lit.jpg",
        name: "Mochi",
        race: "Chat Sibérien",
        age: "2 mois",
    };
</script>

<Greetings
    name={dataProfile.name}
    age={dataProfile.age}
    race={dataProfile.race}
/>
