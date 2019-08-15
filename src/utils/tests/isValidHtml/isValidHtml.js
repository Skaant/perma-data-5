module.exports =
  html =>
    html
      .includes('<!DOCTYPE html>')
    &&
    html
      .includes('<html><head>')
    &&
    html
      .includes('</head><body>')
    &&
    html
      .includes('</body></html>')
