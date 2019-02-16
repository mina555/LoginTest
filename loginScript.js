function LogIn(){
    var UName = document.getElementById("UName").value;
    var PWord = document.getElementById("PWord").value;
    var goToPage;

    if(UName === "Admin" && PWord === "adminadmin"){
        sessionStorage.setItem("userType",UName);
        goToPage = 1;
    } else if(UName === "Student" && PWord === "student123"){
        sessionStorage.setItem("userType",UName);
        goToPage = 2;
    } else if(UName === "Teacher" && PWord === "teacher456"){
        sessionStorage.setItem("userType",UName);
        goToPage = 3;
    }else alert("Username or Password is not correct");

    
    switch(goToPage){
        case 1:
        window.open("admin.html");
        break;
        case 2:
        window.open("student.html");
        break;
        case 3:
        window.open("teacher.html");
        break;
        default:
        alert("The Page does not exist");
    }


}