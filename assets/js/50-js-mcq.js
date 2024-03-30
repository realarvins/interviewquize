
const correctAns = ["A","A","B","A","C","C","D","A","A","A","A","C","C","A","A","C","A","B","A","A","D","B","B","C","A","D","A","A","A","D","D","B","A","A","C","B","A","C","A","B","B","B","D","B","A","C","B","D","C","B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const question = document.querySelectorAll(".question");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let score = 0;
    const  userAns = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value,form.q11.value,form.q12.value,form.q13.value,form.q14.value,form.q15.value,form.q16.value,form.q17.value,form.q18.value,form.q19.value,form.q20.value,form.q21.value,form.q22.value,form.q23.value,form.q24.value,form.q25.value,form.q26.value,form.q27.value,form.q28.value,form.q29.value,form.q30.value,form.q31.value,form.q32.value,form.q33.value,form.q34.value,form.q35.value,form.q36.value,form.q37.value,form.q38.value,form.q39.value,form.q40.value,form.q41.value,form.q42.value,form.q43.value,form.q44.value,form.q45.value,form.q46.value,form.q47.value,form.q48.value,form.q49.value,form.q50.value];
    userAns.forEach((ans , index) => {
        if(correctAns[index] === ans){
            score += 1;

            question[index].classList.add("correct");
        }    else{
            question[index].classList.add("incorrect");
        }
    });
    console.log(score);

    scrollTo(0,0); //scroll to top  of the page after submitting the quiz

    result.classList.remove("hide");
    result.querySelector("p").textContent = `Your Scored ${score}/50`;
});