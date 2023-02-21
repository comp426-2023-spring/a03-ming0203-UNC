#!/usr/bin/env node

function getItem(arr){
    const random = Math.floor(Math.random()*arr.length);
    const randomItem = arr[random];
    return randomItem;
}
export function rps(){
    
    const array = ['rock','paper','scissors'];
    const answer = {"player": getItem(array) };

    return answer;
}

export function rpsls(){
    
    const array = ['rock','paper','scissors','lizard','spock'];
    const answer = {"player": getItem(array) };

    return answer;
}

//rps with argument 
export function rpsA(shot){
    const input = shot.toLowerCase();
    const array = ['rock','paper','scissors'];
    const opponent = getItem(array);
    const result = "";
    if  (input === "rock"){
        if (opponent === "rock"){
            result = "tie";
        }
        else if (opponent === "paper"){
            result = "lose";
        }
        else {
            result = "win"
        }
    }
    else if (input === "paper"){
        if (opponent === "rock"){
            result = "win";
        }
        else if (opponent === "paper"){
            result = "tie";
        }
        else {
            result = "lose"
        }
    }
    else if (input === "scissors"){
        if (opponent === "rock"){
            result = "lose";
        }
        else if (opponent === "paper"){
            result = "win";
        }
        else {
            result = "tie"
        }
    }
    else {
        throw new Error('Out of range');
    }
    const answer = {
        "player": input,
        "opponent": opponent,
        "result": result
    };
    
    return answer;
}

//rpsls with argument 
export function rpslsA(shot){
    const input = shot.toLowerCase();
    const array = ['rock','paper','scissors','lizard','spock'];
    const opponent = getItem(array);
    if (array.includes(input) == false){
        throw new Error('Out of range');
    }
    const result = "";
    if  (input === "rock"){
        if (opponent === "rock"){
            result = "tie";
        }
        else if (opponent === "paper"){
            result = "lose";
        }
        else if (opponent === "scissors"){
            result = "win";
        }
        else if (opponent === "spock"){
            result = "tie";
        }
        else {
            result = "win";
        }
    }
    else if (input === "paper"){
        if (opponent === "rock"){
            result = "win";
        }
        else if (opponent === "paper"){
            result = "tie";
        }
        else if (opponent === "scissors"){
            result = "lose"
        }
        else if (opponent === "spock"){
            result = "win";
        }
        else {
            result = "tie";
        }
    }
    else if (input === "scissors"){
        if (opponent === "rock"){
            result = "lose";
        }
        else if (opponent === "paper"){
            result = "win";
        }
        else if (opponent === "scissors"){
            result = "tie"
        }
        else if (opponent === "spock"){
            result = "tie";
        }
        else {
            result = "win";
        }
    }
    else if (input === "spock"){
        if (opponent === "rock"){
            result = "win";
        }
        else if (opponent === "paper"){
            result = "lose";
        }
        else if (opponent === "scissors"){
            result = "win"
        }
        else if (opponent === "spock"){
            result = "tie";
        }
        else {
            result = "lose";
        }
    }
    else if (input === "lizard"){
        if (opponent === "rock"){
            result = "lose";
        }
        else if (opponent === "paper"){
            result = "win";
        }
        else if (opponent === "scissors"){
            result = "lose"
        }
        else if (opponent === "spock"){
            result = "win";
        }
        else {
            result = "tie";
        }
    }
    else {
        throw new Error('Out of range');
    }
    const answer = {
        "player": input,
        "opponent": opponent,
        "result": result
    };
    
    return answer;
}