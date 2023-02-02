const http = require("http");
const url = require("url");
const queryString = require("querystring");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  const appPath = url.parse(req.url);
  if (appPath.pathname === "/users") {
    const query = queryString.parse(appPath.query);
    if(query["id"]&&query["login"]){
        res.end("<h1>interface users</h1>")
    }
    else{
        res.end("<h1>you are not authorized</h1>");
    }
  } else if (appPath.pathname === "/contacts") {
    res.end("<h1>interface Contacts</h1>");
  } else {
    res.end("<h1>NOT FOUND</h1>");
  }
});
server.listen(5000, () => {
  console.log("app is running on port 5000");
});
