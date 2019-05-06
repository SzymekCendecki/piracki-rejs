let page47 = require("./page47.js");
module.exports.page36= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage36").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page36").show().empty().append(data.game[0].page36);
      $("#toPage47").show();
      page47.page47();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}
