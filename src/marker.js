class Marker {
    constructor(size, color, remainingInk) {
        this.size = size;
        this.color = color;
        this.remainingInk = remainingInk;
    }

    write(characters) {
        let result;
        let currentWricursion;
        if (typeof characters === 'string') {
            const robotChars = characters.replace(/ +/g, '')
            const inkToRemove = robotChars.length;
            const remainingInkVal = this.remainingInk - inkToRemove;

            const writeACharDown = (currentChars) => {
                //base case: stop writing chars down if out of ink
                if (this.remainingInk === 0) {
                    console.log('ink at 0')
                    return
                }
            }
            for (this.remainingInk; this.remainingInk > remainingInkVal; this.remainingInk--) {
                for (let i = robotChars; i > robotChars; i--) {
                    result += robotChars[i];
                    console.log('this result ', result);
                }

                writeACharDown(robotChars)
            }
        }

        console.log('this reult at completion ', result);
        return result;
    }
}

module.exports = Marker;
