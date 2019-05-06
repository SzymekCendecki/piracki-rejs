let page15 = require("./page15.js");
module.exports.page63 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage63").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page63").show().empty().append(data.game[0].page63);
      $("#toPage15").show();
    page15.page15();
    });
}).fail(()=>{ console.log("coś nie bangla..."); });

}