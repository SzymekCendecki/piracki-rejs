let page14 = require("./page8.js");
module.exports.page4 = function(){
   $("#toPage4").on("click", ()=>{

      $.ajax({
         url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
         type: 'GET',
         dataType: 'json'
     }).done((data)=>{
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page4").show().empty().append(data.game[0].page4);
         $("#toPage14").show();
          page14.page14();

     }).fail(()=>{ console.log("coś nie bangla..."); });
    
   });
}
