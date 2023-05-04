"use strict";

const readline = require('readline');
const process = require('process');

let walletAmount = 0;

let items = [
    {
        name: 'Apple',
        price: 1.99,
    },
    {
        name: 'Banana',
        price: 2.5,
    },
    {
        name: 'Orange',
        price: 2.2,
    },
    {
        name: 'Pear',
        price: 2.7,
    },
    {
        name: 'Peach',
        price: 3,
    },
    {
        name: 'Watermelon',
        price: 15,
    },
    {
        name: 'Mango',
        price: 4.2,
    },
    {
        name: 'Kiwi',
        price: 3.5,
    },
    {
        name: 'Grape',
        price: 4.5,
    },
    {
        name: 'Strawberry',
        price: 1,
    },
    {
        name: 'Cherry',
        price: 0.4,
    },
    {
        name: 'Pineapple',
        price: 8,
    },
];

let cart = [];

function buy(){
    let amountToPay = 0;
    cart.forEach(item => amountToPay += item.price);

    if(amountToPay > walletAmount){
        console.log("Insufficient funds");
    }
    else{
        console.log("You have purchased:");
        displayItems(cart);
        walletAmount -= amountToPay;
        cart = [];
    }
}

function addToCart(itemsToAdd){
    itemsToAdd.forEach(value => {
        let result = items.find(item => item.name.toLowerCase() === value.toLowerCase())
        if(result !== undefined){
            cart.push(result)
            console.log("Added item: " + value)
        }
        else{
            console.log("Unable to find item: " + value)
        }
    })
}

function removeFromCart(itemsToRemove){
    itemsToRemove.forEach(value => {
        let result = cart.find(item => {
            return item.name.toLowerCase() === value.toLowerCase();
        })
        if(result !== undefined){
            cart.splice(cart.indexOf(result), 1);
            console.log(`Removed item: ${value}`);
        }
        else{
            console.log(`Unable to find item in cart: ${value}`);
        }
    })
}

function addFunds(amountToAdd){
    let amountToAddAsNumber = parseFloat(amountToAdd);
    if(isNaN(amountToAddAsNumber)){
        console.log("Argument is not a number");
        return;
    }
    walletAmount += amountToAddAsNumber;
    displayWallet();
}

function displayWallet(){
    console.log(`Your current amount of funds in wallet is: ${walletAmount}`);
}

function displayItems(args){
    if(args.length === 0){
        console.log("There are no items");
        return;
    }
    args.forEach(value => console.log(`Item name: ${value.name}, price: ${value.price}`));
}

function displayHelp(){
    console.log("Enter command that you would like to perform and additional arguments if needed all separated with spaces");
    let info = "Available commands are:\n\tAdd item(s) to cart - syntax (add item1 item2 ..)\n\t" +
    "Remove item(s) from cart - syntax (remove item1 item2 ..)\n\tBuy added item(s) - syntax (buy)\n\tView all items in store - syntax (viewall)\n\t" +
    "View cart - syntax (viewcart)\n\tDisplay wallet - syntax (wallet)\n\tAdd funds - syntax (addfunds amount)\n\tHelp - syntax (help)\n\t";
    console.log(info);
}

//flag = 1 means that command must have no arguments,
//flag = 2 means that command must have at least 1 argument,
//flag = 3 means that command must have exactly 1 argument
function checkArguments(args, flag){
    if(flag === 1){
        if(args.length > 0){
            console.log("This command does not accept arguments");
            return 1;
        }
    }
    else if(flag === 2){
        if(args.length === 0){
            console.log("This command must have at least 1 argument");
            return 2;
        }
    }
    else if(flag === 3){
        if(args.length !== 1){
            console.log("This command must have exactly 1 argument");
            return 3;
        }
    }
    return 0;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Store");
console.log("Type help for additional information")
rl.prompt();

rl.on('line', (line) => {
    const split = line.split(' ');
    const command = split[0];
    const args = split.slice(1);
    console.log(`Command: ${command}`);
    console.log(`Args: ${args}\n`);

    switch (command) {
        case 'buy':
            checkArguments(args, 1) || buy();
            break;
        case 'add':
            checkArguments(args, 2) || addToCart(args);
            break;
        case 'remove':
            checkArguments(args, 2) || removeFromCart(args);
            break;
        case 'addfunds':
            checkArguments(args, 3) || addFunds(args[0]);
            break;
        case 'wallet':
            checkArguments(args, 1) || displayWallet();
            break;
        case 'viewall':
            checkArguments(args, 1) || displayItems(items);
            break;
        case 'viewcart':
            checkArguments(args, 1) || displayItems(cart);
            break;
        case 'help':
            checkArguments(args, 1) || displayHelp();
            break;
        default:
            console.log(`Unknown command: ${command}`);
    }

    rl.prompt();
}).on('close', () => {
    console.log('Exit');
    process.exit(0);
});