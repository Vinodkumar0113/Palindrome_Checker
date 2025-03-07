const btn = document.getElementById("btn");
const clearBtn = document.getElementById("clearBtn");

function checkPalindrome(num) {
    let n = num;
    let revn = 0;
    let rem = 0;
    
    while (num > 0) {
        rem = num % 10;
        revn = (revn * 10) + rem;
        num = Math.floor(num / 10); // Fixing division issue
    }
    
    let result = (n === revn) ? `${n} is a palindrome` : `${n} is not a palindrome`;
    document.getElementById("res").innerHTML = result;
}

btn.addEventListener("click", function() {
    const inputNum = parseInt(document.getElementById("num").value);
    if (!isNaN(inputNum)) {
        checkPalindrome(inputNum);
    } else {
        document.getElementById("res").innerHTML = "Please enter a valid number";
    }
});

clearBtn.addEventListener("click", () => {
    document.getElementById("num").value = '';
    document.getElementById("res").innerHTML = '';
});
