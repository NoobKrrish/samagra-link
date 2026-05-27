var arrLang = [];


$(document).ready(function () {
    $("#BtnLang").click(function () {
        let lang = localStorage.getItem("Lang");
        localStorage.setItem("Lang", lang == "HI" ? "EN" : "HI");
        loadsLanguage();
        return false;
    });
});
function initialize() {
    let lang = localStorage.getItem("Lang");
    if (lang == undefined || lang == "")
        localStorage.setItem("Lang", "HI");
    loadsLanguage();
};
function loadsLanguage() {
    let lang = localStorage.getItem("Lang");
    $("#BtnLang").text(lang == "HI" ? "English" : "हिंदी");

    $("[mlang^='lang']").each(function () {
        /*let LangVar = (this.className).replace('lang-', '');*/
        let LangVar = ($(this).attr("mlang")).replace('lang-', '');
        let Text = arrLang[lang][LangVar];
        if ($(this).find("label").length > 0)
            $(this).find("label").text(Text);
        else if ($(this).prop('tagName') == "INPUT")
            $(this).val(Text);
        else
            $(this).text(Text);
    });


}