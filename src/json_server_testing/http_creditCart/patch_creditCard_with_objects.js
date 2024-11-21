const { expect } = require("expect");
/*
 PATCH Credit cart
 Get Name, lastName and id for any of the credit cart users witch withdrawals amount greater than 500 and change plan to PREMIUM ADVANCE +.
 */

const requestCreditCart = async () => {
  const request = await fetch("http://localhost:3000/creditCard/", {
    method: "GET",
    headers: {
      Connection: "keep-alive",
    },
  });
  return request;
};

const responseCreditCart = async () => {
  try {
    const response = await requestCreditCart();
    expect(response.status).toBe(200);
    expect(response.statusText).toEqual("OK");
    const jsonResponse = await response.json();

    for (const key in jsonResponse) {
      let pathRequest;
      const data = jsonResponse[key];
      const withdrawals = data.withdrawals.map(x => x.amount);
      const total = withdrawals.reduce((a, b) => a + b, 0);
      if (total > 500) {
        pathRequest = await fetch(`http://localhost:3000/creditCard/${data.id}`, {
            method: 'PATCH',
            headers: {
              Connection: "keep-alive",
            },
            body: `
            {
              "planType": "PREMIUM ADVANCE +"
            }
          `
          }
        );
        const finalData = await pathRequest.json();
        console.log(finalData.id);
      }
    }
  } catch (error) {
    console.error(`🔥🔥🔥 ${error.message} 🔥🔥🔥`);
  }
};

const main = () => {
  return responseCreditCart();
};

main();

