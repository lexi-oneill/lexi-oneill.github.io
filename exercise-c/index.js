
function variationExample(sentence) {
  let output = document.querySelector('#variation-exp');
  let newSentence = sentence;

  /*
  * we're padding the thing we want to replace to ensure we are capturing
  * just the word and not parts of other words e.g we want `he` and not
  * the `he` part of t`he`
  */
  newSentence = newSentence.replace(' the ', "<span style='color: purple;'> the </span>");
  newSentence = newSentence.replace(' he ', ' she ');
  newSentence = newSentence.replace(' his ', ' her ');

  output.innerHTML = newSentence;
}

function variationOne(sentence) {
  let output = document.querySelector('#variation-one');
  let newSentence = sentence;

  // modify the sentence
  newSentence = newSentence.replace('Old ', ' ');
  newSentence = newSentence.replace(' he was gradually molding ', ' ');
  newSentence = newSentence.replace(' to his own shape ', ' ');
  newSentence = newSentence.replace(' fifteen feet away ', ' ');

  newSentence = newSentence.replace(' framed ', ' ');
  newSentence = newSentence.replace(' by blackened red brick', '');

  newSentence = newSentence.replace(' very ', ' ');
  newSentence = newSentence.replace(' literally ', ' ');
  newSentence = newSentence.replace(' honestly ', ' ');
  newSentence = newSentence.replace(' just ', ' ');
  newSentence = newSentence.replace(' really ', ' ');
  newSentence = newSentence.replace(' as though ', ' ');
  newSentence = newSentence.replace(' simply ', ' ');
  newSentence = newSentence.replace(' absolutely ', ' ');
  newSentence = newSentence.replace(' basically ', ' ');
  newSentence = newSentence.replace(' actually ', ' ');
  newSentence = newSentence.replace(' sort of ', ' ');
  newSentence = newSentence.replace(' kind of ', ' ');
  newSentence = newSentence.replace(' a little ', ' ');
  newSentence = newSentence.replace(' that ', ' ');
  newSentence = newSentence.replace(' which ', ' ');
  newSentence = newSentence.replace(' some ', ' ');
  newSentence = newSentence.replace(' like ', ' ');
  newSentence = newSentence.replace(' of ', ' ');
  newSentence = newSentence.replace(' and then ', ' ');
  newSentence = newSentence.replace(' so ', ' ');
  newSentence = newSentence.replace(' such ', ' ');
  newSentence = newSentence.replace(' quite ', ' ');
  newSentence = newSentence.replace(' yet ', ' ');
  newSentence = newSentence.replace(' however ', ' ');
  newSentence = newSentence.replace(' that ', ' ');


  newSentence = newSentence.replace(' young ', ' ');
  newSentence = newSentence.replace(' tall ', ' ');
  newSentence = newSentence.replace(' short ', ' ');


  output.innerHTML = newSentence;
}

function variationTwo(sentence) {
  let output = document.querySelector('#variation-two');
  let newSentence = sentence;

  // modify the sentence
  newSentence = newSentence.replace('Old ', ' Aged over the years with sweet time, ');

  newSentence = newSentence.replace(' chair ', ' designated area for seated comfort ');
  newSentence = newSentence.replace(' looked ', ' glanced over at something in the distance ');
  newSentence = newSentence.replace(' another ', ' a different, but similarly structured ');
  newSentence = newSentence.replace(' framed ', ' displayed in the individualized, visual perspective ');

  newSentence = newSentence.replace('I ', 'The Human that is in this physical body');
  newSentence = newSentence.replace(' bored ', ' undergoing an surplus of psychological questioning as to what is reality right now ');
  newSentence = newSentence.replace(' ok ', ' very medium and I am unsure to state my exact thoughts because I may want to conceal my feelings ');
  newSentence = newSentence.replace(' okay ', ' very medium and I am unsure to state my exact thoughts because I may want to conceal my feelings ');
  newSentence = newSentence.replace(' happy ', ' over the moon in joy and excietment ');
  newSentence = newSentence.replace(' sad ', ' really not feeling these conflicting vibes ');
  
  newSentence = newSentence.replace(' good ', ' actually really on the up side of things ');
  newSentence = newSentence.replace(' you ', ' you, an incredible human being ');  


  output.innerHTML = newSentence;
}



function variationThree(sentence) {
  let output = document.querySelector('#variation-three');
  let newSentence = sentence;

  // modify the sentence
  newSentence = newSentence.replace(' old ', ' young ');
  newSentence = newSentence.replace('Old ', 'Young ');
  newSentence = newSentence.replace(' young ', ' old ');
  
  newSentence = newSentence.replace(' gradually ', ' abruptly ');
  newSentence = newSentence.replace(' abruptly ', ' gradually ');

  newSentence = newSentence.replace(' blackened ', ' lightened ');
  newSentence = newSentence.replace(' lightened ', ' blackened ');

  newSentence = newSentence.replace(' gradually ', ' abruptly ');
  newSentence = newSentence.replace(' blackened ', ' lightened ');

  newSentence = newSentence.replace(' young ', ' old ');
  newSentence = newSentence.replace(' tall ', ' short ');
  newSentence = newSentence.replace(' short ', ' tall ');

  newSentence = newSentence.replace(' rich ', ' poor ');
  newSentence = newSentence.replace(' poor ', ' rich ');

  newSentence = newSentence.replace(' happy ', ' sad ');
  newSentence = newSentence.replace(' sad ', ' happy ');

  newSentence = newSentence.replace(' expensive ', ' cheap ');
  newSentence = newSentence.replace(' cheap ', ' expensive ');  

  newSentence = newSentence.replace(' dark ', ' light ');
  newSentence = newSentence.replace(' light ', ' dark ');

  newSentence = newSentence.replace(' different ', ' similar ');
  newSentence = newSentence.replace(' similar ', ' different ');

  newSentence = newSentence.replace(' imporant ', ' not important ');
  newSentence = newSentence.replace(' not important ', ' important ');

  newSentence = newSentence.replace(' large ', ' small ');
  newSentence = newSentence.replace(' small ', ' large ');

  newSentence = newSentence.replace(' popular ', ' unpopular ');
  newSentence = newSentence.replace(' unpopular ', ' popular ');

  newSentence = newSentence.replace(' hot ', ' cold ');
  newSentence = newSentence.replace(' cold ', ' hot ');

  newSentence = newSentence.replace(' healthy ', ' unhealthy ');
  newSentence = newSentence.replace(' unhealthy ', ' healthy ');

  newSentence = newSentence.replace(' strong ', ' weak ');
  newSentence = newSentence.replace(' weak ', ' strong ');

  newSentence = newSentence.replace(' successful ', ' failure ');
  newSentence = newSentence.replace(' failure ', ' successful ');

  newSentence = newSentence.replace(' interesting ', ' boring ');
  newSentence = newSentence.replace(' boring ', ' interesting ');

  newSentence = newSentence.replace(' nice ', ' mean ');
  newSentence = newSentence.replace(' mean ', ' nice ');

  output.innerHTML = newSentence;
}



let input = document.querySelector('#sentence');

// recomput when the input text changes
input.addEventListener('input', function () {
  let sentence = input.value;
  variationExample(sentence);
  variationOne(sentence);
  variationTwo(sentence);
  variationThree(sentence);
});

// also comput when the page loads
variationExample(input.value);
variationOne(input.value);
variationTwo(input.value);
variationThree(input.value);
