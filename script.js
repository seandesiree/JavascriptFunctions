let accountBalance = 0;

function deposit(amount) {
  accountBalance += amount;
  console.log(`Deposit of $${amount} successful.`);
}


function withdraw(amount) {
  if (amount <= accountBalance) {
    accountBalance -= amount;
    console.log(`Withdrawal of $${amount} successful.`);
  } else {
    console.log("Insufficient balance. Withdrawal failed.");
  }
}


function checkBalance() {
  console.log(`Current balance: $${accountBalance}`);
}

deposit(1000);
checkBalance();
withdraw(500);
checkBalance();
withdraw(800);