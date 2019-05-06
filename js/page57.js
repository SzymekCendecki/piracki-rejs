let page77 = require("./page77.js");
let page90 = require("./page90.js");
module.exports.page57= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage57").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page57").show().empty().append(data.game[0].page57);
      $("#toPage77, #toPage90").show();
    page77.page77();
    page90.page90();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}