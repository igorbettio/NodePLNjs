const natural = require('natural');
const tfidf = new natural.TfIdf();

const documents = [
    "Clapper made the comments at the National Press Club in Canberra, Australia where he criticized the President Trump’s “problematic” relationship with the Moscow.",
    "David Spade is the latest Hollywood figure to fall victim to burglars after his Beverly Hills home was robbed over the weekend, reports TMZ.",
    "A growing number of advocacy groups and health experts have pushed for states to modify or eliminate those laws. Most of the measures were enacted before antiretroviral therapies greatly reduced the risk of transmission and transformed HIV — the virus that causes AIDS — into what is now considered a manageable chronic medical condition.",
    "Before the shooting, McNulty had been fired from a job as an IT contractor after a week after he brought a gun to work, the Atlanta Journal-Constitution reported. He had claimed that he forgot the gun was in his pocket."
];

documents.forEach(function(item) {
    tfidf.addDocument(item);
});

// tfidf.tfidfs("shooting", function(docIndex, measure) {
//     console.log("Document", docIndex, ":", measure);
// });

tfidf.listTerms(2).forEach(function(item) {
    console.log(item.term, ":", item.tfidf);
});

//serialize tfidf corpus
const json = JSON.stringify(tfidf);
const nreTfidf = new TFidf(JSON.parse(json));