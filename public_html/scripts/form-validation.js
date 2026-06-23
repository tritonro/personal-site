

function init () {

//TODO: Select form fields
    const fullName = document.getElementById("fullName");
    const email = document.getElementById('email');
    const comments = document.getElementById('comment');
    const phone = document.getElementById('phone');

//TODO: Select error output element

    if (fullName) {
        fullName.addEventListener('input', validateInputs);
        fullName.addEventListener('input', validateInputs);
    }
    else{
        console.log("The fullName element does not exist.")
    }

    if (email) {
        email.addEventListener('input', validateInputs);
    }
    else{
        console.log("The e-mail element does not exist.")
    }
    if(comments) {
        comments.addEventListener("input", validateInputs);
    }
    else{
        console.log("The comments element does not exist.")
    }
    if (phone) {
        phone.addEventListener('input', validateInputs);
    }
    else{
        console.log("The phone element does not exist.")
    }


//TODO: Check that each field hasn't exceeded its max length, and add to output element if it has
//TODO: Check that each field isn't within 10 characters of its max length, and add to output element if it has
}

function logWarning(warning) {
    const output = document.getElementById("error");
    output.innerText = `Warning! ${warning}`;
    //TODO: Make error message fade out after some short amount of time
}

function showValidationMessage(e){
    const output = document.getElementById("error");
    const element = e.target;
    output.innerText += (element.validationMessage);
    //TODO: Make error message fade out after some short amount of time
    fadeOutAnimation(output, 100);

}

//this used search engine AI
function fadeOutAnimation(element, duration) {
    let start = null;
    const initialOpacity = 1;

    function animate(currentTime) {
        if (!start) start = currentTime;
        const progress = (currentTime - start) / duration;
        const opacity = initialOpacity * (1 - progress);

        if (opacity > 0) {
            element.style.opacity = opacity;
            requestAnimationFrame(animate);
        } else {
            element.style.opacity = 0; // Ensure it's fully transparent
            element.style.display = 'none';
        }
    }
    requestAnimationFrame(animate);
}


function checkEmailDomain(emailString){
    console.log(emailString);
    const yahooTypos = new Set(["yaho", "uahoo", "ayhoo", "yahooo", "yahoi"]);
    const gmailTypos = new Set(["gnail", "gmaol"]);
    const iCloudTypos = new Set(["ucloud", "ocloud", "iclpud"]);
    const outlookTypos = new Set(["putlook", "iutlook", "ourlook", "ouylook"]);
    const hotmailTypos = new Set(["homtail", "hoymail", "hotail", "hotmial", "hotmal", "hoitmail", "homail", "hotrmail", "hotmil", "Hotmaill", "hitmail"]);
    const aolTypos = new Set(["apl", "ail"]);
    let emailRegex = /\b([^-]+)@([^-]+)\b/

    if (emailString.match(emailRegex)) {
        let email=emailString.toLowerCase();
        console.log(email);
        email = email.split("@");
        console.log(email);
        let domain = email[1];
        domain = domain.replace(/[^a-zA-Z ]/g, "");
        console.log(domain);
        let firstLetter = domain[0];

        if (firstLetter === "y" || firstLetter ==="u" || firstLetter === "a"){
            if (yahooTypos.has(domain)){
                logWarning("Did you mean \"yahoo\" ?");
                return;
            }
        }
        if(firstLetter === "g" ){
            if (gmailTypos.has(domain)){
                console.log(true);
                logWarning("Did you mean \"gmail\" ?");
                return;
            }
        }

        if (firstLetter=== "u" || firstLetter ==="o" || firstLetter ==="i"){
            if (iCloudTyposTypos.has(domain)){
                logWarning("Did you mean \"iCloud\" ?");
                return;
            }
        }
    }

}

function validateInputs(e) {
    //TODO: Make spellcheck suggestions against common email typos
    //source: https://support.doublethedonation.com/knowledge/email-address-autocorrection
    const element = e.target;
    let validityState = element.validity;
    let curLen = element.value.length;
    const maxLen = element.maxLength;
    if ((curLen > (maxLen - 10)) && curLen< maxLen){
        name = element.name;
        name = name.toLowerCase();
        name = name.replace("-", "-");
        logWarning(`You're getting close to the character limit for ${name}. The limit is ${element.maxLength}.`)
        element.className += "warning";
    }
    if (validityState.valid){
        return;
    }
    let name = element.name;
    if  (validityState.tooLong) {
        name = name.replace("_", " ");
        element.setValidity("tooLong", `You've typed the maximum number of characters for the ${name} field. The maximum is ${maxLen}.`)
    }
    else if (name === "full-name" && ){
        //TODO: Flash the field
        let msg = "This name field expects Latin characters, periods, hyphens, and apostrophes only. "
        element.setValidity("pattern mismatch", msg);
        //TODO: Using JS, place the message in your dedicated error message area from part 1

    }
    if (name){
        //TODO: Check for common name patterns and make them untypable with regex.
        let nameRegex = /^[A-Za-z\u00C0-\u017F]+$/ //includes the division sign, missing - ' . " "
        let emailRegex = /@+([\u0000-\u0019\u0021-\uFFFF])/
        let str = e.target.value;
        if (name === "email" && emailRegex.test(str)){
            checkEmailDomain(str);
        }

    }
    else{console.log("Invalid element name.")}
}


init();





