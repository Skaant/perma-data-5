module.exports =
  html =>
    html
      .includes('<!DOCTYPE html>')
    &&
    html
      .includes('<html><head>')
    &&
    html
      .includes('</head><body class="text-center">')
    &&
    html
      .includes('</body></html>')
