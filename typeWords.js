var wowsk_typingLibrary_type;
var wowsk_typingLibrary_on=0;
function typeWords(wordsToType,el) {
  el.innerHTML+=wordsToType[wowsk_typingLibrary_on];
  wowsk_typingLibrary_on++;
  if(wowsk_typingLibrary_on===wordsToType.length) 
    window.clearInterval(wowsk_typingLibrary_type);
}
function startTyping(str,el,speed) {
  wowsk_typingLibrary_type=window.setInterval(
    function(){
      typeWords(str,el)    
    },
    speed
  )
}
