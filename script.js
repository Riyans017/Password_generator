class Password{
    StrongPassword(){
         let pass = "ABCDEFGHTIJKLMNOPQRSUTVWXYZ12312435567856@#ablsjfsjkla;jkjei";
         let length = Math.ceil(Math.random()*20)
         while(true){
         if(length > 10){
            let final_pass  = ""
            for(let i=0; i<length; i++){
             let char = Math.ceil(Math.random()*80);
             let position = pass.charAt(char);
              final_pass += position; 
            }
             return final_pass;
         }
         else{
            length = Math.ceil(Math.random()*25);
         }
        }
    }
    WeakPassword(){
        let pass = "ABCDEFGHTIJKLMNOPQRSUTVWXYZ12312435";
         let length = Math.ceil(Math.random()*20)
         while(true){
         if(length > 6){
            let final_pass  = ""
            for(let i=0; i<length; i++){
             let char = Math.ceil(Math.random()*80);
             let position = pass.charAt(char);
              final_pass += position; 
            }
          return final_pass;
         }
         else{
            length = Math.ceil(Math.random()*20 + 1);
         }
        }
    }
    SuperStrongPass(){
        let pass = "ABCDEFGHTIJKLMNOP6@#ablsjfsjkla;jkjei~!()||/€#$@#";
        let length = Math.ceil(Math.random()*20)
        while(true){
        if(length > 10){
           let final_pass  = ""
           for(let i=0; i<length; i++){
            let char = Math.ceil(Math.random()*80);
            let position = pass.charAt(char);
             final_pass += position; 
           }
          return final_pass;
         
        }
        else{
           length = Math.ceil(Math.random()*25);
        }
       }
    }
    FunnyPassword(){
         let pass = ["password",
              "ineedapassword",
              "changeme",
               "secret",
        "iamforgetful",
        "newpassword",
        "IamACompleteIdiot",
        "nothing",
        "nothingagain",
        " iforgot",
            "whydoialwaysforget",
            "qwerty",
            "asdf",
            "aslpls (old-school mIRC users will remember this)",
            "user",
            "YouWontGuessThisOne",
            "PasswordShmashword",
            "youmoron",
            "doubleclick",
            "iamnottellingyoumypw",
            "masterpassword",
            "yetanotherpassword",
            "nomorepasswords",
            " password123",
            "myonlypassword",
            "cantremember",
        " dontaskdonttell",
        " memorysucks",
        " earlyalzheimers",
        " passwordforoldpeople"]
        let choose  = Math.floor(Math.random()*pass.length);
        return pass[choose];
       }
      
    }



    let div = document.getElementById("result");

let strong_pass = document.getElementsByTagName('button')[0];

strong_pass.addEventListener('click',()=>{
    let user = new Password();
    let str = user.StrongPassword();
    div.innerHTML = `The Strong Password generated is ${str}`;
})

let weak_pass = document.getElementsByTagName('button')[1];
weak_pass.addEventListener('click',()=>{
    let user = new Password();
    let str = user.WeakPassword();
    div.innerHTML = `The Weak Password generated is ${str}`;
})

let SuperStrongPass = document.getElementsByTagName('button')[2];
SuperStrongPass.addEventListener('click',()=>{
    let user = new Password();
    let str = user.SuperStrongPass();
    div.innerHTML = `The Super Strong Password generated is ${str}`;
})

let FunnyPassword = document.getElementsByTagName('button')[3];
FunnyPassword.addEventListener('click',()=>{
    let user = new Password();
    let str = user.FunnyPassword();
    div.innerHTML = `The Funny Password generated is ${str}`;
})



