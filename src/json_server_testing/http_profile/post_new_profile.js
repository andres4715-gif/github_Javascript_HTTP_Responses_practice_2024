const { expect } = require("expect");

/* Create a new user on the db using post method sending body as a string: 
Then this user should be deleted to avoid fill the DB with unnecessary data*/

const request = async () => {
  const postNewClient = await fetch("http://localhost:3000/profile/", {
    method: "POST",
    body: `{
        "id": "aB1cDAAA",
        "name": "Andres Rios",
        "age": 23,
        "address": {
            "street": "Calle Falsa 123",
            "city": "Madrid",
            "neighborhood": "Centro"
        },
        "access": {
            "level": "administrator",
            "permissions": [
                "create",
                "read",
                "update",
                "delete"
            ]
        }
    }`,
  });
  return postNewClient;
};

const getNewPostAdded = async () => {
  let deleteProfile;
  const newPostAdded = await request();
  expect(newPostAdded.status).toEqual(201);
  const response = await newPostAdded.json();
  console.log(`--- ✅ Profile Added: ${JSON.stringify(response, null, 2)}`);

  const id = response.id;
  deleteProfile = await fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  });

  const deletedData = await deleteProfile.json();
  console.log(`--- ❌ Profile Deleted: ${JSON.stringify(deletedData, null, 2)}`);
};

const main = () => {
  return getNewPostAdded();
};

main();
