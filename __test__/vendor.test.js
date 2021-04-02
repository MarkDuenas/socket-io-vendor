"use strict";

const delivered = require("../vendor.js");

describe(" Driver TEST", () => {
  const order = {
    storeName: "Random Store",
    orderID: "123456789",
    customerName: "Jake",
    address: "123 Baker Street",
  };

  let spy;

  beforeEach(() => {
    spy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("should console log on pickup", () => {
    delivered(order);
    expect(spy).toHaveBeenCalled();
  });
});
