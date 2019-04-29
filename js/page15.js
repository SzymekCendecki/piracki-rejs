let page33 = require("./page33.js");
let page24 = require("./page24.js");
module.exports.page15 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage15").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page15").show().empty().append(data.game[0].page15);
      $("#toPage33, #toPage24").show();
      page33.page33(); 
      page24.page24();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}
