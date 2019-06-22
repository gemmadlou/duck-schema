module.exports = {
    "id": "http://theworldisours/post.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "Post schema",
    "type": "object",
    "title": "post",
    "properties": {
        "id": {
            "type": "number",
            "maxLength": 11,
            "autoincrement": true
        },
        "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
        },
        "subtitle": {
            "type": "string",
            "minLength": 1,
            "maxLength": 144
        },
        "article": {
            "type": "string",
            "minLength": 1,
            "maxLength": 999999
        }
        
    },
    "required": [
        "id",
        "title"
    ]
}