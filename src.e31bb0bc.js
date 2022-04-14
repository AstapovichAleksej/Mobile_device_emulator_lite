// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"img/phone-call.png":[function(require,module,exports) {
module.exports = "/phone-call.18c5dfdf.png";
},{}],"img/message.png":[function(require,module,exports) {
module.exports = "/message.31b3776e.png";
},{}],"img/calculator.png":[function(require,module,exports) {
module.exports = "/calculator.b6f87304.png";
},{}],"img/radio.png":[function(require,module,exports) {
module.exports = "/radio.ced0fbe5.png";
},{}],"img/calendar.png":[function(require,module,exports) {
module.exports = "/calendar.2312ea13.png";
},{}],"models.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconModels = void 0;

var _phoneCall = _interopRequireDefault(require("./img/phone-call.png"));

var _message = _interopRequireDefault(require("./img/message.png"));

var _calculator = _interopRequireDefault(require("./img/calculator.png"));

var _radio = _interopRequireDefault(require("./img/radio.png"));

var _calendar = _interopRequireDefault(require("./img/calendar.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconModels = [{
  type: 'phone',
  value: 'phone',
  src: _phoneCall.default
}, {
  type: 'message',
  value: 'message',
  src: _message.default
}, {
  type: 'calendar',
  value: 'calendar',
  src: _calendar.default
}, {
  type: 'radio',
  value: 'radio',
  src: _radio.default
}, {
  type: 'calculator',
  value: 'calculator',
  src: _calculator.default
}];
exports.iconModels = iconModels;
},{"./img/phone-call.png":"img/phone-call.png","./img/message.png":"img/message.png","./img/calculator.png":"img/calculator.png","./img/radio.png":"img/radio.png","./img/calendar.png":"img/calendar.png"}],"icons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icons = void 0;

function phone(block) {
  return "\n        <div class='icon'>\n            <img src=\"".concat(block.src, "\"class=\"").concat(block.type, "\">\n            <p>").concat(block.value, "</p>\n        </div>\n    ");
}

function message(block) {
  return "\n    <div class='icon'>\n        <img src=\"".concat(block.src, "\"class=\"").concat(block.type, "\">\n        <p>").concat(block.value, "</p>\n    </div>\n");
}

function calculator(block) {
  return "\n        <div class='icon'>\n            <img src=\"".concat(block.src, "\" class=\"").concat(block.type, "\">\n            <p>").concat(block.value, "</p>\n        </div>\n        ");
}

function radio(block) {
  return "\n    <div class='icon'>\n        <img src=\"".concat(block.src, "\"class=\"").concat(block.type, "\">\n        <p>").concat(block.value, "</p>\n    </div>\n");
}

function calendar(block) {
  return "    \n    <div class='icon'>\n        <img src=\"".concat(block.src, "\"class=\"").concat(block.type, "\">\n        <p>").concat(block.value, "</p>\n    </div>\n");
}

function time(block) {
  return "    \n    <div class='time ".concat(block.type, "'>\n        ").concat(block.value, "\n    </div>\n");
}

var icons = {
  phone: phone,
  message: message,
  calculator: calculator,
  radio: radio,
  calendar: calendar,
  time: time
};
exports.icons = icons;
},{}],"img/arrow-icon.png":[function(require,module,exports) {
module.exports = "/arrow-icon.0783fabe.png";
},{}],"time.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildWeather = buildWeather;
exports.nowTime = nowTime;

