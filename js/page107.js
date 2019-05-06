let page66 = require("./page66.js");

module.exports.page107= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage107").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page107").show().empty().append(data.game[0].page107);
      $("#toPage66").show();
    page66.page66();
 
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}