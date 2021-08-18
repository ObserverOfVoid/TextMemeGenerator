const LO = {
  get(url, onlo, type = null, async = true) {
    var req = new XMLHttpRequest();
    req.open("GET", url, async);
    if (type) req.responseType = type;
    req.onload = () => onlo(req.response);
    req.send(null);
    return req;
  },
  getJSON(url, onlo, async = true) {
    return this.get(url, onlo, "json", async);
  }
};