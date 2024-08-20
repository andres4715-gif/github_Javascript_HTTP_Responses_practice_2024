const { expect } = require("expect");
/*
PATCH Credit cart
Get Name, lastName and id for any of the credit cart users witch withdrawals amount greater than 500 and change plan to plus if this specific plan in not set before
*/

const requestCreditCart = async () => {
  const request = await fetch("http://localhost:3000/creditCart/", {
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
    
    for(const key in jsonResponse) {
      const data = jsonResponse[key];
      console.log(data);
      // TODO Make the condition to filter data.
    }
  } catch (error) {
    console.error(`🔥🔥🔥 ${error.message} 🔥🔥🔥`);
  }
};

responseCreditCart();
