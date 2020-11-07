# Skills

Used to GET skills use over my career

**URL** : `/api/skills`

**Method** : `GET`

**Auth required** : NO

**Data constraints** : NO


## Success Response

**Code** : `200 OK`

**Projects Response example**

```json
{
    "skills": [
        {
            "id": 1,
            "name": "React",
            "color": "#4af9ff",
            "url": "/",
            "icon": "fab fa-react",
            "time": "> 1y"
        },
        {
            "id": 2,
            "name": "JavaScript",
            "color": "#dbce16",
            "url": "/",
            "icon": "fab fa-js",
            "time": "> 1y"
        }
    ]
}
```

## Error Response

**Condition** : If the skills database is empty

**Code** : `200 OK`

**Content** :

```json
{
    []
}
```