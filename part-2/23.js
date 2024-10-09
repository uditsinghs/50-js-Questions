function fetchData(url, clbfn) {
  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => clbfn(data))
      .catch((error) => console.log(error));
  } catch (error) {
    console.error(error);
  }
}
function handlePrint(data) {
  console.log("Fetched data :", data);
}
// handlePrint()

function main() {
  let api1 = " https://jsonplaceholder.typicode.com/posts/1";
  let api2 = " https://jsonplaceholder.typicode.com/posts/2";
  let apis = [api1, api2];
  for (let i = 0; i <apis.length; i++) {
    fetchData(apis[i], handlePrint);
  }

}
main();
