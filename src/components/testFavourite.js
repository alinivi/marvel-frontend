function testFavourite(cookie, data) {
  if (cookie) {
    let parsedCookie = JSON.parse(cookie);
    if (parsedCookie.indexOf(data) === -1) return false;
    else return true;
  } else return false;
}

export default testFavourite;
