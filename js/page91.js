let page14 = require("./page14.js");

module.exports.page91 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage91").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page91").show().empty().append(data.game[0].page91);
      $("#toPage14").show();
    page14.page14();

   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}