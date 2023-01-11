# PiyoMiru


## /api/users/me
パラメタを見てないっぽくてリレーションの値が取れないので無理やりデータを取得する

Piyomiru/api/node_modules/@strapi/plugin-users-permissions/server/controllers/user.js
```javascript
ctx.body = user;
// ctx.body = await sanitizeOutput(user, ctx);
```
