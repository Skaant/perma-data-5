### Functions apps rewrite

See [app glossary definition](#firebase-functions-app).

In `./src/firebase.json`, both PERMA-DATA's apps (content and api) are linked to url endpoints.

```json
"hosting": {
  "public": "public",
  "rewrites": [
    {
      "source": "/api**",
      "function": "api"
    },
    {
      "source": "**",
      "function": "content"
    }
  ]
}
```

Note priority is as follow :
1. `/public*`
2. `/api**`
3. `**`, also have to handle 404 pages

// APPS BEHAVIOUR NOT DEVELOPED/DOCUMENTED YET