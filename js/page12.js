let page11 = require("./page11.js");
module.exports.page12 = function(){
   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage12").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page12").show().empty().append(data.game[0].page12);
      $("#toPage11").show();
      page11.page11();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });
}
