let balance = 5000;

const balanceDisplay = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const message = document.getElementById("message");

function deposit() {
    const amount = Number(amountInput.value);

    if (amount <= 0) {
        showMessage("Enter a valid deposit amount", "red");
        return;
    }

    balance += amount;
    updateUI();
    showMessage("Amount deposited successfully", "green");
}

function withdraw() {
    const amount = Number(amountInput.value);

    if (amount <= 0) {
        showMessage("Enter a valid withdrawal amount", "red");
        return;
    }

    if (amount > balance) {
        showMessage("Insufficient balance", "red");
        return;
    }

    balance -= amount;
    updateUI();
    showMessage("Amount withdrawn successfully", "green");
}

function updateUI() {
    balanceDisplay.textContent = balance;
    amountInput.value = "";
}

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}
