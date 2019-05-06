let page20 = require("./page20.js");

module.exports.page90 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage90").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page90").show().empty().append(data.game[0].page90);
      $("#toPage20").show();
    page20.page20();

   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}