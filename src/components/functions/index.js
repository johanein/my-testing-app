import axios from "axios";

const functions = {
  add: (sum1, sum2) => sum1 + sum2,
  isnull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { name: "albert", lastname: "yohannan" };
    return user;
  },
  fetchUsers: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((json) => json.data)
      .catch((error) => error),
  reverseString: (str) => str.split("").reverse().join(""),
};

export default functions;
