<!--
  Title: Duck Schema
  Description: Generating database schemas from JSON Schema extended config files
  Author: Gemma Black
  -->

# Duck schema

![](./docs/assets/duck-schema.png)

[![Maintainability](https://api.codeclimate.com/v1/badges/e1ab9814c0ce1fbd3c17/maintainability)](https://codeclimate.com/github/gemmadlou/duck-schema/maintainability)
[![Build Status](https://travis-ci.org/gemmadlou/duck-schema.svg?branch=master)](https://travis-ci.org/gemmadlou/duck-schema)

> In progress.

Generating database schemas from JSON Schema extended config files.

## Background

Config driven database schemas are powerful. From a config, you can generate table schemas in different DSLs, eg config ->mysql or config -> postgres. You can generate documentation and diagrams. You can validate data using the schema before it hits your database. You can even generate ORM code.

It's language and implementation agnostic. It's human and machine readable.

Futhermore, it's easy to understand the state of our database. If we really want to capture changes, we can create diffs of our project every time we commit our code or deploy our application.

## How it works (mysql example)

So here's how it works. You create json schema config, and you get out sql.

```json
{
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
```

```sql
CREATE TABLE IF NOT EXISTS post
(
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(80) NOT NULL,
    subtitle VARCHAR(144),
    article TEXT
);
```
</table>

## Getting started

- Still in progress. Please wait whilst the project is setup to auto-generate DSLs. Feel free to contribute too.

## Contributing

The original use ase was config -> mysql. For additional use cases please contribute or raise an issue.

You need:

- node v8+
- npm v5+

Testing:

```sh
npm test
```

## Credits

- [JSON Schema](https://json-schema.org/)
- [SQL DDL to JSON Schema](https://github.com/duartealexf/sql-ddl-to-json-schema)

## Licence

Find the licence at [LICENCE](https://github.com/gemmadlou/duck-schema/blob/master/LICENSE)