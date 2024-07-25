// import * as module from "./module.js";

const inputDob = document.getElementById("dob")
const findBtn = document.getElementById("find-btn")
const ageResult = document.querySelector(".age")

findBtn.addEventListener('click', () => {
    if ((inputDob.value).length !== 0) {
        let dob = '';
        dob = inputDob.value.split('-');
        const [ year, month, day ] = dob;
        dob = `${month}/${day}/${year}`
        dob = dateSplitter(dob)

        const date = new Date()
        // let todayDate = date.toLocaleDateString()
        // todayDate = dateSplitter(todayDate)
        const todayDate = dateSplitter(date.toLocaleDateString())

        showResult(age(dob, todayDate))
        notification("See your Age")
    } else notification("Age must be not empty")

})

const dateSplitter = (date) => {
    date = date.split('/');
    const [ month, day, year ] = date.map(number => parseInt(number));
    return { month, day, year };
}

const age = (dob, todayDate) => {
    let day = todayDate.day - dob.day;
    let month = todayDate.month - dob.month;
    let year = todayDate.year - dob.year;

    while (day < 0) {
        day += 30;
        month--;
    }
    while (month < 0) {
        month += 12;
        year--;
    }

    return { day, month, year };
}

let showResult = (age) => {
    ageResult.innerHTML =
        `<tr>
    <td>${age.year} <span>years</span></td>
    <td>${age.month} <span>months</span></td>
    <td>${age.day} <span>days</span></td>
    </tr>`
}

const notification = (alertNote) => {
    const notificationBox = document.querySelector(".notification")
    notificationBox.innerHTML = alertNote;
    notificationBox.style.opacity = "1"
    setTimeout(() => {
        notificationBox.style.opacity = "0"
    }, 2000)
}