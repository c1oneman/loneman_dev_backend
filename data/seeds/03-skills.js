exports.seed = async function(knex) {
    await knex('skills').insert([
        {
            name: "React",
            color: '#4af9ff',
            url:'/',
            icon: 'fab fa-react',
            time: '> 1y',
          },
          {
            name: "JavaScript",
            color: '#dbce16',
            url:'/',
            icon: 'fab fa-js',
            time: '> 1y',
          },
          {
            name: "Full Stack",
            color: '#000',
            url:'/',
            icon: 'fas fa-code',
            time: '> 1y',
          },
          {
            name: "HTML",
            color: '#ff5729',
            url:'/',
            icon: 'fab fa-html5 ',
            time: '3y',
          },
          {
            name: "Node.js",
            color: '#359c59',
            url:'/',
            icon: 'fab fa-node-js ',
            time: '< 1y',
          },
          {
            name: "Vue.js",
            color: "#3d3f85",
            url:'/',
            icon: 'fab fa-vuejs ',
            time: '< 1yr',
          },
          {
            name: "Testing",
            color: "#3d3f85",
            url:'/',
            icon: 'fas fa-bug',
            time: '< 1yr',
          }
    ])
};