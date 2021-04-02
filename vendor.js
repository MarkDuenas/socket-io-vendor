const io = require("socket.io-client");
const faker = require("faker");

const host = "http://localhost:3000";

const socket = io.connect(host);

setInterval(() => {
  console.log("*** ORDER EVENT *** ");
  console.log(new Date());
  const order = {
    storeID: "123",
    storeName: "1-206-flowers",
    orderID: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  console.log(order);
  console.log("================================");
  socket.emit("pickup", order);
}, 5000);

socket.on("delivered", delivered);

function delivered(payload) {
  console.log(`Thank you for delivering`);
}

module.exports = delivered;
