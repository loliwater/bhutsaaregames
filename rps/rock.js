
//initializing some variables
var user_choice_rock = 1;
var user_choice_paper = 2;
var user_choice_scissor = 3;
var count_user = 0;
var count_comp = 0;
var count_tie = 0;

/**
 * rock = 1
 * paper = 2
 * scissor = 3
 */

function rock(){
    var comp_choice = Math.floor(Math.random() * 3) + 1;
    console.log(comp_choice);
    if(user_choice_rock){
        if(comp_choice === 1){
            alert("tie, computer choice: rock")
            count_tie++
            document.getElementById('comp_score').innerHTML = "computer: " + count_comp;
            document.getElementById('user_score').innerHTML = "your: " + count_user;
            document.getElementById('tie').innerHTML = "tie: " + count_tie;
        }
        else if(comp_choice === 2){
            alert("you lost, computer choice: paper")
            count_comp++
            document.getElementById('comp_score').innerHTML = "computer: " + count_comp;
            document.getElementById('user_score').innerHTML = "your: " + count_user;
            document.getElementById('tie').innerHTML = "tie: " + count_tie;
        }
        else{
            alert("you won, computer choice: scissor")
            count_user++
            document.getElementById('comp_score').innerHTML = "computer: " + count_comp;
            document.getElementById('user_score').innerHTML = "your: " + count_user;
            document.getElementById('tie').innerHTML = "tie: " + count_tie;
        }
    }
}

function paper(){
    var comp_choice = Math.floor(Math.random() * 3) + 1;
    console.log(comp_choice);
    if(user_choice_paper){
        if(comp_choice === 1){
            alert("you won, computer choice: rock")
            count_user++
            document.getElementById('comp_score').innerHTML = "computer: " + count_comp;
            document.getElementById('user_score').innerHTML = "your: " + count_user;
            document.getElementById('tie').innerHTML = "tie: " + count_tie;
        }
        else if(comp_choice === 2){
            alert("tie, computer choice: paper")
            count_tie++
            document.getElementById('comp_score').innerHTML = "computer: " + count_comp;
            document.getElementById('user_score').innerHTML = "your: " + count_user;
            document.getElementById('tie').innerHTML = "tie: " + count_tie;
            }
        else{
            alert("you lost, computer choice: scissor")
            count_comp++
            document.getElementById('comp_score').innerHTML = "computer: " + count_comp;
            document.getElementById('user_score').innerHTML = "your: " + count_user;
            document.getElementById('tie').innerHTML = "tie: " + count_tie;
        }
    }
}

function scissors(){
    var comp_choice = Math.floor(Math.random() * 3) + 1;
    console.log(comp_choice);
    if(user_choice_paper){
        if(comp_choice == 1){
            alert("you lost, computer choice: rock")
            count_comp++
            document.getElementById('comp_score').innerHTML = "computer: " + count_comp;
            document.getElementById('user_score').innerHTML = "your: " + count_user;
            document.getElementById('tie').innerHTML = "tie: " + count_tie;
        }
        else if(comp_choice == 2){
            alert("you won, computer choice: paper")
            count_user++
            document.getElementById('comp_score').innerHTML = "computer: " + count_comp;
            document.getElementById('user_score').innerHTML = "your: " + count_user;
            document.getElementById('tie').innerHTML = "tie: " + count_tie;
        }
        else{
            alert("tie, computer choice: scissor")
            count_tie++
            document.getElementById('comp_score').innerHTML = "computer: " + count_comp;
            document.getElementById('user_score').innerHTML = "your: " + count_user;
            document.getElementById('tie').innerHTML = "tie: " + count_tie;
        }
    }
}

function resetall(){
    window.location.reload()
}

function goback(){
    window.history.back()
}