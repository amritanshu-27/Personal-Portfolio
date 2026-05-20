// ================= TYPING EFFECT =================

var typed = new Typed(".text", {

    strings: [

        "Frontend Developer",
        "Web Developer",
        "UI Designer"

    ],

    typeSpeed: 100,

    backSpeed: 100,

    backDelay: 1000,

    loop: true

});

// ================= CONTACT FORM =================

const form = document.getElementById("contact-form");

const popup = document.getElementById("success-popup");

if(form){

    form.addEventListener("submit", async function(e){

        e.preventDefault();

        const formData = new FormData(form);

        const response = await fetch(form.action, {

            method: "POST",

            body: formData,

            headers: {
                'Accept': 'application/json'
            }

        });

        if(response.ok){

            popup.classList.add("show-popup");

            form.reset();

            setTimeout(() => {

                popup.classList.remove("show-popup");

            }, 3000);

        }

    });

}