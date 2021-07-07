var fruits = []
function submit();
{
var fruits = document.getElementById("names").value;
fruits.push(names);
document.getElementById("name_entered").innerHTML = fruits; 
}

function search()
{
var s= document.getElementById("s1").value;
var found=0;
var j;
for (j=0; j<name_entered.length; j++)
    {
    if(s==name_entered[j]){
        found=found+1;
    }
}
document.getElementById("answer").innerHTML="name found" +found" time/s";
console.log("name found" +found" time/s");
}