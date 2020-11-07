# Project Techs

Used to GET technologies of my projects over my career

**URL** : `/api/projects/:id/techs`

**Method** : `GET`

**URL Parameters** : `id=[integer]` where `id` is the ID of the Project on the
server.

**Auth required** : NO

**Data constraints** : NO


## Success Response

**Code** : `200 OK`

**Projects Response example**

```json
[
    {
        "name": "JS",
        "id": 1
    },
    {
        "name": "React",
        "id": 2
    },
    {
        "name": "UI/UX",
        "id": 3
    },
    {
        "name": "Gitflow",
        "id": 4
    },
    {
        "name": "Node.js Backend",
        "id": 5
    }
]
```

## Error Response

**Condition** : If a project/techs does not exist.

**Code** : `200 OK`

**Content** :

```json
{
    []
}
```