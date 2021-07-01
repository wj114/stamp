function replaceAll(e, a, o) {
    for (; o.indexOf(e) > -1; ) o = o.replace(e, a);
    return o;
}
function numberWithCommas(e) {
    return e
        .toString()
        .replace(/,/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function changeState(e) {
    $("#state-select").val(e), $("#state-select").trigger("change");
}
function getState() {
    var e = $("#stamp-src").data("state");
    return ("" != e && "All" != e && e) || (e = "NSW"), e;
}
!(function () {
    var e = (new Date().getTime(), document.createElement("SCRIPT"));
    (e.src = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"), (e.type = "text/javascript"), document.getElementsByTagName("head")[0].appendChild(e);
    var a = function (e) {
        window.jQuery
            ? e(jQuery)
            : window.setTimeout(function () {
                  a(e);
              }, 20);
    };
    a(function (e) {
        e(function () {
            var a = 1e4,
                o = "",
                t = "all",
                r = "",
                s = "",
                l = "",
                n = 0,
                c = "#stamp-duty-calculator";



            e.ajax({
                url: "http://localhost:8080/StampDuty.html",
                //url: "http://calculatorsonline.com.au/external/!main/stamp_duty_calculator/stamp_duty.html",
                dataType: "html", //initially is 'html',can be put as 'jsonp'
                data: l,
                timeout: a,
                success: function (a) {
                    e(c).prepend(a);
                },
                error: function (a, o, t) {
                    var r = "<b>ERROR:</b> Can't load CSS file. Try to refresh your web browser or visit <a href='http://stampdutycalc.com.au' title='Stamp Duty'>stampdutycalc.com.au</a>";
                    e("#fountainG h4").html(r);
                },
                //headers: {
                    //'Access-Control-Allow-Origin': '*'
                //},
             }),
                e.ajax({
                    url: "http://calculatorsonline.com.au/external/!main/stamp_duty-backup.css",
                    timeout: a,
                    success: function (l) {
                        e("head").append("<link href='//calculatorsonline.com.au/external/!main/stamp_duty.css' rel='stylesheet' type='text/css'>"),
                            e.ajax({
                                dataType: "json",
                                url: "http://calculatorsonline.com.au/stamp_duty/get_json_black_list",
                                data: o,
                                timeout: a,
                                success: function (l) {
                                    var c = window.location.hostname;
                                    for (o = l, i = 0; i < o.length; i++) (o[i].url = o[i].url.replace("http://", "")), (o[i].url = o[i].url.replace("www.", "")), c == o[i].url && (n = 1);
                                    if (0 == n)
                                        e.ajax({
                                            dataType: "json",
                                            url: "http://calculatorsonline.com.au/stamp_duty/get_json_states/" + t,
                                            data: s,
                                            timeout: a,
                                            success: function (o) {
                                                (s = o),
                                                    e.ajax({
                                                        dataType: "json",
                                                        url: "http://calculatorsonline.com.au/stamp_duty/get_json_states_data/",
                                                        data: r,
                                                        timeout: a,
                                                        success: function (a) {
                                                            function o(a, o) {
                                                                console.log("           ----====----                "), console.log("CURERRENT STATE: " + o);
                                                                var t = 0,
                                                                    r = 0,
                                                                    s = e("#stamp-property-value").val(),
                                                                    l = 0,
                                                                    n = 0,
                                                                    i = 0,
                                                                    c = 0,
                                                                    p = 0,
                                                                    m = 0,
                                                                    _ = "",
                                                                    f = "FALSE",
                                                                    u = "",
                                                                    d = "FALSE",
                                                                    E = 0,
                                                                    h = 0,
                                                                    F = 0,
                                                                    R = 0;
                                                                if (((s = replaceAll(",", "", s)), (s = parseFloat(s)), e("#stamp-primary-residence").hasClass("checked"))) {
                                                                    var _ = "PRIMARY";
                                                                    console.log("PROPERTY TYPE: PRIMARY RESIDENCE!");
                                                                } else {
                                                                    var _ = "INVESTMENT";
                                                                    console.log("PROPERTY TYPE: INVESTMENT!");
                                                                }
                                                                if (e("#stamp-first-home-yes").hasClass("checked")) {
                                                                    var y = "TRUE";
                                                                    console.log("FIRST HOME BUYER: YES!");
                                                                } else {
                                                                    var y = "FALSE";
                                                                    console.log("FIRST HOME BUYER: NO!");
                                                                }
                                                                if (e(".state-module").eq(2).is(":visible"))
                                                                    if (e("#purchasing-1-new-home").hasClass("checked")) {
                                                                        var u = "NEW";
                                                                        console.log("PURCHASING: NEW HOME!");
                                                                    } else if (e("#purchasing-1-established-home").hasClass("checked")) {
                                                                        var u = "ESTABLISHED";
                                                                        console.log("PURCHASING: ESTABLISHED HOME!");
                                                                    } else {
                                                                        var u = "VACANT";
                                                                        console.log("PURCHASING: VACANT LAND!");
                                                                    }
                                                                if (e(".state-module").eq(3).is(":visible"))
                                                                    if (e("#purchasing-2-established-home").hasClass("checked")) {
                                                                        var u = "ESTABLISHED";
                                                                        console.log("PURCHASING: ESTABLISHED HOME!");
                                                                    } else if (e("#purchasing-2-newly-constructed").hasClass("checked")) {
                                                                        var u = "NEWLY";
                                                                        console.log("PURCHASING: NEWLY CONSTRUCTED HOME!");
                                                                    } else {
                                                                        var u = "VACANT";
                                                                        console.log("PURCHASING: VACANT LAND!");
                                                                    }
                                                                if (e(".state-module").eq(4).is(":visible"))
                                                                    if (e("#purchasing-3-established-home").hasClass("checked")) {
                                                                        var u = "ESTABLISHED";
                                                                        console.log("PURCHASING: ESTABLISHED HOME!");
                                                                    } else {
                                                                        var u = "NEWLY";
                                                                        console.log("PURCHASING: NEWLY CONSTRUCTED HOME!");
                                                                    }
                                                                if (e("#eligible-pensioner-yes").hasClass("checked")) {
                                                                    var g = "TRUE";
                                                                    console.log("ELIGIBLE PENSIONER: YES!");
                                                                } else {
                                                                    var g = "FALSE";
                                                                    console.log("ELIGIBLE PENSIONER: NO!");
                                                                }
                                                                if ((console.log("PURCHASING: " + u), e("#foreign-purchaser-yes").hasClass("checked"))) {
                                                                    var T = "TRUE";
                                                                    console.log("FOREIGN BUYER: YES!");
                                                                } else {
                                                                    var T = "FALSE";
                                                                    console.log("FOREIGN BUYER: NO!");
                                                                }
                                                                (e("#foreign-purchaser-yes").hasClass("checked") && e("#stamp-foreign-buyers-duty").parent().parent().hasClass("hidden")) ||
                                                                    e("#stamp-foreign-buyers-duty").parent().parent().addClass("hidden");
                                                                var A = e("#total-income").val();
                                                                console.log("TOTAL INCOME OF ALL PURCHASERS: $" + A + "!");
                                                                var C = e("#children-select option:selected").val();
                                                                console.log("DEPENDANT CHILDREN: " + C + "!");
                                                                var v = e("#property-location option:selected").val();
                                                                console.log("URBAN AREA: " + v + "!");
                                                                var N = e("#property-location-s option:selected").val();
                                                                console.log("URBAN AREA: " + v + "!");
                                                                var S = e("#payment-method option:selected").val();
                                                                console.log("PAYMENT METHOD: " + S + "!");
                                                                var I = 0;
                                                                for (b = 0; b < a.length; b++)
                                                                    if (a[b].state_id == o.toString()) {
                                                                        var P = a[b].type,
                                                                            M = a[b]["for"];
                                                                        if ((console.log("FOREIGN BUYERS DUTY PERCENTAGE:" + R), console.log("FOREIGN BUYERS DUTY:" + F), 1 == o))
                                                                            if ("mortgage_registration_fee" == P) t = a[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == P) r = a[b].fixed_amount;
                                                                            else if ("general_rate" == P) {
                                                                                var U = "TRUE";
                                                                                if ("TRUE" == U) {
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (O = parseFloat(O)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (L = parseFloat(L)),
                                                                                        (I += 1),
                                                                                        console.log("!!!!!!!!!!!!!!!!!sdfsdfs"),
                                                                                        console.log("(stampPropertyValue > income_from && stampPropertyValue <= income_to)"),
                                                                                        console.log("(" + s + " > " + x + " && " + s + " <= " + O + ")"),
                                                                                        s >= x &&
                                                                                            O >= s &&
                                                                                            ((stampPropertyValueCeiled = 100 * Math.ceil(s / 100)),
                                                                                            console.log("====== TRUE ======"),
                                                                                            console.log("(((" + s + " - " + x + ") * " + L + ")/100)  + " + Y),
                                                                                            0 != x && (x -= 1),
                                                                                            (l = 0 != Y ? ((stampPropertyValueCeiled - x) * L) / 100 + Y : (s * L) / 100),
                                                                                            console.log(l));
                                                                                }
                                                                            } else if ("first_home_owner_grant" == P && "PRIMARY" == _ && "TRUE" == y) {
                                                                                if ("NEW" == u || "VACANT" == u) {
                                                                                    var O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)), (Y = parseFloat(Y)), (i = O >= s ? Y : 0);
                                                                                }
                                                                            } else if ("pensioner_duty_concession" == P && "vacant_block" == M) {
                                                                                if ("TRUE" == g && "VACANT" == u && "PRIMARY" == _) {
                                                                                    console.log("PENSIONER DUTY CONCESSION: VACANT BLOCK");
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (O = parseFloat(O)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (L = parseFloat(L)),
                                                                                        s >= x &&
                                                                                            O >= s &&
                                                                                            (0 != x && (x -= 1),
                                                                                            (stampPropertyValueCeiled = 100 * Math.ceil(s / 100)),
                                                                                            (p = ((stampPropertyValueCeiled - x) * L) / 100),
                                                                                            Y > p && (p = Y),
                                                                                            (l = p));
                                                                                }
                                                                            } else if ("pensioner_duty_concession" == P && "residential_home" == M) {
                                                                                if ("TRUE" == g && "PRIMARY" == _ && "VACANT" != u) {
                                                                                    console.log("PENSIONER DUTY CONCESSION: RESIDENTIAL HOME");
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (O = parseFloat(O)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (L = parseFloat(L)),
                                                                                        s >= x && O >= s && (console.log("apply"), 0 != x && (x -= 1), (p = ((s - x) * L) / 100), Y > p && (p = Y), (l = p));
                                                                                }
                                                                            } else if ("home_buyer_concession" == P && "income_threshold" == M) {
                                                                                if ("TRUE" == y) {
                                                                                    console.log("INCOME THRESHOLD");
                                                                                    var V = a[b].income_from,
                                                                                        D = a[b].fixed_amount,
                                                                                        H = e("#total-income").val(),
                                                                                        w = e("#children-select option:selected").val();
                                                                                    (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (H = replaceAll(",", "", H)),
                                                                                        (H = parseFloat(H)),
                                                                                        console.log("CHILDREN: " + V),
                                                                                        console.log("INCOME: " + D),
                                                                                        console.log("SELECTED CHILDREN: " + w),
                                                                                        console.log("SELECTED INCOME: " + H),
                                                                                        w == V && D >= H && (console.log("FOUUND!"), (f = "TRUE"));
                                                                                }
                                                                            } else if ("home_buyer_concession" == P && "property_value_threshold" == M) {
                                                                                if ("TRUE" == y && "FALSE" == g && "TRUE" == f && "PRIMARY" == _ && "NEW" == u) {
                                                                                    console.log("PENSIONER DUTY CONCESSION: NEW HOME");
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    if (((x = parseFloat(x)), (O = parseFloat(O)), (Y = parseFloat(Y)), (L = parseFloat(L)), s >= x && O >= s)) {
                                                                                        0 != x && (x -= 1);
                                                                                        var W = ((s - x) * L) / 100;
                                                                                        Y > W && (W = Y), (l = W);
                                                                                    }
                                                                                }
                                                                            } else if ("home_buyer_concession" == P && "vacant_block" == M) {
                                                                                if ("TRUE" == y && "TRUE" == f && "VACANT" == u && "PRIMARY" == _) {
                                                                                    console.log("PENSIONER DUTY CONCESSION: RESIDENTIAL HOME");
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (O = parseFloat(O)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (L = parseFloat(L)),
                                                                                        console.log("home concession:" + f),
                                                                                        s >= x &&
                                                                                            O >= s &&
                                                                                            (0 != x && (x -= 1),
                                                                                            (stampPropertyValueCeiled = 100 * Math.ceil(s / 100)),
                                                                                            (p = ((stampPropertyValueCeiled - x) * L) / 100),
                                                                                            Y > p && (p = Y),
                                                                                            (l = p));
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == P &&
                                                                                    "TRUE" == T &&
                                                                                    ((R = a[b].fixed_amount), 0 != R && ((F = (s * R) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                        else if (2 == o)
                                                                            if ("mortgage_registration_fee" == a[b].type) t = a[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == a[b].type) r = a[b].fixed_amount;
                                                                            else if ("general_rate" == P) {
                                                                                var U = "TRUE";
                                                                                if ("TRUE" == U) {
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (O = parseFloat(O)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (L = parseFloat(L)),
                                                                                        (I += 1),
                                                                                        s >= x &&
                                                                                            O >= s &&
                                                                                            ((stampPropertyValueCeiled = 100 * Math.ceil(s / 100)),
                                                                                            console.log("====== TRUE ======"),
                                                                                            console.log("(((" + s + " - " + x + ") * " + L + ")/100)  + " + Y),
                                                                                            0 != x && (x -= 1),
                                                                                            (l = ((stampPropertyValueCeiled - x) * L) / 100 + Y));
                                                                                }
                                                                            } else if ("first_home_owner_grant" == P) {
                                                                                if ("NEW" == u) {
                                                                                    if ("TRUE" == y && "PRIMARY" == _) {
                                                                                        var x = a[b].income_from,
                                                                                            O = a[b].income_to,
                                                                                            Y = a[b].fixed_amount;
                                                                                        (x = parseFloat(x)), (O = parseFloat(O)), (Y = parseFloat(Y)), (i = s >= x && O >= s ? Y : 0);
                                                                                    }
                                                                                } else if ("VACANT" == u && "TRUE" == y && "PRIMARY" == _) {
                                                                                    var x = 0,
                                                                                        O = 75e4,
                                                                                        Y = 1e4;
                                                                                    (x = parseFloat(x)), (O = parseFloat(O)), (Y = parseFloat(Y)), (i = s >= x && O >= s ? Y : 0);
                                                                                }
                                                                            } else if ("new_home_grant" == P && "vacant_land" == M) {
                                                                                if ("VACANT" == u && "FALSE" == y) {
                                                                                    console.log("NEW HOME GRANT: VACANT LAND");
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)), (O = parseFloat(O)), (Y = parseFloat(Y)), (L = parseFloat(L)), s >= x && O >= s && 0 == i && (c = ((s - x) * L) / 100 + Y);
                                                                                }
                                                                            } else if ("new_home_grant" == P && "newly_constructed_home" == M) {
                                                                                if ("NEW" == u && "FALSE" == y) {
                                                                                    console.log("NEW HOME GRANT: A NEW HOME");
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)), (O = parseFloat(O)), (Y = parseFloat(Y)), (L = parseFloat(L)), s >= x && O >= s && 0 == i && (c = ((s - x) * L) / 100 + Y);
                                                                                }
                                                                            } else if ("first_home_concession_rate" == P && "newly_constructed_home" == M) {
                                                                                if ("PRIMARY" == _ && "NEW" == u && "TRUE" == y) {
                                                                                    console.log("FIRST HOME BUYER ASSISTANCE: A NEW HOME");
                                                                                    var x = 0,
                                                                                        O = 1e6,
                                                                                        Y = 161340,
                                                                                        L = 0.201675;
                                                                                    (x = parseFloat(x)),
                                                                                        (O = parseFloat(O)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (L = parseFloat(L)),
                                                                                        s >= x && O >= s && ((l = s * L - Y), 0 > l && (l = 0)),
                                                                                        8e5 > s && (l = 0);
                                                                                } else if ("PRIMARY" == _ && "ESTABLISHED" == u && "TRUE" == y) {
                                                                                    console.log("FIRST HOME BUYER ASSISTANCE: ESTABLISHED HOME");
                                                                                    var x = 0,
                                                                                        O = 8e5,
                                                                                        Y = 135785,
                                                                                        L = 0.2089;
                                                                                    (x = parseFloat(x)),
                                                                                        (O = parseFloat(O)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (L = parseFloat(L)),
                                                                                        s >= x && O >= s && ((l = s * L - Y), 0 > l && (l = 0)),
                                                                                        65e4 > s && (l = 0);
                                                                                }
                                                                            } else if ("first_home_concession_rate" == P && "vacant_land" == M) {
                                                                                if ("PRIMARY" == _ && "VACANT" == u && "TRUE" == y) {
                                                                                    console.log("NEW HOME GRANT: A NEW HOME");
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)), (O = parseFloat(O)), (Y = parseFloat(Y)), (L = parseFloat(L)), s >= x && O >= s && ((l = s * L - Y), 0 > l && (l = 0));
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == P &&
                                                                                    "TRUE" == T &&
                                                                                    ((R = a[b].fixed_amount), 0 != R && ((F = (s * R) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                        else if (3 == o)
                                                                            if ("mortgage_registration_fee" == a[b].type) t = a[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == a[b].type) r = a[b].fixed_amount;
                                                                            else if ("general_rate" == P) {
                                                                                var U = "FALSE";
                                                                                if (("INVESTMENT" == _ ? (U = "TRUE") : "PRIMARY" == _ && (U = "TRUE"), "TRUE" == U)) {
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    if (((x = parseFloat(x)), (O = parseFloat(O)), (Y = parseFloat(Y)), (L = parseFloat(L)), (I += 1), s >= x && O >= s)) {
                                                                                        if (1 != I) l = (s * L) / 100;
                                                                                        else {
                                                                                            var B = s / 1e3;
                                                                                            l = 0.06571441 * B * B + 15 * B;
                                                                                        }
                                                                                        console.log("Stamp Duty:" + l);
                                                                                    }
                                                                                } else console.log("==---==" + a[b].fixed_amount + "  =  " + b), (l = parseFloat(a[11].fixed_amount));
                                                                            } else if ("first_home_owner_grant" == P && "simple" == M) {
                                                                                if (("NEW" == u || "VACANT" == u) && "TRUE" == y && "PRIMARY" == _) {
                                                                                    var O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)), (Y = parseFloat(Y)), (i = O >= s ? Y : 0);
                                                                                }
                                                                            } else if ("first_home_owner_grant" == P && "urban_area" == M) {
                                                                                if ("ESTABLISHED" == u && "TRUE" == y && "PRIMARY" == _) {
                                                                                    var O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)), (Y = parseFloat(Y)), (i = O >= s ? Y : 0);
                                                                                }
                                                                            } else if ("principal_place_of_residence_rebate" == P) {
                                                                                if ("PRIMARY" == _ && "NEW" == u && "FALSE" == y && "FALSE" == g && "TRUE" == U) {
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (O = parseFloat(O)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (L = parseFloat(L)),
                                                                                        console.log("PRINCIPAL PLACE OF RESIDENCE REBATE: TRUE " + Y),
                                                                                        (d = "TRUE"),
                                                                                        (l -= Y);
                                                                                }
                                                                            } else if ("pensioner_concession" == P && "vacant_land" == M) {
                                                                                if ("PRIMARY" == _ && "VACANT" == u && "FALSE" == y && "TRUE" == g) {
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (O = parseFloat(O)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (L = parseFloat(L)),
                                                                                        console.log("PENCIONER CONCESSION: VACANT LAND " + Y),
                                                                                        s >= x && O >= s && ((l -= Y), 0 > l && (l = 0));
                                                                                }
                                                                            } else if ("pensioner_concession" == P && "house" == M) {
                                                                                if ("PRIMARY" == _ && "FALSE" == y && "TRUE" == g && ("NEW" == u || "ESTABLISHED" == u)) {
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (O = parseFloat(O)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (L = parseFloat(L)),
                                                                                        console.log("PENSIONER CONCESSION: HOUSE " + Y),
                                                                                        s >= x && O >= s && (console.log("Stamp Duty:" + l), (l -= Y), console.log("Stamp Duty:" + l), 0 > l && (l = 0));
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == P &&
                                                                                    "TRUE" == T &&
                                                                                    ((R = a[b].fixed_amount), 0 != R && ((F = (s * R) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                        else if (4 == o)
                                                                            if ("mortgage_registration_fee" == a[b].type) t = a[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == a[b].type) {
                                                                                var x = a[b].income_from,
                                                                                    O = a[b].income_to,
                                                                                    Y = a[b].fixed_amount,
                                                                                    L = a[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (O = parseFloat(O)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (L = parseFloat(L)),
                                                                                    (I += 1),
                                                                                    (stampPropertyValueCeiled = 1e4 * Math.ceil(s / 1e4)),
                                                                                    s >= x && O >= s && (r = 1 != I ? ((stampPropertyValueCeiled - x) * L) / 100 + Y : Y);
                                                                            } else if ("general_rate" == P) {
                                                                                var x = a[b].income_from,
                                                                                    O = a[b].income_to,
                                                                                    Y = a[b].fixed_amount,
                                                                                    L = a[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (O = parseFloat(O)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (L = parseFloat(L)),
                                                                                    (I += 1),
                                                                                    s >= x &&
                                                                                        O >= s &&
                                                                                        (0 != x && (x -= 1),
                                                                                        (stampPropertyValueCeiled = 100 * Math.ceil(s / 100)),
                                                                                        0 != Y ? ((l = ((stampPropertyValueCeiled - x) * L) / 100 + Y), console.log("BAM STAMPDUTY!!!!:" + l)) : (l = (stampPropertyValueCeiled * L) / 100));
                                                                            } else if ("first_home_owner_grant" == P) {
                                                                                if ("NEW" == u && "TRUE" == y && "PRIMARY" == _) {
                                                                                    var O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)), (Y = parseFloat(Y)), (i = O >= s ? Y : 0);
                                                                                }
                                                                            } else if ("first_home_vacant_land_concession_rate" == P) {
                                                                                if ("PRIMARY" == _ && "VACANT" == u && "TRUE" == y) {
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (O = parseFloat(O)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (L = parseFloat(L)),
                                                                                        (I += 1),
                                                                                        s >= x && O >= s && ((l -= Y), 100 == L && (l = 0)),
                                                                                        0 > l && (l = 0);
                                                                                }
                                                                            } else if ("home_concession_rates" == P) {
                                                                                if ("PRIMARY" == _ && ("NEW" == u || "ESTABLISHED" == u)) {
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (O = parseFloat(O)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (L = parseFloat(L)),
                                                                                        s >= x &&
                                                                                            O >= s &&
                                                                                            (0 != x && (x -= 1),
                                                                                            (I += 1),
                                                                                            (stampPropertyValueCeiled = 100 * Math.ceil(s / 100)),
                                                                                            console.log("STAMP DUTY: " + l),
                                                                                            (l = ((stampPropertyValueCeiled - x) * L) / 100 + Y),
                                                                                            console.log("STAMP DUTY: " + l),
                                                                                            console.log("FIRST HOME CONCESSION: " + Y),
                                                                                            console.log("TEST:" + l));
                                                                                }
                                                                            } else if ("first_home_concession_rate" == P) {
                                                                                if ("PRIMARY" == _ && "TRUE" == y && ("NEW" == u || "ESTABLISHED" == u)) {
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (O = parseFloat(O)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (L = parseFloat(L)),
                                                                                        (I += 1),
                                                                                        s >= x &&
                                                                                            O >= s &&
                                                                                            (console.log("FIRST HOME STAMP DUTY: " + l),
                                                                                            (l -= Y),
                                                                                            console.log("STAMP DUTY: " + l),
                                                                                            console.log("FIRST HOME CONCESSION: " + Y),
                                                                                            console.log("TEST:" + l)),
                                                                                        0 > l && (l = 0);
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == P &&
                                                                                    "TRUE" == T &&
                                                                                    ((R = a[b].fixed_amount), 0 != R && ((F = (s * R) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                        else if (5 == o)
                                                                            if ("mortgage_registration_fee" == a[b].type) t = a[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == a[b].type) {
                                                                                var x = a[b].income_from,
                                                                                    O = a[b].income_to,
                                                                                    Y = a[b].fixed_amount,
                                                                                    L = a[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (O = parseFloat(O)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (L = parseFloat(L)),
                                                                                    s >= x &&
                                                                                        O >= s &&
                                                                                        (0 != x && (x -= 1), 0 != L ? ((stampPropertyValueCeiled = 1e4 * Math.ceil(s / 1e4)), (r = Y + ((stampPropertyValueCeiled - x) * L) / 1e4)) : (r = Y));
                                                                            } else if ("general_rate" == P) {
                                                                                var x = a[b].income_from,
                                                                                    O = a[b].income_to,
                                                                                    Y = a[b].fixed_amount,
                                                                                    L = a[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (O = parseFloat(O)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (L = parseFloat(L)),
                                                                                    (I += 1),
                                                                                    s >= x && O >= s && (0 != x && (x -= 1), (stampPropertyValueCeiled = 100 * Math.ceil(s / 100)), (l = ((stampPropertyValueCeiled - x) * L) / 100 + Y));
                                                                            } else if ("first_home_owner_grant_established_home" == P) {
                                                                                if ("ESTABLISHED" == u && "TRUE" == y && "PRIMARY" == _) {
                                                                                    var O = a[b].income_to,
                                                                                        x = a[b].income_from,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)), (x = parseFloat(x)), (Y = parseFloat(Y)), (i = s >= x && O >= s ? Y : 0);
                                                                                }
                                                                            } else if ("first_home_owner_grant_new_house_or_vacant_land" == P) {
                                                                                if (("VACANT" == u || "NEW" == u) && "TRUE" == y && "PRIMARY" == _) {
                                                                                    var O = a[b].income_to,
                                                                                        x = a[b].income_from,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)), (x = parseFloat(x)), (Y = parseFloat(Y)), (i = s >= x && O >= s ? Y : 0);
                                                                                }
                                                                            } else if ("housing_construction_grant" == P) {
                                                                                if ("VACANT" == u || "NEW" == u) {
                                                                                    var O = a[b].income_to,
                                                                                        x = a[b].income_from,
                                                                                        L = a[b].percent,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)),
                                                                                        (x = parseFloat(x)),
                                                                                        (L = parseFloat(L)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        s >= x && O >= s && (0 != L ? ((c = 8500 - (17 * (s - x - 1)) / 100), console.log(s + " - " + x + "-1")) : (c = Y));
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == P &&
                                                                                    "TRUE" == T &&
                                                                                    ((R = a[b].fixed_amount), 0 != R && ((F = (s * R) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                        else if (6 == o)
                                                                            if ("mortgage_registration_fee" == a[b].type) t = a[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == a[b].type) r = a[b].fixed_amount;
                                                                            else if ("general_rate" == P) {
                                                                                var x = a[b].income_from,
                                                                                    O = a[b].income_to,
                                                                                    Y = a[b].fixed_amount,
                                                                                    L = a[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (O = parseFloat(O)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (L = parseFloat(L)),
                                                                                    (I += 1),
                                                                                    s >= x && O >= s && (0 != x && (x -= 1), (stampPropertyValueCeiled = 100 * Math.ceil(s / 100)), (l = ((stampPropertyValueCeiled - x) * L) / 100 + Y));
                                                                            } else if ("first_home_owner_grant" == P) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && "NEW" == u) {
                                                                                    var O = a[b].income_to,
                                                                                        x = a[b].income_from,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)), (x = parseFloat(x)), (Y = parseFloat(Y)), (i = Y);
                                                                                }
                                                                            } else if ("first_home_builder_boost" == P) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && ("VACANT" == u || "NEW" == u)) {
                                                                                    var O = a[b].income_to,
                                                                                        x = a[b].income_from,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)), (x = parseFloat(x)), (Y = parseFloat(Y)), (c = Y);
                                                                                }
                                                                            } else if ("first_home_buyer_discount" == P) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && "ESTABLISHED" == u) {
                                                                                    var x = a[b].income_from,
                                                                                        O = a[b].income_to,
                                                                                        Y = a[b].fixed_amount,
                                                                                        L = a[b].percent;
                                                                                    (x = parseFloat(x)), (O = parseFloat(O)), (Y = parseFloat(Y)), (L = parseFloat(L)), s >= x && O >= s && (0 != x && (x -= 1), (l = (l * L) / 100));
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == P &&
                                                                                    "TRUE" == T &&
                                                                                    ((R = a[b].fixed_amount), 0 != R && ((F = (s * R) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                        else if (7 == o)
                                                                            if ("mortgage_registration_fee_paper" == a[b].type) (type_fee = a[b].urban_area), "Paper" == type_fee && "paper" == S && (t = a[b].fixed_amount);
                                                                            else if ("mortgage_registration_fee_electronic" == a[b].type)
                                                                                (type_fee = a[b].urban_area), "Electronic" == type_fee && "electronic" == S && (t = a[b].fixed_amount);
                                                                            else if ("land_transfer_fee_paper" == a[b].type) {
                                                                                var x = a[b].income_from,
                                                                                    O = a[b].income_to,
                                                                                    Y = a[b].fixed_amount,
                                                                                    L = a[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (O = parseFloat(O)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (L = parseFloat(L)),
                                                                                    (type_fee = a[b].urban_area),
                                                                                    "Paper" == type_fee && "paper" == S && ((r = Y + (s / 1e3) * L), (r = r > O ? O : Math.ceil(r)));
                                                                            } else if ("land_transfer_fee_electronic" == a[b].type) {
                                                                                var x = a[b].income_from,
                                                                                    O = a[b].income_to,
                                                                                    Y = a[b].fixed_amount,
                                                                                    L = a[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (O = parseFloat(O)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (L = parseFloat(L)),
                                                                                    (type_fee = a[b].urban_area),
                                                                                    "Electronic" == type_fee && "electronic" == S && ((r = Y + (s / 1e3) * L), (r = r > O ? O : Math.ceil(r)));
                                                                            } else if ("non_principal_place_of_residence_rate" == P) {
                                                                                var x = a[b].income_from,
                                                                                    O = a[b].income_to,
                                                                                    Y = a[b].fixed_amount,
                                                                                    L = a[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (O = parseFloat(O)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (L = parseFloat(L)),
                                                                                    s >= x &&
                                                                                        O >= s &&
                                                                                        (0 != x && (x -= 1),
                                                                                        (l = 0 != Y ? ((s - x) * L) / 100 + Y : (s * L) / 100),
                                                                                        console.log("(((" + s + " - " + x + "-1)*" + L + ")/100) + " + Y),
                                                                                        console.log(l));
                                                                            } else if ("principal_place_of_residence_rate" == P && "PRIMARY" == _) {
                                                                                var x = a[b].income_from,
                                                                                    O = a[b].income_to,
                                                                                    Y = a[b].fixed_amount,
                                                                                    L = a[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (O = parseFloat(O)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (L = parseFloat(L)),
                                                                                    s >= x && O >= s && 0 != Y && 0 != L && (0 != x && (x -= 1), (l = ((s - x) * L) / 100 + Y));
                                                                            } else if ("first_home_owner_grant" == P) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && ("VACANT" == u || "NEW" == u)) {
                                                                                    var O = a[b].income_to,
                                                                                        x = a[b].income_from,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)), (x = parseFloat(x)), (Y = parseFloat(Y)), s >= x && O >= s && (i = Y);
                                                                                }
                                                                            } else if ("first_home_buyers" == P) {
                                                                                if ("TRUE" == y && "PRIMARY" == _) {
                                                                                    var O = a[b].income_to,
                                                                                        x = a[b].income_from,
                                                                                        L = a[b].percent,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)),
                                                                                        (x = parseFloat(x)),
                                                                                        (L = parseFloat(L)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        s >= x && O >= s && (0 != x && (x -= 1), (l *= (s - 6e5) / 15e4)),
                                                                                        0 > l && (l = 0);
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == P &&
                                                                                    "TRUE" == T &&
                                                                                    ((R = a[b].fixed_amount), 0 != R && ((F = (s * R) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                        else if (8 == o)
                                                                            if ("mortgage_registration_fee" == a[b].type) t = a[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == a[b].type) {
                                                                                var x = a[b].income_from,
                                                                                    O = a[b].income_to,
                                                                                    Y = a[b].fixed_amount,
                                                                                    L = a[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (O = parseFloat(O)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (L = parseFloat(L)),
                                                                                    s >= x && O >= s && (0 != x && (x -= 1), (r = 0 != L ? ((s - x) * L) / 100 + Y : Y));
                                                                            } else if ("general_rate" == P && "VACANT" == u && "FALSE" == y) {
                                                                                var x = a[b].income_from,
                                                                                    O = a[b].income_to,
                                                                                    Y = a[b].fixed_amount,
                                                                                    L = a[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (O = parseFloat(O)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (L = parseFloat(L)),
                                                                                    (I += 1),
                                                                                    s >= x && O >= s && (0 != x && (x -= 1), (stampPropertyValueCeiled = 100 * Math.ceil(s / 100)), (l = ((stampPropertyValueCeiled - x) * L) / 100 + Y));
                                                                            } else if ("residential_rate" == P) {
                                                                                var x = a[b].income_from,
                                                                                    O = a[b].income_to,
                                                                                    Y = a[b].fixed_amount,
                                                                                    L = a[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (O = parseFloat(O)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (L = parseFloat(L)),
                                                                                    (I += 1),
                                                                                    s >= x && O >= s && (0 != x && (x -= 1), (stampPropertyValueCeiled = 100 * Math.ceil(s / 100)), (l = ((stampPropertyValueCeiled - x) * L) / 100 + Y));
                                                                            } else if ("first_home_owner_grant_new_house_or_vacant_land" == P) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && ("VACANT" == u || "NEW" == u)) {
                                                                                    console.log("first_home_owner_grant_new_house_or_vacant_land");
                                                                                    var O = a[b].income_to,
                                                                                        x = a[b].income_from,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)),
                                                                                        (x = parseFloat(x)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (h += 1),
                                                                                        "north" == N ? 1 == h && s >= x && O >= s && (i = Y) : "south" == N && 2 == h && s >= x && O >= s && (i = Y),
                                                                                        console.log("home_owner_grant: " + i),
                                                                                        console.log("e: " + h);
                                                                                }
                                                                            } else if ("first_home_owner_grant_established_home" == P) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && "ESTABLISHED" == u) {
                                                                                    console.log("first_home_owner_grant_established_home");
                                                                                    var O = a[b].income_to,
                                                                                        x = a[b].income_from,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)),
                                                                                        (x = parseFloat(x)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (E += 1),
                                                                                        "north" == N ? 1 == E && s >= x && O >= s && (i = Y) : "south" == N && 2 == E && s >= x && O >= s && (i = Y);
                                                                                }
                                                                            } else if ("first_home_owner_rate_established_home" == P) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && ("ESTABLISHED" == u || "NEW" == u)) {
                                                                                    var O = a[b].income_to,
                                                                                        x = a[b].income_from,
                                                                                        L = a[b].percent,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)),
                                                                                        (x = parseFloat(x)),
                                                                                        (L = parseFloat(L)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        s >= x && O >= s && (0 != x && (x -= 1), (stampPropertyValueCeiled = 100 * Math.ceil(s / 100)), (l = ((stampPropertyValueCeiled - x) * L) / 100 + Y));
                                                                                }
                                                                            } else if ("first_home_owner_rate" == P && "vacant_lands" == M) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && "VACANT" == u) {
                                                                                    var O = a[b].income_to,
                                                                                        x = a[b].income_from,
                                                                                        L = a[b].percent,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)),
                                                                                        (x = parseFloat(x)),
                                                                                        (L = parseFloat(L)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        s >= x &&
                                                                                            O >= s &&
                                                                                            (0 != x && (x -= 1),
                                                                                            0 != L ? ((stampPropertyValueCeiled = 100 * Math.ceil(s / 100)), (l = ((stampPropertyValueCeiled - x) * L) / 100 + Y)) : (l = Y));
                                                                                }
                                                                            } else if ("concessional_rate" == P) {
                                                                                if ("PRIMARY" == _ && "FALSE" == y && "VACANT" != u) {
                                                                                    var O = a[b].income_to,
                                                                                        x = a[b].income_from,
                                                                                        L = a[b].percent,
                                                                                        Y = a[b].fixed_amount;
                                                                                    (O = parseFloat(O)),
                                                                                        (x = parseFloat(x)),
                                                                                        (L = parseFloat(L)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        s >= x && O >= s && (0 != x && (x -= 1), (stampPropertyValueCeiled = 100 * Math.ceil(s / 100)), (l = ((stampPropertyValueCeiled - x) * L) / 100 + Y));
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == P &&
                                                                                    "TRUE" == T &&
                                                                                    ((R = a[b].fixed_amount), 0 != R && ((F = (s * R) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                    }
                                                                (t = parseFloat(t)),
                                                                    (r = parseFloat(r)),
                                                                    (n = t + r + l + F),
                                                                    (m = i + c),
                                                                    e("#stamp-mortgage-fee").html("$" + numberWithCommas((Math.round(100 * t) / 100).toFixed(2))),
                                                                    e("#stamp-transfer-fee").html("$" + numberWithCommas((Math.round(100 * r) / 100).toFixed(2))),
                                                                    e("#stamp-duty-fee").html("$" + numberWithCommas((Math.round(100 * l) / 100).toFixed(2))),
                                                                    e("#stamp-total-fee").html("$" + numberWithCommas((Math.round(100 * n) / 100).toFixed(2))),
                                                                    e("#stamp-home-grant").html("$" + numberWithCommas((Math.round(100 * i) / 100).toFixed(2))),
                                                                    e("#stamp-other-grant").html("$" + numberWithCommas((Math.round(100 * c) / 100).toFixed(2))),
                                                                    e("#stamp-grant-total").html("$" + numberWithCommas((Math.round(100 * m) / 100).toFixed(2))),
                                                                    e("#stamp-foreign-buyers-duty").html("$" + numberWithCommas((Math.round(100 * F) / 100).toFixed(2))),
                                                                    console.log("APPLY CONCESSIONS: " + f),
                                                                    console.log("MORTGAGE FEE: " + t),
                                                                    console.log("LAND TRANSFER FEE: " + r),
                                                                    console.log("STAMP DUTY FEE: " + l),
                                                                    console.log("TOTAL FEES: " + n),
                                                                    console.log("FIRST HOME OWNER GRANT: " + i),
                                                                    console.log("OTHER CONCESSIONS: " + c),
                                                                    console.log("TOTAL CONCESSIONS: " + m);
                                                                var G = { state: o, property_value: s, property_type: _, first_home_buyer: y, are_you_purchasing: u };
                                                                return G;
                                                            }
                                                            r = a;
                                                            var t = new Object(),
                                                                l = 1;
                                                            (t.length = s.length),
                                                                e.each(s, function (a, o) {
                                                                    var r = "";
                                                                    0 == a && (r = " checked "),
                                                                        e("#state-select").append("<option" + r + ' value="' + o.short_name + '">' + o.short_name + "</option>"),
                                                                        (t[a] = new Object()),
                                                                        (t[a].id = o.id),
                                                                        (t[a].short_name = o.short_name),
                                                                        (t[a].full_name = o.full_name),
                                                                        (t[a].active_modules = o.active_modules);
                                                                }),
                                                                e(".beautiful-input").each(function () {
                                                                    var a = e(this).val();
                                                                    e(this).val(numberWithCommas(a));
                                                                }),
                                                                e(".beautiful-input").keyup(function (a) {
                                                                    if (8 != a.keyCode && 37 != a.keyCode && 39 != a.keyCode) {
                                                                        var o = e(this).val();
                                                                        e(this).val(numberWithCommas(o));
                                                                    }
                                                                }),
                                                                e("#state-select").change(function () {
                                                                    e("#state-modules .state-module").removeClass("active-modules");
                                                                    var a = e(this).val();
                                                                    for (i = 0; i < t.length; i++)
                                                                        if (a == t[i].short_name)
                                                                            for (l = t[i].id, e("#stamp-state-name").html(t[i].full_name), b = 0; b < t[i].active_modules.length; b++)
                                                                                1 == t[i].active_modules[b] && e("#state-modules .state-module").eq(b).addClass("active-modules");
                                                                    var o = 0;
                                                                    e(".active-modules").each(function () {
                                                                        (o += 1), console.log(o), e(this).children("label").children(".filled-circle").html(o);
                                                                    });
                                                                }),
                                                                changeState("NSW"),
                                                                changeState(getState()),
                                                                e("#state-select").change(),
                                                                e(".state-module").each(function () {
                                                                    console.log("test");
                                                                    var a = e(this);
                                                                    e(this)
                                                                        .find("button")
                                                                        .each(function () {
                                                                            e(this).click(function () {
                                                                                a.find("button").removeClass("checked"), e(this).addClass("checked");
                                                                            });
                                                                        });
                                                                }),
                                                                e(".stamp-calculate").click(function () {
                                                                    var a = o(r, l);
                                                                    e("#changes-made").show().css("opacity", 0).animate({ opacity: 1, duration: 300 }),
                                                                        "PRIMARY" == a.property_type ? (a.property_type = 1) : (a.property_type = 2),
                                                                        "TRUE" == a.first_home_buyer ? (a.first_home_buyer = 1) : (a.first_home_buyer = 2),
                                                                        "NEW" == a.are_you_purchasing ? (a.are_you_purchasing = 1) : "ESTABLISHED" == a.are_you_purchasing ? (a.are_you_purchasing = 2) : (a.are_you_purchasing = 3),
                                                                        jQuery.post("http://calculatorsonline.com.au/stamp_duty/ajax_statistic_track", {
                                                                            property_value: a.property_value,
                                                                            state: a.state,
                                                                            property_type: a.property_type,
                                                                            first_home_buyer: a.first_home_buyer,
                                                                            are_you_purchasing: a.are_you_purchasing,
                                                                            url: document.URL,
                                                                        }),
                                                                        console.log(a);
                                                                }),
                                                                e("#stamp-duty-calculator").removeClass("hidden");
                                                        },
                                                        error: function (a, o, t) {
                                                            var r = "<b>ERROR:</b> Can't load states data. Try to refresh your web browser or visit <a href='http://stampdutycalc.com.au' title='Stamp Duty'>stampdutycalc.com.au</a>";
                                                            e("#fountainG h4").html(r);
                                                        },
                                                    });
                                            },
                                            error: function (a, o, t) {
                                                var r = "<b>ERROR:</b> Can't load states. Try to refresh your web browser or visit <a href='http://stampdutycalc.com.au' title='Stamp Duty'>stampdutycalc.com.au</a>";
                                                e("#fountainG h4").html(r);
                                            },
                                        });
                                    else {
                                        var p = "<b>ERROR:</b> Embedded code is incorrect. Please visit/contact <a href='http://stampdutycalc.com.au' title='Stamp Duty'>stampdutycalc.com.au</a>";
                                        e("#fountainG h4").html(p);
                                    }
                                },
                                error: function (a, o, t) {
                                    var r = "<b>ERROR:</b> Can't recieve black list data. Try to refresh your web browser or visit <a href='http://stampdutycalc.com.au' title='Stamp Duty'>stampdutycalc.com.au</a>";
                                    e("#fountainG h4").html(r);
                                },
                            });
                    },
                    error: function (a, o, t) {
                        var r = "<b>ERROR:</b> Can't load CSS file. Try to refresh your web browser or visit <a href='http://stampdutycalc.com.au' title='Stamp Duty'>stampdutycalc.com.au</a>";
                        e("#fountainG h4").html(r);
                    },
                });
        });
    });
})();
