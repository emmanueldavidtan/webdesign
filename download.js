function downloadGame() {

    if (confirm("Would you like to download the game?")) {
        let payment = prompt("Enter your payment to download the game", "0");
        if (parseInt(payment) >= 1000) {
            if(parseInt(payment) >1000){
                let change = parseInt(payment) - 1000;
                alert("Thank you for your payment. Your game is downloading. Your change is " + change);
            }
            else{
                alert("Thank you for your payment. Your game is downloading.");
            }
        }
        else {
            alert("Your payment is insufficent. Please try again.");
        }
        }
    else{
        alert("Transaction Cancelled");
    }
}
