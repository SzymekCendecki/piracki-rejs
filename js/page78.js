let page50 = require("./page50.js");

module.exports.page78 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage78").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page78").show().empty().append(data.game[0].page78);
      $("#toPage50").show();
    page50.page50();

   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}