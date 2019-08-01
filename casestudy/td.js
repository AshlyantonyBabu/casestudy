$(document).ready(function(){

$.ajax({
    type:"GET",
    url:"https://jsonplaceholder.typicode.com/todos",
    success : function(data){
     var  out=" ";
     var count=0;
        
        for(i in data){
            var Completed1= data[i].completed;
           // out+="<div class='col col-12'>";
            if(Completed1==true)
            {
              //  out+="<div class='col col-12' align='left'>";
           out+="<ul>"
            out+="<label class='checkbox-inline' ><input  type='checkbox' checked disabled id='ck"+i+"'></label> ";
           // out+="</div >";
            // out+="<div class='col col-4'>";
            out+=data[i].id;
          //  out+="</div >";
           // out+="<div class='col col-4'>";
                out+=data[i].title;
                out+="</ul >";
            }
            else{
            //  out+="<div class='col col-12' align='left' >";
           out+="<ul>"
            out+="<label class='checkbox-inline' ><input  type='checkbox'  id='ck"+i+"'></label> ";
           // out+="</div >";
           // out+="<div class='col col-4'>";
            out+=data[i].id;
           // out+="</div >";
           // out+="<div class='col col-4'>";
                out+=data[i].title;
                out+="</ul >";
                  
            }
               }
              // out+="</div >";
               
        
        $("#n1").html(out);
        //console.log(out);
    
        

        $('input[type="checkbox"]').click(function(){

        if($(this).prop('checked')==true){
            count++;
             console.log(count);
        }
        else{
            count--;
        }
        
          var ps=new Promise((resolve,reject)=>{
          if(count>=5){
            resolve();
           }
     else{
    reject();
    }

}
);
        
    
        
ps.then(()=>{alert("Congrats. 5 Tasks have been Successfully Completed ");

}).catch(()=>{
console.log("failed");


});
        
    


})


}
});
})

