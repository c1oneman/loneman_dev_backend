exports.seed = async function(knex) {
    await knex('projects').insert([
        {
            name: "loneman.dev",
            url:'/',
            description: "My personal website for my development.",
            img: "/images/lonemandev.png"
        },
        {
            name: "Sailboard",
            url:'/',
            description: "iOS Sales Tracking App for local business.",
            img:"/images/sailboard.jpg"
        },
        {
            name: "Weather Against Humans",
            url:'/',
            description: "iOS Weather App",
            img: "/images/weather.png"
        },
    ]);
};