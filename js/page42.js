let page96 = require("./page96.js");
module.exports.page42= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage42").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page42").show().empty().append(data.game[0].page42);
      $("#toPage96").show();
      page96.page96();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}