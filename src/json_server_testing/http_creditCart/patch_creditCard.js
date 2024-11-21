/*
 PATCH Credit cart
 Get id for any of the credit cart users witch withdrawals.amount less than 400 and change plan to BASIC.
 */

const request = async () => {
  try {
    const getCreditCart = await fetch("http://localhost:3000/creditCard", {
      method: "GET",
    });
    return getCreditCart;
  } catch (error) {
    console.log(`--- ❌❌❌ ${error.message}`);
  }
};

const response = async () => {
  try {
    const jsonResponse = await request();
    const jsonData = await jsonResponse.json();
    let patchRequest;
    for (const key in jsonData) {
      const data = jsonData[key];

      const withdrawals = data.withdrawals;
      const amount = withdrawals.map((x) => x.amount);
      const totalWithdrawals = amount.reduce((a, b) => a + b, 0);
      if (totalWithdrawals < 400) {
        const filterData = data;
        console.log(`Id to be changed: ${filterData.id}`);

        patchRequest = await fetch(
          `http://localhost:3000/creditCard/${filterData.id}`,
          {
            method: "PATCH",
            headers: {
              Connection: "keep-alive",
            },
            body: `{"planType": "BASIC"}`,
          }
        );

        const updatedData = await patchRequest.json();
        console.log("✅✅✅ --- Final updated data: ", updatedData);
      }
    }
  } catch (error) {
    console.log(`--- ❌❌❌ ${error.message}`);
  }
};

const main = () => {
  return response();
};

main();
