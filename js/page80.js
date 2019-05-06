let page91 = require("./page91.js");

module.exports.page80 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage80").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page80").show().empty().append(data.game[0].page80);
      $("#toPage91").show();
    page91.page91();
  
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}