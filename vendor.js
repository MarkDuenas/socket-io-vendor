const io = require("socket.io-client");
const faker = require("faker");

const host = "http://localhost:3000";

const socket = io.connect(host);

setInterval(() => {
  console.log("*** ORDER EVENT *** ");
  console.log(new Date());
  const order = {
    storeID: "123",
    storeName: "Random Store",
    orderID: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  console.log(order);
  console.log("================================");
  socket.emit("pickup", order);
}, 5000);

socket.on("delivered", (payload) => {
  console.log(`Thank you for delivering`);
});
