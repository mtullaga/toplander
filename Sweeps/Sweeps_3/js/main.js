$(document).ready(function () {
    function t(t) {
        var e = (new Date).getFullYear();
        return void 0 === t ? e : e - t
    }
    $(".nameCo").text(item.name);
    $(".years").text(t(item.founded));
        $(".prizeT").text(item.prize);
        $(".price").text(item.priceTrial);
    for (var t = 0; t <= item.prizeUser.length; t++) $(".prizeUser" + t).text(item.prizeUser[t]);

    item.priceTrial !== ' ' && item.priceTrial.length > 0 ? $(".newclr2.yTrial").css("display", "block") : $(".newclr2.noTrial").css("display", "block")
});