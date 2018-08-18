var arrA = [] // origin array
var arrB = [] // filtered array
// window.onload=function(){
$(document).ready(function () {
    $.ajax({
        type: "get",
        async: false,//async設定false會變成同步請求 要完成ajax後才會繼續執行
        url: "https://opendata.epa.gov.tw/webapi/api/rest/datastore/355000000I-000467/?format=json&token=CDj7SkMiIUeyJVbXtLHgkg",
        dataType: "jsonp",
        jsonpCallback: "callback", //callback函式(jsonp的callback函式，預設是callback)
        success: function (response) {
            //jQuery會自動將結果傳入(如果有設定callback函式的話，兩者都會執行)
            window.localStorage.setItem("typeBoy", "false")
            window.localStorage.setItem("typeGirl", "false")
            window.localStorage.setItem("typeBalence", "false")
            window.localStorage.setItem("typeKid", "false")
            window.localStorage.setItem("typeMix", "false")
            window.localStorage.setItem("total", 0)
            while (true) {
                for (var i = 0; i < response.result.records.length; i++) {
                    arrA[i] = response.result.records[i]
                }
                if (response.success) {
                    console.log(response.success)
                    $('body').css("display", "block")
                    break;
                }
            }
        },
        error: function () {
            alert('loading fail')
        }
    })
    $('#index').click(() => {
        $('#index').css("display", "none")
        $('#enter').css("display", "block")
    })
    $('header').click(() => {
        $('#enter').css("display", "none")
        $('#index').css("display", "block")
    })

    $('.typeBoy').click(function () {
        if (window.localStorage.getItem("total") == "1" && window.localStorage.getItem("typeBoy") === "false") {
            // return alert("can't choose more!")
            if (window.localStorage.getItem("typeGirl") === "true") {
                window.localStorage.setItem("typeGirl", "false")
            } else if (window.localStorage.getItem("typeBalence") === "true") {
                window.localStorage.setItem("typeBalence", "false")
            } else if (window.localStorage.getItem("typeKid") === "true") {
                window.localStorage.setItem("typeKid", "false")
            } else if (window.localStorage.getItem("typeMix") === "true") {
                window.localStorage.setItem("typeMix", "false")
            } else {
                console.log("error")
            }
            $('.typeChoice').css("background-color", "white")
            $('.typeChoice').css("color", "black")
            window.localStorage.setItem("total", "0")
        }
        if (window.localStorage.getItem("typeBoy") === "true") {
            window.localStorage.setItem("typeBoy", "false")
            $('#type .typeBoy').css("background-color", "white")
            $('#type .typeBoy').css("color", "black")
            window.localStorage.setItem("total", parseInt(window.localStorage.getItem("total")) - 1)
            selectCountry()
        } else {
            window.localStorage.setItem("typeBoy", "true")
            $('#type .typeBoy').css("background-color", "#0080ff")
            $('#type .typeBoy').css("color", "white")
            window.localStorage.setItem("total", parseInt(window.localStorage.getItem("total")) + 1)
            selectCountry()
        }
    })
    $('.typeGirl').click(function () {
        if (window.localStorage.getItem("total") == "1" && window.localStorage.getItem("typeGirl") === "false") {
            // return alert("can't choose more!")
            if (window.localStorage.getItem("typeBoy") === "true") {
                window.localStorage.setItem("typeBoy", "false")
            } else if (window.localStorage.getItem("typeBalence") === "true") {
                window.localStorage.setItem("typeBalence", "false")
            } else if (window.localStorage.getItem("typeKid") === "true") {
                window.localStorage.setItem("typeKid", "false")
            } else if (window.localStorage.getItem("typeMix") === "true") {
                window.localStorage.setItem("typeMix", "false")
            } else {
                console.log("error")
            }
            $('.typeChoice').css("background-color", "white")
            $('.typeChoice').css("color", "black")
            window.localStorage.setItem("total", "0")
        }
        if (window.localStorage.getItem("typeGirl") === "true") {
            window.localStorage.setItem("typeGirl", "false")
            $('#type .typeGirl').css("background-color", "white")
            $('#type .typeGirl').css("color", "black")
            window.localStorage.setItem("total", parseInt(window.localStorage.getItem("total")) - 1)
            selectCountry()
        } else {
            window.localStorage.setItem("typeGirl", "true")
            $('#type .typeGirl').css("background-color", "#0080ff")
            $('#type .typeGirl').css("color", "white")
            window.localStorage.setItem("total", parseInt(window.localStorage.getItem("total")) + 1)
            selectCountry()
        }
    })
    $('.typeBalence').click(function () {
        if (window.localStorage.getItem("total") == "1" && window.localStorage.getItem("typeBalence") === "false") {
            // return alert("can't choose more!")
            if (window.localStorage.getItem("typeGirl") === "true") {
                window.localStorage.setItem("typeGirl", "false")
            } else if (window.localStorage.getItem("typeBoy") === "true") {
                window.localStorage.setItem("typeBoy", "false")
            } else if (window.localStorage.getItem("typeKid") === "true") {
                window.localStorage.setItem("typeKid", "false")
            } else if (window.localStorage.getItem("typeMix") === "true") {
                window.localStorage.setItem("typeMix", "false")
            } else {
                console.log("error")
            }
            $('.typeChoice').css("background-color", "white")
            $('.typeChoice').css("color", "black")
            window.localStorage.setItem("total", "0")
        }
        if (window.localStorage.getItem("typeBalence") === "true") {
            window.localStorage.setItem("typeBalence", "false")
            $('#type .typeBalence').css("background-color", "white")
            $('#type .typeBalence').css("color", "black")
            window.localStorage.setItem("total", parseInt(window.localStorage.getItem("total")) - 1)
            selectCountry()
        } else {
            window.localStorage.setItem("typeBalence", "true")
            $('#type .typeBalence').css("background-color", "#0080ff")
            $('#type .typeBalence').css("color", "white")
            window.localStorage.setItem("total", parseInt(window.localStorage.getItem("total")) + 1)
            selectCountry()
        }
    })
    $('.typeKid').click(function () {
        if (window.localStorage.getItem("total") == "1" && window.localStorage.getItem("typeKid") === "false") {
            // return alert("can't choose more!")
            if (window.localStorage.getItem("typeGirl") === "true") {
                window.localStorage.setItem("typeGirl", "false")
            } else if (window.localStorage.getItem("typeBalence") === "true") {
                window.localStorage.setItem("typeBalence", "false")
            } else if (window.localStorage.getItem("typeBoy") === "true") {
                window.localStorage.setItem("typeBoy", "false")
            } else if (window.localStorage.getItem("typeMix") === "true") {
                console.log("kid " + window.localStorage.getItem("typeKid"))
                console.log("mix " + window.localStorage.getItem("typeMix"))
                window.localStorage.setItem("typeMix", "false")
            } else {
                console.log("error")
            }
            $('.typeChoice').css("background-color", "white")
            $('.typeChoice').css("color", "black")
            window.localStorage.setItem("total", "0")
        }
        if (window.localStorage.getItem("typeKid") === "true") {
            window.localStorage.setItem("typeKid", "false")
            $('#type .typeKid').css("background-color", "white")
            $('#type .typeKid').css("color", "black")
            window.localStorage.setItem("total", parseInt(window.localStorage.getItem("total")) - 1)
            selectCountry()
        } else {
            window.localStorage.setItem("typeKid", "true")
            $('#type .typeKid').css("background-color", "#0080ff")
            $('#type .typeKid').css("color", "white")
            window.localStorage.setItem("total", parseInt(window.localStorage.getItem("total")) + 1)
            selectCountry()
        }
    })
    $('.typeMix').click(function () {
        if (window.localStorage.getItem("total") == "1" && window.localStorage.getItem("typeMix") === "false") {
            // return alert("can't choose more!")
            if (window.localStorage.getItem("typeGirl") === "true") {
                window.localStorage.setItem("typeGirl", "false")
            } else if (window.localStorage.getItem("typeBalence") === "true") {
                window.localStorage.setItem("typeBalence", "false")
            } else if (window.localStorage.getItem("typeKid") === "true") {
                window.localStorage.setItem("typeKid", "false")
            } else if (window.localStorage.getItem("typeBoy") === "true") {
                window.localStorage.setItem("typeBoy", "false")
            } else {
                console.log("error")
            }
            $('.typeChoice').css("background-color", "white")
            $('.typeChoice').css("color", "black")
            window.localStorage.setItem("total", "0")
        }
        if (window.localStorage.getItem("typeMix") === "true") {
            window.localStorage.setItem("typeMix", "false")
            $('#type .typeMix').css("background-color", "white")
            $('#type .typeMix').css("color", "black")
            window.localStorage.setItem("total", parseInt(window.localStorage.getItem("total")) - 1)
            selectCountry()
        } else {
            window.localStorage.setItem("typeMix", "true")
            $('#type .typeMix').css("background-color", "#0080ff")
            $('#type .typeMix').css("color", "white")
            window.localStorage.setItem("total", parseInt(window.localStorage.getItem("total")) + 1)
            selectCountry()
        }
    })
})

