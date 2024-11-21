const myFullData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET", // method: "GET",  is not mandatory because GET METHOD is a default HTTP METHOD.
  });
  return await response.json();
};

const myData = async () => {
  try {
    const data = await myFullData();
    for (const key in data) {
      const myData = data[key];
      if (myData.name === "Glenna Reichert" && myData.username === "Delphine") {
        const variable = {
          title: myData.name,
          body: myData.username,
          userId: myData.id,
        };
        console.log(`--- Data to send:', ${JSON.stringify(variable)}`);
        const postNewUser = fetch("https://jsonplaceholder.typicode.com/posts", { // postNewUser returns a new promise.
            method: "POST",
            body: JSON.stringify(variable),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        postNewUser
          .then((response) => response.json())
          .then((json) => {
            if (json.userId === 9) {
              console.log("--- 👌 YOU GOT IT ✅");
            }
          });
      }
    }
  } catch (error) {
    throw new Error(`--- 🔥 Getting data: ${error.message}`);
  }
};

const main = () => {
  return myData();
};

main();
