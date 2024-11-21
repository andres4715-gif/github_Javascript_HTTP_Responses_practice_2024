/*
 CHECK THIS PAGE TO DO SOME EXERCISES: https://restful-booker.herokuapp.com/apidoc/index.html
 */

const postToken = async () => {
  const response = await fetch("https://restful-booker.herokuapp.com/auth", {
    method: "POST",
    body: `{"username" : "admin", "password" : "password123"}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  const token = data.token;
  console.log("--- New Token to work: ", token);
  return token;
};

const postNewUser = async () => {
  const response = await fetch("https://restful-booker.herokuapp.com/booking", {
    method: "POST",
    body: `{
            "firstname" : "Andres",
            "lastname" : "Rios",
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
    },
  });
  const data = await response.json();
  const bookingid = data.bookingid;
  console.log("--- Obtained from POST: ", bookingid);
  return bookingid;
};

const verifyNewUser = async () => {
  const id_2 = await postNewUser();
  const response = await fetch(
    `https://restful-booker.herokuapp.com/booking/${id_2}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log("--- New User: ", data);
  console.log("--- Id to share: ", id_2);
  return id_2;
};

const putUser = async () => {
  const token = await postToken();
  const id = await verifyNewUser();
  const response = await fetch(
    `https://restful-booker.herokuapp.com/booking/${id}`,
    {
      method: "PUT",
      body: `{
            "firstname" : "Daniel",
            "lastname" : "Montoya",
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
        Cookie: `token=${token}`,
      },
    }
  );
  const data = await response.json();
  const newName = data;
  console.log("--- Updated user: ", newName);
  const updatedName = newName.firstname;
  if (updatedName === "Daniel") {
    console.log("---👌👌👌 YOU GOT IT");
  }
};

const main = () => {
  return putUser();
};

main();
