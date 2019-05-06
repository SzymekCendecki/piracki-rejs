let page121 = require("./page121.js");

module.exports.page106= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage106").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page106").show().empty().append(data.game[0].page106);
      $("#toPage106").show();
    page121.page121();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}