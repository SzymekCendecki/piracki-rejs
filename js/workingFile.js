document.addEventListener("DOMContentLoaded", () => {
    //intro
    $.ajax({
        url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
        type: 'GET',
        dataType: 'json'
        }).done((data) => { $("#info").empty().append(data.intro[0].info);
        }).fail(()=>{ console.log("coś nie bangla..."); });                   
        
    $("#title, #subTitle, #warning, #task").hide();
    $("#info").on("click", ()=>{
        $("#info").remove();
        $("#title, #subTitle").show();
    });
    
    $("#title, #subTitle").on("click", ()=>{
        $("#title, #subTitle").remove();
        $("#warning").show();

        $.ajax({
            url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
            type: 'GET',
            dataType: 'json'
        }).done((data)=>{ 
            $("#warning").empty().append(data.intro[0].warning);
            $("#warning").on("click", ()=>{
                $("#warning").remove();
                $("#task").show();
                $.ajax({
                    url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
                    type: 'GET',
                    dataType: 'json'
                }).done((data)=>{
                    $("#task").empty().append(data.intro[0].task);
                    $(".start").on("click", ()=>{
                        $("#task").remove();
                    });
               }).fail(()=>{ console.log("coś nie bangla..."); });
            });
        }).fail(()=>{ console.log("coś nie bangla..."); });
    });
});
