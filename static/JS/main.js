function replaceAll(e, o, a) {
    for (; a.indexOf(e) > -1; ) a = a.replace(e, o);
    return a;
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
    var o = function (e) {
        window.jQuery
            ? e(jQuery)
            : window.setTimeout(function () {
                  o(e);
              }, 20);
    };
    o(function (e) {
        e(function () {
            var o = 1e4,
                a = "",
                t = "all",
                r = "",
                l = "",
                s = "",
                n = 0,
                c = "#stamp-duty-calculator";
            e.ajax({
                url: "http://localhost:8080/StampDuty.html",
                //url: "//calculatorsonline.com.au/external/!main/stamp_duty_calculator/stamp_duty.html",
                dataType: "html",
                data: s,
                timeout: o,
                success: function (o) {
                    e(c).prepend(o);
                },
                error: function (o, a, t) {
                    var r = "<b>ERROR:</b> Can't load CSS file. Try to refresh your web browser or visit <a href='https://stampdutycalc.com.au' title='Stamp Duty'>stampdutycalc.com.au</a>";
                    e("#fountainG h4").html(r);
                },
            }),
                e.ajax({
                    url: "//calculatorsonline.com.au/external/!main/stamp_duty-backup.css",
                    timeout: o,
                    success: function (s) {
                        e("head").append("<link href='//calculatorsonline.com.au/external/!main/stamp_duty.css' rel='stylesheet' type='text/css'>"),
                            e.ajax({
                                dataType: "json",
                                url: "//calculatorsonline.com.au/stamp_duty/get_json_black_list",
                                data: a,
                                timeout: o,
                                success: function (s) {
                                    var c = window.location.hostname;
                                    for (a = s, i = 0; i < a.length; i++) (a[i].url = a[i].url.replace("http://", "")), (a[i].url = a[i].url.replace("https://", "")), (a[i].url = a[i].url.replace("www.", "")), c == a[i].url && (n = 1);
                                    if (0 == n)
                                        e.ajax({
                                            dataType: "json",
                                            url: "//calculatorsonline.com.au/stamp_duty/get_json_states/" + t,
                                            data: l,
                                            timeout: o,
                                            success: function (a) {
                                                (l = a),
                                                    e.ajax({
                                                        dataType: "json",
                                                        url: "//calculatorsonline.com.au/stamp_duty/get_json_states_data/",
                                                        data: r,
                                                        timeout: o,
                                                        success: function (o) {
                                                            function a(o, a) {
                                                                console.log("           ----====----                "), console.log("CURERRENT STATE: " + a);
                                                                var t = 0,
                                                                    r = 0,
                                                                    l = e("#stamp-property-value").val(),
                                                                    s = 0,
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
                                                                    g = 0,
                                                                    F = 0,
                                                                    R = 0;
                                                                if (((l = replaceAll(",", "", l)), (l = parseFloat(l)), e("#stamp-primary-residence").hasClass("checked"))) {
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
                                                                    var T = "TRUE";
                                                                    console.log("ELIGIBLE PENSIONER: YES!");
                                                                } else {
                                                                    var T = "FALSE";
                                                                    console.log("ELIGIBLE PENSIONER: NO!");
                                                                }
                                                                if ((console.log("PURCHASING: " + u), e("#foreign-purchaser-yes").hasClass("checked"))) {
                                                                    var C = "TRUE";
                                                                    console.log("FOREIGN BUYER: YES!");
                                                                } else {
                                                                    var C = "FALSE";
                                                                    console.log("FOREIGN BUYER: NO!");
                                                                }
                                                                if (
                                                                    ((e("#foreign-purchaser-yes").hasClass("checked") && e("#stamp-foreign-buyers-duty").parent().parent().hasClass("hidden")) ||
                                                                        e("#stamp-foreign-buyers-duty").parent().parent().addClass("hidden"),
                                                                    1e6 >= l)
                                                                ) {
                                                                    console.log("VIC DISCOUNT: YES!");
                                                                } else {
                                                                    console.log("VIC DISCOUNT: NO!");
                                                                }
                                                                (e(1e6 >= l) && e("#vic-discount").parent().parent().hasClass("hidden")) || e("#vic-discount").parent().parent().addClass("hidden"), console.log("VIC DISCOUNT: " + R);
                                                                var A = e("#total-income").val();
                                                                console.log("TOTAL INCOME OF ALL PURCHASERS: $" + A + "!");
                                                                var N = e("#children-select option:selected").val();
                                                                console.log("DEPENDANT CHILDREN: " + N + "!");
                                                                var S = e("#property-location option:selected").val();
                                                                console.log("URBAN AREA: " + S + "!");
                                                                var v = e("#property-location-s option:selected").val();
                                                                console.log("URBAN AREA: " + S + "!");
                                                                var I = e("#payment-method option:selected").val();
                                                                console.log("PAYMENT METHOD: " + I + "!");
                                                                var P = 0;
                                                                for (b = 0; b < o.length; b++)
                                                                    if (o[b].state_id == a.toString()) {
                                                                        var U = o[b].type,
                                                                            M = o[b]["for"];
                                                                        if (1 == a)
                                                                            if ("mortgage_registration_fee" == U) t = o[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == U) r = o[b].fixed_amount;
                                                                            else if ("general_rate" == U) {
                                                                                var O = "TRUE";
                                                                                if ("TRUE" == O) {
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (P += 1),
                                                                                        console.log("!!!!!!!!!!!!!!!!!sdfsdfs"),
                                                                                        console.log("(stampPropertyValue > income_from && stampPropertyValue <= income_to)"),
                                                                                        console.log("(" + l + " > " + x + " && " + l + " <= " + V + ")"),
                                                                                        l >= x &&
                                                                                            V >= l &&
                                                                                            ((stampPropertyValueCeiled = 100 * Math.ceil(l / 100)),
                                                                                            console.log("====== TRUE ======"),
                                                                                            console.log("(((" + l + " - " + x + ") * " + Y + ")/100)  + " + D),
                                                                                            0 != x && (x -= 1),
                                                                                            (s = 0 != D ? ((stampPropertyValueCeiled - x) * Y) / 100 + D : (l * Y) / 100),
                                                                                            console.log(s));
                                                                                }
                                                                            } else if ("first_home_owner_grant" == U && "PRIMARY" == _ && "TRUE" == y) {
                                                                                if ("NEW" == u || "VACANT" == u) {
                                                                                    var V = o[b].income_to,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)), (D = parseFloat(D)), (i = V >= l ? D : 0);
                                                                                }
                                                                            } else if ("pensioner_duty_concession" == U && "vacant_block" == M) {
                                                                                if ("TRUE" == T && "VACANT" == u && "PRIMARY" == _) {
                                                                                    console.log("PENSIONER DUTY CONCESSION: VACANT BLOCK");
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        l >= x &&
                                                                                            V >= l &&
                                                                                            (0 != x && (x -= 1),
                                                                                            (stampPropertyValueCeiled = 100 * Math.ceil(l / 100)),
                                                                                            (p = ((stampPropertyValueCeiled - x) * Y) / 100),
                                                                                            D > p && (p = D),
                                                                                            (s = p));
                                                                                }
                                                                            } else if ("pensioner_duty_concession" == U && "residential_home" == M) {
                                                                                if ("TRUE" == T && "PRIMARY" == _ && "VACANT" != u) {
                                                                                    console.log("PENSIONER DUTY CONCESSION: RESIDENTIAL HOME");
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        l >= x && V >= l && (console.log("apply"), 0 != x && (x -= 1), (p = ((l - x) * Y) / 100), D > p && (p = D), (s = p));
                                                                                }
                                                                            } else if ("home_buyer_concession" == U && "income_threshold" == M) {
                                                                                if ("TRUE" == y) {
                                                                                    console.log("INCOME THRESHOLD");
                                                                                    var L = o[b].income_from,
                                                                                        H = o[b].fixed_amount,
                                                                                        W = e("#total-income").val(),
                                                                                        w = e("#children-select option:selected").val();
                                                                                    (L = parseFloat(L)),
                                                                                        (H = parseFloat(H)),
                                                                                        (W = replaceAll(",", "", W)),
                                                                                        (W = parseFloat(W)),
                                                                                        console.log("CHILDREN: " + L),
                                                                                        console.log("INCOME: " + H),
                                                                                        console.log("SELECTED CHILDREN: " + w),
                                                                                        console.log("SELECTED INCOME: " + W),
                                                                                        w == L && H >= W && (console.log("FOUUND!"), (f = "TRUE"));
                                                                                }
                                                                            } else if ("home_buyer_concession" == U && "property_value_threshold" == M) {
                                                                                if ("TRUE" == y && "FALSE" == T && "TRUE" == f && "PRIMARY" == _ && "NEW" == u) {
                                                                                    console.log("PENSIONER DUTY CONCESSION: NEW HOME");
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    if (((x = parseFloat(x)), (V = parseFloat(V)), (D = parseFloat(D)), (Y = parseFloat(Y)), l >= x && V >= l)) {
                                                                                        0 != x && (x -= 1);
                                                                                        var B = ((l - x) * Y) / 100;
                                                                                        D > B && (B = D), (s = B);
                                                                                    }
                                                                                }
                                                                            } else if ("home_buyer_concession" == U && "vacant_block" == M) {
                                                                                if ("TRUE" == y && "TRUE" == f && "VACANT" == u && "PRIMARY" == _) {
                                                                                    console.log("PENSIONER DUTY CONCESSION: RESIDENTIAL HOME");
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        console.log("home concession:" + f),
                                                                                        l >= x &&
                                                                                            V >= l &&
                                                                                            (0 != x && (x -= 1),
                                                                                            (stampPropertyValueCeiled = 100 * Math.ceil(l / 100)),
                                                                                            (p = ((stampPropertyValueCeiled - x) * Y) / 100),
                                                                                            D > p && (p = D),
                                                                                            (s = p));
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == U &&
                                                                                    "TRUE" == C &&
                                                                                    ((F = o[b].fixed_amount), 0 != F && ((g = (l * F) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                        else if (2 == a)
                                                                            if ("mortgage_registration_fee" == o[b].type) t = o[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == o[b].type) r = o[b].fixed_amount;
                                                                            else if ("general_rate" == U) {
                                                                                var O = "TRUE";
                                                                                if ("TRUE" == O) {
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (P += 1),
                                                                                        l >= x &&
                                                                                            V >= l &&
                                                                                            ((stampPropertyValueCeiled = 100 * Math.ceil(l / 100)),
                                                                                            console.log("====== TRUE ======"),
                                                                                            console.log("(((" + l + " - " + x + ") * " + Y + ")/100)  + " + D),
                                                                                            0 != x && (x -= 1),
                                                                                            (s = ((stampPropertyValueCeiled - x) * Y) / 100 + D));
                                                                                }
                                                                            } else if ("first_home_owner_grant" == U) {
                                                                                if ("NEW" == u) {
                                                                                    if ("TRUE" == y && "PRIMARY" == _) {
                                                                                        var x = o[b].income_from,
                                                                                            V = o[b].income_to,
                                                                                            D = o[b].fixed_amount;
                                                                                        (x = parseFloat(x)), (V = parseFloat(V)), (D = parseFloat(D)), (i = l >= x && V >= l ? D : 0);
                                                                                    }
                                                                                } else if ("VACANT" == u && "TRUE" == y && "PRIMARY" == _) {
                                                                                    var x = 0,
                                                                                        V = 75e4,
                                                                                        D = 1e4;
                                                                                    (x = parseFloat(x)), (V = parseFloat(V)), (D = parseFloat(D)), (i = l >= x && V >= l ? D : 0);
                                                                                }
                                                                            } else if ("new_home_grant" == U && "vacant_land" == M) {
                                                                                if ("VACANT" == u && "FALSE" == y) {
                                                                                    console.log("NEW HOME GRANT: VACANT LAND");
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)), (V = parseFloat(V)), (D = parseFloat(D)), (Y = parseFloat(Y)), l >= x && V >= l && 0 == i && (c = ((l - x) * Y) / 100 + D);
                                                                                }
                                                                            } else if ("new_home_grant" == U && "newly_constructed_home" == M) {
                                                                                if ("NEW" == u && "FALSE" == y) {
                                                                                    console.log("NEW HOME GRANT: A NEW HOME");
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)), (V = parseFloat(V)), (D = parseFloat(D)), (Y = parseFloat(Y)), l >= x && V >= l && 0 == i && (c = ((l - x) * Y) / 100 + D);
                                                                                }
                                                                            } else if ("first_home_concession_rate" == U && "newly_constructed_home" == M) {
                                                                                if ("PRIMARY" == _ && "NEW" == u && "TRUE" == y) {
                                                                                    console.log("FIRST HOME BUYER ASSISTANCE: A NEW HOME");
                                                                                    var x = 0,
                                                                                        V = 1e6,
                                                                                        D = 161340,
                                                                                        Y = 0.201675;
                                                                                    (x = parseFloat(x)),
                                                                                        (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        l >= x && V >= l && ((s = l * Y - D), 0 > s && (s = 0)),
                                                                                        8e5 > l && (s = 0);
                                                                                } else if ("PRIMARY" == _ && "ESTABLISHED" == u && "TRUE" == y) {
                                                                                    console.log("FIRST HOME BUYER ASSISTANCE: ESTABLISHED HOME");
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        l >= x && V >= l && ((s = l * Y - D), 0 > s && (s = 0)),
                                                                                        65e4 > l && (s = 0);
                                                                                }
                                                                            } else if ("first_home_concession_rate" == U && "vacant_land" == M) {
                                                                                if ("PRIMARY" == _ && "VACANT" == u && "TRUE" == y) {
                                                                                    console.log("NEW HOME GRANT: A NEW HOME");
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)), (V = parseFloat(V)), (D = parseFloat(D)), (Y = parseFloat(Y)), l >= x && V >= l && ((s = l * Y - D), 0 > s && (s = 0));
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == U &&
                                                                                    "TRUE" == C &&
                                                                                    ((F = o[b].fixed_amount), 0 != F && ((g = (l * F) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                        else if (3 == a)
                                                                            if ("mortgage_registration_fee" == o[b].type) t = o[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == o[b].type) r = o[b].fixed_amount;
                                                                            else if ("general_rate" == U) {
                                                                                var O = "FALSE";
                                                                                if (("INVESTMENT" == _ ? (O = "TRUE") : "PRIMARY" == _ && (O = "TRUE"), "TRUE" == O)) {
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    if (((x = parseFloat(x)), (V = parseFloat(V)), (D = parseFloat(D)), (Y = parseFloat(Y)), (P += 1), l >= x && V >= l)) {
                                                                                        if (1 != P) s = (l * Y) / 100;
                                                                                        else {
                                                                                            var k = l / 1e3;
                                                                                            s = 0.06571441 * k * k + 15 * k;
                                                                                        }
                                                                                        console.log("Stamp Duty:" + s);
                                                                                    }
                                                                                } else console.log("==---==" + o[b].fixed_amount + "  =  " + b), (s = parseFloat(o[11].fixed_amount));
                                                                            } else if ("first_home_owner_grant" == U && "simple" == M) {
                                                                                if (("NEW" == u || "VACANT" == u) && "TRUE" == y && "PRIMARY" == _) {
                                                                                    var V = o[b].income_to,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)), (D = parseFloat(D)), (i = V >= l ? D : 0);
                                                                                }
                                                                            } else if ("first_home_owner_grant" == U && "urban_area" == M) {
                                                                                if ("ESTABLISHED" == u && "TRUE" == y && "PRIMARY" == _) {
                                                                                    var V = o[b].income_to,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)), (D = parseFloat(D)), (i = V >= l ? D : 0);
                                                                                }
                                                                            } else if ("principal_place_of_residence_rebate" == U) {
                                                                                if ("PRIMARY" == _ && "NEW" == u && "FALSE" == y && "FALSE" == T && "TRUE" == O) {
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        console.log("PRINCIPAL PLACE OF RESIDENCE REBATE: TRUE " + D),
                                                                                        (d = "TRUE"),
                                                                                        (s -= D);
                                                                                }
                                                                            } else if ("pensioner_concession" == U && "vacant_land" == M) {
                                                                                if ("PRIMARY" == _ && "VACANT" == u && "FALSE" == y && "TRUE" == T) {
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        console.log("PENCIONER CONCESSION: VACANT LAND " + D),
                                                                                        l >= x && V >= l && ((s -= D), 0 > s && (s = 0));
                                                                                }
                                                                            } else if ("pensioner_concession" == U && "house" == M) {
                                                                                if ("PRIMARY" == _ && "FALSE" == y && "TRUE" == T && ("NEW" == u || "ESTABLISHED" == u)) {
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        console.log("PENSIONER CONCESSION: HOUSE " + D),
                                                                                        l >= x && V >= l && (console.log("Stamp Duty:" + s), (s -= D), console.log("Stamp Duty:" + s), 0 > s && (s = 0));
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == U &&
                                                                                    "TRUE" == C &&
                                                                                    ((F = o[b].fixed_amount), 0 != F && ((g = (l * F) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                        else if (4 == a)
                                                                            if ("mortgage_registration_fee" == o[b].type) t = o[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == o[b].type) {
                                                                                var x = o[b].income_from,
                                                                                    V = o[b].income_to,
                                                                                    D = o[b].fixed_amount,
                                                                                    Y = o[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (V = parseFloat(V)),
                                                                                    (D = parseFloat(D)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (P += 1),
                                                                                    (stampPropertyValueCeiled = 1e4 * Math.ceil(l / 1e4)),
                                                                                    l >= x && V >= l && (r = 1 != P ? ((stampPropertyValueCeiled - x) * Y) / 100 + D : D);
                                                                            } else if ("general_rate" == U) {
                                                                                var x = o[b].income_from,
                                                                                    V = o[b].income_to,
                                                                                    D = o[b].fixed_amount,
                                                                                    Y = o[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (V = parseFloat(V)),
                                                                                    (D = parseFloat(D)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (P += 1),
                                                                                    l >= x &&
                                                                                        V >= l &&
                                                                                        (0 != x && (x -= 1),
                                                                                        (stampPropertyValueCeiled = 100 * Math.ceil(l / 100)),
                                                                                        0 != D ? ((s = ((stampPropertyValueCeiled - x) * Y) / 100 + D), console.log("BAM STAMPDUTY!!!!:" + s)) : (s = (stampPropertyValueCeiled * Y) / 100));
                                                                            } else if ("first_home_owner_grant" == U) {
                                                                                if ("NEW" == u && "TRUE" == y && "PRIMARY" == _) {
                                                                                    var V = o[b].income_to,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)), (D = parseFloat(D)), (i = V >= l ? D : 0);
                                                                                }
                                                                            } else if ("first_home_vacant_land_concession_rate" == U) {
                                                                                if ("PRIMARY" == _ && "VACANT" == u && "TRUE" == y) {
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (P += 1),
                                                                                        l >= x && V >= l && ((s -= D), 100 == Y && (s = 0)),
                                                                                        0 > s && (s = 0);
                                                                                }
                                                                            } else if ("home_concession_rates" == U) {
                                                                                if ("PRIMARY" == _ && ("NEW" == u || "ESTABLISHED" == u)) {
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        l >= x &&
                                                                                            V >= l &&
                                                                                            (0 != x && (x -= 1),
                                                                                            (P += 1),
                                                                                            (stampPropertyValueCeiled = 100 * Math.ceil(l / 100)),
                                                                                            console.log("STAMP DUTY: " + s),
                                                                                            (s = ((stampPropertyValueCeiled - x) * Y) / 100 + D),
                                                                                            console.log("STAMP DUTY: " + s),
                                                                                            console.log("FIRST HOME CONCESSION: " + D),
                                                                                            console.log("TEST:" + s));
                                                                                }
                                                                            } else if ("first_home_concession_rate" == U) {
                                                                                if ("PRIMARY" == _ && "TRUE" == y && ("NEW" == u || "ESTABLISHED" == u)) {
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)),
                                                                                        (V = parseFloat(V)),
                                                                                        (D = parseFloat(D)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (P += 1),
                                                                                        l >= x &&
                                                                                            V >= l &&
                                                                                            (console.log("FIRST HOME STAMP DUTY: " + s),
                                                                                            (s -= D),
                                                                                            console.log("STAMP DUTY: " + s),
                                                                                            console.log("FIRST HOME CONCESSION: " + D),
                                                                                            console.log("TEST:" + s)),
                                                                                        0 > s && (s = 0);
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == U &&
                                                                                    "TRUE" == C &&
                                                                                    ((F = o[b].fixed_amount), 0 != F && ((g = (l * F) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                        else if (5 == a)
                                                                            if ("mortgage_registration_fee" == o[b].type) t = o[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == o[b].type) {
                                                                                var x = o[b].income_from,
                                                                                    V = o[b].income_to,
                                                                                    D = o[b].fixed_amount,
                                                                                    Y = o[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (V = parseFloat(V)),
                                                                                    (D = parseFloat(D)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    l >= x &&
                                                                                        V >= l &&
                                                                                        (0 != x && (x -= 1), 0 != Y ? ((stampPropertyValueCeiled = 1e4 * Math.ceil(l / 1e4)), (r = D + ((stampPropertyValueCeiled - x) * Y) / 1e4)) : (r = D));
                                                                            } else if ("general_rate" == U) {
                                                                                var x = o[b].income_from,
                                                                                    V = o[b].income_to,
                                                                                    D = o[b].fixed_amount,
                                                                                    Y = o[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (V = parseFloat(V)),
                                                                                    (D = parseFloat(D)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (P += 1),
                                                                                    l >= x && V >= l && (0 != x && (x -= 1), (stampPropertyValueCeiled = 100 * Math.ceil(l / 100)), (s = ((stampPropertyValueCeiled - x) * Y) / 100 + D));
                                                                            } else if ("first_home_owner_grant_established_home" == U) {
                                                                                if ("ESTABLISHED" == u && "TRUE" == y && "PRIMARY" == _) {
                                                                                    var V = o[b].income_to,
                                                                                        x = o[b].income_from,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)), (x = parseFloat(x)), (D = parseFloat(D)), (i = l >= x && V >= l ? D : 0);
                                                                                }
                                                                            } else if ("first_home_owner_grant_new_house_or_vacant_land" == U) {
                                                                                if (("VACANT" == u || "NEW" == u) && "TRUE" == y && "PRIMARY" == _) {
                                                                                    var V = o[b].income_to,
                                                                                        x = o[b].income_from,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)), (x = parseFloat(x)), (D = parseFloat(D)), (i = l >= x && V >= l ? D : 0);
                                                                                }
                                                                            } else if ("housing_construction_grant" == U) {
                                                                                if ("VACANT" == u || "NEW" == u) {
                                                                                    var V = o[b].income_to,
                                                                                        x = o[b].income_from,
                                                                                        Y = o[b].percent,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)),
                                                                                        (x = parseFloat(x)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (D = parseFloat(D)),
                                                                                        l >= x && V >= l && (0 != Y ? ((c = 8500 - (17 * (l - x - 1)) / 100), console.log(l + " - " + x + "-1")) : (c = D));
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == U &&
                                                                                    "TRUE" == C &&
                                                                                    ((F = o[b].fixed_amount), 0 != F && ((g = (l * F) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                        else if (6 == a)
                                                                            if ("mortgage_registration_fee" == o[b].type) t = o[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == o[b].type) r = o[b].fixed_amount;
                                                                            else if ("general_rate" == U) {
                                                                                var x = o[b].income_from,
                                                                                    V = o[b].income_to,
                                                                                    D = o[b].fixed_amount,
                                                                                    Y = o[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (V = parseFloat(V)),
                                                                                    (D = parseFloat(D)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (P += 1),
                                                                                    l >= x && V >= l && (0 != x && (x -= 1), (stampPropertyValueCeiled = 100 * Math.ceil(l / 100)), (s = ((stampPropertyValueCeiled - x) * Y) / 100 + D));
                                                                            } else if ("first_home_owner_grant" == U) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && "NEW" == u) {
                                                                                    var V = o[b].income_to,
                                                                                        x = o[b].income_from,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)), (x = parseFloat(x)), (D = parseFloat(D)), (i = D);
                                                                                }
                                                                            } else if ("first_home_builder_boost" == U) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && ("VACANT" == u || "NEW" == u)) {
                                                                                    var V = o[b].income_to,
                                                                                        x = o[b].income_from,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)), (x = parseFloat(x)), (D = parseFloat(D)), (c = D);
                                                                                }
                                                                            } else if ("first_home_buyer_discount" == U) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && "ESTABLISHED" == u) {
                                                                                    var x = o[b].income_from,
                                                                                        V = o[b].income_to,
                                                                                        D = o[b].fixed_amount,
                                                                                        Y = o[b].percent;
                                                                                    (x = parseFloat(x)), (V = parseFloat(V)), (D = parseFloat(D)), (Y = parseFloat(Y)), l >= x && V >= l && (0 != x && (x -= 1), (s = (s * Y) / 100));
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == U &&
                                                                                    "TRUE" == C &&
                                                                                    ((F = o[b].fixed_amount), 0 != F && ((g = (l * F) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                        else if (7 == a)
                                                                            if ("mortgage_registration_fee_paper" == o[b].type) (type_fee = o[b].urban_area), "Paper" == type_fee && "paper" == I && (t = o[b].fixed_amount);
                                                                            else if ("mortgage_registration_fee_electronic" == o[b].type)
                                                                                (type_fee = o[b].urban_area), "Electronic" == type_fee && "electronic" == I && (t = o[b].fixed_amount);
                                                                            else if ("land_transfer_fee_paper" == o[b].type) {
                                                                                var x = o[b].income_from,
                                                                                    V = o[b].income_to,
                                                                                    D = o[b].fixed_amount,
                                                                                    Y = o[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (V = parseFloat(V)),
                                                                                    (D = parseFloat(D)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (type_fee = o[b].urban_area),
                                                                                    "Paper" == type_fee && "paper" == I && ((r = D + (l / 1e3) * Y), (r = r > V ? V : Math.ceil(r)));
                                                                            } else if ("land_transfer_fee_electronic" == o[b].type) {
                                                                                var x = o[b].income_from,
                                                                                    V = o[b].income_to,
                                                                                    D = o[b].fixed_amount,
                                                                                    Y = o[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (V = parseFloat(V)),
                                                                                    (D = parseFloat(D)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (type_fee = o[b].urban_area),
                                                                                    "Electronic" == type_fee && "electronic" == I && ((r = D + (l / 1e3) * Y), (r = r > V ? V : Math.ceil(r)));
                                                                            } else if ("non_principal_place_of_residence_rate" == U) {
                                                                                var x = o[b].income_from,
                                                                                    V = o[b].income_to,
                                                                                    D = o[b].fixed_amount,
                                                                                    Y = o[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (V = parseFloat(V)),
                                                                                    (D = parseFloat(D)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    l >= x &&
                                                                                        V >= l &&
                                                                                        (0 != x && (x -= 1),
                                                                                        0 != D
                                                                                            ? ((s = ((l - x) * Y) / 100 + D), console.log("Non-Principal: (((" + l + " - " + x + ")*" + Y + ")/100) + " + D), console.log(s))
                                                                                            : ((s = (l * Y) / 100), console.log("Non-Principal: (" + l + " * " + Y + ")/100"), console.log(s)));
                                                                            } else if ("principal_place_of_residence_rate" == U && "PRIMARY" == _) {
                                                                                var x = o[b].income_from,
                                                                                    V = o[b].income_to,
                                                                                    D = o[b].fixed_amount,
                                                                                    Y = o[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (V = parseFloat(V)),
                                                                                    (D = parseFloat(D)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    l >= x &&
                                                                                        V >= l &&
                                                                                        0 != D &&
                                                                                        0 != Y &&
                                                                                        (0 != x && (x -= 1), (s = ((l - x) * Y) / 100 + D), console.log("Principal: (((" + l + " - " + x + ")*" + Y + ")/100) + " + D), console.log(s));
                                                                            } else if ("first_home_owner_grant" == U) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && ("VACANT" == u || "NEW" == u)) {
                                                                                    var V = o[b].income_to,
                                                                                        x = o[b].income_from,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)), (x = parseFloat(x)), (D = parseFloat(D)), l >= x && V >= l && (i = D);
                                                                                }
                                                                            } else if ("first_home_buyers" == U) {
                                                                                if ("TRUE" == y && "PRIMARY" == _) {
                                                                                    var V = o[b].income_to,
                                                                                        x = o[b].income_from,
                                                                                        Y = o[b].percent,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)),
                                                                                        (x = parseFloat(x)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (D = parseFloat(D)),
                                                                                        l >= x && V >= l && (0 != x && (x -= 1), (s *= (l - 6e5) / 15e4)),
                                                                                        0 > s && (s = 0);
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == U && "TRUE" == C
                                                                                    ? ((F = o[b].fixed_amount),
                                                                                      0 != F && ((g = (l * F) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")),
                                                                                      1e6 >= l &&
                                                                                          0 == R &&
                                                                                          ("NEW" == u
                                                                                              ? ((R = 0.5 * s * -1), console.log("       VIC DISCOUNT - NEW         "), console.log("VIC DISCOUNT: " + R), console.log("VIC STAMP DUTY: " + s))
                                                                                              : ((R = 0.25 * s * -1),
                                                                                                console.log("       VIC DISCOUNT - not NEW         "),
                                                                                                console.log("VIC DISCOUNT: " + R),
                                                                                                console.log("VIC STAMP DUTY: " + s)),
                                                                                          console.log("stamp duty foreign pre = " + s),
                                                                                          console.log("vic discount foreign pre = " + R),
                                                                                          console.log("STAMP DUTY =" + s + " + " + R),
                                                                                          (s += R),
                                                                                          console.log("stamp duty foreign post = " + s),
                                                                                          console.log("vic discount foreign post = " + R)))
                                                                                    : 1e6 >= l &&
                                                                                      0 == R &&
                                                                                      ("NEW" == u
                                                                                          ? ((R = 0.5 * s * -1), console.log("       VIC DISCOUNT - NEW         "), console.log("VIC DISCOUNT: " + R), console.log("VIC STAMP DUTY: " + s))
                                                                                          : ((R = 0.25 * s * -1),
                                                                                            console.log("       VIC DISCOUNT - not NEW         "),
                                                                                            console.log("VIC DISCOUNT: " + R),
                                                                                            console.log("VIC STAMP DUTY: " + s)),
                                                                                      console.log("stamp duty pre = " + s),
                                                                                      console.log("vic discount pre = " + R),
                                                                                      console.log("STAMP DUTY =" + s + " + " + R),
                                                                                      (s += R),
                                                                                      console.log("stamp duty post = " + s),
                                                                                      console.log("vic discount post = " + R));
                                                                        else if (8 == a)
                                                                            if ("mortgage_registration_fee" == o[b].type) t = o[b].fixed_amount;
                                                                            else if ("land_transfer_fee" == o[b].type) {
                                                                                var x = o[b].income_from,
                                                                                    V = o[b].income_to,
                                                                                    D = o[b].fixed_amount,
                                                                                    Y = o[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (V = parseFloat(V)),
                                                                                    (D = parseFloat(D)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    l >= x && V >= l && (0 != x && (x -= 1), (r = 0 != Y ? ((l - x) * Y) / 100 + D : D));
                                                                            } else if ("general_rate" == U && "VACANT" == u && "FALSE" == y) {
                                                                                var x = o[b].income_from,
                                                                                    V = o[b].income_to,
                                                                                    D = o[b].fixed_amount,
                                                                                    Y = o[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (V = parseFloat(V)),
                                                                                    (D = parseFloat(D)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (P += 1),
                                                                                    l >= x && V >= l && (0 != x && (x -= 1), (stampPropertyValueCeiled = 100 * Math.ceil(l / 100)), (s = ((stampPropertyValueCeiled - x) * Y) / 100 + D));
                                                                            } else if ("residential_rate" == U) {
                                                                                var x = o[b].income_from,
                                                                                    V = o[b].income_to,
                                                                                    D = o[b].fixed_amount,
                                                                                    Y = o[b].percent;
                                                                                (x = parseFloat(x)),
                                                                                    (V = parseFloat(V)),
                                                                                    (D = parseFloat(D)),
                                                                                    (Y = parseFloat(Y)),
                                                                                    (P += 1),
                                                                                    l >= x && V >= l && (0 != x && (x -= 1), (stampPropertyValueCeiled = 100 * Math.ceil(l / 100)), (s = ((stampPropertyValueCeiled - x) * Y) / 100 + D));
                                                                            } else if ("first_home_owner_grant_new_house_or_vacant_land" == U) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && ("VACANT" == u || "NEW" == u)) {
                                                                                    console.log("first_home_owner_grant_new_house_or_vacant_land");
                                                                                    var V = o[b].income_to,
                                                                                        x = o[b].income_from,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)),
                                                                                        (x = parseFloat(x)),
                                                                                        (D = parseFloat(D)),
                                                                                        (h += 1),
                                                                                        "north" == v ? 1 == h && l >= x && V >= l && (i = D) : "south" == v && 2 == h && l >= x && V >= l && (i = D),
                                                                                        console.log("home_owner_grant: " + i),
                                                                                        console.log("e: " + h);
                                                                                }
                                                                            } else if ("first_home_owner_grant_established_home" == U) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && "ESTABLISHED" == u) {
                                                                                    console.log("first_home_owner_grant_established_home");
                                                                                    var V = o[b].income_to,
                                                                                        x = o[b].income_from,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)),
                                                                                        (x = parseFloat(x)),
                                                                                        (D = parseFloat(D)),
                                                                                        (E += 1),
                                                                                        "north" == v ? 1 == E && l >= x && V >= l && (i = D) : "south" == v && 2 == E && l >= x && V >= l && (i = D);
                                                                                }
                                                                            } else if ("first_home_owner_rate_established_home" == U) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && ("ESTABLISHED" == u || "NEW" == u)) {
                                                                                    var V = o[b].income_to,
                                                                                        x = o[b].income_from,
                                                                                        Y = o[b].percent,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)),
                                                                                        (x = parseFloat(x)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (D = parseFloat(D)),
                                                                                        l >= x && V >= l && (0 != x && (x -= 1), (stampPropertyValueCeiled = 100 * Math.ceil(l / 100)), (s = ((stampPropertyValueCeiled - x) * Y) / 100 + D));
                                                                                }
                                                                            } else if ("first_home_owner_rate" == U && "vacant_lands" == M) {
                                                                                if ("TRUE" == y && "PRIMARY" == _ && "VACANT" == u) {
                                                                                    var V = o[b].income_to,
                                                                                        x = o[b].income_from,
                                                                                        Y = o[b].percent,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)),
                                                                                        (x = parseFloat(x)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (D = parseFloat(D)),
                                                                                        l >= x &&
                                                                                            V >= l &&
                                                                                            (0 != x && (x -= 1),
                                                                                            0 != Y ? ((stampPropertyValueCeiled = 100 * Math.ceil(l / 100)), (s = ((stampPropertyValueCeiled - x) * Y) / 100 + D)) : (s = D));
                                                                                }
                                                                            } else if ("concessional_rate" == U) {
                                                                                if ("PRIMARY" == _ && "FALSE" == y && "VACANT" != u) {
                                                                                    var V = o[b].income_to,
                                                                                        x = o[b].income_from,
                                                                                        Y = o[b].percent,
                                                                                        D = o[b].fixed_amount;
                                                                                    (V = parseFloat(V)),
                                                                                        (x = parseFloat(x)),
                                                                                        (Y = parseFloat(Y)),
                                                                                        (D = parseFloat(D)),
                                                                                        l >= x && V >= l && (0 != x && (x -= 1), (stampPropertyValueCeiled = 100 * Math.ceil(l / 100)), (s = ((stampPropertyValueCeiled - x) * Y) / 100 + D));
                                                                                }
                                                                            } else
                                                                                "foreign_buyers_duty" == U &&
                                                                                    "TRUE" == C &&
                                                                                    ((F = o[b].fixed_amount), 0 != F && ((g = (l * F) / 100), e("#stamp-foreign-buyers-duty").parent().parent().removeClass("hidden")));
                                                                    }
                                                                (t = parseFloat(t)),
                                                                    (r = parseFloat(r)),
                                                                    (n = t + r + s + g),
                                                                    (m = i + c),
                                                                    e("#stamp-mortgage-fee").html("$" + numberWithCommas((Math.round(100 * t) / 100).toFixed(2))),
                                                                    e("#stamp-transfer-fee").html("$" + numberWithCommas((Math.round(100 * r) / 100).toFixed(2))),
                                                                    e("#stamp-duty-fee").html("$" + numberWithCommas((Math.round(100 * s) / 100).toFixed(2))),
                                                                    e("#vic-discount").html("$" + numberWithCommas((Math.round(100 * R) / 100).toFixed(2))),
                                                                    e("#stamp-total-fee").html("$" + numberWithCommas((Math.round(100 * n) / 100).toFixed(2))),
                                                                    e("#stamp-home-grant").html("$" + numberWithCommas((Math.round(100 * i) / 100).toFixed(2))),
                                                                    e("#stamp-other-grant").html("$" + numberWithCommas((Math.round(100 * c) / 100).toFixed(2))),
                                                                    e("#stamp-grant-total").html("$" + numberWithCommas((Math.round(100 * m) / 100).toFixed(2))),
                                                                    e("#stamp-foreign-buyers-duty").html("$" + numberWithCommas((Math.round(100 * g) / 100).toFixed(2))),
                                                                    console.log("APPLY CONCESSIONS: " + f),
                                                                    console.log("MORTGAGE FEE: " + t),
                                                                    console.log("LAND TRANSFER FEE: " + r),
                                                                    console.log("STAMP DUTY FEE: " + s),
                                                                    console.log("VIC DISCOUNT: " + R),
                                                                    console.log("TOTAL FEES: " + n),
                                                                    console.log("FIRST HOME OWNER GRANT: " + i),
                                                                    console.log("OTHER CONCESSIONS: " + c),
                                                                    console.log("TOTAL CONCESSIONS: " + m);
                                                                var G = { state: a, property_value: l, property_type: _, first_home_buyer: y, are_you_purchasing: u };
                                                                return G;
                                                            }
                                                            r = o;
                                                            var t = new Object(),
                                                                s = 1;
                                                            (t.length = l.length),
                                                                e.each(l, function (o, a) {
                                                                    var r = "";
                                                                    0 == o && (r = " checked "),
                                                                        e("#state-select").append("<option" + r + ' value="' + a.short_name + '">' + a.short_name + "</option>"),
                                                                        (t[o] = new Object()),
                                                                        (t[o].id = a.id),
                                                                        (t[o].short_name = a.short_name),
                                                                        (t[o].full_name = a.full_name),
                                                                        (t[o].active_modules = a.active_modules);
                                                                }),
                                                                e(".beautiful-input").each(function () {
                                                                    var o = e(this).val();
                                                                    e(this).val(numberWithCommas(o));
                                                                }),
                                                                e(".beautiful-input").keyup(function (o) {
                                                                    if (8 != o.keyCode && 37 != o.keyCode && 39 != o.keyCode) {
                                                                        var a = e(this).val();
                                                                        e(this).val(numberWithCommas(a));
                                                                    }
                                                                }),
                                                                e("#state-select").change(function () {
                                                                    e("#state-modules .state-module").removeClass("active-modules");
                                                                    var o = e(this).val();
                                                                    for (i = 0; i < t.length; i++)
                                                                        if (o == t[i].short_name)
                                                                            for (s = t[i].id, e("#stamp-state-name").html(t[i].full_name), b = 0; b < t[i].active_modules.length; b++)
                                                                                1 == t[i].active_modules[b] && e("#state-modules .state-module").eq(b).addClass("active-modules");
                                                                    var a = 0;
                                                                    e(".active-modules").each(function () {
                                                                        (a += 1), console.log(a), e(this).children("label").children(".filled-circle").html(a);
                                                                    });
                                                                }),
                                                                changeState("NSW"),
                                                                changeState(getState()),
                                                                e("#state-select").change(),
                                                                e(".state-module").each(function () {
                                                                    console.log("test");
                                                                    var o = e(this);
                                                                    e(this)
                                                                        .find("button")
                                                                        .each(function () {
                                                                            e(this).click(function () {
                                                                                o.find("button").removeClass("checked"), e(this).addClass("checked");
                                                                            });
                                                                        });
                                                                }),
                                                                e(".stamp-calculate").click(function () {
                                                                    var o = a(r, s);
                                                                    e("#changes-made").show().css("opacity", 0).animate({ opacity: 1, duration: 300 }),
                                                                        "PRIMARY" == o.property_type ? (o.property_type = 1) : (o.property_type = 2),
                                                                        "TRUE" == o.first_home_buyer ? (o.first_home_buyer = 1) : (o.first_home_buyer = 2),
                                                                        "NEW" == o.are_you_purchasing ? (o.are_you_purchasing = 1) : "ESTABLISHED" == o.are_you_purchasing ? (o.are_you_purchasing = 2) : (o.are_you_purchasing = 3),
                                                                        jQuery.post("//calculatorsonline.com.au/stamp_duty/ajax_statistic_track", {
                                                                            property_value: o.property_value,
                                                                            state: o.state,
                                                                            property_type: o.property_type,
                                                                            first_home_buyer: o.first_home_buyer,
                                                                            are_you_purchasing: o.are_you_purchasing,
                                                                            url: document.URL,
                                                                        }),
                                                                        console.log(o);
                                                                }),
                                                                e("#stamp-duty-calculator").removeClass("hidden");
                                                        },
                                                        error: function (o, a, t) {
                                                            var r = "<b>ERROR:</b> Can't load states data. Try to refresh your web browser or visit <a href='http://stampdutycalc.com.au' title='Stamp Duty'>stampdutycalc.com.au</a>";
                                                            e("#fountainG h4").html(r);
                                                        },
                                                    });
                                            },
                                            error: function (o, a, t) {
                                                var r = "<b>ERROR:</b> Can't load states. Try to refresh your web browser or visit <a href='http://stampdutycalc.com.au' title='Stamp Duty'>stampdutycalc.com.au</a>";
                                                e("#fountainG h4").html(r);
                                            },
                                        });
                                    else {
                                        var p = "<b>ERROR:</b> Embedded code is incorrect. Please visit/contact <a href='http://stampdutycalc.com.au' title='Stamp Duty'>stampdutycalc.com.au</a>";
                                        e("#fountainG h4").html(p);
                                    }
                                },
                                error: function (o, a, t) {
                                    var r = "<b>ERROR:</b> Can't recieve black list data. Try to refresh your web browser or visit <a href='http://stampdutycalc.com.au' title='Stamp Duty'>stampdutycalc.com.au</a>";
                                    e("#fountainG h4").html(r);
                                },
                            });
                    },
                    error: function (o, a, t) {
                        var r = "<b>ERROR:</b> Can't load CSS file. Try to refresh your web browser or visit <a href='http://stampdutycalc.com.au' title='Stamp Duty'>stampdutycalc.com.au</a>";
                        e("#fountainG h4").html(r);
                    },
                });
        });
    });
})();
