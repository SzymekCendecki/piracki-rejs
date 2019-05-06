let page20 = require("./page96.js");
module.exports.page54= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage54").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page54").show().empty().append(data.game[0].page54);
      $("#toPage20").show();
      page20.page20();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}