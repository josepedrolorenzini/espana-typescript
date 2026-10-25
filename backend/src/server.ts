import * as http from "node:http";

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
   if (req.method === 'OPTIONS') {
    res.writeHead(204)
    res.end()
    return
  }

  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
  } else if (req.method === "GET" && req.url === "/health") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        status: "ok",
        uptime: process.uptime(),
      }) + "\n",
    );
  } else if( req.method === "POST" && req.url === "/api/submit") {
        
        let body = '';

        // Collect incoming data chunks
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Triggered when all data chunks are received
        req.on('end', () => {
            const parsedData = JSON.parse(body);
            console.log(parsedData);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Success', data: parsedData }));
        });
  }
  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found\n");
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
