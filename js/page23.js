//let page50 = require("./page50.js");
module.exports.page23= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage23").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page23").show().empty().append(data.game[0].page23);
      $("#toPage50").show();
      //  page50.page50();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}
