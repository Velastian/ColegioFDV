//const optionMenu = document.querySelector(".select-menu"),
       //selectBtn = optionMenu.querySelector(".select-btn"),
       //options = optionMenu.querySelectorAll(".option"),
       //sBtn_text = optionMenu.querySelector(".sBtn-text");

//selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

//options.forEach(option =>{
    //option.addEventListener("click", ()=>{
        //let selectedOption = option.querySelector(".option-text").innerText;
        //sBtn_text.innerText = selectedOption;
        //optionMenu.classList.remove("active");
    //});
//});

document.getElementById('login-form').addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            email: e.target.children.email.value,
            password: e.target.children.password.value,
            rol: e.target.children.rol.value
        })
    });
})