function inputText(el, etype, text) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
    el.value = text;
  }
}
 
  module.exports = {inputText};