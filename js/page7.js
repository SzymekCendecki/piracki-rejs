let page1 = require("./page1.js");
module.exports.page7 = function(){
   
   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
      $("#pages > p").hide();
      $("#page7").show().append(data.game[0].page7);
      $("#btns > button").hide();
      $("#toPage1").show();
  }).fail(()=>{ console.log("coś nie bangla..."); });

  page1.page1();
}