var countryCity = {
    '全縣市': ['臺北市', '新北市', '基隆市', '桃園市', '新竹縣', '苗栗縣', '臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義縣', '臺南市', '高雄市', '屏東縣', '臺東縣', '花蓮縣', '宜蘭縣', '澎湖縣'],
    '臺北市': ['松山區', '大安區', '大同區', '中山區', '內湖區', '南港區', '士林區', '北投區', '信義區', '中正區', '萬華區', '文山區'],
    '新北市': ['板橋區', '三重區', '永和區', '中和區', '新店區', '新莊區', '樹林區', '鶯歌區', '三峽區', '淡水區', '汐止區', '瑞芳區', '土城區', '蘆洲區', '五股區', '泰山區', '林口區', '深坑區', '石碇區', '坪林區', '三芝區', '石門區', '八里區', '平溪區', '雙溪區', '貢寮區', '金山區', '萬里區', '烏來區'],
    '基隆市': ['中正區', '七堵區', '暖暖區', '仁愛區', '中山區', '安樂區', '信義區'],
    '桃園市': ['桃園區', '中壢區', '大溪區', '楊梅區', '蘆竹區', '大園區', '龜山區', '八德區', '龍潭區', '平鎮區', '新屋區', '觀音區', '復興區'],
    '新竹市': ['東區', '北區', '香山區'],
    '苗栗縣': ['苗栗市', '苑裡鎮', '通霄鎮', '竹南鎮', '頭份市', '後龍鎮', '卓蘭鎮', '大湖鄉', '公館鄉', '銅鑼鄉', '南庄鄉', '頭屋鄉', '三義鄉', '西湖鄉', '造橋鄉', '三灣鄉', '獅潭鄉', '泰安鄉'],
    '臺中市': ['豐原區', '東勢區', '大甲區', '清水區', '沙鹿區', '梧棲區', '后里區', '神岡區', '潭子區', '大雅區', '新社區', '石岡區', '外埔區', '大安區', '烏日區', '大肚區', '龍井區', '霧峰區', '太平區', '大里區', '和平區', '中區', '東區', '西區', '南區', '北區', '西屯區', '南屯區', '北屯區'],
    '南投縣': ['南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'],
    '彰化縣': ['彰化市', '鹿港鎮', '和美鎮', '北斗鎮', '員林市', '溪湖鎮', '田中鎮', '二林鎮', '線西鄉', '伸港鄉', '福興鄉', '秀水鄉', '花壇鄉', '芬園鄉', '大村鄉', '埔鹽鄉', '埔心鄉', '永靖鄉', '社頭鄉', '二水鄉', '田尾鄉', '埤頭鄉', '芳苑鄉', '大城鄉', '竹塘鄉', '溪州鄉'],
    '雲林縣': ['斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '古坑鄉', '大埤鄉', '莿桐鄉', '林內鄉', '二崙鄉', '崙背鄉', '麥寮鄉', '東勢鄉', '褒忠鄉', '臺西鄉', '元長鄉', '四湖鄉', '口湖鄉', '水林鄉'],
    '嘉義縣': ['朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', '鹿草鄉', '太保市', '水上鄉', '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉', '大埔鄉', '阿里山鄉'],
    '臺南市': ['新營區', '鹽水區', '白河區', '麻豆區', '佳里區', '新化區', '善化區', '學甲區', '柳營區', '後壁區', '東山區', '下營區', '六甲區', '官田區', '大內區', '西港區', '七股區', '將軍區', '北門區', '新市區', '安定區', '山上區', '玉井區', '楠西區', '南化區', '左鎮區', '仁德區', '歸仁區', '關廟區', '龍崎區', '永康區', '東區', '南區', '中西區', '北區', '安南區', '安平區'],
    '高雄市': ['鳳山區', '岡山區', '旗山區', '美濃區', '林園區', '大寮區', '大樹區', '仁武區', '大社區', '鳥松區', '橋頭區', '燕巢區', '田寮區', '阿蓮區', '路竹區', '湖內區', '茄萣區', '永安區', '彌陀區', '梓官區', '六龜區', '甲仙區', '杉林區', '內門區', '茂林區', '桃源區', '那瑪夏區', '鹽埕區', '鼓山區', '左營區', '楠梓區', '三民區', '新興區', '前金區', '苓雅區', '前鎮區', '旗津區', '小港區'],
    '屏東縣': ['屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉', '高樹鄉', '萬巒鄉', '內埔鄉', '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉', '佳冬鄉', '琉球鄉', '車城鄉', '滿州鄉', '枋山鄉', '三地門鄉', '霧臺鄉', '瑪家鄉', '泰武鄉', '來義鄉', '春日鄉', '獅子鄉', '牡丹鄉'],
    '臺東縣': ['臺東市', '成功鎮', '關山鎮', '卑南鄉', '大武鄉', '太麻里鄉', '東河鄉', '長濱鄉', '鹿野鄉', '池上鄉', '綠島鄉', '延平鄉', '海端鄉', '達仁鄉', '金峰鄉', '蘭嶼鄉'],
    '花蓮縣': ['花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '富里鄉', '秀林鄉', '萬榮鄉', '卓溪鄉'],
    '宜蘭縣': ['宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'],
    '澎湖縣': ['馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉']
}

function selectCountry(e) {
    $('.lists').html("")
    arrB = arrA.filter(filterCondition)
    if (arrB.length < 1000) {
        for (var i = 0; i < arrB.length; i++) {
            console.log("X: "+arrB[i].Longitude+", Y: "+arrB[i].Latitude)
            // console.log(arrB[i])
            $('.lists').html($('.lists').html() + '<div class="list"><div class="colorblock"><p>'+arrB[i].Type+'</p></div><h3>' + arrB[i].Type2 + '</h3><p class="samesize">' + arrB[i].Address + '</p><p><i class="fa fa-location-arrow" aria-hidden="true"></i><a target="_blank" href="' + encodeURI("http://maps.google.com/?q=" + arrB[i].Latitude + "," + arrB[i].Longitude) +'">地圖</a></p><p><i class="fa fa-thumbs-up" aria-hidden="true"></i>' + arrB[i].Grade + '</p><p class="down"><i class="fa fa-address-book-o" aria-hidden="true"></i>' + arrB[i].Administration+'</p></div>')
        }
    }
    $('#result').css("border", "2px solid #0080ff")
    if (arrB.length == 1000) {
        $('#result').css("border", "0px")
        $('#result').css("background-color", "rgb(194, 223, 255)")
        $('#choicetitle').text("")
        $('#resultnumber').html("")
    } else if (arrB.length > 1) {
        $('#result').css("background-color", "white")
        $('#choicetitle').text("Result")
        $('#resultnumber').html("<span>" + arrB.length + "</span> results")
    } else if (arrB.length == 1) {
        $('#result').css("background-color", "white")
        $('#choicetitle').text("Result")
        $('#resultnumber').html("<span>" + arrB.length + "</span> result")
    } else {
        $('#result').css("background-color", "white")
        $('#choicetitle').text("Result")
        $('#resultnumber').text("no match")
    }
}

function filterCondition(arr) {
    if ($('.country option:selected').val() != '全縣市') {
        if (window.localStorage.getItem("typeBoy") === "true") {
            return ($('.country option:selected').val() === arr.Country && $('.typeBoy').attr("data-content") === arr.Type) || ($('.country option:selected').val() === arr.Country && "混合廁所" === arr.Type)
        } else if (window.localStorage.getItem("typeGirl") === "true") {
            return ($('.country option:selected').val() === arr.Country && $('.typeGirl').attr("data-content") === arr.Type) || ($('.country option:selected').val() === arr.Country && "混合廁所" === arr.Type)
        } else if (window.localStorage.getItem("typeBalence") === "true") {
            return $('.country option:selected').val() === arr.Country && $('.typeBalence').attr("data-content") === arr.Type
        } else if (window.localStorage.getItem("typeKid") === "true") {
            return $('.country option:selected').val() === arr.Country && $('.typeKid').attr("data-content") === arr.Type
        } else if (window.localStorage.getItem("typeMix") === "true") {
            return $('.country option:selected').val() === arr.Country && $('.typeMix').attr("data-content") === arr.Type
        } else {
            return $('.country option:selected').val() === arr.Country
        }
    } else {
        if (window.localStorage.getItem("typeBoy") === "true") {
            return $('.typeBoy').attr("data-content") === arr.Type || "混合廁所" === arr.Type
        } else if (window.localStorage.getItem("typeGirl") === "true") {
            return $('.typeGirl').attr("data-content") === arr.Type || "混合廁所" === arr.Type
        } else if (window.localStorage.getItem("typeBalence") === "true") {
            return $('.typeBalence').attr("data-content") === arr.Type
        } else if (window.localStorage.getItem("typeKid") === "true") {
            return $('.typeKid').attr("data-content") === arr.Type
        } else if (window.localStorage.getItem("typeMix") === "true") {
            return $('.typeMix').attr("data-content") === arr.Type
        } else {
            return arr
        }
    }
}