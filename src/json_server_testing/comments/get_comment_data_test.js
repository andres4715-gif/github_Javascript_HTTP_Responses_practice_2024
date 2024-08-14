/*
GET COMMENTS
get all the cities which start with "M" then get the ids and the sent it into an object. 
then in a new independent variable change the type for JSON.stringify(variable);
*/

const request = async () => {
  const getRequest = await fetch("http://localhost:3000/comments/", {
    method: "GET",
    headers: {
      Connection: "keep-alive",
    },
  });
  return getRequest;
};

const response = async () => {
    const obtainedData = await request();
    const finalJson = await obtainedData.json();
    const data = finalJson.filter(x => x.author.city.startsWith("M"));
    console.log("--- Cities which start with 'M':", data);
    for(const key in data) {
        const getNewData = data[key];
        const variable = {
            id: getNewData.id
        }
        const id = JSON.stringify(variable);
        console.log(id);
    }
}

const main = () => {
    return response();
}

main();
