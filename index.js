// code your solution here
function saturdayFun(a = "roller-skate"){
    return `This Saturday, I want to ${a}!`;
}

const mondayWork = function(a = 'go to the office'){
    return `This Monday, I will ${a}.`;
}

function wrapAdjective(name = "*"){
    return function(adjective ="special"){
        return `You are ${name}${adjective}${name}!`;
    }
}