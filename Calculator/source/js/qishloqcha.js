// const input_ekran = document.getElementById("ekran");
// const click_off = document.getElementById("btn-off");
// const click_on = document.getElementById("btn-on");
// const click_ce = document.getElementById("btn-ce");
// const click_ac = document.getElementById("btn-ac");
// const click_7 = document.getElementById("btn-7");
// const click_8 = document.getElementById("btn-8");
// const click_9 = document.getElementById("btn-9");
// const click_x = document.getElementById("btn-x");
// const click_4 = document.getElementById("btn-4");
// const click_5 = document.getElementById("btn-5");
// const click_6 = document.getElementById("btn-6");
// const click_bulish = document.getElementById("btn-/");
// const click_1 = document.getElementById("btn-1");
// const click_2 = document.getElementById("btn-2");
// const click_3 = document.getElementById("btn-3");
// const click_qushish = document.getElementById("btn-+");
// const click_0 = document.getElementById("btn-0");
// const click_nuqta = document.getElementById("btn-.");
// const click_teng = document.getElementById("btn-=");
// const click_minus = document.getElementById("btn--");


function _off() {
    document.getElementById("ekran").style.backgroundColor = "black";
    document.getElementById("btn-off").style.display = "none";
    document.getElementById("btn-on").style.display = "block";
};
function _on() {
    document.getElementById("ekran").style.backgroundColor = "white";
    document.getElementById("btn-on").style.display = "none";
    document.getElementById("btn-off").style.display = "block";
};
function _ce() {
    document.getElementById("btn-on").style.display = "block";
    let clear = document.getElementById("ekran");
    clear.value = "";
};
function _ac() {
    document.getElementById("btn-on").style.display = "block";
    let clear_all = document.getElementById("ekran");
    clear_all.value = "";
    document.getElementById("ekran").removeChild();
};


// const summCalculate = (number_1, operator, number_2) => {
//     let number_1 = document.getElementById("ekran").value;
//     let result = ""
//     if (operator === "add") {
//         result = number_1 + number_2;
//     } else if (operator === "subtract") {
//         result = number_1 + number_2;
//     } else if (operator === "multipy") {
//         result = number_1 * number_2;
//     } else if (operator === "divide") {
//         result = number_1 / number_2;
//     }
//     return result;
// }
function _7() {
    let cl_7 = document.getElementById("ekran");
    cl_7.value += "7";
}
function _8() {
    let cl_8 = document.getElementById("ekran");

    cl_8.value += "8";
}
function _9() {
    let cl_9 = document.getElementById("ekran");
    cl_9.value += '9';
}
function _4() {
    let cl_4 = document.getElementById("ekran");
    cl_4.value += '4';
}
function _5() {
    let cl_5 = document.getElementById("ekran");
    cl_5.value += '5';
}
function _6() {
    let cl_6 = document.getElementById("ekran");
    cl_6.value += '6';
}
function _1() {
    let cl_1 = document.getElementById("ekran");
    cl_1.value += '1';
}
function _2() {
    let cl_2 = document.getElementById("ekran");
    cl_2.value += '2';
}
function _3() {
    let cl_3 = document.getElementById("ekran");
    cl_3.value += '3';
}
function _0() {
    let cl_0 = document.getElementById("ekran")
    cl_0.value += '0';
}

function n_1_summ1() {
    let n_1
    if (n_1 == _1()) {
        return n_1 = '1'

    } else if (n_1 == _2()) {
        return n_1 = '2'
    } else if (n_1 == _3()) {
        return n_1 = '3'
    }
};
function n_2_summ2() {
    let n_2
    if (n_2 == _1()) {
        return n_2 = '1'
    } else if (n_2 == _2()) {
        return n_2 = '2'
    } else if (n_2 == _3()) {
        return n_2 = '3';
    }

};
function oper(_plus, _minus) {
    let summ
    if (summ == _plus()) {
        return n_1_summ1() + n_2_summ2();
    }
}
function jami(n_1_summ1, oper, n_2_summ2) {
    if (oper == n_1_summ1() + n_2_summ2()) {
        n_1_summ1() + n_2_summ2();
    }
}
function _plus() {
    let cl_plus = document.getElementById("ekran");
    cl_plus.value += "+";
}
function _minus() {
    let cl_minus = document.getElementById("ekran");
    cl_minus.value += "-";
}
function _kupaytma() {
    let cl_kupaytma = document.getElementById("ekran");
    cl_kupaytma.value += "*"
}
function _bulish() {
    let cl_bulish = document.getElementById("ekran");
    cl_bulish.value += "/";
}

function _nuqta() {
    let cl_nuqta = document.getElementById("ekran");
    cl_nuqta.value += ".";
}


function key_c(event) {

    if (event.key == "c") {
        _ce()
    };
    if (event.key == 7) {
        _7()
    };
    if (event.key == 8) {
        _8()
    };
    if (event.key == 9) {
        _9()
    };
    if (event.key == 4) {
        _4()
    };
    if (event.key == 5) {
        _5()
    }
    if (event.key == 6) {
        _6()
    };
    if (event.key == 1) {
        _1()
    };
    if (event.key == 2) {
        _2()
    }
    if (event.key == 3) {
        _3()
    };
    if (event.key == 0) {
        _0()
    };
    if (event.key == "+") {
        _plus()
    }
    if (event.key == "Enter") {
        f_el_1()
    }
    if (event.key == ".") {
        _nuqta()
    }
    if (event.key == "-") {
        _minus()
    }
}