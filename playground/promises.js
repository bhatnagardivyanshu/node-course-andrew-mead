/* NOTES */


/* -------------------------------------------------------
    1.  To convert any functionality into a promise wrap up the function in a promise
 ------------------------------------------------------- */

const asyncAdd = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof x === 'number' && typeof y === 'number') {
                resolve(x + y);
            }
            reject('Both arguments should be numbers')
        }, 1000);
    });
};


/* -------------------------------------------------------
    2. Promise chaining
 ------------------------------------------------------- */

// asyncAdd(2, 8).then(
//     (res) => {
//         console.log('\nResult: ', res, '\n');
//         asyncAdd(22, '3');
//     }, (err) => {
//         console.log('\nError: ', err, '\n');
//     }).then(
//         (res) => console.log('\nResult for second promise: ', res, '\n'),
//         (err) => console.log('\nError: ', err, '\n')
//     );

// # The second then runs since it treats no-error as success and hence prints undefined for second log. To handle such situation we use .CATCH which handles errors for the complete chain.

// asyncAdd(2, 8)
//     .then(
//         (res) => { console.log('\nResult: ', res); return asyncAdd(22, '3'); })
//     .then(
//         (res) => console.log('\nResult for second promise: ', res)
//     ).catch(
//         (err) => console.log('\nPromise failed: ', err)
//     );


/* -------------------------------------------------------
    3. Axios is a promise based http request module
 ------------------------------------------------------- */


/* -------------------------------------------------------
    4. We can manually call the catch block by throwing an error
 ------------------------------------------------------- */


const printEvenNumber = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number)
        }, 100);
    })
};

printEvenNumber(3).then(
    (res) => {
        if (res % 2 != 0) throw new Error('The number is not even');
        console.log('The Even number given is ', res);
    }).catch(
        (err) => console.error('Error Found!', err.message)
    );