function validate() {
    var u = document.getElementById("username").value;
    var y = document.getElementById("email").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password-repeat").value;
    document.write 
    if(u== "") {
    alert("Vui lòng nhập tên!");
    return false;
    } 
    if(y==""){
    alert("Vui lòng nhập email!")
    return false;
    }

    if(p1 && p2 =="") {
    alert("Vui lòng nhập lại mật khẩu!");
    return false;
    }
    if(p2 != p1) {
    alert("Vui lòng xác minh lại mật khẩu!");
    return false;
    }
    confirm('confirm your information\n'+'Tài khoản: '+ u + "\n" + 'Gmail: ' + y +"\n"+'Mật khẩu: '+ p1 ) 
    
     
    return true;

    

    }