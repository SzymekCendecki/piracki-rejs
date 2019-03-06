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
        $("#info").addClass("hideBlur");
        setTimeout(()=>{
            $("#info").remove();
            $("#title, #subTitle").show().addClass("showBlur");
        }, 2500);
    });
    
    $("#title, #subTitle").on("click", ()=>{
        $("#title, #subTitle").removeClass("showBlur");
        $("#title, #subTitle").addClass("hideBlur");
        setTimeout(()=>{
            $("#title, #subTitle").remove();
            $("#warning").show();

            $.ajax({
                url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
                type: 'GET',
                dataType: 'json'
            }).done((data)=>{ 
                $("#warning").empty().append(data.intro[0].warning).addClass("showBlur");
                $("#warning").on("click", ()=>{
                    $("#warning").removeClass("showBlur").addClass("hideBlur");
                    setTimeout(()=>{ 
                        $("#warning").remove();
                        $("#task").show().addClass("showBlur");

                        $.ajax({
                            url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
                            type: 'GET',
                            dataType: 'json'
                        }).done((data)=>{
                            $("#task").empty().append(data.intro[0].task).addClass("showBlur");
                            $(".start").on("click", ()=>{
                                $("#task").removeClass("showBlur").addClass("hideBlur");
                                setTimeout(()=>{
                                    $("#task").remove();
                                }, 2050);
                            });
                        }).fail(()=>{ console.log("coś nie bangla..."); });
                    }, 2050);
                
                });
            }).fail(()=>{ console.log("coś nie bangla..."); });
        }, 2050);
    });
});