var _arrowIcon = _interopRequireDefault(require("./img/arrow-icon.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $time = document.querySelector('.time');
var $weaterBar = document.querySelector('.weather');

function nowTime() {
  var date = new Date();
  var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var minuts = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var time = "".concat(hours, ":").concat(minuts);
  $time.innerHTML = time;
}

setInterval(nowTime, 1000);

function buildWeather() {
  return "        \n        <div class=\"weather-sityName\"></div>\n        <div class=\"weather-temp\"></div>            \n        <div class=\"weather-clouds\"></div>\n        <div class=\"weather-wind\"></div> \n        <div class=\"weather-wind__speed\"></div> \n\n    ";
}

$weaterBar.insertAdjacentHTML('afterbegin', buildWeather());
fetch('http://api.openweathermap.org/data/2.5/weather?id=620127&appid=29ff59fa5dcb37caef2553c77a1b34f0').then(function (resp) {
  return resp.json();
}).then(function (data) {
  var $wind = document.querySelector('.weather-wind');
  var icon = data.weather[0].icon;
  $wind.style.transform = "rotate(".concat(data.wind.deg, "deg)");
  document.querySelector('.weather-sityName').innerText = data.name;
  document.querySelector('.weather-temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
  document.querySelector('.weather-clouds').innerHTML = "<img src=\"http://openweathermap.org/img/wn/".concat(icon, "@2x.png\">");
  $wind.innerHTML = "<img src=\"".concat(_arrowIcon.default, "\">");
  document.querySelector('.weather-wind__speed').innerText = data.wind.speed + 'м/с';
});
},{"./img/arrow-icon.png":"img/arrow-icon.png"}],"calculator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildCalculator = buildCalculator;
exports.workCalculator = workCalculator;

function buildCalculator() {
  return "\n    <div class=\"calculator-window\">\n    <div class=\"calculator-display\"></div>    \n\n    <button type=\"button\" class=\"calculator-button\">7</button>\n    <button type=\"button\" class=\"calculator-button\">8</button>\n    <button type=\"button\" class=\"calculator-button\">9</button>\n    <button type=\"button\" class=\"calculator-button calculator-operator\">+</button>\n    \n    <button type=\"button\" class=\"calculator-button\">4</button>\n    <button type=\"button\" class=\"calculator-button\">5</button>\n    <button type=\"button\" class=\"calculator-button\">6</button>\n    <button type=\"button\" class=\"calculator-button calculator-operator\">-</button>\n    \n    <button type=\"button\" class=\"calculator-button\">3</button>\n    <button type=\"button\" class=\"calculator-button\">2</button>\n    <button type=\"button\" class=\"calculator-button\">1</button>\n    <button type=\"button\" class=\"calculator-button calculator-operator\">*</button>\n    \n    <button type=\"button\" class=\"calculator-button\">0</button>\n    <button type=\"button\" class=\"calculator-button\">00</button>\n    <button type=\"button\" class=\"calculator-button\">.</button>\n    <button type=\"button\" class=\"calculator-button calculator-operator\">/</button>\n    \n    <button type=\"button\" class=\"calculator-button calculator-reset\">C</button>\n    <button type=\"button\" class=\"calculator-button calculator-equals\">=</button>\n    \n</div>\n    ";
}

function workCalculator() {
  var $calculator = document.querySelector('.calculator-window');
  var $calculatorDisplay = document.querySelector('.calculator-display');
  $calculator.addEventListener('click', function (event) {
    if (!event.target.classList.contains('calculator-button')) return;
    var value = event.target.innerText;

    switch (value) {
      case 'C':
        $calculatorDisplay.innerText = '';
        break;

      case '=':
        $calculatorDisplay.innerText = eval($calculatorDisplay.innerText);
        break;

      default:
        $calculatorDisplay.innerText += value;
    }
  });
}
},{}],"music.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildRadio = buildRadio;
exports.workRadio = workRadio;
var radioList = [{
  name: 'БайкерFM',
  src: 'https://listen4.myradio24.com/69846',
  img: "https://www.radiobells.com/stations/bikerfm.jpg"
}, {
  name: 'PowerFM',
  src: 'https://radio-connect.dline-media.com/powerfm',
  img: "https://www.radiobells.com/stations/powerfmru.jpg"
}, {
  name: 'Радио Метал',
  src: 'https://eapps-cs.herokuapp.com/http://radio.radiometal.com/radiometal.mp3',
  img: "https://www.radiobells.com/stations/radiometal.jpg"
}, {
  name: 'Rock FM',
  src: 'https://nashe1.hostingradio.ru/rock-128.mp3',
  img: "https://www.radiobells.com/stations/rockfm.jpg"
}, {
  name: 'GTI Radio',
  src: 'https://listen.gtiradio.ru/radiohi',
  img: "https://www.radiobells.com/stations/gti.jpg"
}];

function buildRadio() {
  return "\n        <div class=\"radio-window\">\n            <div class=\"radio-list__one\"></div>        \n            <audio class=\"audio\" controls>\n                <source ></source>\n            </audio>\n        </div>\n    ";
} //


