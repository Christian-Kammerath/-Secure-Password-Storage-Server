
export class CommandLineParser{

    DatabaseName: string = "";

    DatabaseUrl: string = "";

    DatabaseUser: string = "";

    DatabasePassword: string ="";

    DatabasePort: number =0


    constructor(args: String[]){
        const argv = require('minimist')(process.argv.slice(2));
        
        this.DatabaseName = removeLeadingSpace(argv.n);
        this.DatabaseUrl = removeLeadingSpace(argv.u);
        this.DatabaseUser = removeLeadingSpace(argv.r);
        this.DatabasePassword = removeLeadingSpace(argv.p);
        this.DatabasePort = argv.g;

        // Funktion zum Entfernen des führenden Leerzeichens
        function removeLeadingSpace(str: string) {
        if (str.charAt(0) === ' ') {
            return str.slice(1);
        }
        return str;
        }
    }

    
    
}


