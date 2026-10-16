

function calculate() {

    // Get values from input fields
    const height = document.getElementById('ht').value;
    const weight = document.getElementById('wt').value;
    const age = document.getElementById('age').value;

    // Convert height and weight into numbers
    const h = Number(height);
    const w = Number(weight);
    const a = Number(age);

    // Calculate BMI
    const heightInMeter = h / 100;
    const bmi = w / (heightInMeter * heightInMeter);

    // Find result div
    const result = document.getElementById('result');
    let categoryy=document.getElementById('categoryy')

    // Check BMI category
    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Normal weight";
    }
    else if (bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obesity";
    }


    

let nutrition = "";
let activity = "";
let sleep = "";

if (category === "Underweight") {
    nutrition = "Eat balanced meals with protein-rich foods.";
    activity = "Try suitable strength-building activities.";
    sleep = "Aim for 7–9 hours of sleep.";
}
else if (category === "Normal weight") {
    nutrition = "Continue eating balanced meals.";
    activity = "Stay active with activities you enjoy.";
    sleep = "Maintain a regular sleep schedule.";
}
else if (category === "Overweight") {
    nutrition = "Choose balanced meals with vegetables and fruits.";
    activity = "Try walking or cycling regularly.";
    sleep = "Maintain a regular sleep schedule.";
}
else {
    nutrition = "Consider professional nutrition guidance.";
    activity = "Choose activities suited to your abilities.";
    sleep = "Maintain a consistent sleep routine.";
}

if(height==="" || weight==="" || age===""){
        alert("Please fill the empty fields")
    }else{
        // Display result inside the HTML
    result.innerHTML = `
       ${bmi.toFixed(2)}
    `;

    categoryy.innerHTML=`${category}`

    document.getElementById("guide").innerHTML = `
    <div class="row g-3 mt-3">

        <div class="col">
            <div class="card p-3 text-center h-100">
            <i class="fa-solid fa-bowl-rice" style="color: rgb(48, 105, 197);"></i>
                <h5>Nutrition</h5>
                <p>${nutrition}</p>
            </div>
        </div>

        <div class="col">
            <div class="card p-3 text-center h-100">
            <i class="fa-solid fa-person-running" style="color: rgb(48, 105, 197);"></i>
                <h5>Physical Activities</h5>
                <p>${activity}</p>
            </div>
        </div>

        <div class="col">
            <div class="card p-3 text-center h-100">
            <i class="fa-solid fa-bed" style="color: rgb(48, 105, 197);"></i>
                <h5>Sleep</h5>
                <p>${sleep}</p>
            </div>
        </div>

    </div>
`;

// Voice effect
let message = `Your BMI is ${bmi.toFixed(2)}.
Your category is ${category}.
Nutrition advice: ${nutrition}.
Physical activity advice: ${activity}.
Sleep advice: ${sleep}.`;

let speech = new SpeechSynthesisUtterance(message);

speech.lang = "en-IN";
speech.rate = 1;
speech.pitch = 1;

window.speechSynthesis.cancel();
window.speechSynthesis.speak(speech);
    }

}

function reset(){
    ht.value=""
    wt.value=""
    age.value=""
    ml.checked=false
    fm.checked=false
    result.innerHTML=""
    categoryy.innerHTML=""
    guide.innerHTML=""
    window.speechSynthesis.cancel();

}