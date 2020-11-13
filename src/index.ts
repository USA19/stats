import {MatchReader} from './MatchReader';
import {matchResult} from './matchResult';
import {CsvFileReader} from './CsvFileReader';
import {WinsAnalysis} from './analyzer/WinsAnalysis';
import {ConsoleReports} from './reportTarget/ConsoleReport';
import {HtmlReport} from './reportTarget/HtmlReport';
import {Summary} from './Summary';


const csvFileReader=new CsvFileReader('football.csv');


const matchReader= new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReports()
)

summary.buildAndPrintReport(matchReader.matches);





