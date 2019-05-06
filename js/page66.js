let page72 = require("./page50.js");
module.exports.page66 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage66").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page66").show().empty().append(data.game[0].page66);
      $("#toPage50, #toPage36").show();
    page72.page72();

   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}