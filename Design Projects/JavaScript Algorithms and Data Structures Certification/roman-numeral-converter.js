function convertToRoman(num) {
    let rv = "";
    let numm = (num+"").split("")
    //console.log(numm.length)
    for(let a = 0; a< numm.length; a++){
        rv = convRom(numm[numm.length-a-1], a) + rv;
    }

 return rv;
}

let places = [["I","V"],["X","L"],["C","D"],["M","?1"],["?2","?3"]]

function convRom(num, place)
{
    if(num>=1 && num <=3)
        return places[place][0].repeat(num);
    else if(num == 4)
        return places[place][0] + places[place][1];
    else if(num == 5)
        return places[place][1];
    else if(num >=6 && num <=8)
        return places[place][1] + places[place][0].repeat(num-5);
    else if(num == 9)
        return places[place][0] + places[place+1][0]
    else 
        return "";
}

//console.log(convRom(9,1))
console.log(convertToRoman(400));
