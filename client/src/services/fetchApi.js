async function fetchApi(url) {
  let data = await fetch(url);
  if (!data.ok) {
    throw new Error("Fetching error");
  }
  data = await data.json();
  return data;
}

export default fetchApi;
