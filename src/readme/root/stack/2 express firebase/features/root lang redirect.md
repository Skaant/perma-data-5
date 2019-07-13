### Root lang redirection

In `./src/firebase.json`, root url (`permadata.net/`) is automatically redirected to `/fr`.

*(*`/fr` *depends on the **content app**.)*

```json
"hosting": {
  "redirects": [
    {
      "source": "/",
      "destination": "/fr",
      "type" : 302
    }
  ]
}
```