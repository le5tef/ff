var fisrtDate = new Date(2021, 12, 3)
var lastDate = new Date(2022, 5, 24)
var dates = []
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
var months = {
    '0': 'Декабря',
    '1': 'Января',
    '2': 'Февраля',
    '3': 'Марта',
    '4': 'Апреля',
    '5': 'Мая',
    '6': 'Июня',
    '7': 'Июля',
    '8': 'Августа',
    '9': 'Сентрября',
    '10': 'Октября',
    '11': 'Ноября',
}
var dayOfWeek = {
    '3': 'Воскресенье',
    '4': 'Понедельник',
    '5': 'Вторник',
    '6': 'Среда',
    '0': 'Четверг',
    '1': 'Пятница',
    '2': 'Суббота',
}
function getRandomTime() {
    var startTime = [Math.floor(Math.random() * 8 + 12), Math.floor(Math.random() * 50 + 10)]
    var endTime = [startTime[0] + 1, Math.floor(Math.random() * 50 + 10)]
    return [startTime, endTime]
}
var dates = [
    "3 ДЕКАБРЯ, ПЯТНИЦА 18:29 - 19:11",
    "7 ДЕКАБРЯ, ВТОРНИК 16:42 - 17:27",
    "13 ДЕКАБРЯ, ПОНЕДЕЛЬНИК 13:11 - 14:36",
    "19 ДЕКАБРЯ, ВОСКРЕСЕНЬЕ 13:59 - 14:17",
    "24 ДЕКАБРЯ, ПЯТНИЦА 17:42 - 18:34",
    "28 ДЕКАБРЯ, ВТОРНИК 16:11 - 17:46",
    "2 ЯНВАРЯ, ВОСКРЕСЕНЬЕ 13:27 - 14:12",
    "7 ЯНВАРЯ, ПЯТНИЦА 12:21 - 13:46",
    "10 ЯНВАРЯ, ПОНЕДЕЛЬНИК 15:16 - 16:55",
    "16 ЯНВАРЯ, ВОСКРЕСЕНЬЕ 12:34 - 13:16",
    "22 ЯНВАРЯ, СУББОТА 19:40 - 20:18",
    "27 ЯНВАРЯ, ЧЕТВЕРГ 15:52 - 16:55",
    "5 ФЕВРАЛЯ, СРЕДА 13:12 - 14:34",
    "9 ФЕВРАЛЯ, ВОСКРЕСЕНЬЕ 17:44 - 18:10",
    "12 ФЕВРАЛЯ, СРЕДА 19:32 - 20:16",
    "18 ФЕВРАЛЯ, ВТОРНИК 12:40 - 13:59",
    "22 ФЕВРАЛЯ, СУББОТА 19:25 - 20:13",
    "25 ФЕВРАЛЯ, ВТОРНИК 12:22 - 13:29",
    "28 ФЕВРАЛЯ, ПЯТНИЦА 18:53 - 19:32",
    "1 МАРТА, ВТОРНИК 17:57 - 18:50",
    "6 МАРТА, ВОСКРЕСЕНЬЕ 18:27 - 19:28",
    "12 МАРТА, СУББОТА 16:36 - 17:59",
    "16 МАРТА, СРЕДА 14:39 - 15:31",
    "20 МАРТА, ВОСКРЕСЕНЬЕ 15:20 - 16:12",
    "25 МАРТА, ПЯТНИЦА 19:25 - 20:23",
    "30 МАРТА, СРЕДА 12:13 - 13:57",
    "4 АПРЕЛЯ, ВОСКРЕСЕНЬЕ 13:26 - 14:53",
    "7 АПРЕЛЯ, СРЕДА 18:39 - 19:58",
    "12 АПРЕЛЯ, ПОНЕДЕЛЬНИК 18:55 - 19:17",
    "15 АПРЕЛЯ, ЧЕТВЕРГ 13:30 - 14:42",
    "20 АПРЕЛЯ, ВТОРНИК 17:53 - 18:32",
    "23 АПРЕЛЯ, ПЯТНИЦА 17:16 - 18:13",
    "26 АПРЕЛЯ, ПОНЕДЕЛЬНИК 18:57 - 19:40",
    "30 АПРЕЛЯ, ПЯТНИЦА 13:44 - 14:22",
    "4 МАЯ, СРЕДА 17:53 - 18:31",
    "10 МАЯ, ВТОРНИК 18:52 - 19:35",
    "13 МАЯ, ПЯТНИЦА 19:34 - 20:53",
    "16 МАЯ, ПОНЕДЕЛЬНИК 14:17 - 15:30",
    "21 МАЯ, СУББОТА 16:33 - 17:47",
]
function divsGenerate() {
    // while (fisrtDate < lastDate) {
    //     var rndTime = getRandomTime()
    //     var div = document.createElement("div");
    //     div.classList.add("item-hist_rz");
    //     var childDiv = document.createElement("div");
    //     childDiv.classList.add("tit-block_rz");
    //     childDiv.innerHTML = '"' + fisrtDate.getDate() + " " + months[fisrtDate.getMonth()] + ", " + dayOfWeek[fisrtDate.getDay()] + " " + rndTime[0][0] + ":" + rndTime[0][1] + " - " + rndTime[1][0] + ":" + rndTime[1][1] + '",';
    //     div.appendChild(childDiv);
    //     document.querySelector(".list-history_rz").appendChild(div);
    //     fisrtDate = fisrtDate.addDays(Math.floor(Math.random() * 4 + 3));
    // }
    for (let i = 0; i < dates.length; i++) {
        var div = document.createElement("div");
        div.classList.add("item-hist_rz");
        var childDiv = document.createElement("div");
        childDiv.classList.add("tit-block_rz");
        childDiv.innerHTML = dates[i]
        div.appendChild(childDiv);
        document.querySelector(".list-history_rz").appendChild(div);
    }
}
divsGenerate()
