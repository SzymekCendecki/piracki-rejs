let page42 = require("./page42.js");
module.exports.page52= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage52").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page52").show().empty().append(data.game[0].page52);
      $("#toPage42").show();
      page42.page42();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}