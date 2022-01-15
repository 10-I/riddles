let x = Math.floor((Math.random() * 11) + 1);
if (x == 1) {
    document.getElementById("get").innerHTML = "What is always in front of you but can’t be seen? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>"
}
else if (x == 2) {
    document.getElementById("get").innerHTML = "What can you break, even if you never pick it up or touch it? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>"
}
else if (x == 3) {
    document.getElementById("get").innerHTML = "What can you catch, but not throw? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>"
}
else if (x == 4) {
    document.getElementById("get").innerHTML = "I’m tall when I’m young, and I’m short when I’m old. What am I? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>"
}
else if (x == 5) {
    document.getElementById("get").innerHTML = "The more of this there is, the less you see. What is it? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>"
}
else if (x == 6) {
    document.getElementById("get").innerHTML = "What can fill a room but takes up no space? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>"
}
else if (x == 7) {
    document.getElementById("get").innerHTML = "If you drop me I’m sure to crack, but give me a smile and I’ll always smile back. What am I? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>"
}
else if (x == 8) {
    document.getElementById("get").innerHTML = "What has one head, and four legs? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>"
}
else if (x == 9) {
    document.getElementById("get").innerHTML = "What gets wet while drying? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>"
}
else if (x == 10) {
    document.getElementById("get").innerHTML = "What kind of room has no doors or windows? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>"
}
else if (x == 11) {
    document.getElementById("get").innerHTML = "Poor people have it. Rich people need it. If you eat it you die. What is it? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>"
}
else {
    alert("Something went wrong")
}
function submit() {
    let z = document.getElementById("answer").value
    if (x == 1 && z == "Future" ||
        x == 2 && z == "Promise" ||
        x == 3 && z == "Cold" ||
        x == 4 && z == "Candle" ||
        x == 5 && z == "Darkness" ||
        x == 6 && z == "Light" ||
        x == 7 && z == "Mirror" ||
        x == 8 && z == "Bed" ||
        x == 9 && z == "Towel" ||
        x == 10 && z == "Mushroom" ||
        x == 11 && z == "Nothing") {
        document.getElementById("get").innerHTML = "Your answer is correct!!<br> <img src='./src/Great-Job-Emoji-PNG-File.png'>"
    }
    else {
        document.getElementById("get").innerHTML = "Your answer is incorrect!!<br> <img src='./src/pngegg.png'>"
    }
}