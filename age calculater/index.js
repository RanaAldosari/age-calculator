document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const dob = document.getElementById("dob").value;
    if (dob === "") {
        alert("Please enter a valid date of birth.");
        return;
    }

    const birthDate = new Date(dob);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
let months=currentDate.getMonth()-birthDate.getMonth()
if(months<0){
    months+=12;
}

if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
    months = currentDate.getMonth() - birthDate.getMonth() + 12;
}
    document.getElementById("result").textContent = `You are ${age} years ,${months}months old`;
});
