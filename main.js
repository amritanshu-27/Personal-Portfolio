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


// CHECK IF FORM EXISTS

if (form) {

    form.addEventListener("submit", async function (e) {

        // STOP PAGE REFRESH

        e.preventDefault();

        // CREATE FORM DATA

        const formData = new FormData(form);

        try {

            // SEND FORM DATA

            const response = await fetch(form.action, {

                method: "POST",

                body: formData,

                headers: {

                    Accept: "application/json"

                }

            });

            // SUCCESS

            if (response.ok) {

                // SHOW SUCCESS POPUP

                popup.classList.add("show-popup");

                // RESET FORM

                form.reset();

                // HIDE POPUP AFTER 3 SECONDS

                setTimeout(() => {

                    popup.classList.remove("show-popup");

                }, 3000);

            }

            // FAILED

            else {

                alert("Failed to send message!");

            }

        }

        // ERROR HANDLING

        catch (error) {

            alert("Something went wrong!");

            console.log(error);

        }

    });

}
