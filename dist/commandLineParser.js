"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandLineParser = void 0;
class CommandLineParser {
    constructor(args) {
        this.DatabaseName = "";
        this.DatabaseUrl = "";
        this.DatabaseUser = "";
        this.DatabasePassword = "";
        this.DatabasePort = 0;
        const argv = require('minimist')(process.argv.slice(2));
        this.DatabaseName = removeLeadingSpace(argv.n);
        this.DatabaseUrl = removeLeadingSpace(argv.u);
        this.DatabaseUser = removeLeadingSpace(argv.r);
        this.DatabasePassword = removeLeadingSpace(argv.p);
        this.DatabasePort = argv.g;
        // Funktion zum Entfernen des führenden Leerzeichens
        function removeLeadingSpace(str) {
            if (str.charAt(0) === ' ') {
                return str.slice(1);
            }
            return str;
        }
    }
}
exports.CommandLineParser = CommandLineParser;
