#!/usr/bin/env node

import minimist from "minimist";
import { rps } from "/lib/rpsls.js";

const args = minimist(process.argv.slice(2));

const helpText = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit

Examples:
    node-rps        Return JSON with single player RPS result.
                    e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"scissors","result":"win"}`;

if(args.h){
    console.log(helpText);
    process.exit(0);
}

const ruleText = 
`Rules for Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors`;

if(args.r){
    console.log(ruleText);
    process.exit(0);
}

if(args._.length == 0){
    console.log(rps());
    process.exit(0);
}

try {
    console.log(JSON.stringify(rps(args._[0])));
}catch(e){
    console.log(helpText);
    console.log(ruleText);
}