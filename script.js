document.getElementById('searchScreen').style.display = 'none';
document.getElementById('buttonValidation').addEventListener('click',
function() {
    var guessWord = document.getElementById('word').value.toUpperCase();
    var letterWord = guessWord.split('');
    var letterCheck = letterWord.filter(function(letter){
        if(letter.toUpperCase() === letter.toLowerCase()) {
            return true;
        }
    });
        if(letterCheck.length > 0) {
            document.getElementById('message').textContent = "C'est un pendu, pas une calculatrice...";
        } else {
            document.getElementById('firstScreen').style.display = 'none';
            document.getElementById('searchScreen').style.display = 'block';
            document.getElementById('message').style.display = 'none';
        }
        for(var i = 0; i<letterWord.length; i++) {
            var underscore = document.createElement('p');
            underscore.className = 'underscore';
            underscore.textContent = '_';
            document.getElementById('underscoresWrapper').appendChild(underscore);
        }
        document.getElementById('letterValidation').addEventListener('click',
        function(){
            var letterInput = document.getElementById('letter').value.toUpperCase();
            var goodLetter;
            for(var i = 0; i<letterWord.length; i++) {
                if(letterWord[i] === letterInput) {
                    goodLetter = true;
                    break;
                } else {
                    goodLetter = false;
                }
            }
            if(goodLetter) {
                for(var i=0; i<letterWord.length; i++) {
                    if(letterWord[i] === letterInput) {
                        document.getElementsByClassName('underscore')[i].textContent = letterInput.toUpperCase();
                    }
                }
                var underscoreLeft = false;
                for(var i = 0; i<document.getElementsByClassName('underscore').length; i++) {
                    if(document.getElementsByClassName('underscore')[i].textContent == '_') {
                        underscoreLeft = true;
                        break;
                    }
                }
                if(underscoreLeft) {
                    document.getElementById('letter').value = '';
                } else {
                    document.getElementById('firstScreen').style.display = 'none';
                    document.getElementById('result').textContent = 'Gagné !';
                    document.getElementById('result').style.display = 'block';
                    document.getElementById('searchScreen').style.display = 'none';
                    
                    }
                } else {
                var points = document.getElementById('points').textContent;
                var newPoints = points -1;
                document.getElementById('points').textContent = newPoints;
                document.getElementById('letter').value = '';

                if(newPoints == 0) {
                    document.getElementById('searchScreen').style.display = 'none';
                    document.getElementById('result').textContent = 'Perdu !';
                    document.getElementById('result').style.display = 'block';
                }
            }
        });
    });