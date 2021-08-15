function testFavourite(cookie, data) {
  if (cookie) {
    let parsedCookie = JSON.parse(cookie);
    if (!parsedCookie.find((elem) => elem._id === data._id)) return false;
    else return true;
  } else return false;
}

export default testFavourite;
