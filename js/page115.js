let page100 = require("./page100.js");
module.exports.page115= function(){
   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage115").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page115").show().empty().append(data.game[0].page115);
      $("#toPage100").show();
    page100.page100();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}