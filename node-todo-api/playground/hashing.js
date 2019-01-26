const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const pwd = '123abc';
bcrypt.genSalt(10, (err, salt) => {
    if (err) console.log('Error => ', err);
    bcrypt.hash(pwd, salt, (err, hash) => {
        if (err) console.log('Error => ', err);
        console.log('Hash => ', hash);
    })
})

const hashedPassword = '$2a$10$.CkxyzOUSQ4hpRmjrYwkH.dWCI6vUD3pnV47geblCEXzPuV0JlO1u';
const comparison = bcrypt.compare(pwd, hashedPassword, (err, isEqual) => {
    if(err) console.log('Error => ', err);
    console.log({isEqual});
})

// let message = 'a'
// let hash = SHA256(message).toString();

// console.log({hash})

/* const data = {
    id: 10
}
const token = jwt.sign(data, '123');
console.log('Token', token);

const decoded = jwt.verify(token, '123');
console.log('Decoded', decoded) */

/* token data breakup is done on dots

token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTU0MzUwMTY3NH0.Zh4LVuBYaYeQk3CDZ4RttB4m-2xQtUlHg3i5u3HOP0g'
header = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
payload = eyJpZCI6MTAsImlhdCI6MTU0MzUwMTY3NH0
verification signature = Zh4LVuBYaYeQk3CDZ4RttB4m-2xQtUlHg3i5u3HOP0g

*/
