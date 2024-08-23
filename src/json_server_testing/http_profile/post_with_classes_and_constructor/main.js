const User = require("./User.js");
const Address = require("./Address.js");
const Access = require("./Access.js");

const address = new Address("Street cancel 1213", "Granada", "Madrid");
const access = new Access("Administrator", ["create", "read", "edit", "delete", "partial_update", "block_users"]);
const user = new User("123452024", "Carmen Joe", 54, address, access);

user.showData();

