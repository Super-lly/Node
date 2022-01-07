const http = require("http")
const path = require("path")
const readFile = require("./readStaticFile")

http.createServer(async (req, res) => {
  if (req.url != '/favicon.ico') {
    let urlStr = req.url
    let pathName = path.join(__dirname, './public', urlStr)
    let { data, mimeType } = await readFile(pathName)

    res.writeHead(200,{
      'content-type':mimeType
    })
    res.write(data)
    res.end()
  }

}).listen(8080, () => console.log("localhost:8080"))