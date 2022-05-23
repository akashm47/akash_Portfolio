const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const hireMeBtn = document.querySelector("label.hireMe");
         const hireMeLink = document.querySelector("form .hireMe-link a");
         hireMeBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         hireMeLink.onclick = (()=>{
           hireMeBtn.click();
           return false;
         });