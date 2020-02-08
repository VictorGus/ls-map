function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function normalize(name) {
  let n = name.toLowerCase();
  switch(n) {
  case "us":
    return "us_aea";
  case "ca":
    return "ca_lcc";
  default:
    return n + "_mill";
  }

}

function getCountryByCode(code) {
  switch(code) {
  case "DE":
    return "Germany";
  case "US":
    return "США";
  case "CA":
    return "Канада";
  case "ES":
    return "Испания";
  case "FR":
    return "Франция";
  }

}

export {getCookie, normalize, getCountryByCode};
