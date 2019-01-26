module.exports.add = (a, b) => a + b;

module.exports.square = x => x * x;

module.exports.setName = (user, fullName) => {
    const [firstName, lastName] = fullName.split(" ");
    return {
        ...user,
        firstName,
        lastName
    };
};

module.exports.addAsync = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};
