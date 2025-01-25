// server.js
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const helloServer = require("./api/hello");

app.prepare().then(() => {
  const server = express();

  // 自訂的 API 路由 (例如 /api 或 /api/hello)

  server.use("/api/hello", helloServer);

  // Express 處理所有其他請求，並交給 Next.js 處理渲染
  server.all("*", (req, res) => {
    return handle(req, res); // Next.js 處理頁面渲染
  });

  const port = 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