function workRadio() {
  var $radio = document.querySelector('.radio-window');
  var $radioListOne = document.querySelector('.radio-list__one');
  var $radioPlayer = document.querySelector('.audio');
  var $radioImg = document.createElement('img');
  $radioImg.classList.add('img');
  radioList.forEach(function (list) {
    var $divList = document.createElement('div');
    $divList.classList.add('div-list');
    $divList.innerHTML = list.name;
    $radioListOne.prepend($divList);
    $radio.prepend($radioImg);
  });
  $radioListOne.addEventListener('click', function (event) {
    for (var key in radioList) {
      var tempSrc = event.target.innerHTML;

      if (tempSrc === radioList[key].name) {
        $radioImg.setAttribute('src', radioList[key].img);
        $radioPlayer.setAttribute('src', radioList[key].src);
      }
    }
  });
}
},{}],"img/user.png":[function(require,module,exports) {
module.exports = "/user.51f6508b.png";
},{}],"img/add_user.png":[function(require,module,exports) {
module.exports = "/add_user.f97727ce.png";
},{}],"img/star.png":[function(require,module,exports) {
module.exports = "/star.cf26f0e1.png";
},{}],"img/search.png":[function(require,module,exports) {
module.exports = "/search.42b7d05d.png";
},{}],"img/phone-book.png":[function(require,module,exports) {
module.exports = "/phone-book.a999b67a.png";
},{}],"phone.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildPhone = buildPhone;
exports.runPhone = runPhone;

var _user = _interopRequireDefault(require("./img/user.png"));

var _add_user = _interopRequireDefault(require("./img/add_user.png"));

var _star = _interopRequireDefault(require("./img/star.png"));

var _search = _interopRequireDefault(require("./img/search.png"));

var _phoneBook = _interopRequireDefault(require("./img/phone-book.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataCantact = [{
  name: 'Alex',
  telephone: 375333054582,
  email: 'alex@gmail.com'
}, {
  name: 'Vlad',
  telephone: 375333054582,
  email: 'alex@gmail.com'
}, {
  name: 'Alex',
  telephone: 375333054582,
  email: 'alex@gmail.com'
}, {
  name: 'Andrey',
  telephone: 375333054582,
  email: 'alex@gmail.com'
}, {
  name: 'Andrey',
  telephone: 375333054582,
  email: 'alex@gmail.com'
}, {
  name: 'Andrey',
  telephone: 375333054582,
  email: 'alex@gmail.com'
}, {
  name: 'Andrey',
  telephone: 375333054582,
  email: 'alex@gmail.com'
}, {
  name: 'Andrey',
  telephone: 375333054582,
  email: 'alex@gmail.com'
}];
var dataFovaritesCantact = [{
  name: 'Vlad',
  telephone: 375333054582,
  email: 'Vlad@gmail.com'
}, {
  name: 'Vlad',
  telephone: 375333054582,
  email: 'Vlad@gmail.com'
}];
var img = [_user.default, _add_user.default, _star.default, _search.default, _phoneBook.default];

function buildPhone() {
  return "\n    <div class=\"phone-window\">\n        <div class=\"phone-header\">\n            <div class=\"phohe-header__name\"></div>\n            <div class=\"phone-header__search\"></div>\n        </div>\n        <div class=\"phone-main scroll-none\"></div>\n        <div class=\"phone-menu\">\n            <div class=\"phone-menu__cantact\">                \n            </div>\n            <div class=\"phone-menu__favorites\">                \n            </div>\n            <div class=\"phone-menu__add\">               \n            </div>\n        </div>\n    </div>\n    ";
}

function formCanact() {
  return "\n    <form action=\"\" class=\"form-contact\">\n        <div class=\"form-contact__name\">\n            <input class=\"name\" type=\"text\" value=\"\">\n            <p>\u0418\u043C\u044F</p>\n        </div>\n        <div class=\"form-contact__number\">\n            <input class=\"number\" type=\"number\" value=\"\">\n            <p>\u041D\u043E\u043C\u0435\u0440</p>\n        </div>\n        <div class=\"form-contact__email\">\n            <input class=\"email\" type=\"email\" value=\"\">\n            <p>Email</p>\n        </div>\n        <div class=\"form-contact__favorites\">\n            <input type=\"checkbox\" id=\"checkbox\"  value=\"\">\n            <p>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435</p>\n            \n        </div>\n        <button class=\"button\" type=\"button\">Save</button>\n    </form>\n    ";
}

