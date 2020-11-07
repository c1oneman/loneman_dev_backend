exports.seed = async function(knex) {
    await knex('technologies').insert([
        {
            name: "JS",
            project_id:1
        },
        {
            name: "React",
            project_id:1
        },
        {
            name: "UI/UX",
            project_id:1
        },
        {
            name: "Gitflow",
            project_id:1
        },
        {
            name: "Node.js Backend",
            project_id:1
        },
        {
            name: "Swift",
            project_id:2
        },
        {
            name: "UIKit",
            project_id:2
        },
        {
            name: "Firebase",
            project_id:2
        },
        {
            name: "Gitflow",
            project_id:2
        },
        {
            name: "Swift",
            project_id:3
        },
        {
            name: "UIKit",
            project_id:3
        },
        {
            name: "Firebase",
            project_id:3
        },
        {
            name: "Gitflow",
            project_id:3
        },
        {
            name: "RestAPI",
            project_id:3
        }
    ]);
};