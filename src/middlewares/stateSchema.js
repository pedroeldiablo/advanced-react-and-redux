export default {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
      "comments",
      "auth"
    ],
    "properties": {
      "comments": {
        "$id": "#/properties/comment",
        "type": "array",
        "title": "The Comment Schema",
        "items": {
          "$id": "#/properties/comment/items",
          "type": "string",
          "title": "The Items Schema",
          "default": "",
          "examples": [
            "true"
          ],
          "pattern": "^(.*)$"
        }
      },
      "auth": {
        "$id": "#/properties/auth",
        "type": "boolean",
        "title": "The Auth Schema",
        "default": false,
        "examples": [
          true
        ]
      }
    }
  }