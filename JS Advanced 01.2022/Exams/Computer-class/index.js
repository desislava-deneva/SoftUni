class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];

    }

    installAProgram(name, requiredSpace) {
        requiredSpace = Number(requiredSpace);
        let program = this.installedPrograms.find(p => p.name == name);

        if ( this.hddMemory - requiredSpace < 0 ) {
            throw new Error('There is not enough space on the hard drive');
        }                                      //?????
        if (requiredSpace < this.hddMemory && !program) {
            this.installedPrograms.push({ name, requiredSpace });
            this.hddMemory -= requiredSpace;
        }

        return { name, requiredSpace };
    }

    uninstallAProgram(name) {
        let program = this.installedPrograms.find(p => p.name == name);

        if (!program) {
            throw new Error(`Control panel is not responding`);
        }

        let index = this.installedPrograms.findIndex(p => p.name == name);
        this.installedPrograms.splice(index, 1);
        this.hddMemory += program.requiredSpace;
        return this.installedPrograms;
    }

    openAProgram(name) {

        let program = this.installedPrograms.find(p => p.name == name);
        if (!program) {
            throw new Error(`The ${name} is not recognized`)
        }

        let task = this.taskManager.find(t => t.name == name)
        if (task) {
            throw new Error(`The ${name} is already open`)
        }

        let neededRam = this.taskManager.reduce((acc, current) => acc + current.ramUsage, 0);
        let neededCpuGHz = this.taskManager.reduce((acc, current) => acc + current.cpuUsage, 0);

        let ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

        if (neededRam >= 100) {
            throw new Error(`${name} caused out of memory exception`)
        }

        if (neededCpuGHz >= 100) {
            throw new Error(`${name} caused out of cpu exception`)
        }

        this.taskManager.push({ name, ramUsage, cpuUsage });

        return { name, ramUsage, cpuUsage };
    }

    taskManagerView() {

        if (this.taskManager.length == 0) {
            return `All running smooth so far`;
        } else {

            let result = [];

            for (const program of Object.values(this.taskManager)) {
                result.push(`Name - ${program.name} | Usage - CPU: ${program.cpuUsage.toFixed(0)}%, RAM: ${program.ramUsage.toFixed(0)}%`);
            }

            return result.join('\n');

        }
    }
}

// let computer = new Computer(4096, 7.5, 250000);

// computer.installAProgram('Word', 7300);
// computer.installAProgram('Excel', 10240);
// computer.installAProgram('PowerPoint', 12288);
// computer.uninstallAProgram('Word');
// computer.installAProgram('Solitare', 1500);

// computer.openAProgram('Excel');
// computer.openAProgram('Solitare');

// console.log(computer.installedPrograms);
// console.log(('-').repeat(50)) // Separator
// console.log(computer.taskManager);

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());

