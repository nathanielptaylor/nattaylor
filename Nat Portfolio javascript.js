function contactscroll(){
    window.scrollBy({
        top: 21000,
        left:0,
        behavior: 'smooth'
    });
}
function experiencescroll(){
    window.scrollBy({
        top: 1400,
        left:0,
        behavior: 'smooth'
    });
}
function projectsscroll(){
    window.scrollBy({
        top: 900,
        left:0,
        behavior: 'smooth'
    });
}
function aboutmescroll(){
    window.scrollBy({
        top: 100,
        left:0,
        behavior: 'smooth'
    });
}
function scrolltotop(){
    window.scrollBy({
        top: -10000,
        left:0,
        behavior: 'smooth'
    })
}
function getuserdata(){
    var firstNameElement = document.getElementById('userfirstname');
    var firstname = firstNameElement.value;
    var lastNameElement = document.getElementById('userlastname');
    var lastname = lastNameElement.value;
    var emailElement=document.getElementById('useremail');
    var email = emailElement.value;
    alert("Thank you! I will be in contact shortly");
    console.log(firstname);
    console.log(lastname);
    console.log(email);
}
