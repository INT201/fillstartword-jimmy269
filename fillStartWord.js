const { template } = require('@babel/core')

function fillStartWord(startWord,word) {
  if(word == null){
    return "undefined"
  }
  else if(word == undefined){
    return "undefined"
  }
 else if(startWord == 'first'){
  return word
 }
 else if(startWord == 'second'){
  return word
 }
 else if(startWord == 'third'){
  return word
 }
else {
  return startWord+word
}
}

// console.log(fillStartWord("test","naja"))


module.exports = fillStartWord
