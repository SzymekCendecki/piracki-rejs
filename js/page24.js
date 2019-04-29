let page14 = require("./page14.js");
module.exports.page24 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage24").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page24").show().empty().append(data.game[0].page24);
      $("#toPage14").show();
      page14.page14();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}
