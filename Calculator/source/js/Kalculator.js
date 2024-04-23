$(document).ready(function () {
    const input_ekran = $("#ekran");
    const click_off = $("#btn-off");
    const click_on = $("#btn-on");
    const click_ce = $("#btn-ce");
    const click_ac = $("#btn-ac");
    const click_7 = $("#btn-7");
    const click_8 = $("#btn-8");
    const click_9 = $("#btn-9");
    const click_x = $("#btn-x");
    const click_4 = $("#btn-4");
    const click_5 = $("#btn-5");
    const click_6 = $("#btn-6");
    const click_bulish = $("#btn-/");
    const click_1 = $("#btn-1");
    const click_2 = $("#btn-2");
    const click_3 = $("#btn-3");
    const click_qushish = $("#btn-+");
    const click_0 = $("#btn-0");
    const click_nuqta = $("#btn-.");
    const click_teng = $("#btn-=");
    const click_minus = $("#btn--");

    click_off.click(function () {
        input_ekran.css("background-color", "black");
    });
    click_on.click(function () {
        input_ekran.css("backgroun-color", "white");

    });
    click_0.click(function () {
        input_ekran.val("0");
    });

});

