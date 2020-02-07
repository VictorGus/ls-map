function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}


function normalize(name) {
  let n = name.toLowerCase();
  switch(n) {
  case "us":
    return "us_aea";
  case "ca":
    return "ca_lcc";
  default:
    return n + "_mill"
  }

}

export {getCookie, normalize};
