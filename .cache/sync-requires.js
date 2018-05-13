// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/anton/code/web/RBL-site/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/anton/code/web/RBL-site/src/pages/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/home/anton/code/web/RBL-site/.cache/json/dev-404-page.json"),
  "index.json": require("/home/anton/code/web/RBL-site/.cache/json/index.json")
}