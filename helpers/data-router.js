const express = require("express");
const db = require("../data/config.js");
const projects = require("./data-model.js");
const router = express.Router();

router.get("/", (res) => {
  res.status(200).json({message: 'API is Online'})
});

// PROJECTS
router.get("/projects", (req, res) => {
    projects.find()
        .then(projects => {
            res.status(200).json({ data: projects } );
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error retrieving projects." })
        })
});

router.get("/projects/:id", (req, res) => {
    const { id } = req.params;
    projects.findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: "Error retrieving project with the specified ID." })
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "The project with the specified ID does not exist." });
    });
});

router.post("/projects", (req, res) => {
    projects.add(req.body)
        .then(project => {
            res.status(200).json({ data: project });
        })   
        .catch(error => {
            console.log(error);
        })
});
// TECHS
router.get("/projects/:id/techs", (req, res) => {
  const { id } = req.params;
  projects.findTechnologiesById(id)
  .then(tech => {
    if (tech) {
      res.json(tech);
    } else {
      res.status(404).json({ message: "Error retrieving technology with the specified ID." })
    }
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ message: "A technology for the specified ID does not exist." });
  });
});

router.get("/skills/", (req, res) => {
  projects.findSkills()
        .then(skills => {
            res.status(200).json({ skills } );
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error retrieving skills" })
        })
});
module.exports = router;
