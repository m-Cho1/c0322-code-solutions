/* exported Account */

// blueprint(generic version) of Account
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

// defining a method below:
Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var deposit = new Transaction('deposit', amount);
    // console.log('deposit instanceOf Transaction: ', deposit instanceof Transaction);
    // console.log('this.transactions: ', this.transactions);
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }

};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var withdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var deposits = [];
  var withdrawals = [];
  for (var i = 0; i < this.transactions.length; i++) {
    // console.log('this.transactions[i]: ', this.transactions[i]);
    if (this.transactions[i].type === 'deposit') {
      deposits.push(this.transactions[i]);
    } else if (this.transactions[i].type === 'withdrawal') {
      withdrawals.push(this.transactions[i]);
    }
  }
  var depositTotal = 0;
  for (var j = 0; j < deposits.length; j++) {
    depositTotal += deposits[j].amount;
  }
  var withdrawalTotal = 0;
  for (var k = 0; k < withdrawals.length; k++) {
    withdrawalTotal += withdrawals[k].amount;
  }
  var balance = depositTotal - withdrawalTotal;
  return balance;
  // console.log('value of deposits: ', deposits);
  // console.log('value of withdrawals: ', withdrawals);
};
