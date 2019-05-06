module.exports.page123= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage123").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page123").show().empty().append(data.game[0].page123);
    });
}).fail(()=>{ console.log("coś nie bangla..."); });

}