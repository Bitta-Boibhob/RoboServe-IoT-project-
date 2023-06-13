// --------------------------------------------------
var setCookie = (cname, cvalue, exdays) => {
  var domainName = window.location.hostname;
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = `${cname}=${cvalue};${expires};path=/; domain=${domainName}`;
};

// --------------------------------------------------
var getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
// --------------------------------------------------
var updateCookie = (name, value) => {
  document.cookie = `${name}=${value}`;
};
// --------------------------------------------------
var deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970`;
};
