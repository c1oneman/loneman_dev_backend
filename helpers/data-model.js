const db = require("../data/config.js");

// PROJECTS

function find(){
    return db("projects");
};

function findById(id) {
    return db("projects")
        .where({ id })
        .first();
}

function add(value){
    return db("projects")
        .insert(value, "id")
        .then(id => {
            return findById(id)
        });
}

function findTechnologies(){
    return db("technologies")
}
function findTechnologiesById(id) {
    return db("technologies")
        .where('project_id', '=', id)
}



module.exports = {
    find,
    findById,
    add,
    findTechnologies,
    findTechnologiesById
};