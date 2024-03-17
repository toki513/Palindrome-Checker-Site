const input = document.getElementById("typing")

function reverseString(str){
    return str.split("").reverse().join("")
}

function check(){
    const value = input.value
    const reverse = reverseString(value)
    

    if(value === reverse){
        alert("P A L I N D R O M E")
    }else{
        alert("W R O N G !!")
    }
    input.value=""

}