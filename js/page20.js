let page4 = require("./page4.js");
let page15 = require("./page15.js");
module.exports.page20 = function(){
   
   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage20").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page20").show().empty().append(data.game[0].page20);
      $("#toPage4, #toPage15").show();
      page4.page4();
      page15.page15();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}
