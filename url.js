const url = new URL(`https://example.com:8080/path/name?search=query&sort=asc#section1`);

console.log(url.host);

console.log(url.pathname);

console.log(url.hash);