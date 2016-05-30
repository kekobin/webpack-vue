exports.stat = () => {
    if (typeof YA == 'undefined') {
        return false;
    }
    var obj = obj || {};
    var source = {
        pro: "huyawap",
        pas: YA.cookie.get('username') || '',
        yyuid: YA.cookie.get('yyuid') || '',
        pageType: "root",
        rso: "",
        rso_desc: "",
        eid: "",
        eid_desc: ""
    }

    var writeCookie = function(name, value, domain, path, expiretime) {
        var cookieInfo = name + "=" + value + ";domain=" + domain + ";path=" + path;
        if (expiretime > 0) {
            cookieInfo = cookieInfo + ";expires=" + expiretime.toGMTString();
        }

        document.cookie = cookieInfo;
    }



    for (var property in obj) {
        source[property] = obj[property];
    }

    if (typeof ya == 'undefined') {
        window.ya = new YA(source.pro, source.pas, {
            pageType: source.pageType,
            yyuid: source.yyuid
        });

        ya.reportProductStartUp({
            pro: source.pro,
            rso: source.rso,
            rso_desc: source.rso_desc,
            ref: YA.cookie.get('ya_eid'),
            furl: encodeURIComponent(document.referrer)
        });

        ya.startProductHeartbeat({
            pro: source.pro,
            rso: source.rso,
            ref: YA.cookie.get('ya_eid'),
            rso_desc: source.rso_desc
        });

        ya.reportProductEvent({
            eid: source.eid,
            eid_desc: source.eid_desc,
            rso: source.rso,
            rso_desc: source.rso_desc,
            ref: YA.cookie.get('ya_eid'),
            furl: encodeURIComponent(document.referrer)
        })


        $("body").on('click', '.clickstat', function(event) {

            var ya_eid = '';

            if ($(this).attr('href')) {
                ya_eid = $(this).attr('eid').substring(6);
                writeCookie('ya_eid', ya_eid, 'huya.com', '/')
            }

            ya.reportProductEvent({
                eid: $(this).attr('eid'), //产品给的
                eid_desc: $(this).attr('eid_desc'), //产品给的
                ref: YA.cookie.get('ya_eid')
            })
        });
    }
};