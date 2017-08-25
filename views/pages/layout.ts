export default function(html, store) {
  return `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>todo list</title>
    <link href="/styles.css" rel="stylesheet">
  </head>
  <body>
      <div id="app">${html}</div>
  </body>
</html>
<script src="/bundle.js"></script>
    `;
}
