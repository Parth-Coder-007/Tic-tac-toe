let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let turn0=true;
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let draw=document.querySelector(".draw");
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn0=true;
    enableBox();
    msgContainer.classList.add("hide");
    draw.classList.add("hide");
    

}

boxes.forEach((box)=>{
    box.addEventListener(("click"),()=>{
       
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
    
});

const disableBox=()=>
{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBox=()=>
{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner) => {
     msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide"); 
    disableBox();
}
let count = 0;


const checkWinner= () =>{
    let wf=false;
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
       
         if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
           wf=true;
            showWinner(pos1Val);
        }
       
     
    }
    }
    let count=0;

    for (let box of boxes) {
    if (box.innerText !== "") {
        count++;
    }
}

if(!wf && count==9){
   
   
    draw.classList.remove("hide"); 

}

   
};

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
