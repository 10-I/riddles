let x = Math.floor((Math.random() * 7) + 0);
let QAPair = [
    { Q: "What is always in front of you but can’t be seen? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "Future" },
    { Q: "What can you break, even if you never pick it up or touch it? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "Promise" },
    { Q: "What can you catch, but not throw? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "Cold" },
    { Q: "I’m tall when I’m young, and I’m short when I’m old. What am I? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "Candle" },
    { Q: "The more of this there is, the less you see. What is it? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "Darkness" },
    { Q: "What can fill a room but takes up no space? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "Light" },
    { Q: "If you drop me I’m sure to crack, but give me a smile and I’ll always smile back. What am I? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "Mirror" },
    { Q: "What has one head, and four legs? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "Bed" }
]
document.getElementById("get").innerHTML = QAPair[x].Q
function submit() {
    let z = document.getElementById("answer").value
    if (QAPair[x].A == z) {
        document.getElementById("get").innerHTML = "Your answer is correct!!<br> <img src='./src/Great-Job-Emoji-PNG-File.png'>"
    }
    else {
        document.getElementById("get").innerHTML = `Your answer is incorrect!! <br> Answer: ${QAPair[x].A}<br> <img src='./src/pngegg.png'>`
    }
}
