function createAccount(pin, amount) {
  let balance = amount || 0;

  function checkBalance(p) {
    if (p !== pin) return "Invalid PIN.";
    return `$${balance}`;
  }

  function deposit(p, a) {
    if (p !== pin) return "Invalid PIN.";
    balance += a;
    return `Succesfully deposited $${a}. Current balance: $${balance}.`;
  }

  function withdraw(p, a) {
    if (p !== pin) return "Invalid PIN.";
    if (a > balance)
      return "Withdrawal amount exceeds account balance. Transaction cancelled.";
    balance -= a;
    return `Succesfully withdrew $${a}. Current balance: $${balance}.`;
  }

  function changePin(prevPin, newPin) {
    if (prevPin === pin) {
      pin = newPin;
      return "PIN successfully changed!";
    } else {
      return "Invalid PIN.";
    }
  }
  return {checkBalance, deposit, withdraw, changePin};
}

module.exports = { createAccount };
