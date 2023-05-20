'use strict';

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};
  
const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};
  
const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};
  
const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
  
const accounts = [account1, account2, account3, account4];

const start = document.querySelector(".start");
const balanceDate = document.querySelector(".balance-date");
const bankBalance = document.querySelector(".bank-balance");

const valueIn = document.querySelector(".summary-value-in");
const valueOut = document.querySelector(".summary-value-out");
const interestValue = document.querySelector(".summary-value-interest");

const muhim = document.querySelector(".muhim")
const movementsMuhim = document.querySelector(".movements");

const inputUser = document.querySelector(".input-user");
const inputUserPin = document.querySelector(".input-pin")
const inputTransfer = document.querySelector(".transfer-amount");
const inputRequest = document.querySelector(".request-amount");
const inputCloseUser = document.querySelector(".confirm-user");
const inputClosePin = document.querySelector(".confirm-pin")

const loginBtn = document.querySelector(".btn-login");
const transferBtn = document.querySelector(".btn-transfer");
const requestBtn = document.querySelector(".btn-request");
const closeBtn = document.querySelector(".btn-close");
const sortBtn = document.querySelector(".btn-sort");

const displayMovements = function(movements){
    movementsMuhim.innerHTML = "";
    movements.forEach(function(mov, i) {
        const type = mov > 0 ? "deposit": "withdrawal";
        const html = `
            <div class="movements-row">
                <div class="movement-type movement-type-${type}>${i + 1}</div>
                <div class="movement-amount">${mov}</div>
            </div>
        `;
        movementsMuhim.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplayBalance = function(acc){
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
    balanceDate.textContent = `${acc.balance}`;
}

const calcDisplaySummary = function(acc){
    const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
    valueIn.textContent = `${incomes}€`;

    const out= acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
    valueOut.textContent = `${out}€`;

    const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate)/ 100).filter((int, i, arr) =>{
        return int>=1;
    })
    .reduce((acc, int)=> acc + int, 0);
    interestValue.textContent = `${interest}€`
}

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const createUsernames = function(accs){
     accs.forEach(function(account){
        account.owner.toLowerCase().split(' ').map(name => name[0]).join(' ');
    })
}
createUsernames(accounts)

const deposits = movements.filter((mov)=> mov > 0);
console.log(deposits)

const withdrawals = movements.filter((mov) => mov< 0);
console.log(withdrawals)