var names = "binoy";
var password = "1234";
userlogin = (name, password) => {
  return new Promise((resolve, reject) => {
    if ((name === "binoy") & (password === "1234")) {
      return setTimeout(() => {
        resolve({ message: "Logged in succesfully" });
      }, 3000);
    } else {
      return reject({ message: "login failed" });
    }
  });
};

usertimer = (timer) => {
  return new Promise((resolve, reject) => {
    if (timer === 100) {
      return setTimeout(() => {
        resolve("user was alive for 100 ms ");
      }, 5000);
    } else {
      return reject("myr scene aayenna thonnane");
    }
  });
};

let checker = async () => {
  const msg = await userlogin(names, password);
  console.log(msg);
  const usertime = await usertimer(100);
  console.log(usertime);
};

checker();
