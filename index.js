let natural = require('natural');
let stemmer = natural.PorterStemmer;
var str = "After nearly an hour without lights or air conditioning, the train was finally pushed by another locomotive into the station — but the passengers weren’t out of the woods. The doors failed to open and passengers desperately tried to pry them open.";

let tokenizer = new natural.WordTokenizer();
// console.log(tokenizer.tokenize(str));

//console.log(stemmer.stem("mangoes"));
//console.log(stemmer.tokenizeAndStem(str));

let nounInflector = new natural.NounInflector();
// console.log(nounInflector.pluralize("mouse"));
// console.log(nounInflector.singularize("tomatoes"));

let countInflector = natural.CountInflector;
// for (var i = 0; i < 100; i++) {
//     console.log(countInflector.nth(i));
// }

var singularized = tokenizer.tokenize(str).map((word) => nounInflector.singularize(word));
var parsed = tokenizer.tokenize(str).map((word) => stemmer.stem(nounInflector.singularize(word)));

let Ngrams = natural.NGrams;
var bigrams = Ngrams.bigrams(str);
var trigrams = Ngrams.trigrams(str);
var ngram = Ngrams.ngrams(str, 4);

let Tagger = natural.BrillPOSTagger;

var baseFolder = "./node_modules/natural/lib/natural/brill_pos_tagger";
var rulesFilename = baseFolder + "/data/English/tr_from_posjs.txt";
var lexiconFilename = baseFolder + "/data/English/lexicon_from_posjs.json";
var defaultCategory = 'N';

var lexicon = new natural.Lexicon(lexiconFilename, defaultCategory);
var rules = new natural.RuleSet(rulesFilename);
var tagger = new Tagger(lexicon, rules);
//console.log((tagger.tag(singularized)));

var str1 = "money";
var str2 = "poney";
var str3 = "unicorn";

console.log(natural.JaroWinklerDistance(str1, str2));
console.log(natural.LevenshteinDistance(str1, str2));
console.log(natural.DiceCoefficient(str1, str2));

console.log(natural.JaroWinklerDistance(str2, str3));
console.log(natural.LevenshteinDistance(str2, str3));
console.log(natural.DiceCoefficient(str2, str3)); //looks good

//60-80% of data into trainingData