/*
 GET PROFILE
 get all the profiles with age > 40 and .access.permissions.length > 2
 then get the ids and access and the sent it into an object.
 then in a new independent variable change the type for JSON.stringify(variable);
 */

const request = async () => {
  const getData = await fetch("http://localhost:3000/profile/", {
    method: "GET",
    headers: {
      Connection: "keep-alive",
    },
  });
  return getData;
};

const response = async () => {
  const jsonResponse = await request();
  const data = await jsonResponse.json();
  for (const key in data) {
    const fullJsonData = data[key];
    let variable;

    if (fullJsonData.age > 40 && fullJsonData.access.permissions.length > 2) {
      variable = {
        id: fullJsonData.id,
        name: fullJsonData.name,
        access: fullJsonData.access.permissions,
      };
      const jsonFormat = JSON.stringify(variable);
      console.log(jsonFormat);
    }
  }
};

const main = () => {
  return response();
};

main();
