let page66 = require("./page66.js");
module.exports.page44= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage44").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page44").show().empty().append(data.game[0].page44);
      $("#toPage66").show();
      page66.page66();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}