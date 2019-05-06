let page70 = require("./page70.js");
module.exports.page121= function(){
   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage121").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page121").show().empty().append(data.game[0].page121);
      $("#toPage70").show();
    page70.page70();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}