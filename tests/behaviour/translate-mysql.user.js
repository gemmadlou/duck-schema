module.exports = {
    "id": "http://theworldisours/user.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "User schema",
    "type": "object",
    "title": "user",
    "properties": {
        "id": {
            "type": "int",
            "maxLength": 11,
            "autoincrement": true,
            "primary": true
        },
        "first_name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 60
        },
        "last_name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 60
        },
        "email": {
            "type": "string",
            "format": "email",
            "minLength": 5,
            "maxLength": 255
        }
        
    },
    "required": [
        "id",
        "email"
    ]
}