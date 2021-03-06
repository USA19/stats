import {dateStringToDate} from './utils';
import {matchResult} from './matchResult';
import {MatchData} from './matchData';




interface DataReader{
    read():void;
    data:string[][];
}


export class MatchReader{
    constructor(public reader:DataReader){}
    matches:MatchData[]=[];

    load():void{
        this.reader.read();
       this.matches= this.reader.data.map((row:string[]):MatchData=>{
            return[
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as matchResult,     //type assertion
                row[6]
            ]
        })
    }
   
}