function runPhone() {
  var $phoneMain = document.querySelector('.phone-main');
  var $phoneMenu = document.querySelector('.phone-menu');
  var $namePhoneWindow = document.querySelector('.phohe-header__name');
  var $phoneSearch = document.querySelector('.phone-header__search');
  var $phoneCantact = document.querySelector('.phone-menu__cantact');
  var $phonefavorites = document.querySelector('.phone-menu__favorites');
  var $phoneAddCantact = document.querySelector('.phone-menu__add');
  img.map(function (el) {
    var $img = document.createElement('img');
    $img.setAttribute('src', el);
    $img.classList.add('img-cantact');

    if (el === _user.default) {
      $img.classList.add('user');
      $phoneCantact.append($img);
    } else if (el === _add_user.default) {
      $img.classList.add('addUser');
      $phoneAddCantact.append($img);
    } else if (el === _star.default) {
      $img.classList.add('fav');
      $phonefavorites.append($img);
    } else if (el === _search.default) {
      $img.classList.add('search');
      $phoneSearch.append($img);
    } else if (el === _phoneBook.default) {
      $img.classList.add('phoneBook');
      $img.classList.remove('img-cantact');
      $phoneMain.append($img);
    }
  });

  function creatCantact(event) {
    $phoneMain.innerHTML = null;

    if (event.target.classList['1'] === 'user') {
      var $phomeMainWindow = document.createElement('div');
      $phomeMainWindow.classList.add('phone-main__window');
      $phoneMain.style.overflowY = 'scroll';
      $phoneMain.appendChild($phomeMainWindow);
      dataCantact.forEach(function (cantact) {
        var $numberCantact = document.createElement('p');
        var $listCantact = document.createElement('div');
        $listCantact.classList.add('list-cantact');
        $listCantact.innerText = cantact['name'];
        $namePhoneWindow.innerText = 'Контакты';
        $numberCantact.innerText = cantact['telephone'];
        $listCantact.append($numberCantact);
        $phomeMainWindow.append($listCantact);
      });
    }

    if (event.target.classList['1'] === 'fav') {
      var _$phomeMainWindow = document.createElement('div');

      _$phomeMainWindow.classList.add('phone-main__window');

      $phoneMain.style.overflowY = 'scroll';
      $phoneMain.appendChild(_$phomeMainWindow);
      dataFovaritesCantact.forEach(function (cantact) {
        var $numberCantact = document.createElement('p');
        var $listCantact = document.createElement('div');
        $listCantact.classList.add('list-cantact');
        $listCantact.innerText = cantact['name'];
        $numberCantact.innerText = cantact['telephone'];
        $namePhoneWindow.innerText = 'Избранное';
        $listCantact.append($numberCantact);

        _$phomeMainWindow.append($listCantact);
      });
    }

    if (event.target.classList['1'] === 'addUser') {
      var addCantact = function addCantact() {
        var newCantact = {};
        newCantact.name = $nameCantact.value;
        newCantact.telephone = $telephoneCantact.value;
        newCantact.email = $emailCantact.value;

        if ($checkbox.checked) {
          dataFovaritesCantact.push(newCantact);
          dataCantact.push(newCantact);
        } else {
          dataCantact.push(newCantact);
        }

        console.log(dataFovaritesCantact);
      };

      $phoneMain.style.overflowY = 'auto';
      $namePhoneWindow.innerText = 'Создать контакт';
      $phoneMain.insertAdjacentHTML("beforeend", formCanact());
      var $nameCantact = document.querySelector('.name');
      var $telephoneCantact = document.querySelector('.number');
      var $emailCantact = document.querySelector('.email');
      var $checkbox = document.querySelector('#checkbox');
      var $button1 = document.querySelector('.button');
      $button1.onclick = addCantact;
    }
  }

  $phoneMenu.onclick = creatCantact;
}
},{"./img/user.png":"img/user.png","./img/add_user.png":"img/add_user.png","./img/star.png":"img/star.png","./img/search.png":"img/search.png","./img/phone-book.png":"img/phone-book.png"}],"calendar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildCalendar = buildCalendar;
exports.runCalendar = runCalendar;
var arrDay = [{
  weekDay: 'Воскресенье',
  index: 1
}, {
  weekDay: 'Понедельник',
  index: 2
}, {
  weekDay: 'Вторник',
  index: 3
}, {
  weekDay: 'Среда',
  index: 4
}, {
  weekDay: 'Четвегр',
  index: 5
}, {
  weekDay: 'Пятница',
  index: 6
}, {
  weekDay: 'Суббота',
  index: 0
}];
var arrMonth = [{
  month: 'Январь',
  day: 31,
  index: 1
}, {
  month: 'Февраль',
  day: 28,
  index: 4
}, {
  month: 'Март',
  day: 31,
  index: 4
}, {
  month: 'Апрель',
  day: 30,
  index: 0
}, {
  month: 'Май',
  day: 31,
  index: 2
}, {
  month: 'Июнь',
  day: 30,
  index: 5
}, {
  month: 'Июль',
  day: 31,
  index: 0
}, {
  month: 'Август',
  day: 31,
  index: 3
}, {
  month: 'Сентябрь',
  day: 30,
  index: 6
}, {
  month: 'Октябрь',
  day: 31,
  index: 1
}, {
  month: 'Ноябрь',
  day: 30,
  index: 4
}, {
  month: 'Декабрь',
  day: 31,
  index: 6
}];

