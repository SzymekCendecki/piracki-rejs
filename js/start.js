let page8 = require("./page8.js");

module.exports.start = function(){
    $("#start").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
            type: 'GET',
            dataType: 'json'
        }).done((data)=>{
            $("#equip").remove();

            $("#pages > p").hide();
            $("#btns > button").hide();
            
            $("#page1").show().append(data.game[0].page1);
            $("#toPage8").show();

            $("#toPage8").on("click", ()=>{
                $("#pages > p").hide();
                $("#btns > button").hide();
                $("#page8").show().append(data.game[0].page8);
                $("#toPage7, #toPage12").show();
                page8.page8();
            })
        }).fail(()=>{ console.log("coś nie bangla..."); });
     
    });
  }