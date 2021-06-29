class Desk {
    constructor(length, width, height, isWhiteboard) {
        super.length = length;
        super.width = width;
        super.height = height;
        super.isWhiteboard = isWhiteboard
        this.content = '';
    }

    write(input) {
        if (typeof input === 'string') {
            this.content += input;
        } else this.content = this.content
    }

    wipe() {
        if (this.isWhiteboard) {
            this.content = '';
        }  
    }
}

module.exports = Desk;
