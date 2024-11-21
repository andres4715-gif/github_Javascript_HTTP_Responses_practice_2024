/*
 PATCH Credit cart
 Get id and final data for any of the credit cart users witch withdrawals.amount less than 400 and change plan to BASIC ADVANCE.
 */

const creditCartRequest = async () => {
  const gettingData = await fetch("http://localhost:3000/creditCard", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      connection: "keep-alive",
    },
  });
  return gettingData;
};

const creditCartResponse = async () => {
  const dataResponse = await creditCartRequest();
  const jsonResponse = await dataResponse.json();

  for (const key in jsonResponse) {
    const responseObject = jsonResponse[key];
    const withdrawals = responseObject.withdrawals.map((x) => x.amount);
    const totalAmount = withdrawals.reduce((a, b) => a + b, 0);
    if (totalAmount < 400) {
      const id = responseObject.id;
      let patch;
      patch = await fetch(`http://localhost:3000/creditCard/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          connection: "keep-alive",
        },
        body:
          `{
           "planType": "BASIC ADVANCE"
        }`,
      });
    }
  }
};

const main = async () => {
  return creditCartResponse();
};

main();
