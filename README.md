# loneman.dev backend 
[Heroku Badge](http://heroku-badge.herokuapp.com/?app=loneman-dev-backend&root=api/projects/)

This project was built with my knowledge built from Lambda School.
The data returned is mostly static, being updated by me when I have a project to show off.

## Open Endpoints

All GET endpoints require no Authentication.

### Portfolio project related

GET an array of all projects objects
* [Projects](projects.md) : `GET /api/projects/`

GET the technologies used for a specific project
* [Project Skills](projects.md) : `GET /api/projects/:id/techs`

### Personal Skills 

Endpoints for viewing and manipulating my skillset table.

* [Skills](accounts/get.md) : `GET /api/skills/`
* [Create Skill](accounts/post.md) : `POST /api/skills/`

