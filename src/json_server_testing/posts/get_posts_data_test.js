/*
After put the server up, get data from http://localhost:3000/posts/ 
- Print data for: 
        "firstName": "María",
        "lastName": "Rodríguez",
*/

const getPostsData = async () => {
  const data = await fetch("http://localhost:3000/posts/", {
    method: "GET",
    headers: {
      Connection: "keep-alive",
    },
  });
  return data;
};

const postDataResponse = async () => {
  const gettingResponse = await getPostsData();
  const jsonResponse = await gettingResponse.json();
  console.log(jsonResponse);
};

const main = () => {
  return postDataResponse();
};

main();
