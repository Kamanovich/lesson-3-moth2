const klop = prompt ('Ведите число')
const gup = prompt ('Ведите число')
function name(klop,gup) {
    if (klop < gup ) {
        console.log(`${klop} меньше чем ${gup}`);
    }
    else if  (klop > gup) {
        console.log(`${klop} больше чем ${gup}`);
    }
    else{
        console.log(`${klup}равны${gup}`);
    }
}
name(klop,gup);