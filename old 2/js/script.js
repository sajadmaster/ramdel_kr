var item = document.getElementsByClassName("m_item");
var icon = document.getElementsByClassName("mi_icon");
var m_txt = document.getElementsByClassName("mi_txt");
var btn_pop = document.getElementsByClassName("s3_pcitem");
var btn_close = document.getElementsByClassName("pm_btnClose");
var popup = document.getElementsByClassName("popup");
var rd_p = document.getElementsByName("rd_portfolio");
var popups = document.getElementsByClassName("popups")[0];
var isclick = false;

for (let index = 0; index < item.length; index++) {
    item[index].addEventListener("click", function () {
        buttons_menu(index);
    });
}

var c = null;
function buttons_menu(index) {
    switch (index) {
        case 0:
            icon[0].style.backgroundImage = "url(img/home1.svg)";
            break;
        case 1:
            icon[1].style.backgroundImage = "url(img/user1.svg)";
            break;
        case 2:
            icon[2].style.backgroundImage = "url(img/experience1.svg)";
            break;
        case 3:
            icon[3].style.backgroundImage = "url(img/curriculum-vitae1.svg)";
            break;
        case 4:
            icon[4].style.backgroundImage = "url(img/letter1.svg)";
            break;

        default:
            break;
    }

    m_txt[index].style.fontWeight = "600";
    if (c != null) {
        buttons_menu_back(c);
        m_txt[c].style.fontWeight = "300";
    }
    if (isclick != true) {
        isclick = true;
    }
    c = index;
}

function buttons_menu_back(index) {
    switch (index) {
        case 0:
            icon[0].style.backgroundImage = "url(img/home.svg)";
            break;
        case 1:
            icon[1].style.backgroundImage = "url(img/user.svg)";
            break;
        case 2:
            icon[2].style.backgroundImage = "url(img/experience.svg)";
            break;
        case 3:
            icon[3].style.backgroundImage = "url(img/curriculum-vitae.svg)";
            break;
        case 4:
            icon[4].style.backgroundImage = "url(img/letter.svg)";
            break;

        default:
            break;
    }
}


function doc(id, run) {
    if (run && (typeof run == "function"))
        document.getElementById(id).addEventListener("click", run);
}

function display(id) {
    document.getElementById("Popup").style.display = "block";
    motion_show(document.getElementById(id));
}

for (let index = 1; index < btn_pop.length + 1; index++) {
    doc("s3_pcitem_" + index, function () {
        display("pop_" + index);
    });
}

var ispop = true;

for (let index = 0; index < btn_close.length; index++) {
    btn_close[index].addEventListener("click", function () {
        closePopup(index);
    });
}

popups.addEventListener("click", function () {
    for (let index = 0; index < btn_close.length; index++) {
        if (ispop != false) {
            if (popup[index].style.display == "flex") {
                closePopup(index);
            }
        }
        else{
            ispop = true;
            break;
        }
    }
});

for (let index = 0; index < popup.length; index++) {
    popup[index].addEventListener("click", function () {
        ispop = false;
        closePopup(index);
    });
};

function closePopup(index) {
    if (ispop != false) {
        popup[index].style.display = "none";
        document.getElementById("Popup").style.display = "none";
    }
}

for (let index = 0; index < rd_p.length; index++) {
    rd_p[index].addEventListener("click", function () {
        portfolio(index);
    });

}

portfolio(0);
function portfolio(y) {
    var att = document.getElementById("rd_p" + y).attributes;
    switch (y) {
        case 0:
            for (var x = 0; x < btn_pop.length; x++) {
                motion_show(btn_pop[x]);
            }
            break;
        case 1:
            ex_portfolio();
            motion_show(btn_pop[0]);
            motion_show(btn_pop[4]);
            motion_show(btn_pop[5]);
            motion_show(btn_pop[9]);
            motion_show(btn_pop[10]);

            break;
        case 2:
            ex_portfolio();
            motion_show(btn_pop[1]);
            motion_show(btn_pop[2]);

            break;
        case 3:
            ex_portfolio();
            motion_show(btn_pop[12]);
            motion_show(btn_pop[16]);

            break;
        case 4:
            ex_portfolio();
            motion_show(btn_pop[11]);
            motion_show(btn_pop[13]);
            motion_show(btn_pop[15]);
            motion_show(btn_pop[14]);

            break;
        case 5:
            ex_portfolio();
            motion_show(btn_pop[3]);
            motion_show(btn_pop[6]);
            motion_show(btn_pop[7]);
            motion_show(btn_pop[8]);
            break;
        default:
            break;
    }
}

function ex_portfolio() {
    for (var x = 0; x < btn_pop.length; x++) {
        motion_exit(btn_pop[x]);
    }
}

function motion_exit(element) {
    element.style.opacity = 0;
    setInterval(da(), 300);

    function da() {
        element.style.display = "none";
        clearInterval(da);
    }
}

function motion_show(sa) {
    sa.style.opacity = 0;
    sa.style.display = "flex";
    sa.style.opacity = 1;
}

as();

function as() {
    if (document.querySelector("html").clientWidth >= 1472) {
        let x = document.getElementsByClassName("s1p_pic")[0].attributes;
        for (let index = 0; index < x.length; index++) {
            if (x[index].name == "src")
                x[index].value = "img/Person2-full.png";
        }
    }

    if (document.querySelector("html").clientWidth < 1472) {
        let x = document.getElementsByClassName("s1p_pic")[0].attributes;
        for (let index = 0; index < x.length; index++) {
            if (x[index].name == "src")
                x[index].value = "img/person2.png";
        }
    }
}