var natural = require('natural');

natural.LogisticRegressionClassifier.load('logisticregressionclassifier.json', null, function(err, classifier) {
    if (err)
        console.log(err);
    else {
        var testComment = "";
        console.log(classifier.classify(testComment));
    }

})