
function generateCard() {
    const nameValue=document.getElementById("name").value;
    document.getElementById("cardName").innerHTML=nameValue;
    
    const collageNameValue=document.getElementById("collegeName").value;
    document.getElementById("cardCollegeName").innerHTML=collageNameValue;

    const location=document.getElementById("location").value;
    document.getElementById("cardLocation").innerHTML=location;
   
    const image=document.getElementById("image").value;
    
    

    document.getElementById("collegeCard").style.display = "block";
}