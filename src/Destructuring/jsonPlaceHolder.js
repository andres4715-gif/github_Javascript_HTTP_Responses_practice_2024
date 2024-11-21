const albums = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/posts",
    {
      method: "GET",
    }
  );
  return response.json();
};

const myData = async () => {
  try {
    const data = await albums();
    let array = [];
    for (const key in data) {
      const myData = data[key];
      array.push(myData.title);
    }
    console.log(`--- ✅ Number of titles: ${array.length}`);
    console.log("--- ✅ Obtained titles: ", array);

    let variable;
    const checking = array.some(
      (title) => title === "dolorem eum magni eos aperiam quia"
    );
    if (checking) {
      variable = {
        id: 1,
        title: array[0],
        body: array[0],
        userId: 1,
      };
    }

    const postNewUser = fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      body: JSON.stringify(variable),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    postNewUser
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.id === 101) {
          console.log("--- 👌 YOU GOT IT ✅");
        }
      });
  } catch (error) {
    throw new Error(`--- 🔥ERROR: ${error.message}`);
  }
};

const main = () => {
  return myData();
};

main();
