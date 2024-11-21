/*
 TOMAR LOS DATOS DEL ARCHIVO: 19-Practicing-http-responses_2024/data/familyData.json
 con un setTimeout de 2 segundos
 los datos de la segunda persona enviarlos con una HTTP put request a está pagina:
 https://restful-booker.herokuapp.com/booking/{id}
 */

const data = require("../data/familyData.json");
const initialUser = require("../data/query.js");

let firstName;
let lastName;

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data;
};

// returns TOKEN to be used
const getNewToken = async () => {
  const response = await fetch("https://restful-booker.herokuapp.com/auth", {
    method: "POST",
    body: `{"username" : "admin", "password" : "password123"}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  const obtainedToken = data.token;
  return obtainedToken;
};

// Returns the ID to be used
const user = async () => {
  const response = await fetch("https://restful-booker.herokuapp.com/booking", {
    method: "POST",
    body: initialUser,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  const id = data.bookingid;
  console.log(`--- 🌠 id to use: ${id}`);
  return id;
};

// Obtained data from 19-Practicing-http-responses_2024/data/familyData.json file
const obtainedData = async () => {
  try {
    const data = await getData();
    if (data.length > 0) {
      const secondPerson = data[1];
      firstName = secondPerson.name;
      lastName = secondPerson.lastName;
      const fullName = `${firstName} ${lastName} ${secondPerson.secondLastName}`;
      console.log(`--- ✅ Name to send: ${fullName}`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// Getting firstName and lastName from obtainedData()
const finalExecution = async () => {
  const gettingToken = await getNewToken();
  await obtainedData();
  id = await user();

  const response = await fetch(
    `https://restful-booker.herokuapp.com/booking/${id}`,
    {
      method: "PUT",
      body: `{
        "firstname" : "${firstName}",
        "lastname" : "${lastName}",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
      }`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Cookie: `token=${gettingToken}`,
      },
    }
  );
  const newUserAdded = await response.json();
  const newName = newUserAdded.firstname;
  if (newName === "Liliana") {
    console.log(`---🎖️🎖️🎖️🎖️🎖️ YOU GOT IT 🎖️🎖️🎖️🎖️🎖️`);
  }
};

const main = () => {
  return finalExecution();
};

main();
