let page50 = require("./page50.js");
module.exports.page32= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage32").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page32").show().empty().append(data.game[0].page32);
      $("#toPage50").show();
      page50.page50();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}
