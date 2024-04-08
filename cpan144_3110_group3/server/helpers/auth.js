const { hasFormSubmit } = require("@testing-library/user-event/dist/utils");
const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    }); // hashes the data with 12 characters
  });
};

const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};

const test = () => {
  console.log("ba;;ls");
};

module.exports = {
  hashPassword,
  comparePassword,
};
