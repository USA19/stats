import {MatchData} from '../MatchData';
import {Analyzer} from '../Summary';
import {matchResult} from '../matchResult';



export class WinsAnalysis implements Analyzer{
    constructor(public teamName:string){}

    run(matches:MatchData[]):string{
        let MatchesWonByTeam=0;

for (let match of matches){
    if(match[1]===this.teamName && match[5]===matchResult.homeWin){
        MatchesWonByTeam++;
    }
    else if(match[2]===this.teamName && match[5]===matchResult.awayWin){
        MatchesWonByTeam++;
    }
}
    return `${this.teamName} has won ${MatchesWonByTeam} games`
    }
}