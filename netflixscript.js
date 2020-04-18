
//WORK ON THE FREQUENTLY ASKED QUESTIONS SECTION

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        let pan = this.nextElementSibling;
        if (pan.style.display === "block") {
            pan.style.display = "none";
        } else {
            pan.style.display = "block";
        }

    })

}