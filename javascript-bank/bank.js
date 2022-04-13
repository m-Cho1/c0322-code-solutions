/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    this.nextAccountNumber++;
    newAccount.deposit(balance);
    // console.log('newAccount: ', newAccount);
    this.accounts.push(newAccount);
    // console.log(this.accounts);
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  // go through accounts in the Bank
  // access transactions of account
  // add all the transactions to grandTotal
  // return grandTotal
  var grandTotal = 0;
  for (var j = 0; j < this.accounts.length; j++) {
    // console.log(this.accounts[j].getBalance());
    grandTotal += this.accounts[j].getBalance();
  }
  return grandTotal;
};
