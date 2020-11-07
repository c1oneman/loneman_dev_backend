# Projects

Used to details of my projects over my career

**URL** : `/api/projects/`

**Method** : `GET`

**URL Parameters** : `id=[integer]` where `id` is the ID of the Project on the
server.

**Auth required** : NO

**Data constraints** : NO


## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "data": [
        {
            "id": 1,
            "name": "loneman.dev",
            "description": "My personal website for my development.",
            "img": "/images/lonemandev.png",
            "url": "/"
        },
        {
            "id": 2,
            "name": "Sailboard",
            "description": "iOS Sales Tracking App for local business.",
            "img": "/images/sailboard.jpg",
            "url": "/"
        },
        {
            "id": 3,
            "name": "Weather Against Humans",
            "description": "iOS Weather App",
            "img": "/images/weather.png",
            "url": "/"
        }
    ]
}
```

## Error Response

**Condition** : If a project does not exist.

**Code** : `200 OK`

**Content** :

```json
{
    []
}
```