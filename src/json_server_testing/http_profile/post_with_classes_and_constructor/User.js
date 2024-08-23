class User {
  constructor(id, name, age, address, access) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.access = access;
  }

  showData() {
    console.log(
      `id: ${this.id}, Name: ${this.name}, Age: ${this.age}, Address: ${JSON.stringify(this.address)}, Access: ${JSON.stringify(this.access)}`
    );
  }
}

module.exports = User;
