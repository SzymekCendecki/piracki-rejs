let start = require("./start.js");

module.exports.rulez = function(){
    $(".one").on("click", ()=>{
        $("#vehicleActive").remove();
        $.ajax({
            url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
            type: 'GET',
            dataType: 'json'
        }).done((data)=>{
            $("#rulez").show().empty().append(data.intro[0].rulez);
            $("#equip").addClass("one").on("click", ()=>{
                $("#rulez").remove();
                $("#equip").show();
                $.ajax({
                    url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
                    type: 'GET',
                    dataType: 'json'
                }).done((data)=>{
                    $("#equip").append(data.intro[0].equip);
                    $("#dataBase").on("click", ()=>{
                        $.ajax({
                            url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
                            type: 'GET',
                            dataType: 'json'
                        }).done((data)=>{
                            $("#dataBaseText").empty().append(data.dataBank[0].info);
                            $("#dataBase").prop("display", true);
                        }).fail(()=>{ console.log("coś nie bangla..."); });
                    });

                    start.start();

                }).fail(()=>{ console.log("coś nie bangla..."); });
            });
        }).fail(()=>{ console.log("coś nie bangla..."); });
    });
  }