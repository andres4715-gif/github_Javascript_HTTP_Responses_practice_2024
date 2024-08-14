/*
POST
After put the server up, get data from http://localhost:3000/posts/ 
- Print id in a object for this user: 
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
  let variable;

  for (const keys in jsonResponse) {
    const jsonData = jsonResponse[keys];
    if (jsonData.author.firstName === "María" && jsonData.author.lastName === "Rodríguez") {
      variable = {
        id: jsonData.id,
      };
      const finalIdToBeRemoved = JSON.stringify(variable);
      console.log(`ID to be removed:`, finalIdToBeRemoved);
    }
  }
};

const main = () => {
  return postDataResponse();
};

main();
