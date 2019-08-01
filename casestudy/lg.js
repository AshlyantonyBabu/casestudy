$(document).ready(function(){
    
$("#usertxt").click(function(){
    // var user1=$("#usertxt").val();
    // console.log(user1);
   
    $("#btn1").click(function(){
        var user1=$("#usertxt").val();
        pass=$("#passtxt").val();
        // if(user1==""||user1==" "){
        //     $("#us2").text(" Wrong ");
        // }
        console.log(user1);
        function fn(user1,pass,callback)
        {
            if(user1==""||user1==" "){
                alert("space is not allowed");
                return false;
                //callback(1);

            }
            
        if(user1=="Admin"&&pass=="123456")
        {
        //    console.log("aaa");
        //    $("#us2").text(" loged");
        //    if(user1==" "||user1==null){
        //     $("#us2").text(" loged");

        // }
        callback(0);
        window.location.href="main.html";

        }
        else{
           // $("#us2").text(" Not loged");
           $("#us2").text(" Wrong ");
           alert("space value or wrong passwrd or username");
           callback(1)
        }
    }
    fn(user1,pass,(res)=>{if(res==0){
        window.location.href="main.html";

    }
    else{
        window.location.href="case1.html";
       
    }

    })
    })
})
    
})