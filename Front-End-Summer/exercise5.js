1;

const helloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
};

const message = async () => {
  const msg = await helloWorld();
  console.log(msg);
};

message();

2;

const ambilDataUser = () => {
  fetch("https://reqres.in/api/users?page=1", {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  })
    .then((response) => response.json())
    .then((users) => {
      users.data.forEach((user) => {
        console.log(user.first_name + " " + user.last_name);
      });
    });
};

ambilDataUser();

3;

const ambilDataUser1 = async () => {
  const response = await fetch("https://reqres.in/api/users?page=1");
  const users = await response.json();

  users.data.forEach((user) => {
    console.log(user.first_name + " " + user.last_name);
  });
};

ambilDataUser1().catch((error) => {
  console.error("Terjadi error:", error.message);
});