function buildCalendar() {
  return "\n    <div class=\"calendar-window\">\n        <div class=\"calendar-bar\">\n            <div class=\"calendar-bar__day\"></div>\n            <div class=\"calendar-bar__number\"></div>\n            <div class=\"calendar-bar__month\"></div>\n        </div>\n        <div  class=\"calendar-wiew\">\n            <div class=\"week-day\">\n                <div>\u041F\u043D</div>\n                <div>\u0412\u0442</div>\n                <div>\u0421\u0440</div>\n                <div>\u0427\u0442</div>\n                <div>\u041F\u0442</div>\n                <div>\u0421\u0431</div>\n                <div>\u0412\u0441</div>\n            </div>\n            <div class=\"total-days\"></div>\n            </div>       \n    </div>\n    ";
}

var date = new Date();

function runCalendar() {
  var $day = document.querySelector('.total-days');
  var $dayNumber = document.querySelector('.calendar-bar__number');
  $dayNumber.innerText = date.getDate();
  var $nameDay = document.querySelector('.calendar-bar__day');
  var $nameMonth = document.querySelector('.calendar-bar__month');
  var startDay = 0; // счетчик индекса

  var indexDay = (1 + arrMonth[date.getMonth()].index + 5) % 7; //индекс дня

  arrDay.forEach(function (day, num) {
    if (date.getDay() === num) {
      $nameDay.innerText = day.weekDay;
    }

    if (indexDay === day.index) {
      startDay = num;
    }
  });
  arrMonth.forEach(function (mon, num) {
    if (date.getMonth() === num) {
      $nameMonth.innerText = mon.month;

      for (var i = 1; i < startDay; i++) {
        var $todayEmpty = document.createElement('div');
        $todayEmpty.style.backgroundColor = '#00000000';
        $day.appendChild($todayEmpty).classList.add("empty-day");
      }

      for (var _i = 1; _i <= mon.day; _i++) {
        var $today = document.createElement('div');
        $today.innerHTML += _i;
        $day.appendChild($today).classList.add("".concat(mon.month, "-").concat(_i));

        if (_i === date.getDate()) {
          $today.style.color = 'white';
          $today.style.backgroundColor = 'brown';
        }
      }
    }
  });
}
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _models = require("./models");

var _icons = require("./icons");

var _time = require("./time");

var _calculator = require("./calculator");

var _music = require("./music");

var _phone = require("./phone");

var _calendar = require("./calendar");

var $worckWindow = document.querySelector('.view-panel');
var $panel = document.querySelector('.icon-panel');

_models.iconModels.forEach(function (icon) {
  var toHTML = _icons.icons[icon.type];

  if (toHTML) {
    $panel.insertAdjacentHTML("beforeend", toHTML(icon));
  }
});

function createApp(_ref) {
  var className = _ref.target.className;
  $worckWindow.innerHTML = null;

  if (className === 'calculator') {
    $worckWindow.insertAdjacentHTML("afterbegin", (0, _calculator.buildCalculator)());
    (0, _calculator.workCalculator)();
  } else if (className === 'radio') {
    $worckWindow.insertAdjacentHTML('afterbegin', (0, _music.buildRadio)());
    (0, _music.workRadio)();
  } else if (className === 'calendar') {
    $worckWindow.insertAdjacentHTML('afterbegin', (0, _calendar.buildCalendar)());
    (0, _calendar.runCalendar)();
  } else if (className === 'phone') {
    $worckWindow.insertAdjacentHTML('afterbegin', (0, _phone.buildPhone)());
    (0, _phone.runPhone)();
  }
}

$panel.onclick = createApp;
},{"./models":"models.js","./icons":"icons.js","./time":"time.js","./calculator":"calculator.js","./music":"music.js","./phone":"phone.js","./calendar":"calendar.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53950" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map