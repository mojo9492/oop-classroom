class Computer {
    constructor(
        name,
        operatingSystem,
        processor,
        memory,
        graphics
    ) {
        super.name = name;
        super.operatingSystem = operatingSystem;
        super.processor = processor;
        super.memory = memory;
        super.graphics = graphics;
        this.on = false;
    }

    power() {
        if (!this.on) this.on = true;
        else if (this.on) this.on = false;
    }
}

module.exports = Computer
