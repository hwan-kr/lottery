const pensionBtn = document.querySelector(".pension-btn");
const pensionOutput = document.querySelector(".pension-output");
const pensionGroup = document.querySelector(".pension-group");
const lotteryBtn = document.querySelector(".lottery-btn");
const lotteryNumElement = document.querySelector(".lottery-num");

let pensionNumbers = [];

function createPensionNumber() {
    pensionNumbers = [];
    let num;
    let groupNum = Math.floor(Math.random() * 4) + 1;

    for (let i = 0; i < 6; i++) {
        num = Math.floor(Math.random() * 10);
        pensionNumbers.push(num);
    }

    pensionGroup.innerHTML = `${groupNum}조`;
    pensionOutput.innerHTML = `${pensionNumbers}`;
}

pensionBtn.addEventListener("click", createPensionNumber);

let lotteryNum = [];

function createLotteryNum() {
    lotteryNum = [];
    let num;

    for (let i = 0; i < 6; i++) {
        num = Math.floor(Math.random() * 44) + 1;
        if (!lotteryNum.includes(num)) {
            lotteryNum.push(num);
        } else {
            i--;
        }
    }

    lotteryNumElement.innerHTML = `${lotteryNum}`;
}

lotteryBtn.addEventListener("click", createLotteryNum);
