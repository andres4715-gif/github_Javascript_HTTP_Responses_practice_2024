const User = require("./User.js");
const Address = require("./Address.js");
const Access = require("./Access.js");

const address = new Address("Street cancel 1213", "Granada", "Madrid");
const access = new Access("Administrator", [
  "create",
  "read",
  "edit",
  "delete",
  "partial_update",
  "block_users",
]);
const user = new User("123452024", "Carmen Joe", 54, address, access);

console.log(
  `--- ✅ New User POST HTTP method: \n ${JSON.stringify(user, null, 2)}`);

const newUser = JSON.stringify(user);
const request = async () => {
  try {
    const postRequest = await fetch("http://localhost:3000/profile/", {
      method: "POST",
      body: newUser,
    });
    return postRequest;
  } catch (error) {
    console.log(`--- ❌ ERROR: ${error.message}`);
  }
};

const deleteUser = async () => {
    const deleteId = user.id; 
    const httpDeleteMethod = await fetch(`http://localhost:3000/profile/${deleteId}`, {
        method: "DELETE"
    })
    return httpDeleteMethod;
}

const deleteResponse = async () => {
    const jsonResponse = await deleteUser();
    const deletedUser = await jsonResponse.json();
    console.log(`--- 🚫 Deleted user: \n ${JSON.stringify(deletedUser, null, 2)}`);
}

const main = async () => {
  await request();
  await deleteResponse();
};

main();
