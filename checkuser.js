const fetch = require('node-fetch');
const { UsersList } = require('./UsersList.js')



var passedList = [];
var failedList = [];

async function doSomething() {


    for (var i = 0, length = UsersList.length; i < length; i++) {
        try {
            const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${UsersList[i]}`);
    
            if (res.statusText == 'No Content') {
                failedList.push(UsersList[i])
            }
            else if (res.statusText == 'OK') {
                passedList.push(UsersList[i])
            }
            else {
                console.log(`Exception occurred with ${UsersList[i]}`)
            }

            // const body = await res.json();
            // console.log(body)
        }
        catch (err) {
            console.log(err)
        }
    }

 
    console.log('Passed accounts: ')
    // console.table(passedList)

    console.log('Failed accounts: ')
    // console.table(failedList)

    
}


doSomething()

exports.passedList = passedList
exports.failedList = failedList
