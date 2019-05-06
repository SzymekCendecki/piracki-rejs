let page80 = require("./page80.js");

module.exports.page77 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage77").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page77").show().empty().append(data.game[0].page77);
      $("#toPage80").show();
    page80.page80();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}