let page40 = require("./page40.js");
module.exports.page47 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage47").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page47").show().empty().append(data.game[0].page47);
      $("#toPage40").show();
      page40.page40();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}