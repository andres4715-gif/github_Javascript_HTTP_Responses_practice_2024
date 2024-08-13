const data = require("../data/familyData.json");

const newDataToAdd = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data;
};

const gettingData = async () => {
  try {
    const dataComingFromThePromise = await newDataToAdd();
    for (const key in dataComingFromThePromise) {
      const newData = dataComingFromThePromise[key];
      if (newData.lastName === "Rios" && newData.secondLastName === "Montoya") {
        const objectId = { id: newData.id };
        console.log(objectId);
      }
    }
  } catch (error) {
    throw new Error(`--- 🔥 ${error.message}`);
  }
};

const main = () => {
  return gettingData(); 
}

main();
