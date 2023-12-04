
export class CommandLineParser{

    WithNewDatabase: boolean = false;
    NewDatabase: String = "";

    ConnectExistingDatabase: boolean = false;
    DatabaseUrl: String = "";
    DatabaseUser: String = "";
    DatabasePassword: String ="";



    constructor(args: String[]){
        const argv = require('minimist')(process.argv.slice(2));

        if(argv.n){
            this.WithNewDatabase = argv.n;
            this.NewDatabase = argv.nd
        }
        else if(argv.c){
            this.ConnectExistingDatabase = argv.c;
            this.DatabaseUrl = argv.edu;
            this.DatabaseUser = argv.edus;
            this.DatabasePassword =argv.edp;
        }
        else{
            console.error('\x1b[31m%s\x1b[0m',"Missing parameters Please indicate whether you want to create a new database or connect an existing one")

            if( this.WithNewDatabase === false 
                && this.ConnectExistingDatabase === false){

                    process.exit(1);
                }

        }
        
    }

    
}


