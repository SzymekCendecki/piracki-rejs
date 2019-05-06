let page115 = require("./page115.js");

module.exports.page110= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage110").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page110").show().empty().append(data.game[0].page110);
      $("#toPage115").show();
    page115.page115();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}