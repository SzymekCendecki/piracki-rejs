let page123 = require("./page123.js");

module.exports.page116= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage116").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page116").show().empty().append(data.game[0].page116);
      $("#toPage123").show();
    page123.page123();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}