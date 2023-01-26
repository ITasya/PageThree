"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Использование addEventListener на старых версиях
if (!Element.prototype.addEventListener) {
  var runListeners = function runListeners(oEvent) {
    if (!oEvent) {
      oEvent = window.event;
    }

    for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) {
          oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent);
        }

        break;
      }
    }
  };

  var oListeners = {};

  Element.prototype.addEventListener = function (sEventType, fListener
  /*, useCapture (will be ignored!) */
  ) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];

      for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) {
          nElIdx = iElId;
          break;
        }
      }

      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];

        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }

        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) {
            return;
          }
        }

        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = {
        aEls: [this],
        aEvts: [[fListener]]
      };
      this["on" + sEventType] = runListeners;
    }
  };

  Element.prototype.removeEventListener = function (sEventType, fListener
  /*, useCapture (will be ignored!) */
  ) {
    if (!oListeners.hasOwnProperty(sEventType)) {
      return;
    }

    var oEvtListeners = oListeners[sEventType];

    for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        nElIdx = iElId;
        break;
      }
    }

    if (nElIdx === -1) {
      return;
    }

    for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {
      if (aElListeners[iLstId] === fListener) {
        aElListeners.splice(iLstId, 1);
      }
    }
  };
} // InputMask
//const { src } = require("gulp");
//const { active } = require("browser-sync");
//const swiperBundleMin = require("./swiper-bundle.min");


if (document.querySelectorAll('input[type="tel"]')) {
  var inputs = document.querySelectorAll('input[type="tel"]');
  var im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputs);
}

if (document.querySelectorAll('.item-apartment-aboutTheObject__input')) {
  var inputs1 = document.querySelectorAll('.item-apartment-aboutTheObject__input');
  inputs1.forEach(function (el) {
    var im1 = new Inputmask('99:99:9999999:99');
    im1.mask(el);
  });
}

if (document.querySelectorAll('.input-card')) {
  var inputs2 = document.querySelectorAll('.input-card');
  inputs2.forEach(function (el) {
    var im2 = new Inputmask('9999:9999:9999:9999');
    im2.mask(el);
  });
}

var contactsInput = document.querySelectorAll('.contacts-apartment__input');
var cadastrialNumber = document.querySelectorAll('.item-apartment-aboutTheObject__input');
var apartmentBtn = document.querySelectorAll('.apartment__bt');

if (apartmentBtn) {
  apartmentBtn.forEach(function (el) {
    el.addEventListener('click', function (e) {
      apartmentBtn.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
}

if (contactsInput) {
  contactsInput.forEach(function (el) {
    el.addEventListener('input', function (evt) {
      var value = evt.target.value;

      if (value.length >= 8) {
        el.parentElement.classList.add('active');
      } else {
        el.parentElement.classList.remove('active');
      }
    });
  });
}

if (cadastrialNumber) {
  cadastrialNumber.forEach(function (el) {
    el.addEventListener('input', function (evt) {
      var value = evt.target.value;

      if (value.length >= 11) {
        el.parentElement.classList.add('active');
      } else {
        el.parentElement.classList.remove('active');
      }
    });
  });
}

var itemPromotionSelection = document.querySelectorAll('.item-promotionSelection');

if (itemPromotionSelection) {
  itemPromotionSelection.forEach(function (el) {
    var promotionSelectionInput = el.querySelector('.item-promotionSelection__input');
    var promotionSelectionChoice = el.querySelector('.item-promotionSelection__choice');
    promotionSelectionInput.addEventListener('input', function (evt) {
      var value = evt.target.value;

      if (value.length >= 1) {
        promotionSelectionChoice.checked = true;
        promotionSelectionInput.parentElement.classList.add('active');
      } else {
        promotionSelectionChoice.checked = false;
        promotionSelectionInput.parentElement.classList.remove('active');
      }
    });
  });
}

function ValidPhone() {
  var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  var myPhone = document.getElementById('phone').value;
  var valid = re.test(myPhone);
  if (valid) document.getElementById('done').style.display = 'flex';else {
    document.getElementById('done').style.display = 'none';
  }
  return valid;
} // Burger menu


var menuNavToggle = document.querySelector('.nav-toggle');
var menuNavToggleRes = document.getElementById('.nav_toggleResults');
var navMenu = document.querySelector('.body-header');
var navMenuItem = document.querySelectorAll('.nav-menu-item');
var closeNavMenu = document.getElementById('close-nav-menu');
var wrapperResult = document.querySelector('.wrapper-result');
var bodyHeaderMain = document.querySelector('.body-headerMain');
var wrapper = document.querySelector('.wrapper');
var navToggleMain = document.querySelector('.nav-toggleMain');
var navClose = document.querySelector('.nav-close');

if (navToggleMain) {
  navToggleMain.addEventListener('click', function (e) {
    bodyHeaderMain.classList.add('active');
    wrapperResult.classList.add('active');
    document.body.classList.add('active');
    navClose.classList.add('active');
  });
  navClose.addEventListener('click', function (e) {
    navClose.classList.remove('active');
    bodyHeaderMain.classList.remove('active');
    wrapperResult.classList.remove('active');
    document.body.classList.remove('active');
  });
  closeNavMenu.addEventListener('click', function (e) {
    navClose.classList.remove('active');
    bodyHeaderMain.classList.remove('active');
    wrapperResult.classList.remove('active');
    document.body.classList.remove('active');
  });
}

var headerNav = document.querySelector('.body-headerMain__nav');

if (menuNavToggle) {
  menuNavToggle.addEventListener('click', function (e) {
    e.preventDefault(); //menu.classList.toggle('active')

    navMenu.classList.add('active');
    wrapper.classList.add('active');

    var _iterator = _createForOfIteratorHelper(navMenuItem),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elem = _step.value;
        elem.classList.add('active');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  closeNavMenu.addEventListener("click", function (e) {
    navMenu.classList.remove('active');
    wrapper.classList.remove('active');

    var _iterator2 = _createForOfIteratorHelper(navMenuItem),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var elem = _step2.value;
        elem.classList.remove('active');
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
} //Ограничение на ввод чисел в type - number


if (document.querySelectorAll('.item-price__input')) {
  document.querySelectorAll('.item-price__input').forEach(function (elem) {
    elem.oninput = function () {
      if (elem.value.length > 7) elem.value = elem.value.substr(0, 7);
    };
  });
}

if (document.querySelectorAll('.cart-input--two')) {
  document.querySelectorAll('.cart-input--two').forEach(function (elem) {
    elem.oninput = function () {
      if (elem.value.length > 2) elem.value = elem.value.substr(0, 2);
    };
  });
}

if (document.querySelectorAll('.cart-input--three')) {
  document.querySelectorAll('.cart-input--three').forEach(function (elem) {
    elem.oninput = function () {
      if (elem.value.length > 3) elem.value = elem.value.substr(0, 3);
    };
  });
} // sleep password


function showPassword() {
  var btn = document.querySelector('.form-password__btn');
  var input = document.querySelector('.form-password__input');
  var btnProverka = document.querySelector('.form-password__btn-proverka');
  var inputProverka = document.querySelector('.form-password__input-proverka');
  btn.addEventListener('click', function () {
    btn.classList.toggle('active');

    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  });
  btnProverka.addEventListener('click', function () {
    btnProverka.classList.toggle('active');

    if (inputProverka.getAttribute('type') === 'password') {
      inputProverka.setAttribute('type', 'text');
    } else {
      inputProverka.setAttribute('type', 'password');
    }
  });
}

function showPasswordSignUp() {
  var btn = document.querySelector('.form-password__btn');
  var input = document.querySelector('.form-password__input');
  btn.addEventListener('click', function () {
    btn.classList.toggle('active');

    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  });
}

if (document.querySelector('.form-password__btn') && document.querySelector('.form-password__btn-proverka')) {
  showPassword();
} else if (document.querySelector('.form-password__btn')) {
  showPasswordSignUp();
} //----------------------------------------------ФИЛЬТР---------------------------------------------------------------------------------------------
//---------------------------------DROPDOWN----------------------------------------------------------------------------------------------------------------


var itemResult = document.querySelectorAll('.item-results');
var sellerComparison = document.querySelectorAll('.seller-comparison');

if (itemResult) {
  itemResult.forEach(function (el) {
    var estimation = el.querySelectorAll('.estimation__item');
    var showContact = el.querySelector('.show-contact');

    if (showContact) {
      showContact.addEventListener('click', function (e) {
        showContact.classList.add('active');
      });
    }

    estimation.forEach(function (el) {
      el.addEventListener('click', function (e) {
        estimation.forEach(function (el) {
          el.classList.remove('active');
        });
        el.classList.add('active');
      });
    });
  });
}

var product = document.querySelectorAll('.product');

if (product) {
  product.forEach(function (el) {
    var favourites = el.querySelector('.favourite');
    var add = el.querySelector('.add');
    var more = el.querySelector('.more');
    var moreMenu = el.querySelector('.more-menu');

    if (more) {
      more.addEventListener('click', function (e) {
        more.classList.toggle('active');
        moreMenu.classList.toggle('active');
      });
    }
  });
}

if (sellerComparison) {
  sellerComparison.forEach(function (el) {
    var showContact = el.querySelectorAll('.show-contact');

    if (showContact) {
      showContact.forEach(function (el) {
        el.addEventListener('click', function (e) {
          el.classList.add('active');
        });
      });
    }
  });
}

var compareItem = document.querySelectorAll('.item-compare');

if (compareItem) {
  compareItem.forEach(function (el) {
    var itemFavourites = el.querySelector('.item-body__favourites');

    if (itemFavourites) {
      var favourite = itemFavourites.querySelectorAll('.favourite');
      favourite.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          el.parentElement.classList.toggle('active');
        });
      });
    }
  });
}

var newBuildingsItem = document.querySelectorAll('.newBuildings__item');

if (newBuildingsItem) {
  newBuildingsItem.forEach(function (el) {
    var itemFavourites = el.querySelector('.item-body__favourites');

    if (itemFavourites) {
      var favourite = itemFavourites.querySelectorAll('.favourite');
      favourite.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          el.parentElement.classList.toggle('active');
        });
      });
    }
  });
}

var tabsMainBtn = document.getElementById('tabsmainBtn');
var tabsMainBlock = document.querySelector('.tabs-main__block');
var tabsMainItems = document.querySelectorAll('.tabs-main__btn');

if (tabsMainBtn) {
  tabsMainBtn.addEventListener('click', function (e) {
    tabsMainBlock.classList.toggle('open');
    tabsMainItems.forEach(function (el) {
      el.addEventListener('click', function (e) {
        tabsMainBtn.innerText = el.innerText;
        tabsMainBlock.classList.remove('open');
      });
    });
  });
} // Скролл шапки


var height = '334';
var fixedFilter = document.querySelector('.headerResult');
var mainResults = document.querySelector('.main-result');

if (fixedFilter) {
  //const filterHeight = fixedFilter.offsetHeight;
  //const mainHeight = mainResults.offsetHeight;
  window.addEventListener('scroll', function () {
    var scrollDistance = window.scrollY;

    if (scrollDistance >= height) {
      fixedFilter.classList.add('fixed');
      mainResults.style.marginTop = "{filterHeight}px";
    } else {
      fixedFilter.classList.remove('fixed');
      mainResults.style.marginTop = null;
    }
  });
} //TO COMPARE скролл сравнения


var compareFixedheight = '390';
var fixedCompareItems = document.querySelector('.compare__fixed');
var comparisonTitle = document.querySelector('.comparison__title');

if (fixedCompareItems) {
  var compareHeight = fixedCompareItems.offsetHeight;
  var comparisonTitleHeight = comparisonTitle.offsetHeight;
  window.addEventListener('scroll', function () {
    var scrollDistance = window.scrollY;

    if (scrollDistance >= compareFixedheight) {
      fixedCompareItems.classList.add('fixed');
      comparisonTitle.style.marginTop = "".concat(compareHeight, "px");
    } else {
      fixedCompareItems.classList.remove('fixed');
      comparisonTitle.style.marginTop = null;
    }
  });
}

var publicationTimeAccordionFlat = document.getElementById('publicationTimeAccordion-flat');
var publicationTimeItemsFlat = document.querySelector('.publicationTime__items-flat');
var publicationTimeFlat = document.getElementById('publicationTime-flat');

if (publicationTimeAccordionFlat) {
  var menu = publicationTimeItemsFlat.querySelector('.accordion-menu');

  var _options = publicationTimeItemsFlat.querySelectorAll('.accordion-menu__item');

  publicationTimeAccordionFlat.addEventListener('click', function (e) {
    menu.classList.toggle('open');
  });

  _options.forEach(function (option) {
    option.addEventListener('click', function (e) {
      publicationTimeFlat.innerText = option.innerText;
      menu.classList.remove('open');
      option.parentElement.parentElement.classList.remove('active');

      _options.forEach(function (option) {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
}

;
var publicationTimeAccordionHome = document.getElementById('publicationTimeAccordion-home');
var publicationTimeItemsHome = document.querySelector('.publicationTime__items-home');
var publicationTimeHome = document.getElementById('publicationTime-home');

if (publicationTimeAccordionHome) {
  var _menu = publicationTimeItemsHome.querySelector('.accordion-menu');

  var _options2 = publicationTimeItemsHome.querySelectorAll('.accordion-menu__item');

  publicationTimeAccordionHome.addEventListener('click', function (e) {
    _menu.classList.toggle('open');
  });

  _options2.forEach(function (option) {
    option.addEventListener('click', function (e) {
      publicationTimeHome.innerText = option.innerText;

      _menu.classList.remove('open');

      option.parentElement.parentElement.classList.remove('active');

      _options2.forEach(function (option) {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
}

;
var publicationTimeAccordionRoom = document.getElementById('publicationTimeAccordion-room');
var publicationTimeItemsRoom = document.querySelector('.publicationTime__items-room');
var publicationTimeRoom = document.getElementById('publicationTime-room');

if (publicationTimeAccordionRoom) {
  var _menu2 = publicationTimeItemsRoom.querySelector('.accordion-menu');

  var _options3 = publicationTimeItemsRoom.querySelectorAll('.accordion-menu__item');

  publicationTimeAccordionRoom.addEventListener('click', function (e) {
    _menu2.classList.toggle('open');
  });

  _options3.forEach(function (option) {
    option.addEventListener('click', function (e) {
      publicationTimeRoom.innerText = option.innerText;

      _menu2.classList.remove('open');

      option.parentElement.parentElement.classList.remove('active');

      _options3.forEach(function (option) {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
}

;
var publicationTimeAccordionHomeBuy = document.getElementById('publicationTimeAccordion-home-buy');
var publicationTimeItemsHomeBuy = document.querySelector('.publicationTime__items-home--buy');
var publicationTimeHomeBuy = document.getElementById('publicationTime-home-buy');

if (publicationTimeAccordionHomeBuy) {
  var _menu3 = publicationTimeItemsHomeBuy.querySelector('.accordion-menu');

  var _options4 = publicationTimeItemsHomeBuy.querySelectorAll('.accordion-menu__item');

  publicationTimeAccordionHomeBuy.addEventListener('click', function (e) {
    _menu3.classList.toggle('open');
  });

  _options4.forEach(function (option) {
    option.addEventListener('click', function (e) {
      publicationTimeHomeBuy.innerText = option.innerText;

      _menu3.classList.remove('open');

      option.parentElement.parentElement.classList.remove('active');

      _options4.forEach(function (option) {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
}

;
var publicationTimeAccordionFlatBuy = document.getElementById('publicationTimeAccordion-flat-buy');
var publicationTimeItemsFlatBuy = document.querySelector('.publicationTime__items-flat--buy');
var publicationTimeFlatBuy = document.getElementById('publicationTime-flat-buy');

if (publicationTimeAccordionFlatBuy) {
  var _menu4 = publicationTimeItemsFlatBuy.querySelector('.accordion-menu');

  var _options5 = publicationTimeItemsFlatBuy.querySelectorAll('.accordion-menu__item');

  publicationTimeAccordionFlatBuy.addEventListener('click', function (e) {
    _menu4.classList.toggle('open');
  });

  _options5.forEach(function (option) {
    option.addEventListener('click', function (e) {
      publicationTimeFlatBuy.innerText = option.innerText;

      _menu4.classList.remove('open');

      option.parentElement.parentElement.classList.remove('active');

      _options5.forEach(function (option) {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
}

;
var publicationTimeAccordionRoomBuy = document.getElementById('publicationTimeAccordion-room-buy');
var publicationTimeItemsRoomBuy = document.querySelector('.publicationTime__items-room--buy');
var publicationTimeRoomBuy = document.getElementById('publicationTime-room-buy');

if (publicationTimeAccordionRoomBuy) {
  var _menu5 = publicationTimeItemsRoomBuy.querySelector('.accordion-menu');

  var _options6 = publicationTimeItemsRoomBuy.querySelectorAll('.accordion-menu__item');

  publicationTimeAccordionRoomBuy.addEventListener('click', function (e) {
    _menu5.classList.toggle('open');
  });

  _options6.forEach(function (option) {
    option.addEventListener('click', function (e) {
      publicationTimeRoomBuy.innerText = option.innerText;

      _menu5.classList.remove('open');

      option.parentElement.parentElement.classList.remove('active');

      _options6.forEach(function (option) {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
}

; //--------------------------------switcher------------------------------------------------------------

var switcherItems = document.querySelectorAll('.switcher__item');
var switcherBuyRoom = document.querySelectorAll('.switcher-buy--room');
var switcherBuyFlat = document.querySelectorAll('.switcher-buy--flat');
var switcherTakeOffFlat = document.querySelectorAll('.switcher-takeOff--flat');
var switcherTakeOffRoom = document.querySelectorAll('.switcher-takeOff--room');
var switcherBuy = document.querySelectorAll('.switcher-buy');
var switcherTakeOff = document.querySelectorAll('.switcher-takeOff');
var switcherMortgage = document.querySelectorAll('.switcher-mortgage');

if (switcherBuy) {
  switcherBuy.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherBuy.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
}

if (switcherTakeOff) {
  switcherTakeOff.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherTakeOff.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
}

if (switcherBuyFlat) {
  switcherBuyFlat.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherBuyFlat.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
}

if (switcherBuyRoom) {
  switcherBuyRoom.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherBuyRoom.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
}

if (switcherTakeOffFlat) {
  switcherTakeOffFlat.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherTakeOffFlat.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
}

if (switcherTakeOffRoom) {
  switcherTakeOffRoom.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherTakeOffRoom.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
}

if (switcherMortgage) {
  switcherMortgage.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherMortgage.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
} //---------------------------------------------------POPUP-----------------------------------------------------------------------------------------


var regionBtn = document.querySelector('.main__subtitle');
var popUp = document.querySelector('.popUp');
var popUpClose = document.querySelector('.popUp-filter__close');
var popUpSearch = document.getElementById('search-item');
var regionList = document.getElementById('list-region');
var regions = document.querySelectorAll('.region__title');
var localBtn = document.getElementById('localBtn');
var areas = document.querySelectorAll('.area-popUp__title');

if (regionBtn && popUpClose) {
  popUpClose.addEventListener("click", function (e) {
    hideModal();
  });
  regions.forEach(function (region) {
    region.addEventListener('click', function () {
      popUpSearch.value = region.innerText;
    });
  });
  areas.forEach(function (area) {
    area.addEventListener('click', function () {
      popUpSearch.value = area.innerText;
    });
  });

  if (popUpSearch.value != " ") {
    localBtn.addEventListener('click', function (e) {
      e.preventDefault();
      regionBtn.innerText = popUpSearch.value;
    });
  }
} //-----------------------------------------------TABS-----------------------------------------------------------------------------------------------------


var parameters = document.querySelectorAll('.filter-btn');
var parametersClose = document.getElementById('modal-parameters-close');
var modalParameters = document.querySelector('.modal-parameters');
var tabsMain = document.getElementById('tabs-main');
var contenttabsButton = document.querySelector('.content-tabs__button');
var modalBtnSave = document.querySelector('.modal-btn-save');
var mainBlock = document.querySelector('.main__block');
var after = document.querySelector('.after');
var filterContent = document.querySelectorAll('.filter-parameters');
var modalClose = document.querySelectorAll('.modal-close');

if (modalClose) {
  modalClose.forEach(function (el) {
    el.addEventListener('click', function (e) {
      mainBlock.after(tabsMain);
      tabsMain.after(contenttabsButton);
      modalParameters.classList.remove('active');
      document.body.classList.remove('active');
    });
  });
}

if (parameters && parametersClose) {
  parameters.forEach(function (parameter) {
    parameter.addEventListener('click', function (e) {
      modalParameters.classList.add('active');
      document.body.classList.add('active');
      after.before(tabsMain);
      modalBtnSave.after(contenttabsButton);
    });
  });
  parametersClose.addEventListener('click', function (e) {
    mainBlock.after(tabsMain);
    tabsMain.after(contenttabsButton);
    modalParameters.classList.remove('active');
    document.body.classList.remove('active');
  });
}

var tabs = document.querySelector('.tabs-main');
var tabsBtn = document.querySelectorAll('.tabs-main__btn');
var tabsContent = document.querySelectorAll('.tabs-main__content');
var filterParametersTakeOff = document.querySelectorAll('.filter-parameters-takeOff');
var filterParametersBuy = document.querySelectorAll('.filter-parameters-buy');
var options = document.querySelectorAll('.dropdown-menu__item');
var apartmenBody = document.querySelector('.apartment__body');
var apartmentTabsContent = document.querySelectorAll('.apartment__tabs-content');
var tabsLink = document.querySelectorAll('.tabs-link');
var itemTabs = document.querySelectorAll('.apartment__item-tabs');

if (apartmenBody) {
  apartmenBody.addEventListener('click', function (e) {
    if (e.target.classList.contains('tabs-link')) {
      var tabsPath = e.target.dataset.sellPath;
      sellHandler(tabsPath);
    }
  });
}

var sellHandler = function sellHandler(path) {
  tabsLink.forEach(function (el) {
    el.classList.remove('active');
  });
  itemTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  document.querySelector("[data-sell-path=\"".concat(path, "\"]")).classList.add('active');
  apartmentTabsContent.forEach(function (el) {
    el.classList.remove('active');
  });
  document.querySelector("[data-sell-target=\"".concat(path, "\"]")).classList.add('active');
};

var tabsHandler = function tabsHandler(path) {
  tabsBtn.forEach(function (el) {
    el.classList.remove('tabs-main__btn--active');
  });
  document.querySelector("[data-tabs-path=\"".concat(path, "\"]")).classList.add('tabs-main__btn--active'); //tabsContent.forEach(el => { el.classList.remove('tabs-main__content--active') });
  //document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-main__content--active');
}; //------------------------------СЛАЙДЕР-----------------------------------------------------------


if (document.querySelector('.slide-container')) {
  new Swiper('.slide-container', {
    //slidesPerGroup:4,
    pagination: {
      el: '.newBuildings-pagination',
      clickable: true,
      dynamicBullets: true
    },
    grabCursor: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    mousewheel: {
      sensitivity: 1
    },
    slidesPerView: 4,
    watchOverflow: true,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    speed: 500,
    breakpoints: {
      950: {
        enabled: true,
        slidesPerView: 4
      },
      566: {
        enabled: true,
        slidesPerView: 2
      },
      460: {
        enabled: true,
        slidesPerView: 1.7
      },
      360: {
        enabled: true,
        slidesPerView: 1.3
      },
      320: {
        enabled: true,
        slidesPerView: 1.1
      }
    }
  });
}

if (document.querySelector('.secondary-container')) {
  new Swiper('.secondary-container', {
    pagination: {
      el: '.secondary-pagination',
      clickable: true,
      dynamicBullets: true
    },
    grabCursor: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    mousewheel: {
      sensitivity: 1
    },
    slidesPerView: 4,
    watchOverflow: true,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    speed: 500,
    breakpoints: {
      950: {
        enabled: true,
        slidesPerView: 4
      },
      566: {
        enabled: true,
        slidesPerView: 2
      },
      460: {
        enabled: true,
        slidesPerView: 1.7
      },
      360: {
        enabled: true,
        slidesPerView: 1.3
      },
      320: {
        enabled: true,
        slidesPerView: 1.1
      }
    }
  });
}

var secondarySlide = document.querySelectorAll('.secondary-slide');

if (secondarySlide) {
  secondarySlide.forEach(function (el) {
    var torentSlide = el.querySelector('.torent-container');
    var pagination = el.querySelector('.secondary-pagination');
    new Swiper(torentSlide, {
      pagination: {
        el: pagination,
        clickable: true,
        dynamicBullets: true
      },
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 3,
      watchOverflow: true,
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: false,
      speed: 500,
      breakpoints: {
        950: {
          enabled: true,
          slidesPerView: 3
        },
        566: {
          enabled: true,
          slidesPerView: 2
        },
        460: {
          enabled: true,
          slidesPerView: 1.7
        },
        360: {
          enabled: true,
          slidesPerView: 1.3
        },
        320: {
          enabled: true,
          slidesPerView: 1.1
        }
      }
    });
  });
}

if (document.querySelector('.secondary-container-two')) {
  new Swiper('.secondary-container-two', {
    pagination: {
      el: '.secondary-pagination-two',
      clickable: true,
      dynamicBullets: true
    },
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    mousewheel: {
      sensitivity: 1
    },
    slidesPerView: 4,
    watchOverflow: true,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    speed: 500,
    breakpoints: {
      950: {
        enabled: true,
        slidesPerView: 4
      },
      566: {
        enabled: true,
        slidesPerView: 2
      },
      460: {
        enabled: true,
        slidesPerView: 1.7
      },
      360: {
        enabled: true,
        slidesPerView: 1.3
      },
      320: {
        enabled: true,
        slidesPerView: 1.1
      }
    }
  });
} //------------------------------RANGE----------------------------------------------------------------------------


var rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [500, 999999],
    connect: true,
    step: 1,
    range: {
      'min': [500],
      'max': [999999]
    }
  });
  var input0 = document.getElementById('input0');
  var input1 = document.getElementById('input1');
  var _inputs = [input0, input1];
  rangeSlider.noUiSlider.on('update', function (values, handle) {
    _inputs[handle].value = Math.round(values[handle]);
  });

  var setRangeSlider = function setRangeSlider(i, value) {
    var arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };

  _inputs.forEach(function (el, index) {
    el.addEventListener('change', function (e) {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

var rangeSlider1 = document.getElementById('range-slider1');

if (rangeSlider1) {
  noUiSlider.create(rangeSlider1, {
    start: [500, 999999],
    connect: true,
    step: 1,
    range: {
      'min': [500],
      'max': [999999]
    }
  });

  var _input = document.getElementById('input2');

  var _input2 = document.getElementById('input3');

  var _inputs2 = [_input, _input2];
  rangeSlider1.noUiSlider.on('update', function (values, handle) {
    _inputs2[handle].value = Math.round(values[handle]);
  });

  var _setRangeSlider = function _setRangeSlider(i, value) {
    var arr = [null, null];
    arr[i] = value;
    rangeSlider1.noUiSlider.set(arr);
  };

  _inputs2.forEach(function (el, index) {
    el.addEventListener('change', function (e) {
      _setRangeSlider(index, e.currentTarget.value);
    });
  });
}

var rangeSlider2 = document.getElementById('range-slider2');

if (rangeSlider2) {
  noUiSlider.create(rangeSlider2, {
    start: [500, 999999],
    connect: true,
    step: 1,
    range: {
      'min': [500],
      'max': [999999]
    }
  });

  var _input3 = document.getElementById('input4');

  var _input4 = document.getElementById('input5');

  var _inputs3 = [_input3, _input4];
  rangeSlider2.noUiSlider.on('update', function (values, handle) {
    _inputs3[handle].value = Math.round(values[handle]);
  });

  var _setRangeSlider2 = function _setRangeSlider2(i, value) {
    var arr = [null, null];
    arr[i] = value;
    rangeSlider2.noUiSlider.set(arr);
  };

  _inputs3.forEach(function (el, index) {
    el.addEventListener('change', function (e) {
      _setRangeSlider2(index, e.currentTarget.value);
    });
  });
} //------------------------btn-parameters-------------------------------------------------------------------------------
// CheckConveniences


var checkConveniences = document.querySelectorAll('.item-checkbox__checkbox');
var noOptions = document.querySelectorAll('.item-checkbox__checkbox-no');
var itemsCheckboxNo = document.querySelectorAll('.item-checkbox-no');
var balconyloggiaList = document.querySelector('.balcony-loggia__list');

if (checkConveniences || noOptions) {
  noOptions.forEach(function (noOption) {
    itemsCheckboxNo.forEach(function (el) {
      noOption.addEventListener('click', function (e) {
        var checkConveniences1 = el.parentElement.querySelectorAll('.item-checkbox__label');
        noOption.addEventListener('change', function (e) {
          if (noOption.checked) {
            checkConveniences1.forEach(function (check) {
              check.parentElement.classList.add('disabled');
            });
          } else {
            checkConveniences1.forEach(function (check) {
              check.parentElement.classList.remove('disabled');
            });
          }
        });
      });
    });
  });
}

if (document.documentElement.clientWidth <= 950) {
  if (document.querySelector('.distance__swiper')) {
    new Swiper('.distance__swiper', {
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 2.8,
      watchOverflow: true,
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: false,
      speed: 500
    });
  }
} //Height__swiper


if (document.documentElement.clientWidth <= 950) {
  if (document.querySelector('.height__swiper')) {
    new Swiper('.height__swiper', {
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 4.4,
      watchOverflow: true,
      spaceBetween: 12,
      slidesPerGroup: 1,
      loop: false,
      speed: 500,
      breakpoints: {
        950: {}
      }
    });
  }
}

if (document.documentElement.clientWidth >= 950) {
  var itemResults = document.querySelectorAll('.item-results');

  if (itemResults) {
    itemResults.forEach(function (el) {
      var resultsSlider = el.querySelector('.image-results_swiper');
      var resultsSlidermini = el.querySelector('.image-mini-slider');
      var imageSliderOne = el.querySelector('.image-results_swiper-one');
      var miniSlides = new Swiper(resultsSlidermini, {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true
      });
      new Swiper(resultsSlider, {
        grabCursor: false,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true
        },
        mousewheel: {
          sensitivity: 1
        },
        slidesPerView: 1,
        watchOverflow: true,
        slidesPerGroup: 1,
        loop: false,
        speed: 500,
        thumbs: {
          swiper: miniSlides
        }
      });
      new Swiper(imageSliderOne, {
        grabCursor: false,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true
        },
        mousewheel: {
          sensitivity: 1
        },
        slidesPerView: 1,
        watchOverflow: true,
        slidesPerGroup: 1,
        loop: false,
        speed: 500,
        thumbs: {
          swiper: miniSlides,
          slidesPerView: 1
        }
      });
    });
  }
}

if (product) {
  product.forEach(function (el) {
    var productSlider = el.querySelector('.product__swiper');
    var productSlidermini = el.querySelector('.product__swiper-mini');
    new Swiper(productSlider, {
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 1,
      watchOverflow: true,
      slidesPerGroup: 1,
      loop: false,
      speed: 500,
      thumbs: {
        swiper: {
          el: productSlidermini,
          slidesPerView: 3
        }
      }
    });
  });
}

var housingComplex = document.querySelector('.housingComplex');

if (housingComplex) {
  var productSlider = housingComplex.querySelectorAll('.product__swiper');
  productSlider.forEach(function (el) {
    new Swiper(el, {
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 1,
      watchOverflow: true,
      slidesPerGroup: 1,
      loop: false,
      speed: 500
    });
  });
}
/*let progressBar = document.querySelector('.selection__content');
let valueProgress = document.querySelector('.selection__value');

let progressValue = 0;
let progressEndValue = 65;
let speed = 50;



let progress = setInterval(()=>{
    progressValue++;
    valueProgress.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
    )`;
    if(progressValue == progressEndValue){
      clearInterval(progress);
    }
}, speed);

*/
//year__swiper


if (document.documentElement.clientWidth <= 950) {
  if (document.querySelector('.year__swiper')) {
    new Swiper('.year__swiper', {
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 4.4,
      watchOverflow: true,
      spaceBetween: 12,
      slidesPerGroup: 1,
      loop: false,
      speed: 500
    });
  }
} //ACCORDION



var accordionBtns = document.querySelectorAll('.accordion__title');

if (accordionBtns) {
  accordionBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      btn.parentElement.classList.toggle('active');
    });
  });
} // SLIDER CAD


var sliderCADBuy = document.getElementById('range-slider-CAD-buy');

if (sliderCADBuy) {
  noUiSlider.create(sliderCADBuy, {
    start: [0, 100],
    tooltips: true,
    connect: false,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    },
    format: {
      to: function to(value) {
        return parseInt(value);
      },
      from: function from(value) {
        return parseInt(value);
      }
    }
  });
}

var sliderCADTakeOff = document.getElementById('range-slider-CAD-takeOff');

if (sliderCADTakeOff) {
  noUiSlider.create(sliderCADTakeOff, {
    start: [0, 100],
    tooltips: true,
    connect: false,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    },
    format: {
      to: function to(value) {
        return parseInt(value);
      },
      from: function from(value) {
        return parseInt(value);
      }
    }
  });
}

if (document.documentElement.clientWidth <= 950) {
  var _itemResults = document.querySelectorAll('.item-results');

  if (_itemResults) {
    _itemResults.forEach(function (el) {
      var topData = el.querySelector('.top-data');
      var itemResultsTitle = el.querySelector('.image-results');
      itemResultsTitle.before(topData);
    });
  }
}

if (document.documentElement.clientWidth <= 767) {
  var productTitle = document.querySelector('.data-product__title');
  var productAfter = document.querySelector('.product-after');

  if (productTitle) {
    productAfter.after(productTitle);
  }
}

var selectionContent = document.querySelectorAll('.selection__content');
var selectionTitleYes = document.querySelector('.selection__value-yes');
var selectionTitleNo = document.querySelector('.selection__value-no');
var yes = 'Да';
var no = 'Нет';

if (selectionContent) {
  selectionContent.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var selectionValue = el.querySelector('.selection__value');
      var selection__per = el.querySelector('.selection__per');
      selectionContent.forEach(function (el) {
        el.classList.remove('active');
        selectionTitleNo.textContent = "".concat(no);
        selectionTitleYes.textContent = "".concat(yes);
      });
      selectionValue.textContent = "".concat(selection__per.style.width = '45%');
      el.classList.add('active');
    });
  });
}

var parametersLink = document.querySelector('.parameters-results__link-menu');
var parametersBlock = document.querySelector('.parameters-results__block-1');
var historyTop = document.querySelector('.history__top');

if (parametersBlock) {
  var parametersItem = parametersBlock.querySelectorAll('.parameters-results__item');
  var parametersContent = parametersBlock.querySelector('.parameters-results__content');
  parametersLink.addEventListener('click', function (e) {
    e.preventDefault();
    parametersLink.classList.toggle('active');
    parametersLink.parentElement.classList.toggle('active');
    parametersContent.classList.toggle('active');
  });
  parametersItem.forEach(function (el) {
    el.addEventListener('click', function (e) {
      parametersLink.innerText = el.innerText;
      parametersLink.classList.remove('active');
      parametersLink.parentElement.classList.remove('active');
      parametersContent.classList.remove('active');
      parametersItem.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
}

if (historyTop) {
  var _parametersItem = historyTop.querySelectorAll('.parameters-results__item');

  var _parametersContent = historyTop.querySelector('.parameters-results__content');

  parametersLink.addEventListener('click', function (e) {
    e.preventDefault();
    parametersLink.classList.toggle('active');
    parametersLink.parentElement.classList.toggle('active');

    _parametersContent.classList.toggle('active');
  });

  _parametersItem.forEach(function (el) {
    el.addEventListener('click', function (e) {
      parametersLink.innerText = el.innerText;
      parametersLink.classList.remove('active');
      parametersLink.parentElement.classList.remove('active');

      _parametersContent.classList.remove('active');

      _parametersItem.forEach(function (el) {
        el.classList.remove('active');
      });

      el.classList.add('active');
    });
  });
}

var saveSearchBtn = document.querySelectorAll('.saveBtn');
var notifySave = document.getElementById('notify-save');
var notifyComparison = document.getElementById('notify-comparison');

if (saveSearchBtn) {
  saveSearchBtn.forEach(function (el) {
    el.addEventListener('click', function (e) {
      notifySave.classList.add('active');
      setTimeout(function (e) {
        notifySave.classList.remove('active');
      }, 2000);
    });
  });
}

var comparisonAdd = document.querySelectorAll('.comparison-add');

if (comparisonAdd) {
  comparisonAdd.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      notifyComparison.classList.add('active');
      setTimeout(function (e) {
        notifyComparison.classList.remove('active');
      }, 2000);
    });
  });
}

var accordionDescription = document.querySelectorAll('.accordion-description');

if (accordionDescription) {
  accordionDescription.forEach(function (el) {
    var titleDescription = el.querySelector('.title-description');
    var accordionBody = el.querySelector('.accordion-description__body');

    if (titleDescription) {
      titleDescription.addEventListener('click', function (e) {
        titleDescription.classList.toggle('active');
        accordionBody.classList.toggle('active');
      });
    }
  });
}

var contactBtn = document.getElementById('contactBtn');

if (contactBtn) {
  contactBtn.addEventListener('click', function (e) {
    contactBtn.classList.add('active');
  });
} // ДИОГРАММА
// ДИОГРАММА


var chartD = document.getElementById('graph1');

if (chartD) {
  var _options7 = {
    chart: {
      height: 200,
      type: "area",
      stacked: !0,
      toolbar: {
        tools: {
          download: false
        }
      },
      zoom: {
        enabled: false
      }
    },
    colors: ["#F7E1FF", "#C1BEE7"],
    dataLabels: {
      enabled: 1,
      formatter: function formatter(val, opts) {
        return val + ' млн';
      },
      textAnchor: 'middle',
      style: {
        fontSize: '14px',
        fontWeight: 'normal',
        colors: ['#151516']
      },
      background: {
        enabled: false
      },
      dropShadow: {
        enabled: false
      },
      offsetX: 0,
      offsetY: -10
    },
    stroke: {
      colors: ['#6A56E8'],
      curve: "straight",
      width: 1,
      dashArray: [0, 4],
      lineCap: "round"
    },
    grid: {
      padding: {
        left: 0,
        right: 0
      },
      strokeDashArray: 0,
      yaxis: {
        lines: {
          show: false
        }
      },
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 0
      }
    },
    series: [{
      name: "",
      data: [1.9, 1.7, 2.5]
    }],
    xaxis: {
      type: "month",
      categories: ['1 ноя.', '1 янв.', '1 фев.'],
      axisBorder: {
        show: !0
      },
      axisTicks: {
        show: !0
      },
      labels: {
        style: {
          fontSize: "14px",
          colors: '#6C7F9C'
        }
      }
    },
    yaxis: {
      show: true,
      labels: {
        offsetX: -99,
        show: true
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 2,
        opacityFrom: 1,
        opacityTo: 0.4,
        stops: [0, 100]
      }
    },
    tooltip: {
      enabled: false
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "right"
    }
  };
  var chart = new ApexCharts(document.querySelector("#graph1"), _options7);
  chart.render();
}

var oneSlider = document.getElementById('one-slider');
var termSlider = document.getElementById('term-slider');

if (oneSlider) {
  noUiSlider.create(oneSlider, {
    start: 2430000,
    connect: [true, false],
    step: 1,
    range: {
      'min': 720000,
      'max': 7800000
    },
    format: {
      to: function to(value) {
        return parseInt(value);
      },
      from: function from(value) {
        return parseInt(value);
      }
    }
  });
  var initialPayment = document.getElementById('initialPayment');

  if (initialPayment) {
    oneSlider.noUiSlider.on('update', function (values, handle) {
      initialPayment.innerHTML = values[handle];
    });
  }
}

if (termSlider) {
  noUiSlider.create(termSlider, {
    start: 12,
    connect: [true, false],
    step: 1,
    range: {
      'min': 1,
      'max': 30
    },
    format: {
      to: function to(value) {
        return parseInt(value);
      },
      from: function from(value) {
        return parseInt(value);
      }
    }
  });
  var loanTerm = document.getElementById('loanTerm');

  if (loanTerm) {
    termSlider.noUiSlider.on('update', function (values, handle) {
      loanTerm.innerHTML = values[handle];
    });
  }
}

if (document.documentElement.clientWidth <= 520) {
  var mortgageBuy = document.querySelector('.mortgage-description__top');
  var mortgageDescription = document.querySelector('.mortgage-description');

  if (mortgageBuy) {
    var switcherBody = mortgageBuy.querySelector('.switcher__body');
    var switcherList = mortgageBuy.querySelector('.switcher__list');
    var switcherItem = mortgageBuy.querySelectorAll('.switcher__item');
    switcherItem.forEach(function (el) {
      el.classList.add('swiper-slide');
    });
    switcherBody.classList.add('swiper');
    switcherList.classList.add('swiper-wrapper');
    new Swiper(switcherBody, {
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 1.5,
      watchOverflow: true,
      //slidesPerGroup:1,
      loop: false,
      speed: 500
    });
  }
} //interestRate


var interestRate = document.querySelectorAll('.interestRate');

if (interestRate) {
  interestRate.forEach(function (el) {
    var interestRateItem = el.querySelectorAll('.interestRate__item');
    interestRateItem.forEach(function (el) {
      el.addEventListener('click', function (e) {
        interestRateItem.forEach(function (el) {
          el.classList.remove('active');
        });
        el.classList.add('active');
      });
    });
  });
} // СКРОЛЛ TO COMPARE


var slider = document.querySelector('.scroll');
var sliderImageCompare = document.querySelector('.compare__items');
var itemCompare = document.querySelectorAll('.compare__item');

if (document.querySelectorAll('.compare__items .item-compare').length <= 2) {
  itemCompare.forEach(function (el) {
    el.style.minWidth = '257px';
  });
}

if (slider) {
  var isDown = false;
  var startX;
  var scrollLeft;
  slider.addEventListener('mousedown', function (e) {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', function () {
    isDown = false;
  });
  slider.addEventListener('mouseup', function () {
    isDown = false;
  });
  slider.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft;
    var walk = (x - startX) * 3; //scroll-fast

    slider.scrollLeft = scrollLeft - walk;
  });
  sliderImageCompare.addEventListener('mousedown', function (e) {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = sliderImageCompare.scrollLeft;
  });
  sliderImageCompare.addEventListener('mouseleave', function () {
    isDown = false;
  });
  sliderImageCompare.addEventListener('mouseup', function () {
    isDown = false;
  });
  sliderImageCompare.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft;
    var walk = (x - startX) * 3; //scroll-fast

    sliderImageCompare.scrollLeft = scrollLeft - walk;
  });
  slider.addEventListener('scroll', function (e) {
    sliderImageCompare.scrollTop = slider.scrollTop;
    sliderImageCompare.scrollLeft = slider.scrollLeft;
  });
  sliderImageCompare.addEventListener('scroll', function (e) {
    slider.scrollTop = sliderImageCompare.scrollTop;
    slider.scrollLeft = sliderImageCompare.scrollLeft;
  });
} //history active


var historyItem = document.querySelectorAll('.history__item');

if (historyItem) {
  historyItem.forEach(function (el) {
    el.addEventListener('click', function (e) {
      historyItem.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
} //WEB


var webItem = document.querySelectorAll('.web__item');

if (webItem) {
  webItem.forEach(function (el) {
    el.addEventListener('click', function (e) {
      webItem.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
} // APARTMENT


var apartmentItem = document.querySelectorAll('.apartment__item-tabs');
apartmentItem.forEach(function (el) {
  el.addEventListener('click', function (e) {
    apartmentItem.forEach(function (el) {
      el.classList.remove('active');
    });
    el.classList.add('active');
  });
}); // APARTMENT ACCORDION

var accordionApartment = document.querySelectorAll('.accordion-apartment');

if (accordionApartment) {
  accordionApartment.forEach(function (el) {
    var apartmentItem = el.querySelectorAll('.accordion-apartment__item');
    apartmentItem.forEach(function (acc) {
      var apartmentList = acc.querySelector('.accordion-apartment__list');
      var apartmentTitle = acc.querySelector('.accordion-apartment__title');
      var apartmentLink = acc.querySelectorAll('.accordion-apartment__link');

      if (apartmentTitle) {
        apartmentTitle.addEventListener('click', function (e) {
          acc.classList.toggle('active');
          apartmentTitle.classList.toggle('active');
          apartmentList.classList.toggle('active');
        });
      }

      if (apartmentLink) {
        apartmentLink.forEach(function (el) {
          el.addEventListener('click', function (e) {
            apartmentTitle.innerText = el.innerText;
            apartmentTitle.classList.remove('active');
            apartmentList.classList.remove('active');
            acc.classList.remove('active');
            apartmentLink.forEach(function (el) {
              el.classList.remove('active');
            });
            el.classList.add('active');
          });
        });
      }
    });
  });
} // PHOTO-APARTMENT


var flat = document.querySelector('.flat-content');
var home = document.querySelector('.home-content');
var room = document.querySelector('.room-content');

if (flat) {
  var photoApartment = flat.querySelectorAll('.photo-apartment__item');
  photoApartment.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      photoApartment.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
}

if (home) {
  var _photoApartment = home.querySelectorAll('.photo-apartment__item');

  _photoApartment.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      _photoApartment.forEach(function (el) {
        el.classList.remove('active');
      });

      el.classList.add('active');
    });
  });
}

if (room) {
  var _photoApartment2 = room.querySelectorAll('.photo-apartment__item');

  _photoApartment2.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      _photoApartment2.forEach(function (el) {
        el.classList.remove('active');
      });

      el.classList.add('active');
    });
  });
}

var photo = document.querySelectorAll('.photo-apartment');

if (photo) {
  photo.forEach(function (el) {
    var contentPlan = el.querySelector('.content-plan');
    var contentPhoto = el.querySelector('.content-photo');
    var addPhoto = el.querySelector('.addPhoto');
    var addLayout = el.querySelector('.addLayout');
    var addPanorama = el.querySelector('.addPanorama');

    if (addPhoto.classList.contains('active')) {
      contentPhoto.classList.add('active');
    }

    addPhoto.addEventListener('click', function (e) {
      contentPhoto.classList.add('active');
    });
    addLayout.addEventListener('click', function (e) {
      contentPlan.classList.add('active');
    });
  });
} //STEP


var itemStep = document.querySelectorAll('.item-step');

if (itemStep) {
  itemStep.forEach(function (el) {
    var input = el.querySelector('.item-step__input');
    var label = el.querySelector('.item-step__label');
    label.addEventListener('click', function (e) {
      el.classList.toggle('active');
      input.checked = true;
      var mutationObserver = new MutationObserver(function (entries) {
        if (!el.classList.contains('active')) {
          input.checked = false;
        }
      });
      mutationObserver.observe(el, {
        attributes: true
      });
    });
    el.addEventListener('click', function (e) {
      el.classList.toggle('active');
      input.checked = true;
      var mutationObserver = new MutationObserver(function (entries) {
        if (!el.classList.contains('active')) {
          input.checked = false;
        }
      });
      mutationObserver.observe(el, {
        attributes: true
      });
    });
  });
}

var stepLink = document.querySelectorAll('.item-step__link');

if (stepLink) {
  stepLink.forEach(function (el) {
    el.addEventListener('click', function (e) {
      el.classList.toggle('active');
    });
  });
}

var stepInput = document.querySelectorAll('.item-step__input');

if (stepInput) {
  stepInput.forEach(function (el) {
    el.addEventListener('change', function (e) {
      if (el.checked) {
        stepLink.forEach(function (el) {
          el.classList.remove('active');
        });
        el.classList.add('active');
      }
    });
  });
} //STEPS


if (document.querySelectorAll('.step .active-step').length > 1) {
  var step = document.querySelector('.step');
  var stepBody = step.querySelectorAll('.step__body');
  stepBody.forEach(function (el) {
    if (el.classList.contains('go')) {
      el.classList.add('done');
    } else if (el.classList.contains('go-error')) {
      el.classList.add('done-err');
    }
  });
}

var datePickerInputs = document.querySelectorAll('.account-edit__select input');

if (datePickerInputs) {
  datePickerInputs.forEach(function (instance) {
    var datepicker = new Datepicker(instance, {
      language: 'ru',
      prevArrow: '<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1L8 7L1 0.999999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      nextArrow: '<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1L8 7L1 0.999999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    });
    instance.addEventListener('show', function () {
      if (datepicker.picker.element.classList.contains('datepicker-orient-bottom')) {
        this.classList.add('datepicker-orient-bottom');
      } else {
        this.classList.add('datepicker-orient-top');
      }
    });
    instance.addEventListener('hide', function () {
      this.classList.remove('datepicker-orient-bottom', 'datepicker-orient-top');
    });
  });
} // ACCOUNT DELETE COMMENTS


var bodyComents = document.querySelectorAll('.comments-description__body');

if (bodyComents) {
  bodyComents.forEach(function (el) {
    var swipeBox = el.querySelector('.comments-description__item');
    var deleteComent = el.querySelector('.delete-comment');
    swipeBox.addEventListener('touchstart', handleTouchStart, false);
    swipeBox.addEventListener('touchmove', handleTouchMove, false);
    var x1 = null;

    function handleTouchStart(event) {
      var firstTouch = event.touches[0];
      x1 = firstTouch.clientX;
    }

    function handleTouchMove(event) {
      if (!x1) {
        return false;
      }

      var x2 = event.touches[0].clientX;
      var xDiff = x2 - x1;

      if (xDiff > 0) {
        swipeBox.style.right = '0px';
        deleteComent.style.right = '0px';
      } else {
        swipeBox.style.right = '110px';
        deleteComent.style.right = '-18px';
      }
    }
  });
}

if (document.documentElement.clientWidth >= 767) {
  var accountViewMode = document.querySelector('.account-viewMode');

  if (accountViewMode) {
    var comments = accountViewMode.querySelectorAll('.comments-description__item');
    comments.forEach(function (el) {
      el.addEventListener('click', function (e) {
        el.parentElement.classList.toggle('active');
      });
    });
  }
}

var promoBody = document.querySelector('.top-account__body--promo');

if (document.documentElement.clientWidth <= 767) {
  if (promoBody) {
    var btnEmail = document.querySelector('.left-account__btn--mail');
    btnEmail.after(promoBody);
  }
} // Модальное окно ПОДТВЕРДИТЬ ПОЧТУ


var modalCenterClose = document.querySelector('.modal-centerClose');

function hideModal() {
  if (document.querySelector('.shown-modal')) {
    document.querySelector('.shown-modal').classList.remove('shown-modal');
  }

  document.body.classList.remove('overflow-hidden', 'body-dark');
}

document.addEventListener('click', function (e) {
  if (e.target.closest('[data-add-shown]')) {
    hideModal();
    document.getElementById(e.target.closest('[data-add-shown]').dataset.addShown).classList.toggle('shown-modal');
    document.body.classList.toggle('overflow-hidden');
  }

  if (e.target.closest('.modal-centerClose')) {
    hideModal();
  }

  if (!e.target.closest('.shown-modal') && !e.target.closest('[data-add-shown]') && document.querySelector('.shown-modal')) {
    hideModal();
  }

  if (e.target.closest('[data-body-dark]')) {
    document.body.classList.add('body-dark');
  }

  if (e.target.closest('#add-workplace')) {
    var _datePickerInputs = document.querySelectorAll('.account-edit__select input');

    var workplace = document.querySelector('.account-edit__block');
    var workplaceNext = workplace.cloneNode(true);
    document.getElementById('workplace-now').before(workplaceNext);

    if (_datePickerInputs) {
      _datePickerInputs.forEach(function (instance) {
        var datepicker = new Datepicker(instance, {
          language: 'ru',
          prevArrow: '<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1L8 7L1 0.999999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          nextArrow: '<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1L8 7L1 0.999999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        });
        instance.addEventListener('show', function () {
          if (datepicker.picker.element.classList.contains('datepicker-orient-bottom')) {
            this.classList.add('datepicker-orient-bottom');
          } else {
            this.classList.add('datepicker-orient-top');
          }
        });
        instance.addEventListener('hide', function () {
          this.classList.remove('datepicker-orient-bottom', 'datepicker-orient-top');
        });
      });
    }
  }
}); //ACCOUNT AGENT PARTNERS TABS

var partnersTabs = document.querySelectorAll('.account-partners__item-tabs');
var accountPartners = document.querySelector('.account-partners__content');
var accountPartnersTabs = document.querySelectorAll('.account-partners__body');

if (accountPartners) {
  accountPartners.addEventListener('click', function (e) {
    if (e.target.classList.contains('account-partners__item-tabs')) {
      var tabsPath = e.target.dataset.partnersPath;
      partnersHandler(tabsPath);
    }
  });
}

var partnersHandler = function partnersHandler(path) {
  partnersTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  accountPartnersTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  document.querySelector("[data-partners-path=\"".concat(path, "\"]")).classList.add('active');
  accountPartnersTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  document.querySelector("[data-partners-target=\"".concat(path, "\"]")).classList.add('active');
}; // ACCOUNT CART TABS


var cartTabs = document.querySelectorAll('.account-cart__item');
var accountCart = document.querySelector('.account-cart');
var accountCartTabs = document.querySelectorAll('.account-cart__tabs-content');

if (accountCart) {
  accountCart.addEventListener('click', function (e) {
    if (e.target.classList.contains('account-cart__item')) {
      var tabsPath = e.target.dataset.cartPath;
      cartHandler(tabsPath);
    }
  });
}

var cartHandler = function cartHandler(path) {
  cartTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  accountCartTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  document.querySelector("[data-cart-path=\"".concat(path, "\"]")).classList.add('active');
  accountCartTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  document.querySelector("[data-cart-target=\"".concat(path, "\"]")).classList.add('active');
}; // FLAT-BTN


var flatBtn = document.querySelectorAll('.flat-btn');

if (flatBtn) {
  flatBtn.forEach(function (el) {
    el.addEventListener('click', function (e) {
      el.parentElement.parentElement.classList.toggle('active');
    });
  });
} // MESSAGE ACCOUNT


var messageItem = document.querySelectorAll('.left-message__item');

if (messageItem) {
  messageItem.forEach(function (el) {
    el.addEventListener('click', function (e) {
      messageItem.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
}

var images = document.querySelector('.bottom-message__images');
document.addEventListener('click', function (e) {
  if (images) {
    if (!e.target.closest('.toFix') && !e.target.closest('.bottom-message__images')) {
      images.classList.remove('shown');
    }

    if (e.target.closest('.toFix')) {
      e.preventDefault();
      images.classList.toggle('shown');
    }
  }
}); // BTN-BORDER ACTIVE

var buttons = document.querySelector('.buttons-click');

if (buttons) {
  var button = buttons.querySelectorAll('.btn-border');
  button.forEach(function (el) {
    el.addEventListener('click', function (e) {
      button.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
} // CALC


var mortgageBottom = document.querySelector('.block-mortgage--bottom');

if (mortgageBottom) {
  var calcTotalMoveEnd = function calcTotalMoveEnd(e) {
    document.body.classList.remove('overflow-hidden');
    calcTotalEndMove = true;
  };

  var calcTtotalCounter = 0,
      calcTotalStart,
      calcTotalEnd,
      calcTotalEndMove,
      calcTotalDelta = 0;
  mortgageBottom.addEventListener('touchmove', function (e) {
    document.body.classList.add('overflow-hidden');

    if (!calcTotalStart || calcTotalEndMove) {
      calcTotalStart = calcTotalEnd = e.changedTouches[0].screenY;
    } else {
      calcTotalStart = calcTotalEnd;
      calcTotalEnd = e.changedTouches[0].screenY;
    }

    calcTotalDelta += calcTotalEnd - calcTotalStart;

    if (calcTtotalCounter % 2 == 0) {
      calcTotalDelta;

      if (calcTotalDelta <= 0) {
        calcTotalMoveEnd;
      } else {
        mortgageBottom.style.transform = "translateY(".concat(calcTotalDelta, "px)");
      }
    }

    calcTtotalCounter++;
    calcTotalEndMove = false;
  });
  mortgageBottom.addEventListener('touchend', calcTotalMoveEnd);
  mortgageBottom.addEventListener('touchcancel', calcTotalMoveEnd);
} // payOff__btn


var payOffBtn = document.querySelector('.payOff__btn');

if (payOffBtn) {
  payOffBtn.addEventListener('click', function (e) {
    payOffBtn.parentElement.parentElement.classList.add('green');
  });
} // MY OBJECTS


var accMyObjects = document.querySelector('.account-Myobjects');

if (accMyObjects) {
  var itemChoiceBody = accMyObjects.querySelectorAll('.account-Myobjects__item-body--choice');
  itemChoiceBody.forEach(function (el) {
    var input = el.querySelector('.item-step__input');
    var label = el.querySelector('.item-step__label');
    label.addEventListener('click', function (e) {
      el.classList.toggle('active');
      input.checked = true;
      var mutationObserver = new MutationObserver(function (entries) {
        if (!el.classList.contains('active')) {
          input.checked = false;
        }
      });
      mutationObserver.observe(el, {
        attributes: true
      });
    });
    el.addEventListener('click', function (e) {
      el.classList.toggle('active');
      input.checked = true;
      var mutationObserver = new MutationObserver(function (entries) {
        if (!el.classList.contains('active')) {
          input.checked = false;
        }
      });
      mutationObserver.observe(el, {
        attributes: true
      });
    });
  });
}

var accSeo = document.querySelector('.acc-seo');
var leftAccountContent = document.querySelector('.left-account__content');

if (document.documentElement.clientWidth <= 950) {
  if (accSeo) {
    leftAccountContent.after(accSeo);
  }
}

var findOutHow = document.querySelector('.find-out-how');
var stepTwoN = document.querySelector('.step-two__notify-choice');
var contentStep = document.querySelector('.content-step');

if (document.querySelector('.body-pakcLight')) {
  if (document.documentElement.clientWidth <= 950) {
    stepTwoN.before(findOutHow);
  }
}

if (document.querySelector('.body-pakcMark')) {
  if (document.documentElement.clientWidth <= 950) {
    contentStep.after(findOutHow);
  }
}

if (document.documentElement.clientWidth <= 950) {
  if (document.querySelector('.aboutNewBuildings')) {
    var _contactBtn = document.querySelector('.aboutNewBuildings__contacts');

    var aboutNewBuildingsList = document.querySelector('.aboutNewBuildings__list');
    aboutNewBuildingsList.after(_contactBtn);
  }
}

function createSelectArrow() {
  var arrow = document.createElement('div');
  arrow.classList.add('ts-arrow');
  arrow.innerHTML = '<div class="_icon-arrow"></div>';
  return arrow;
}

if (document.querySelector('.select-styled')) {
  document.querySelectorAll('.select-styled').forEach(function (el) {
    new TomSelect(el, {
      onInitialize: function onInitialize() {
        this.control.append(createSelectArrow());
      }
    });
  });
}

if (document.querySelector('.select-styled-multiple')) {
  var showSelectMore = function showSelectMore(control) {
    var cotrolStyle = window.getComputedStyle(control);
    var ellipsis = 45;
    var controlRightBorder = control.getBoundingClientRect().right - parseInt(cotrolStyle.paddingRight) - ellipsis;
    var items = control.querySelectorAll('.item');
    var i = items.length - 1;
    control.classList.remove('ts-more');
    items.forEach(function (el) {
      el.classList.remove('d-none');
    });

    while (items.length && items[i].getBoundingClientRect().right > controlRightBorder && i > 0) {
      items[i].classList.add('d-none');
      control.classList.add('ts-more');
      i--;
    }
  };

  document.querySelectorAll('.select-styled-multiple').forEach(function (el) {
    new TomSelect(el, {
      plugins: ['checkbox_options'],
      hidePlaceholder: true,
      render: {
        item: function item(data, escape) {
          return '<div><figure></figure>' + escape(data.text) + '</div>';
        },
        option: function option(data, escape) {
          return '<div>' + escape(data.text) + '<figure></figure></div>';
        }
      },
      onInitialize: function onInitialize() {
        var _this = this;

        this.control.append(createSelectArrow());
        this.on('item_select', function (item) {
          _this.removeItem(item);

          setTimeout(function () {
            _this.wrapper.classList.remove('input-hidden');
          }, 0);
          showSelectMore(_this.control);
        });
        showSelectMore(this.control);
      },
      onChange: function onChange() {
        showSelectMore(this.control);
      }
    });
  });
}

if (tabs) {
  tabs.addEventListener('click', function (e) {
    if (e.target.classList.contains('tabs-main__btn')) {
      var tabsPath = e.target.dataset.tabsPath;
      tabsHandler(tabsPath);
    }

    ;

    if (e.target.classList.contains('dropdown-menu__item-takeOff')) {
      var filtertakePath = e.target.dataset.value;
      filterTakeOffHandler(filtertakePath);
    }

    ;
  });
}

var apartmentModalContent = document.querySelector('.step-two__content--dekstop');
var modalApartment = document.querySelector('.modal-apartment__content');

if (document.documentElement.clientWidth <= 950) {
  if (apartmentModalContent) {
    modalApartment.before(apartmentModalContent);
  }
} // rollUp 


var rollUp = document.querySelector('.rollUp');

if (rollUp) {
  rollUp.addEventListener('click', function (e) {
    document.querySelector('.metroSearch').classList.toggle('open');
  });
} //DRAW


var drawBtn = document.querySelector('.btn-draw');

if (drawBtn) {
  drawBtn.addEventListener('click', function (e) {
    document.querySelector('.searchByMap').classList.add('draw');
  });
}

var drawStop = document.querySelector('.draw-stop');

if (drawStop) {
  drawStop.addEventListener('click', function (e) {
    document.querySelector('.searchByMap').classList.remove('draw');
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwicnVuTGlzdGVuZXJzIiwib0V2ZW50Iiwid2luZG93IiwiZXZlbnQiLCJpTHN0SWQiLCJpRWxJZCIsIm9FdnRMaXN0ZW5lcnMiLCJvTGlzdGVuZXJzIiwidHlwZSIsImFFbHMiLCJsZW5ndGgiLCJhRXZ0cyIsImNhbGwiLCJzRXZlbnRUeXBlIiwiZkxpc3RlbmVyIiwiaGFzT3duUHJvcGVydHkiLCJuRWxJZHgiLCJwdXNoIiwiYUVsTGlzdGVuZXJzIiwic3BsaWNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0cyIsImltIiwiSW5wdXRtYXNrIiwibWFzayIsImlucHV0czEiLCJmb3JFYWNoIiwiZWwiLCJpbTEiLCJpbnB1dHMyIiwiaW0yIiwiY29udGFjdHNJbnB1dCIsImNhZGFzdHJpYWxOdW1iZXIiLCJhcGFydG1lbnRCdG4iLCJlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiaXRlbVByb21vdGlvblNlbGVjdGlvbiIsInByb21vdGlvblNlbGVjdGlvbklucHV0IiwicXVlcnlTZWxlY3RvciIsInByb21vdGlvblNlbGVjdGlvbkNob2ljZSIsImNoZWNrZWQiLCJWYWxpZFBob25lIiwicmUiLCJteVBob25lIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWxpZCIsInRlc3QiLCJzdHlsZSIsImRpc3BsYXkiLCJtZW51TmF2VG9nZ2xlIiwibWVudU5hdlRvZ2dsZVJlcyIsIm5hdk1lbnUiLCJuYXZNZW51SXRlbSIsImNsb3NlTmF2TWVudSIsIndyYXBwZXJSZXN1bHQiLCJib2R5SGVhZGVyTWFpbiIsIndyYXBwZXIiLCJuYXZUb2dnbGVNYWluIiwibmF2Q2xvc2UiLCJib2R5IiwiaGVhZGVyTmF2IiwicHJldmVudERlZmF1bHQiLCJlbGVtIiwib25pbnB1dCIsInN1YnN0ciIsInNob3dQYXNzd29yZCIsImJ0biIsImlucHV0IiwiYnRuUHJvdmVya2EiLCJpbnB1dFByb3ZlcmthIiwidG9nZ2xlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic2hvd1Bhc3N3b3JkU2lnblVwIiwiaXRlbVJlc3VsdCIsInNlbGxlckNvbXBhcmlzb24iLCJlc3RpbWF0aW9uIiwic2hvd0NvbnRhY3QiLCJwcm9kdWN0IiwiZmF2b3VyaXRlcyIsIm1vcmUiLCJtb3JlTWVudSIsImNvbXBhcmVJdGVtIiwiaXRlbUZhdm91cml0ZXMiLCJmYXZvdXJpdGUiLCJuZXdCdWlsZGluZ3NJdGVtIiwidGFic01haW5CdG4iLCJ0YWJzTWFpbkJsb2NrIiwidGFic01haW5JdGVtcyIsImlubmVyVGV4dCIsImhlaWdodCIsImZpeGVkRmlsdGVyIiwibWFpblJlc3VsdHMiLCJzY3JvbGxEaXN0YW5jZSIsInNjcm9sbFkiLCJtYXJnaW5Ub3AiLCJjb21wYXJlRml4ZWRoZWlnaHQiLCJmaXhlZENvbXBhcmVJdGVtcyIsImNvbXBhcmlzb25UaXRsZSIsImNvbXBhcmVIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjb21wYXJpc29uVGl0bGVIZWlnaHQiLCJwdWJsaWNhdGlvblRpbWVBY2NvcmRpb25GbGF0IiwicHVibGljYXRpb25UaW1lSXRlbXNGbGF0IiwicHVibGljYXRpb25UaW1lRmxhdCIsIm1lbnUiLCJvcHRpb25zIiwib3B0aW9uIiwicHVibGljYXRpb25UaW1lQWNjb3JkaW9uSG9tZSIsInB1YmxpY2F0aW9uVGltZUl0ZW1zSG9tZSIsInB1YmxpY2F0aW9uVGltZUhvbWUiLCJwdWJsaWNhdGlvblRpbWVBY2NvcmRpb25Sb29tIiwicHVibGljYXRpb25UaW1lSXRlbXNSb29tIiwicHVibGljYXRpb25UaW1lUm9vbSIsInB1YmxpY2F0aW9uVGltZUFjY29yZGlvbkhvbWVCdXkiLCJwdWJsaWNhdGlvblRpbWVJdGVtc0hvbWVCdXkiLCJwdWJsaWNhdGlvblRpbWVIb21lQnV5IiwicHVibGljYXRpb25UaW1lQWNjb3JkaW9uRmxhdEJ1eSIsInB1YmxpY2F0aW9uVGltZUl0ZW1zRmxhdEJ1eSIsInB1YmxpY2F0aW9uVGltZUZsYXRCdXkiLCJwdWJsaWNhdGlvblRpbWVBY2NvcmRpb25Sb29tQnV5IiwicHVibGljYXRpb25UaW1lSXRlbXNSb29tQnV5IiwicHVibGljYXRpb25UaW1lUm9vbUJ1eSIsInN3aXRjaGVySXRlbXMiLCJzd2l0Y2hlckJ1eVJvb20iLCJzd2l0Y2hlckJ1eUZsYXQiLCJzd2l0Y2hlclRha2VPZmZGbGF0Iiwic3dpdGNoZXJUYWtlT2ZmUm9vbSIsInN3aXRjaGVyQnV5Iiwic3dpdGNoZXJUYWtlT2ZmIiwic3dpdGNoZXJNb3J0Z2FnZSIsInN3aXRjaGVySXRlbSIsInJlZ2lvbkJ0biIsInBvcFVwIiwicG9wVXBDbG9zZSIsInBvcFVwU2VhcmNoIiwicmVnaW9uTGlzdCIsInJlZ2lvbnMiLCJsb2NhbEJ0biIsImFyZWFzIiwiaGlkZU1vZGFsIiwicmVnaW9uIiwiYXJlYSIsInBhcmFtZXRlcnMiLCJwYXJhbWV0ZXJzQ2xvc2UiLCJtb2RhbFBhcmFtZXRlcnMiLCJ0YWJzTWFpbiIsImNvbnRlbnR0YWJzQnV0dG9uIiwibW9kYWxCdG5TYXZlIiwibWFpbkJsb2NrIiwiYWZ0ZXIiLCJmaWx0ZXJDb250ZW50IiwibW9kYWxDbG9zZSIsInBhcmFtZXRlciIsImJlZm9yZSIsInRhYnMiLCJ0YWJzQnRuIiwidGFic0NvbnRlbnQiLCJmaWx0ZXJQYXJhbWV0ZXJzVGFrZU9mZiIsImZpbHRlclBhcmFtZXRlcnNCdXkiLCJhcGFydG1lbkJvZHkiLCJhcGFydG1lbnRUYWJzQ29udGVudCIsInRhYnNMaW5rIiwiaXRlbVRhYnMiLCJjb250YWlucyIsInRhYnNQYXRoIiwiZGF0YXNldCIsInNlbGxQYXRoIiwic2VsbEhhbmRsZXIiLCJwYXRoIiwidGFic0hhbmRsZXIiLCJTd2lwZXIiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwiZHluYW1pY0J1bGxldHMiLCJncmFiQ3Vyc29yIiwia2V5Ym9hcmQiLCJlbmFibGVkIiwib25seUluVmlld3BvcnQiLCJwYWdlVXBEb3duIiwibW91c2V3aGVlbCIsInNlbnNpdGl2aXR5Iiwic2xpZGVzUGVyVmlldyIsIndhdGNoT3ZlcmZsb3ciLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJHcm91cCIsImxvb3AiLCJzcGVlZCIsImJyZWFrcG9pbnRzIiwic2Vjb25kYXJ5U2xpZGUiLCJ0b3JlbnRTbGlkZSIsInJhbmdlU2xpZGVyIiwibm9VaVNsaWRlciIsImNyZWF0ZSIsInN0YXJ0IiwiY29ubmVjdCIsInN0ZXAiLCJyYW5nZSIsImlucHV0MCIsImlucHV0MSIsIm9uIiwidmFsdWVzIiwiaGFuZGxlIiwiTWF0aCIsInJvdW5kIiwic2V0UmFuZ2VTbGlkZXIiLCJpIiwiYXJyIiwic2V0IiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwicmFuZ2VTbGlkZXIxIiwicmFuZ2VTbGlkZXIyIiwiY2hlY2tDb252ZW5pZW5jZXMiLCJub09wdGlvbnMiLCJpdGVtc0NoZWNrYm94Tm8iLCJiYWxjb255bG9nZ2lhTGlzdCIsIm5vT3B0aW9uIiwiY2hlY2tDb252ZW5pZW5jZXMxIiwiY2hlY2siLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsIml0ZW1SZXN1bHRzIiwicmVzdWx0c1NsaWRlciIsInJlc3VsdHNTbGlkZXJtaW5pIiwiaW1hZ2VTbGlkZXJPbmUiLCJtaW5pU2xpZGVzIiwiZnJlZU1vZGUiLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwidGh1bWJzIiwic3dpcGVyIiwicHJvZHVjdFNsaWRlciIsInByb2R1Y3RTbGlkZXJtaW5pIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImhvdXNpbmdDb21wbGV4IiwiYWNjb3JkaW9uQnRucyIsInNsaWRlckNBREJ1eSIsInRvb2x0aXBzIiwiZm9ybWF0IiwidG8iLCJwYXJzZUludCIsImZyb20iLCJzbGlkZXJDQURUYWtlT2ZmIiwidG9wRGF0YSIsIml0ZW1SZXN1bHRzVGl0bGUiLCJwcm9kdWN0VGl0bGUiLCJwcm9kdWN0QWZ0ZXIiLCJzZWxlY3Rpb25Db250ZW50Iiwic2VsZWN0aW9uVGl0bGVZZXMiLCJzZWxlY3Rpb25UaXRsZU5vIiwieWVzIiwibm8iLCJzZWxlY3Rpb25WYWx1ZSIsInNlbGVjdGlvbl9fcGVyIiwidGV4dENvbnRlbnQiLCJ3aWR0aCIsInBhcmFtZXRlcnNMaW5rIiwicGFyYW1ldGVyc0Jsb2NrIiwiaGlzdG9yeVRvcCIsInBhcmFtZXRlcnNJdGVtIiwicGFyYW1ldGVyc0NvbnRlbnQiLCJzYXZlU2VhcmNoQnRuIiwibm90aWZ5U2F2ZSIsIm5vdGlmeUNvbXBhcmlzb24iLCJzZXRUaW1lb3V0IiwiY29tcGFyaXNvbkFkZCIsImFjY29yZGlvbkRlc2NyaXB0aW9uIiwidGl0bGVEZXNjcmlwdGlvbiIsImFjY29yZGlvbkJvZHkiLCJjb250YWN0QnRuIiwiY2hhcnREIiwiY2hhcnQiLCJzdGFja2VkIiwidG9vbGJhciIsInRvb2xzIiwiZG93bmxvYWQiLCJ6b29tIiwiY29sb3JzIiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInZhbCIsIm9wdHMiLCJ0ZXh0QW5jaG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYmFja2dyb3VuZCIsImRyb3BTaGFkb3ciLCJvZmZzZXRYIiwib2Zmc2V0WSIsInN0cm9rZSIsImN1cnZlIiwiZGFzaEFycmF5IiwibGluZUNhcCIsImdyaWQiLCJwYWRkaW5nIiwibGVmdCIsInJpZ2h0Iiwic3Ryb2tlRGFzaEFycmF5IiwieWF4aXMiLCJsaW5lcyIsInNob3ciLCJ4YXhpcyIsIm1hcmtlcnMiLCJzaXplIiwiaG92ZXIiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsImNhdGVnb3JpZXMiLCJheGlzQm9yZGVyIiwiYXhpc1RpY2tzIiwibGFiZWxzIiwiZmlsbCIsImdyYWRpZW50Iiwic2hhZGVJbnRlbnNpdHkiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInN0b3BzIiwidG9vbHRpcCIsImxlZ2VuZCIsInBvc2l0aW9uIiwiaG9yaXpvbnRhbEFsaWduIiwiQXBleENoYXJ0cyIsInJlbmRlciIsIm9uZVNsaWRlciIsInRlcm1TbGlkZXIiLCJpbml0aWFsUGF5bWVudCIsImlubmVySFRNTCIsImxvYW5UZXJtIiwibW9ydGdhZ2VCdXkiLCJtb3J0Z2FnZURlc2NyaXB0aW9uIiwic3dpdGNoZXJCb2R5Iiwic3dpdGNoZXJMaXN0IiwiaW50ZXJlc3RSYXRlIiwiaW50ZXJlc3RSYXRlSXRlbSIsInNsaWRlciIsInNsaWRlckltYWdlQ29tcGFyZSIsIml0ZW1Db21wYXJlIiwibWluV2lkdGgiLCJpc0Rvd24iLCJzdGFydFgiLCJzY3JvbGxMZWZ0IiwicGFnZVgiLCJvZmZzZXRMZWZ0IiwieCIsIndhbGsiLCJzY3JvbGxUb3AiLCJoaXN0b3J5SXRlbSIsIndlYkl0ZW0iLCJhcGFydG1lbnRJdGVtIiwiYWNjb3JkaW9uQXBhcnRtZW50IiwiYWNjIiwiYXBhcnRtZW50TGlzdCIsImFwYXJ0bWVudFRpdGxlIiwiYXBhcnRtZW50TGluayIsImZsYXQiLCJob21lIiwicm9vbSIsInBob3RvQXBhcnRtZW50IiwicGhvdG8iLCJjb250ZW50UGxhbiIsImNvbnRlbnRQaG90byIsImFkZFBob3RvIiwiYWRkTGF5b3V0IiwiYWRkUGFub3JhbWEiLCJpdGVtU3RlcCIsImxhYmVsIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJzdGVwTGluayIsInN0ZXBJbnB1dCIsInN0ZXBCb2R5IiwiZGF0ZVBpY2tlcklucHV0cyIsImluc3RhbmNlIiwiZGF0ZXBpY2tlciIsIkRhdGVwaWNrZXIiLCJsYW5ndWFnZSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInBpY2tlciIsImVsZW1lbnQiLCJib2R5Q29tZW50cyIsInN3aXBlQm94IiwiZGVsZXRlQ29tZW50IiwiaGFuZGxlVG91Y2hTdGFydCIsImhhbmRsZVRvdWNoTW92ZSIsIngxIiwiZmlyc3RUb3VjaCIsInRvdWNoZXMiLCJjbGllbnRYIiwieDIiLCJ4RGlmZiIsImFjY291bnRWaWV3TW9kZSIsImNvbW1lbnRzIiwicHJvbW9Cb2R5IiwiYnRuRW1haWwiLCJtb2RhbENlbnRlckNsb3NlIiwiY2xvc2VzdCIsImFkZFNob3duIiwid29ya3BsYWNlIiwid29ya3BsYWNlTmV4dCIsImNsb25lTm9kZSIsInBhcnRuZXJzVGFicyIsImFjY291bnRQYXJ0bmVycyIsImFjY291bnRQYXJ0bmVyc1RhYnMiLCJwYXJ0bmVyc1BhdGgiLCJwYXJ0bmVyc0hhbmRsZXIiLCJjYXJ0VGFicyIsImFjY291bnRDYXJ0IiwiYWNjb3VudENhcnRUYWJzIiwiY2FydFBhdGgiLCJjYXJ0SGFuZGxlciIsImZsYXRCdG4iLCJtZXNzYWdlSXRlbSIsImltYWdlcyIsImJ1dHRvbnMiLCJidXR0b24iLCJtb3J0Z2FnZUJvdHRvbSIsImNhbGNUb3RhbE1vdmVFbmQiLCJjYWxjVG90YWxFbmRNb3ZlIiwiY2FsY1R0b3RhbENvdW50ZXIiLCJjYWxjVG90YWxTdGFydCIsImNhbGNUb3RhbEVuZCIsImNhbGNUb3RhbERlbHRhIiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5ZIiwidHJhbnNmb3JtIiwicGF5T2ZmQnRuIiwiYWNjTXlPYmplY3RzIiwiaXRlbUNob2ljZUJvZHkiLCJhY2NTZW8iLCJsZWZ0QWNjb3VudENvbnRlbnQiLCJmaW5kT3V0SG93Iiwic3RlcFR3b04iLCJjb250ZW50U3RlcCIsImFib3V0TmV3QnVpbGRpbmdzTGlzdCIsImNyZWF0ZVNlbGVjdEFycm93IiwiYXJyb3ciLCJjcmVhdGVFbGVtZW50IiwiVG9tU2VsZWN0Iiwib25Jbml0aWFsaXplIiwiY29udHJvbCIsImFwcGVuZCIsInNob3dTZWxlY3RNb3JlIiwiY290cm9sU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZWxsaXBzaXMiLCJjb250cm9sUmlnaHRCb3JkZXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYWRkaW5nUmlnaHQiLCJpdGVtcyIsInBsdWdpbnMiLCJoaWRlUGxhY2Vob2xkZXIiLCJpdGVtIiwiZXNjYXBlIiwidGV4dCIsInJlbW92ZUl0ZW0iLCJvbkNoYW5nZSIsImZpbHRlcnRha2VQYXRoIiwiZmlsdGVyVGFrZU9mZkhhbmRsZXIiLCJhcGFydG1lbnRNb2RhbENvbnRlbnQiLCJtb2RhbEFwYXJ0bWVudCIsInJvbGxVcCIsImRyYXdCdG4iLCJkcmF3U3RvcCJdLCJzb3VyY2VzIjpbIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyDQmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSBhZGRFdmVudExpc3RlbmVyINC90LAg0YHRgtCw0YDRi9GFINCy0LXRgNGB0LjRj9GFXHJcblxyXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICB2YXIgb0xpc3RlbmVycyA9IHt9O1xyXG4gIGZ1bmN0aW9uIHJ1bkxpc3RlbmVycyhvRXZlbnQpIHtcclxuICAgIGlmICghb0V2ZW50KSB7IG9FdmVudCA9IHdpbmRvdy5ldmVudDsgfVxyXG4gICAgZm9yICh2YXIgaUxzdElkID0gMCwgaUVsSWQgPSAwLCBvRXZ0TGlzdGVuZXJzID0gb0xpc3RlbmVyc1tvRXZlbnQudHlwZV07IGlFbElkIDwgb0V2dExpc3RlbmVycy5hRWxzLmxlbmd0aDsgaUVsSWQrKykge1xyXG4gICAgICBpZiAob0V2dExpc3RlbmVycy5hRWxzW2lFbElkXSA9PT0gdGhpcykge1xyXG4gICAgICAgIGZvciAoaUxzdElkOyBpTHN0SWQgPCBvRXZ0TGlzdGVuZXJzLmFFdnRzW2lFbElkXS5sZW5ndGg7IGlMc3RJZCsrKSB7IG9FdnRMaXN0ZW5lcnMuYUV2dHNbaUVsSWRdW2lMc3RJZF0uY2FsbCh0aGlzLCBvRXZlbnQpOyB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChzRXZlbnRUeXBlLCBmTGlzdGVuZXIgLyosIHVzZUNhcHR1cmUgKHdpbGwgYmUgaWdub3JlZCEpICovKSB7XHJcbiAgICBpZiAob0xpc3RlbmVycy5oYXNPd25Qcm9wZXJ0eShzRXZlbnRUeXBlKSkge1xyXG4gICAgICB2YXIgb0V2dExpc3RlbmVycyA9IG9MaXN0ZW5lcnNbc0V2ZW50VHlwZV07XHJcbiAgICAgIGZvciAodmFyIG5FbElkeCA9IC0xLCBpRWxJZCA9IDA7IGlFbElkIDwgb0V2dExpc3RlbmVycy5hRWxzLmxlbmd0aDsgaUVsSWQrKykge1xyXG4gICAgICAgIGlmIChvRXZ0TGlzdGVuZXJzLmFFbHNbaUVsSWRdID09PSB0aGlzKSB7IG5FbElkeCA9IGlFbElkOyBicmVhazsgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChuRWxJZHggPT09IC0xKSB7XHJcbiAgICAgICAgb0V2dExpc3RlbmVycy5hRWxzLnB1c2godGhpcyk7XHJcbiAgICAgICAgb0V2dExpc3RlbmVycy5hRXZ0cy5wdXNoKFtmTGlzdGVuZXJdKTtcclxuICAgICAgICB0aGlzW1wib25cIiArIHNFdmVudFR5cGVdID0gcnVuTGlzdGVuZXJzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBhRWxMaXN0ZW5lcnMgPSBvRXZ0TGlzdGVuZXJzLmFFdnRzW25FbElkeF07XHJcbiAgICAgICAgaWYgKHRoaXNbXCJvblwiICsgc0V2ZW50VHlwZV0gIT09IHJ1bkxpc3RlbmVycykge1xyXG4gICAgICAgICAgYUVsTGlzdGVuZXJzLnNwbGljZSgwKTtcclxuICAgICAgICAgIHRoaXNbXCJvblwiICsgc0V2ZW50VHlwZV0gPSBydW5MaXN0ZW5lcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGlMc3RJZCA9IDA7IGlMc3RJZCA8IGFFbExpc3RlbmVycy5sZW5ndGg7IGlMc3RJZCsrKSB7XHJcbiAgICAgICAgICBpZiAoYUVsTGlzdGVuZXJzW2lMc3RJZF0gPT09IGZMaXN0ZW5lcikgeyByZXR1cm47IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYUVsTGlzdGVuZXJzLnB1c2goZkxpc3RlbmVyKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb0xpc3RlbmVyc1tzRXZlbnRUeXBlXSA9IHsgYUVsczogW3RoaXNdLCBhRXZ0czogWyBbZkxpc3RlbmVyXSBdIH07XHJcbiAgICAgIHRoaXNbXCJvblwiICsgc0V2ZW50VHlwZV0gPSBydW5MaXN0ZW5lcnM7XHJcbiAgICB9XHJcbiAgfTtcclxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHNFdmVudFR5cGUsIGZMaXN0ZW5lciAvKiwgdXNlQ2FwdHVyZSAod2lsbCBiZSBpZ25vcmVkISkgKi8pIHtcclxuICAgIGlmICghb0xpc3RlbmVycy5oYXNPd25Qcm9wZXJ0eShzRXZlbnRUeXBlKSkgeyByZXR1cm47IH1cclxuICAgIHZhciBvRXZ0TGlzdGVuZXJzID0gb0xpc3RlbmVyc1tzRXZlbnRUeXBlXTtcclxuICAgIGZvciAodmFyIG5FbElkeCA9IC0xLCBpRWxJZCA9IDA7IGlFbElkIDwgb0V2dExpc3RlbmVycy5hRWxzLmxlbmd0aDsgaUVsSWQrKykge1xyXG4gICAgICBpZiAob0V2dExpc3RlbmVycy5hRWxzW2lFbElkXSA9PT0gdGhpcykgeyBuRWxJZHggPSBpRWxJZDsgYnJlYWs7IH1cclxuICAgIH1cclxuICAgIGlmIChuRWxJZHggPT09IC0xKSB7IHJldHVybjsgfVxyXG4gICAgZm9yICh2YXIgaUxzdElkID0gMCwgYUVsTGlzdGVuZXJzID0gb0V2dExpc3RlbmVycy5hRXZ0c1tuRWxJZHhdOyBpTHN0SWQgPCBhRWxMaXN0ZW5lcnMubGVuZ3RoOyBpTHN0SWQrKykge1xyXG4gICAgICBpZiAoYUVsTGlzdGVuZXJzW2lMc3RJZF0gPT09IGZMaXN0ZW5lcikgeyBhRWxMaXN0ZW5lcnMuc3BsaWNlKGlMc3RJZCwgMSk7IH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcbi8vIElucHV0TWFza1xyXG5cclxuLy9jb25zdCB7IHNyYyB9ID0gcmVxdWlyZShcImd1bHBcIik7XHJcblxyXG4vL2NvbnN0IHsgYWN0aXZlIH0gPSByZXF1aXJlKFwiYnJvd3Nlci1zeW5jXCIpO1xyXG4vL2NvbnN0IHN3aXBlckJ1bmRsZU1pbiA9IHJlcXVpcmUoXCIuL3N3aXBlci1idW5kbGUubWluXCIpO1xyXG5cclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInRlbFwiXScpKXtcclxuXHJcbiAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJ0ZWxcIl0nKTtcclxuICBsZXQgaW0gPSBuZXcgSW5wdXRtYXNrKCcrNyAoOTk5KSA5OTktOTktOTknKTtcclxuICBpbS5tYXNrKGlucHV0cyk7XHJcbiAgXHJcbn1cclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tYXBhcnRtZW50LWFib3V0VGhlT2JqZWN0X19pbnB1dCcpKXtcclxuXHJcbiAgbGV0IGlucHV0czEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1hcGFydG1lbnQtYWJvdXRUaGVPYmplY3RfX2lucHV0Jyk7XHJcbiAgaW5wdXRzMS5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICBsZXQgaW0xID0gbmV3IElucHV0bWFzaygnOTk6OTk6OTk5OTk5OTo5OScpO1xyXG4gICAgaW0xLm1hc2soZWwpO1xyXG4gIH0pXHJcbiBcclxuICBcclxufVxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtY2FyZCcpKXtcclxuXHJcbiAgbGV0IGlucHV0czIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtY2FyZCcpO1xyXG4gIGlucHV0czIuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgbGV0IGltMiA9IG5ldyBJbnB1dG1hc2soJzk5OTk6OTk5OTo5OTk5Ojk5OTknKTtcclxuICAgIGltMi5tYXNrKGVsKTtcclxuICB9KVxyXG4gXHJcbiAgXHJcbn1cclxuXHJcblxyXG5jb25zdCBjb250YWN0c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3RzLWFwYXJ0bWVudF9faW5wdXQnKTtcclxuY29uc3QgY2FkYXN0cmlhbE51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLWFwYXJ0bWVudC1hYm91dFRoZU9iamVjdF9faW5wdXQnKTtcclxuXHJcblxyXG5jb25zdCBhcGFydG1lbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXBhcnRtZW50X19idCcpO1xyXG5pZihhcGFydG1lbnRCdG4pe1xyXG4gIGFwYXJ0bWVudEJ0bi5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBhcGFydG1lbnRCdG4uZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuaWYoY29udGFjdHNJbnB1dCl7XHJcbiAgY29udGFjdHNJbnB1dC5mb3JFYWNoKCBlbCA9PiB7XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbihldnQpe1xyXG4gICAgICBsZXQgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBpZih2YWx1ZS5sZW5ndGggPj0gOCl7XHJcbiAgICAgICAgZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfSBlbHNle1xyXG4gICAgICAgIGVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgfSk7XHJcbn1cclxuaWYoY2FkYXN0cmlhbE51bWJlcil7XHJcbiAgY2FkYXN0cmlhbE51bWJlci5mb3JFYWNoKCBlbCA9PiB7XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbihldnQpe1xyXG4gICAgICBsZXQgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBpZih2YWx1ZS5sZW5ndGggPj0gMTEpe1xyXG4gICAgICAgIGVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH0gZWxzZXtcclxuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBpdGVtUHJvbW90aW9uU2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tcHJvbW90aW9uU2VsZWN0aW9uJyk7XHJcbmlmKGl0ZW1Qcm9tb3Rpb25TZWxlY3Rpb24pe1xyXG4gIGl0ZW1Qcm9tb3Rpb25TZWxlY3Rpb24uZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgY29uc3QgcHJvbW90aW9uU2VsZWN0aW9uSW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1wcm9tb3Rpb25TZWxlY3Rpb25fX2lucHV0Jyk7XHJcbiAgICBjb25zdCBwcm9tb3Rpb25TZWxlY3Rpb25DaG9pY2UgPSBlbC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1wcm9tb3Rpb25TZWxlY3Rpb25fX2Nob2ljZScpO1xyXG5cclxuICAgIHByb21vdGlvblNlbGVjdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oZXZ0KXtcclxuICAgICAgbGV0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgICAgaWYodmFsdWUubGVuZ3RoID49IDEpe1xyXG4gICAgICAgIHByb21vdGlvblNlbGVjdGlvbkNob2ljZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBwcm9tb3Rpb25TZWxlY3Rpb25JbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgfSBlbHNle1xyXG4gICAgICAgIHByb21vdGlvblNlbGVjdGlvbkNob2ljZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgcHJvbW90aW9uU2VsZWN0aW9uSW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4gXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBWYWxpZFBob25lKCkge1xyXG4gIGxldCByZSA9IC9eKFxccyopPyhcXCspPyhbLSBfKCk6PStdP1xcZFstIF8oKTo9K10/KXsxMCwxNH0oXFxzKik/JC87XHJcbiAgbGV0IG15UGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmUnKS52YWx1ZTtcclxuICBsZXQgdmFsaWQgPSByZS50ZXN0KG15UGhvbmUpO1xyXG5cclxuICBpZiAodmFsaWQpICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9uZScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgZWxzZXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb25lJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHZhbGlkO1xyXG59ICBcclxuXHJcblxyXG5cclxuXHJcbi8vIEJ1cmdlciBtZW51XHJcblxyXG5jb25zdCBtZW51TmF2VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi10b2dnbGUnKTtcclxuY29uc3QgbWVudU5hdlRvZ2dsZVJlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcubmF2X3RvZ2dsZVJlc3VsdHMnKTtcclxuY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5LWhlYWRlcicpO1xyXG5jb25zdCBuYXZNZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbWVudS1pdGVtJyk7XHJcbmNvbnN0IGNsb3NlTmF2TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1uYXYtbWVudScpO1xyXG5cclxuY29uc3Qgd3JhcHBlclJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyLXJlc3VsdCcpO1xyXG5jb25zdCBib2R5SGVhZGVyTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5LWhlYWRlck1haW4nKTtcclxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcblxyXG5cclxuY29uc3QgbmF2VG9nZ2xlTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdG9nZ2xlTWFpbicpO1xyXG5jb25zdCBuYXZDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtY2xvc2UnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5pZihuYXZUb2dnbGVNYWluKXtcclxuIFxyXG5cclxuICBuYXZUb2dnbGVNYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBib2R5SGVhZGVyTWFpbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIHdyYXBwZXJSZXN1bHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgIG5hdkNsb3NlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gXHJcbiAgXHJcblxyXG4gIH0pO1xyXG4gIG5hdkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBuYXZDbG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIGJvZHlIZWFkZXJNYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgd3JhcHBlclJlc3VsdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG4gIGNsb3NlTmF2TWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgbmF2Q2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBib2R5SGVhZGVyTWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIHdyYXBwZXJSZXN1bHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgXHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGhlYWRlck5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5LWhlYWRlck1haW5fX25hdicpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaWYobWVudU5hdlRvZ2dsZSl7XHJcbiAgbWVudU5hdlRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAvL21lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgbmF2TWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIFxyXG4gIGZvcihsZXQgZWxlbSBvZiBuYXZNZW51SXRlbSl7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIH1cclxuICBcclxufSk7XHJcblxyXG5jbG9zZU5hdk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gIG5hdk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuIFxyXG4gIGZvcihsZXQgZWxlbSBvZiBuYXZNZW51SXRlbSl7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH1cclxufSk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiAvL9Ce0LPRgNCw0L3QuNGH0LXQvdC40LUg0L3QsCDQstCy0L7QtCDRh9C40YHQtdC7INCyIHR5cGUgLSBudW1iZXJcclxuXHJcbiBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1wcmljZV9faW5wdXQnKSl7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tcHJpY2VfX2lucHV0JykuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgZWxlbS5vbmlucHV0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgaWYgKGVsZW0udmFsdWUubGVuZ3RoID4gNykgZWxlbS52YWx1ZSA9IGVsZW0udmFsdWUuc3Vic3RyKDAsIDcpO1xyXG4gICAgfVxyXG4gICBcclxuICB9KTtcclxuICBcclxuIH1cclxuXHJcbiBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydC1pbnB1dC0tdHdvJykpe1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJ0LWlucHV0LS10d28nKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBlbGVtLm9uaW5wdXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICBpZiAoZWxlbS52YWx1ZS5sZW5ndGggPiAyKSBlbGVtLnZhbHVlID0gZWxlbS52YWx1ZS5zdWJzdHIoMCwgMik7XHJcbiAgICB9XHJcbiAgIFxyXG4gIH0pO1xyXG4gIFxyXG4gfVxyXG5cclxuIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJ0LWlucHV0LS10aHJlZScpKXtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydC1pbnB1dC0tdGhyZWUnKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBlbGVtLm9uaW5wdXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICBpZiAoZWxlbS52YWx1ZS5sZW5ndGggPiAzKSBlbGVtLnZhbHVlID0gZWxlbS52YWx1ZS5zdWJzdHIoMCwgMyk7XHJcbiAgICB9XHJcbiAgIFxyXG4gIH0pO1xyXG4gIFxyXG4gfVxyXG5cclxuXHJcbi8vIHNsZWVwIHBhc3N3b3JkXHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd1Bhc3N3b3JkKCl7XHJcblxyXG5cclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXNzd29yZF9fYnRuJyk7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXNzd29yZF9faW5wdXQnKTtcclxuXHJcbiAgY29uc3QgYnRuUHJvdmVya2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXNzd29yZF9fYnRuLXByb3ZlcmthJyk7XHJcbiAgY29uc3QgaW5wdXRQcm92ZXJrYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhc3N3b3JkX19pbnB1dC1wcm92ZXJrYScpO1xyXG5cclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cclxuICAgIGlmKGlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpPT09ICdwYXNzd29yZCcpe1xyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBidG5Qcm92ZXJrYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBidG5Qcm92ZXJrYS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHJcbiAgICBpZihpbnB1dFByb3ZlcmthLmdldEF0dHJpYnV0ZSgndHlwZScpPT09ICdwYXNzd29yZCcpe1xyXG4gICAgICBpbnB1dFByb3ZlcmthLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgaW5wdXRQcm92ZXJrYS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncGFzc3dvcmQnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dQYXNzd29yZFNpZ25VcCgpe1xyXG5cclxuXHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFzc3dvcmRfX2J0bicpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFzc3dvcmRfX2lucHV0Jyk7XHJcblxyXG5cclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cclxuICAgIGlmKGlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpPT09ICdwYXNzd29yZCcpe1xyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBcclxufVxyXG5cclxuXHJcbmlmKChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXNzd29yZF9fYnRuJykpICYmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXNzd29yZF9fYnRuLXByb3ZlcmthJykpKXtcclxuICBzaG93UGFzc3dvcmQoKTtcclxufWVsc2UgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFzc3dvcmRfX2J0bicpKXtcclxuICBzaG93UGFzc3dvcmRTaWduVXAoKTtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t0KTQmNCb0KzQotCgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1EUk9QRE9XTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBpdGVtUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tcmVzdWx0cycpO1xyXG5jb25zdCBzZWxsZXJDb21wYXJpc29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGxlci1jb21wYXJpc29uJyk7XHJcblxyXG5pZihpdGVtUmVzdWx0KXtcclxuICBpdGVtUmVzdWx0LmZvckVhY2goZWw9PntcclxuICBcclxuICAgIGNvbnN0IGVzdGltYXRpb24gPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZXN0aW1hdGlvbl9faXRlbScpO1xyXG4gICAgY29uc3Qgc2hvd0NvbnRhY3QgPSBlbC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1jb250YWN0Jyk7XHJcbiAgICBpZihzaG93Q29udGFjdCl7XHJcbiAgICAgIHNob3dDb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgc2hvd0NvbnRhY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGVzdGltYXRpb24uZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgXHJcbiAgICAgICAgZXN0aW1hdGlvbi5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgIFxyXG4gICAgXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBwcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QnKTtcclxuaWYocHJvZHVjdCl7XHJcbiAgcHJvZHVjdC5mb3JFYWNoKGVsPT57XHJcbiAgICBjb25zdCBmYXZvdXJpdGVzID0gZWwucXVlcnlTZWxlY3RvcignLmZhdm91cml0ZScpO1xyXG4gICAgY29uc3QgYWRkID0gZWwucXVlcnlTZWxlY3RvcignLmFkZCcpO1xyXG4gICAgY29uc3QgbW9yZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5tb3JlJyk7XHJcbiAgICBjb25zdCBtb3JlTWVudSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5tb3JlLW1lbnUnKTtcclxuICAgXHJcbiAgIFxyXG4gICAgaWYobW9yZSl7XHJcbiAgICAgIG1vcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBtb3JlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG1vcmVNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgXHJcbiAgfSk7XHJcbn1cclxuXHJcbmlmKHNlbGxlckNvbXBhcmlzb24pe1xyXG4gIHNlbGxlckNvbXBhcmlzb24uZm9yRWFjaChlbD0+e1xyXG4gICAgY29uc3Qgc2hvd0NvbnRhY3QgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdy1jb250YWN0Jyk7XHJcbiAgICBpZihzaG93Q29udGFjdCl7XHJcbiAgICAgIHNob3dDb250YWN0LmZvckVhY2goIGVsID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBjb21wYXJlSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLWNvbXBhcmUnKTtcclxuaWYoY29tcGFyZUl0ZW0pe1xyXG4gIGNvbXBhcmVJdGVtLmZvckVhY2goIGVsID0+IHtcclxuICAgIGNvbnN0IGl0ZW1GYXZvdXJpdGVzID0gZWwucXVlcnlTZWxlY3RvcignLml0ZW0tYm9keV9fZmF2b3VyaXRlcycpO1xyXG4gICAgaWYoaXRlbUZhdm91cml0ZXMpe1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgZmF2b3VyaXRlID0gaXRlbUZhdm91cml0ZXMucXVlcnlTZWxlY3RvckFsbCgnLmZhdm91cml0ZScpO1xyXG4gICAgICAgIGZhdm91cml0ZS5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgfSk7XHJcbn1cclxuY29uc3QgbmV3QnVpbGRpbmdzSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdCdWlsZGluZ3NfX2l0ZW0nKTtcclxuaWYobmV3QnVpbGRpbmdzSXRlbSl7XHJcbiAgbmV3QnVpbGRpbmdzSXRlbS5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICBjb25zdCBpdGVtRmF2b3VyaXRlcyA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWJvZHlfX2Zhdm91cml0ZXMnKTtcclxuICAgIGlmKGl0ZW1GYXZvdXJpdGVzKXtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGZhdm91cml0ZSA9IGl0ZW1GYXZvdXJpdGVzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvdXJpdGUnKTtcclxuICAgICAgICBmYXZvdXJpdGUuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCB0YWJzTWFpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJzbWFpbkJ0bicpO1xyXG5jb25zdCB0YWJzTWFpbkJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnMtbWFpbl9fYmxvY2snKTtcclxuY29uc3QgdGFic01haW5JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzLW1haW5fX2J0bicpO1xyXG5cclxuXHJcblxyXG5pZih0YWJzTWFpbkJ0bil7XHJcbiAgdGFic01haW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIHRhYnNNYWluQmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gIFxyXG4gIFxyXG4gICAgdGFic01haW5JdGVtcy5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdGFic01haW5CdG4uaW5uZXJUZXh0ID0gZWwuaW5uZXJUZXh0O1xyXG4gICAgICAgIHRhYnNNYWluQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICBcclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgXHJcbn1cclxuXHJcblxyXG4vLyDQodC60YDQvtC70Lsg0YjQsNC/0LrQuFxyXG5cclxubGV0IGhlaWdodCA9ICczMzQnO1xyXG5jb25zdCBmaXhlZEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJSZXN1bHQnKTtcclxuY29uc3QgbWFpblJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yZXN1bHQnKTtcclxuXHJcblxyXG5pZihmaXhlZEZpbHRlcil7XHJcbiAgLy9jb25zdCBmaWx0ZXJIZWlnaHQgPSBmaXhlZEZpbHRlci5vZmZzZXRIZWlnaHQ7XHJcbiAgLy9jb25zdCBtYWluSGVpZ2h0ID0gbWFpblJlc3VsdHMub2Zmc2V0SGVpZ2h0O1xyXG4gXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIGxldCBzY3JvbGxEaXN0YW5jZSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICBcclxuICAgIGlmKHNjcm9sbERpc3RhbmNlID49IGhlaWdodCl7XHJcbiAgICAgIGZpeGVkRmlsdGVyLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcbiAgICAgIG1haW5SZXN1bHRzLnN0eWxlLm1hcmdpblRvcCA9IGB7ZmlsdGVySGVpZ2h0fXB4YDtcclxuICAgIH1lbHNle1xyXG4gICAgICBmaXhlZEZpbHRlci5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG4gICAgICBtYWluUmVzdWx0cy5zdHlsZS5tYXJnaW5Ub3AgPSBudWxsO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIFxyXG59XHJcblxyXG4vL1RPIENPTVBBUkUg0YHQutGA0L7Qu9C7INGB0YDQsNCy0L3QtdC90LjRj1xyXG5sZXQgY29tcGFyZUZpeGVkaGVpZ2h0ID0gJzM5MCc7XHJcbmNvbnN0IGZpeGVkQ29tcGFyZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBhcmVfX2ZpeGVkJyk7XHJcbmNvbnN0IGNvbXBhcmlzb25UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wYXJpc29uX190aXRsZScpO1xyXG5cclxuaWYoZml4ZWRDb21wYXJlSXRlbXMpe1xyXG4gIGNvbnN0IGNvbXBhcmVIZWlnaHQgPSBmaXhlZENvbXBhcmVJdGVtcy5vZmZzZXRIZWlnaHQ7XHJcbiAgY29uc3QgY29tcGFyaXNvblRpdGxlSGVpZ2h0ID0gY29tcGFyaXNvblRpdGxlLm9mZnNldEhlaWdodDtcclxuXHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICBsZXQgc2Nyb2xsRGlzdGFuY2UgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgXHJcbiAgICBpZihzY3JvbGxEaXN0YW5jZSA+PSBjb21wYXJlRml4ZWRoZWlnaHQpe1xyXG4gICAgICBmaXhlZENvbXBhcmVJdGVtcy5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG4gICAgICBjb21wYXJpc29uVGl0bGUuc3R5bGUubWFyZ2luVG9wID0gYCR7Y29tcGFyZUhlaWdodH1weGA7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgZml4ZWRDb21wYXJlSXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuICAgICAgY29tcGFyaXNvblRpdGxlLnN0eWxlLm1hcmdpblRvcCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHB1YmxpY2F0aW9uVGltZUFjY29yZGlvbkZsYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHVibGljYXRpb25UaW1lQWNjb3JkaW9uLWZsYXQnKTtcclxuY29uc3QgcHVibGljYXRpb25UaW1lSXRlbXNGbGF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB1YmxpY2F0aW9uVGltZV9faXRlbXMtZmxhdCcpO1xyXG5jb25zdCBwdWJsaWNhdGlvblRpbWVGbGF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B1YmxpY2F0aW9uVGltZS1mbGF0Jyk7XHJcblxyXG5pZihwdWJsaWNhdGlvblRpbWVBY2NvcmRpb25GbGF0KXtcclxuICBjb25zdCBtZW51ID0gcHVibGljYXRpb25UaW1lSXRlbXNGbGF0LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24tbWVudScpO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBwdWJsaWNhdGlvblRpbWVJdGVtc0ZsYXQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbi1tZW51X19pdGVtJyk7XHJcblxyXG4gIHB1YmxpY2F0aW9uVGltZUFjY29yZGlvbkZsYXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgXHJcbiAgfSk7XHJcblxyXG4gIG9wdGlvbnMuZm9yRWFjaCggb3B0aW9uID0+IHtcclxuICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBwdWJsaWNhdGlvblRpbWVGbGF0LmlubmVyVGV4dCA9IG9wdGlvbi5pbm5lclRleHQ7XHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICBvcHRpb24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBvcHRpb25zLmZvckVhY2goIG9wdGlvbiA9PntcclxuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn07XHJcblxyXG5cclxuY29uc3QgcHVibGljYXRpb25UaW1lQWNjb3JkaW9uSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdWJsaWNhdGlvblRpbWVBY2NvcmRpb24taG9tZScpO1xyXG5jb25zdCBwdWJsaWNhdGlvblRpbWVJdGVtc0hvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHVibGljYXRpb25UaW1lX19pdGVtcy1ob21lJyk7XHJcbmNvbnN0IHB1YmxpY2F0aW9uVGltZUhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHVibGljYXRpb25UaW1lLWhvbWUnKTtcclxuXHJcbmlmKHB1YmxpY2F0aW9uVGltZUFjY29yZGlvbkhvbWUpe1xyXG4gIGNvbnN0IG1lbnUgPSBwdWJsaWNhdGlvblRpbWVJdGVtc0hvbWUucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1tZW51Jyk7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHB1YmxpY2F0aW9uVGltZUl0ZW1zSG9tZS5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLW1lbnVfX2l0ZW0nKTtcclxuXHJcbiAgcHVibGljYXRpb25UaW1lQWNjb3JkaW9uSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICBcclxuICB9KTtcclxuXHJcbiAgb3B0aW9ucy5mb3JFYWNoKCBvcHRpb24gPT4ge1xyXG4gICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIHB1YmxpY2F0aW9uVGltZUhvbWUuaW5uZXJUZXh0ID0gb3B0aW9uLmlubmVyVGV4dDtcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgIG9wdGlvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIG9wdGlvbnMuZm9yRWFjaCggb3B0aW9uID0+e1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufTtcclxuXHJcblxyXG5jb25zdCBwdWJsaWNhdGlvblRpbWVBY2NvcmRpb25Sb29tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B1YmxpY2F0aW9uVGltZUFjY29yZGlvbi1yb29tJyk7XHJcbmNvbnN0IHB1YmxpY2F0aW9uVGltZUl0ZW1zUm9vbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdWJsaWNhdGlvblRpbWVfX2l0ZW1zLXJvb20nKTtcclxuY29uc3QgcHVibGljYXRpb25UaW1lUm9vbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdWJsaWNhdGlvblRpbWUtcm9vbScpO1xyXG5cclxuaWYocHVibGljYXRpb25UaW1lQWNjb3JkaW9uUm9vbSl7XHJcbiAgY29uc3QgbWVudSA9IHB1YmxpY2F0aW9uVGltZUl0ZW1zUm9vbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLW1lbnUnKTtcclxuICBjb25zdCBvcHRpb25zID0gcHVibGljYXRpb25UaW1lSXRlbXNSb29tLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24tbWVudV9faXRlbScpO1xyXG5cclxuICBwdWJsaWNhdGlvblRpbWVBY2NvcmRpb25Sb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgIFxyXG4gIH0pO1xyXG5cclxuICBvcHRpb25zLmZvckVhY2goIG9wdGlvbiA9PiB7XHJcbiAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgcHVibGljYXRpb25UaW1lUm9vbS5pbm5lclRleHQgPSBvcHRpb24uaW5uZXJUZXh0O1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgb3B0aW9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgb3B0aW9ucy5mb3JFYWNoKCBvcHRpb24gPT57XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59O1xyXG5cclxuXHJcbmNvbnN0IHB1YmxpY2F0aW9uVGltZUFjY29yZGlvbkhvbWVCdXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHVibGljYXRpb25UaW1lQWNjb3JkaW9uLWhvbWUtYnV5Jyk7XHJcbmNvbnN0IHB1YmxpY2F0aW9uVGltZUl0ZW1zSG9tZUJ1eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdWJsaWNhdGlvblRpbWVfX2l0ZW1zLWhvbWUtLWJ1eScpO1xyXG5jb25zdCBwdWJsaWNhdGlvblRpbWVIb21lQnV5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B1YmxpY2F0aW9uVGltZS1ob21lLWJ1eScpO1xyXG5cclxuaWYocHVibGljYXRpb25UaW1lQWNjb3JkaW9uSG9tZUJ1eSl7XHJcbiAgY29uc3QgbWVudSA9IHB1YmxpY2F0aW9uVGltZUl0ZW1zSG9tZUJ1eS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLW1lbnUnKTtcclxuICBjb25zdCBvcHRpb25zID0gcHVibGljYXRpb25UaW1lSXRlbXNIb21lQnV5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24tbWVudV9faXRlbScpO1xyXG5cclxuICBwdWJsaWNhdGlvblRpbWVBY2NvcmRpb25Ib21lQnV5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgIFxyXG4gIH0pO1xyXG5cclxuICBvcHRpb25zLmZvckVhY2goIG9wdGlvbiA9PiB7XHJcbiAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgcHVibGljYXRpb25UaW1lSG9tZUJ1eS5pbm5lclRleHQgPSBvcHRpb24uaW5uZXJUZXh0O1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgb3B0aW9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgb3B0aW9ucy5mb3JFYWNoKCBvcHRpb24gPT57XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgcHVibGljYXRpb25UaW1lQWNjb3JkaW9uRmxhdEJ1eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdWJsaWNhdGlvblRpbWVBY2NvcmRpb24tZmxhdC1idXknKTtcclxuY29uc3QgcHVibGljYXRpb25UaW1lSXRlbXNGbGF0QnV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB1YmxpY2F0aW9uVGltZV9faXRlbXMtZmxhdC0tYnV5Jyk7XHJcbmNvbnN0IHB1YmxpY2F0aW9uVGltZUZsYXRCdXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHVibGljYXRpb25UaW1lLWZsYXQtYnV5Jyk7XHJcblxyXG5pZihwdWJsaWNhdGlvblRpbWVBY2NvcmRpb25GbGF0QnV5KXtcclxuICBjb25zdCBtZW51ID0gcHVibGljYXRpb25UaW1lSXRlbXNGbGF0QnV5LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24tbWVudScpO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBwdWJsaWNhdGlvblRpbWVJdGVtc0ZsYXRCdXkucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbi1tZW51X19pdGVtJyk7XHJcblxyXG4gIHB1YmxpY2F0aW9uVGltZUFjY29yZGlvbkZsYXRCdXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgXHJcbiAgfSk7XHJcblxyXG4gIG9wdGlvbnMuZm9yRWFjaCggb3B0aW9uID0+IHtcclxuICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBwdWJsaWNhdGlvblRpbWVGbGF0QnV5LmlubmVyVGV4dCA9IG9wdGlvbi5pbm5lclRleHQ7XHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICBvcHRpb24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBvcHRpb25zLmZvckVhY2goIG9wdGlvbiA9PntcclxuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHB1YmxpY2F0aW9uVGltZUFjY29yZGlvblJvb21CdXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHVibGljYXRpb25UaW1lQWNjb3JkaW9uLXJvb20tYnV5Jyk7XHJcbmNvbnN0IHB1YmxpY2F0aW9uVGltZUl0ZW1zUm9vbUJ1eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdWJsaWNhdGlvblRpbWVfX2l0ZW1zLXJvb20tLWJ1eScpO1xyXG5jb25zdCBwdWJsaWNhdGlvblRpbWVSb29tQnV5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B1YmxpY2F0aW9uVGltZS1yb29tLWJ1eScpO1xyXG5cclxuaWYocHVibGljYXRpb25UaW1lQWNjb3JkaW9uUm9vbUJ1eSl7XHJcbiAgY29uc3QgbWVudSA9IHB1YmxpY2F0aW9uVGltZUl0ZW1zUm9vbUJ1eS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLW1lbnUnKTtcclxuICBjb25zdCBvcHRpb25zID0gcHVibGljYXRpb25UaW1lSXRlbXNSb29tQnV5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24tbWVudV9faXRlbScpO1xyXG5cclxuICBwdWJsaWNhdGlvblRpbWVBY2NvcmRpb25Sb29tQnV5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgIFxyXG4gIH0pO1xyXG5cclxuICBvcHRpb25zLmZvckVhY2goIG9wdGlvbiA9PiB7XHJcbiAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgcHVibGljYXRpb25UaW1lUm9vbUJ1eS5pbm5lclRleHQgPSBvcHRpb24uaW5uZXJUZXh0O1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgb3B0aW9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgb3B0aW9ucy5mb3JFYWNoKCBvcHRpb24gPT57XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXN3aXRjaGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBzd2l0Y2hlckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXRjaGVyX19pdGVtJyk7XHJcblxyXG5jb25zdCBzd2l0Y2hlckJ1eVJvb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpdGNoZXItYnV5LS1yb29tJyk7XHJcbmNvbnN0IHN3aXRjaGVyQnV5RmxhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2l0Y2hlci1idXktLWZsYXQnKTtcclxuXHJcbmNvbnN0IHN3aXRjaGVyVGFrZU9mZkZsYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpdGNoZXItdGFrZU9mZi0tZmxhdCcpO1xyXG5jb25zdCBzd2l0Y2hlclRha2VPZmZSb29tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXRjaGVyLXRha2VPZmYtLXJvb20nKTtcclxuXHJcbmNvbnN0IHN3aXRjaGVyQnV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXRjaGVyLWJ1eScpO1xyXG5jb25zdCBzd2l0Y2hlclRha2VPZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpdGNoZXItdGFrZU9mZicpO1xyXG5cclxuY29uc3Qgc3dpdGNoZXJNb3J0Z2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2l0Y2hlci1tb3J0Z2FnZScpO1xyXG5cclxuXHJcbmlmKHN3aXRjaGVyQnV5KXtcclxuICBzd2l0Y2hlckJ1eS5mb3JFYWNoKHN3aXRjaGVySXRlbSA9PiB7XHJcbiAgICBzd2l0Y2hlckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHN3aXRjaGVySXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgIHN3aXRjaGVyQnV5LmZvckVhY2goc3dpdGNoZXJJdGVtID0+IHtcclxuICAgICAgICBzd2l0Y2hlckl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzd2l0Y2hlckl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBcclxufVxyXG5pZihzd2l0Y2hlclRha2VPZmYpe1xyXG4gIHN3aXRjaGVyVGFrZU9mZi5mb3JFYWNoKHN3aXRjaGVySXRlbSA9PiB7XHJcbiAgICBzd2l0Y2hlckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHN3aXRjaGVySXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgIHN3aXRjaGVyVGFrZU9mZi5mb3JFYWNoKHN3aXRjaGVySXRlbSA9PiB7XHJcbiAgICAgICAgc3dpdGNoZXJJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgc3dpdGNoZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgXHJcbn1cclxuXHJcbmlmKHN3aXRjaGVyQnV5RmxhdCl7XHJcbiAgc3dpdGNoZXJCdXlGbGF0LmZvckVhY2goc3dpdGNoZXJJdGVtID0+IHtcclxuICAgIHN3aXRjaGVySXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgc3dpdGNoZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgc3dpdGNoZXJCdXlGbGF0LmZvckVhY2goc3dpdGNoZXJJdGVtID0+IHtcclxuICAgICAgICBzd2l0Y2hlckl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzd2l0Y2hlckl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBcclxufVxyXG5pZihzd2l0Y2hlckJ1eVJvb20pe1xyXG4gIHN3aXRjaGVyQnV5Um9vbS5mb3JFYWNoKHN3aXRjaGVySXRlbSA9PiB7XHJcbiAgICBzd2l0Y2hlckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHN3aXRjaGVySXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgIHN3aXRjaGVyQnV5Um9vbS5mb3JFYWNoKHN3aXRjaGVySXRlbSA9PiB7XHJcbiAgICAgICAgc3dpdGNoZXJJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgc3dpdGNoZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgXHJcbn1cclxuaWYoc3dpdGNoZXJUYWtlT2ZmRmxhdCl7XHJcbiAgc3dpdGNoZXJUYWtlT2ZmRmxhdC5mb3JFYWNoKHN3aXRjaGVySXRlbSA9PiB7XHJcbiAgICBzd2l0Y2hlckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHN3aXRjaGVySXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgIHN3aXRjaGVyVGFrZU9mZkZsYXQuZm9yRWFjaChzd2l0Y2hlckl0ZW0gPT4ge1xyXG4gICAgICAgIHN3aXRjaGVySXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHN3aXRjaGVySXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIFxyXG59XHJcbmlmKHN3aXRjaGVyVGFrZU9mZlJvb20pe1xyXG4gIHN3aXRjaGVyVGFrZU9mZlJvb20uZm9yRWFjaChzd2l0Y2hlckl0ZW0gPT4ge1xyXG4gICAgc3dpdGNoZXJJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBzd2l0Y2hlckl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICBzd2l0Y2hlclRha2VPZmZSb29tLmZvckVhY2goc3dpdGNoZXJJdGVtID0+IHtcclxuICAgICAgICBzd2l0Y2hlckl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzd2l0Y2hlckl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBcclxufVxyXG5cclxuaWYoc3dpdGNoZXJNb3J0Z2FnZSl7XHJcbiAgc3dpdGNoZXJNb3J0Z2FnZS5mb3JFYWNoKHN3aXRjaGVySXRlbSA9PiB7XHJcbiAgICBzd2l0Y2hlckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHN3aXRjaGVySXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgIHN3aXRjaGVyTW9ydGdhZ2UuZm9yRWFjaChzd2l0Y2hlckl0ZW0gPT4ge1xyXG4gICAgICAgIHN3aXRjaGVySXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHN3aXRjaGVySXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tUE9QVVAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgcmVnaW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3N1YnRpdGxlJyk7XHJcbmNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XHJcbmNvbnN0IHBvcFVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAtZmlsdGVyX19jbG9zZScpO1xyXG5jb25zdCBwb3BVcFNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaXRlbScpO1xyXG5jb25zdCByZWdpb25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtcmVnaW9uJyk7XHJcbmNvbnN0IHJlZ2lvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVnaW9uX190aXRsZScpO1xyXG5jb25zdCBsb2NhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhbEJ0bicpO1xyXG5jb25zdCBhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcmVhLXBvcFVwX190aXRsZScpO1xyXG5cclxuXHJcbmlmKHJlZ2lvbkJ0biAmJiBwb3BVcENsb3NlKXtcclxuICBcclxuXHJcbiAgcG9wVXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICBoaWRlTW9kYWwoKVxyXG4gIH0pO1xyXG4gIFxyXG4gIHJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xyXG4gICAgcmVnaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgIFxyXG4gICAgICBwb3BVcFNlYXJjaC52YWx1ZSA9IHJlZ2lvbi5pbm5lclRleHQgO1xyXG5cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBhcmVhcy5mb3JFYWNoKGFyZWEgPT4ge1xyXG4gICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICBwb3BVcFNlYXJjaC52YWx1ZSA9IGFyZWEuaW5uZXJUZXh0O1xyXG4gICAgfSk7XHJcbiAgIFxyXG4gIH0pO1xyXG5cclxuICBpZihwb3BVcFNlYXJjaC52YWx1ZSAhPSBcIiBcIil7XHJcbiAgICBsb2NhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZWdpb25CdG4uaW5uZXJUZXh0ID0gcG9wVXBTZWFyY2gudmFsdWU7XHJcbiAgXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVEFCUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbmNvbnN0IHBhcmFtZXRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyLWJ0bicpO1xyXG5jb25zdCBwYXJhbWV0ZXJzQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtcGFyYW1ldGVycy1jbG9zZScpO1xyXG5jb25zdCBtb2RhbFBhcmFtZXRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcGFyYW1ldGVycycpO1xyXG5jb25zdCB0YWJzTWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJzLW1haW4nKTtcclxuY29uc3QgY29udGVudHRhYnNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10YWJzX19idXR0b24nKTtcclxuY29uc3QgbW9kYWxCdG5TYXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJ0bi1zYXZlJyk7XHJcbmNvbnN0IG1haW5CbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19ibG9jaycpO1xyXG5jb25zdCBhZnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZnRlcicpO1xyXG5jb25zdCBmaWx0ZXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlci1wYXJhbWV0ZXJzJyk7XHJcbmNvbnN0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtY2xvc2UnKTtcclxuXHJcblxyXG5pZihtb2RhbENsb3NlKXtcclxuICBtb2RhbENsb3NlLmZvckVhY2goIGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIG1haW5CbG9jay5hZnRlcih0YWJzTWFpbik7XHJcbiAgXHJcbiAgICAgIHRhYnNNYWluLmFmdGVyKGNvbnRlbnR0YWJzQnV0dG9uKTtcclxuICBcclxuICAgICAgbW9kYWxQYXJhbWV0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG5cclxuaWYocGFyYW1ldGVycyAmJiBwYXJhbWV0ZXJzQ2xvc2Upe1xyXG4gIHBhcmFtZXRlcnMuZm9yRWFjaChwYXJhbWV0ZXIgPT4ge1xyXG4gICBcclxuICAgICAgcGFyYW1ldGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgbW9kYWxQYXJhbWV0ZXJzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIFxyXG4gICAgICAgIGFmdGVyLmJlZm9yZSh0YWJzTWFpbik7XHJcbiAgICAgICAgbW9kYWxCdG5TYXZlLmFmdGVyKGNvbnRlbnR0YWJzQnV0dG9uKTtcclxuICBcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG5cclxuICAgXHJcbiAgfSk7XHJcblxyXG4gIHBhcmFtZXRlcnNDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gIFxyXG4gICBcclxuICBcclxuICAgIG1haW5CbG9jay5hZnRlcih0YWJzTWFpbik7XHJcblxyXG4gICAgdGFic01haW4uYWZ0ZXIoY29udGVudHRhYnNCdXR0b24pO1xyXG5cclxuICAgIG1vZGFsUGFyYW1ldGVycy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gXHJcbiAgIFxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFicy1tYWluJyk7XHJcblx0Y29uc3QgdGFic0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzLW1haW5fX2J0bicpO1xyXG5cdGNvbnN0IHRhYnNDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMtbWFpbl9fY29udGVudCcpO1xyXG4gIGNvbnN0IGZpbHRlclBhcmFtZXRlcnNUYWtlT2ZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlci1wYXJhbWV0ZXJzLXRha2VPZmYnKTtcclxuICBjb25zdCBmaWx0ZXJQYXJhbWV0ZXJzQnV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlci1wYXJhbWV0ZXJzLWJ1eScpO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tbWVudV9faXRlbScpO1xyXG4gXHJcbiAgY29uc3QgYXBhcnRtZW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwYXJ0bWVudF9fYm9keScpO1xyXG4gIGNvbnN0IGFwYXJ0bWVudFRhYnNDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFwYXJ0bWVudF9fdGFicy1jb250ZW50Jyk7XHJcbiAgY29uc3QgdGFic0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicy1saW5rJyk7XHJcbiAgY29uc3QgaXRlbVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXBhcnRtZW50X19pdGVtLXRhYnMnKTtcclxuICBpZihhcGFydG1lbkJvZHkpe1xyXG5cclxuICAgIGFwYXJ0bWVuQm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFicy1saW5rJykpIHtcclxuICAgICAgICBjb25zdCB0YWJzUGF0aCA9IGUudGFyZ2V0LmRhdGFzZXQuc2VsbFBhdGg7XHJcbiAgICAgICAgc2VsbEhhbmRsZXIodGFic1BhdGgpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBzZWxsSGFuZGxlciA9IChwYXRoKSA9PiB7XHJcbiAgICB0YWJzTGluay5mb3JFYWNoKCBlbD0+IHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIGl0ZW1UYWJzLmZvckVhY2goIGVsPT4ge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc2VsbC1wYXRoPVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgXHJcbiAgICBhcGFydG1lbnRUYWJzQ29udGVudC5mb3JFYWNoKGVsID0+IHsgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zZWxsLXRhcmdldD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9XHJcblxyXG5cclxuICBcclxuXHRjb25zdCB0YWJzSGFuZGxlciA9IChwYXRoKSA9PiB7XHJcblx0XHR0YWJzQnRuLmZvckVhY2goZWwgPT4geyBlbC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzLW1haW5fX2J0bi0tYWN0aXZlJykgfSk7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YWJzLXBhdGg9XCIke3BhdGh9XCJdYCkuY2xhc3NMaXN0LmFkZCgndGFicy1tYWluX19idG4tLWFjdGl2ZScpO1xyXG5cclxuXHJcblx0XHQvL3RhYnNDb250ZW50LmZvckVhY2goZWwgPT4geyBlbC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzLW1haW5fX2NvbnRlbnQtLWFjdGl2ZScpIH0pO1xyXG5cdFx0Ly9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YWJzLXRhcmdldD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QuYWRkKCd0YWJzLW1haW5fX2NvbnRlbnQtLWFjdGl2ZScpO1xyXG5cclxuICBcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gXHJcbiAgICBcclxuICAgIFxyXG4gXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLdCh0JvQkNCZ0JTQldCgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1jb250YWluZXInKSl7XHJcbiAgbmV3IFN3aXBlcignLnNsaWRlLWNvbnRhaW5lcicse1xyXG4gICAgLy9zbGlkZXNQZXJHcm91cDo0LFxyXG4gICAgcGFnaW5hdGlvbjp7XHJcbiAgICAgICBlbDonLm5ld0J1aWxkaW5ncy1wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6dHJ1ZSxcclxuICAgICAgICBkeW5hbWljQnVsbGV0czp0cnVlLFxyXG4gICAgfSxcclxuICBcclxuICAgXHJcbiAgICBncmFiQ3Vyc29yOmZhbHNlLFxyXG4gIFxyXG4gICAga2V5Ym9hcmQ6e1xyXG4gICAgICBlbmFibGVkOnRydWUsXHJcbiAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxyXG4gICAgICBwYWdlVXBEb3duOnRydWUsXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgbW91c2V3aGVlbDp7XHJcbiAgICAgIHNlbnNpdGl2aXR5OjEsXHJcbiAgICAgXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgc2xpZGVzUGVyVmlldzo0LFxyXG4gICAgXHJcbiAgICB3YXRjaE92ZXJmbG93OnRydWUsXHJcbiAgXHJcbiAgICBzcGFjZUJldHdlZW46MTAsXHJcbiAgXHJcbiAgICBzbGlkZXNQZXJHcm91cDoxLFxyXG4gIFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBzcGVlZDo1MDAsXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA5NTA6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgNTY2OiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgXHJcbiAgXHJcbiAgICAgIDQ2MDoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMS43LFxyXG4gICAgICAgXHJcbiAgICAgIH0sXHJcbiAgXHJcbiAgICAgIDM2MDoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMS4zLFxyXG4gICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIDMyMDoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMS4xLFxyXG4gICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIFxyXG4gIH0pO1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRhcnktY29udGFpbmVyJykpe1xyXG4gIG5ldyBTd2lwZXIoJy5zZWNvbmRhcnktY29udGFpbmVyJyx7XHJcblxyXG4gICAgcGFnaW5hdGlvbjp7XHJcbiAgICAgICBlbDonLnNlY29uZGFyeS1wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6dHJ1ZSxcclxuICAgICAgICBkeW5hbWljQnVsbGV0czp0cnVlLFxyXG4gICAgfSxcclxuICBcclxuICAgXHJcbiAgICBncmFiQ3Vyc29yOmZhbHNlLFxyXG4gIFxyXG4gICAga2V5Ym9hcmQ6e1xyXG4gICAgICBlbmFibGVkOnRydWUsXHJcbiAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxyXG4gICAgICBwYWdlVXBEb3duOnRydWUsXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgbW91c2V3aGVlbDp7XHJcbiAgICAgIHNlbnNpdGl2aXR5OjEsXHJcbiAgICAgXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgc2xpZGVzUGVyVmlldzo0LFxyXG4gICAgd2F0Y2hPdmVyZmxvdzp0cnVlLFxyXG4gIFxyXG4gICAgc3BhY2VCZXR3ZWVuOjEwLFxyXG4gIFxyXG4gICAgc2xpZGVzUGVyR3JvdXA6MSxcclxuICBcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgc3BlZWQ6NTAwLFxyXG4gIFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgOTUwOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIDU2Njoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgIFxyXG4gIFxyXG4gICAgICA0NjA6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNyxcclxuICAgICAgIFxyXG4gICAgICB9LFxyXG4gIFxyXG4gICAgICAzNjA6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMyxcclxuICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICAzMjA6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMSxcclxuICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBcclxuICB9KTtcclxuICBcclxufVxyXG5cclxuY29uc3Qgc2Vjb25kYXJ5U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Vjb25kYXJ5LXNsaWRlJyk7XHJcblxyXG5pZihzZWNvbmRhcnlTbGlkZSl7XHJcbiAgc2Vjb25kYXJ5U2xpZGUuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgY29uc3QgdG9yZW50U2xpZGUgPSBlbC5xdWVyeVNlbGVjdG9yKCcudG9yZW50LWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRhcnktcGFnaW5hdGlvbicpO1xyXG4gICBcclxuICAgIG5ldyBTd2lwZXIodG9yZW50U2xpZGUse1xyXG4gIFxyXG4gICAgICBwYWdpbmF0aW9uOntcclxuICAgICAgICAgZWw6IHBhZ2luYXRpb24sXHJcbiAgICAgICAgICBjbGlja2FibGU6dHJ1ZSxcclxuICAgICAgICAgIGR5bmFtaWNCdWxsZXRzOnRydWUsXHJcbiAgICAgIH0sXHJcbiAgICBcclxuICAgICBcclxuICAgICAgZ3JhYkN1cnNvcjpmYWxzZSxcclxuICAgIFxyXG4gICAgICBrZXlib2FyZDp7XHJcbiAgICAgICAgZW5hYmxlZDp0cnVlLFxyXG4gICAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxyXG4gICAgICAgIHBhZ2VVcERvd246dHJ1ZSxcclxuICAgICAgfSxcclxuICAgIFxyXG4gICAgICBtb3VzZXdoZWVsOntcclxuICAgICAgICBzZW5zaXRpdml0eToxLFxyXG4gICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICBcclxuICAgICAgc2xpZGVzUGVyVmlldzozLFxyXG4gICAgICB3YXRjaE92ZXJmbG93OnRydWUsXHJcbiAgICBcclxuICAgICAgc3BhY2VCZXR3ZWVuOjEwLFxyXG4gICAgXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOjEsXHJcbiAgICBcclxuICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgIHNwZWVkOjUwMCxcclxuICAgIFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDk1MDoge1xyXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTY2OiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgNDYwOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMS43LFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgMzYwOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMS4zLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9KTtcclxuIFxyXG4gICBcclxuICAgIFxyXG4gIFxyXG4gICAgIFxyXG4gICBcclxuICAgIFxyXG4gIFxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kYXJ5LWNvbnRhaW5lci10d28nKSl7XHJcbiAgbmV3IFN3aXBlcignLnNlY29uZGFyeS1jb250YWluZXItdHdvJyx7XHJcblxyXG4gICAgcGFnaW5hdGlvbjp7XHJcbiAgICAgICBlbDonLnNlY29uZGFyeS1wYWdpbmF0aW9uLXR3bycsXHJcbiAgICAgICAgY2xpY2thYmxlOnRydWUsXHJcbiAgICAgICAgZHluYW1pY0J1bGxldHM6dHJ1ZSxcclxuICAgIH0sXHJcbiAgXHJcbiAgIFxyXG4gICAgZ3JhYkN1cnNvcjp0cnVlLFxyXG4gIFxyXG4gICAga2V5Ym9hcmQ6e1xyXG4gICAgICBlbmFibGVkOnRydWUsXHJcbiAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxyXG4gICAgICBwYWdlVXBEb3duOnRydWUsXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgbW91c2V3aGVlbDp7XHJcbiAgICAgIHNlbnNpdGl2aXR5OjEsXHJcbiAgICAgXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgc2xpZGVzUGVyVmlldzo0LFxyXG4gICAgd2F0Y2hPdmVyZmxvdzp0cnVlLFxyXG4gIFxyXG4gICAgc3BhY2VCZXR3ZWVuOjEwLFxyXG4gIFxyXG4gICAgc2xpZGVzUGVyR3JvdXA6MSxcclxuICBcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgc3BlZWQ6NTAwLFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgOTUwOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIDU2Njoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgIFxyXG4gIFxyXG4gICAgICA0NjA6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNyxcclxuICAgICAgIFxyXG4gICAgICB9LFxyXG4gIFxyXG4gICAgICAzNjA6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMyxcclxuICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICAzMjA6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMSxcclxuICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBcclxuICB9KTtcclxuICBcclxuICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVJBTkdFLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgcmFuZ2VTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZ2Utc2xpZGVyJyk7XHJcblxyXG5pZihyYW5nZVNsaWRlcil7XHJcbiAgbm9VaVNsaWRlci5jcmVhdGUocmFuZ2VTbGlkZXIsIHtcclxuICAgIHN0YXJ0OiBbNTAwLCA5OTk5OTldLFxyXG4gICAgY29ubmVjdDogdHJ1ZSxcclxuICAgIHN0ZXA6IDEsXHJcbiAgICByYW5nZToge1xyXG4gICAgICAgICdtaW4nOiBbNTAwXSxcclxuICAgICAgICAnbWF4JzogWzk5OTk5OV1cclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBpbnB1dDAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQwJyk7XHJcbiAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0MScpO1xyXG4gIGNvbnN0IGlucHV0cyA9IFtpbnB1dDAsIGlucHV0MV07XHJcblxyXG4gIHJhbmdlU2xpZGVyLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uKHZhbHVlcywgaGFuZGxlKXtcclxuICAgIGlucHV0c1toYW5kbGVdLnZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZXNbaGFuZGxlXSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNldFJhbmdlU2xpZGVyID0gKGksIHZhbHVlKSA9PiB7XHJcbiAgICBsZXQgYXJyID0gW251bGwsIG51bGxdO1xyXG4gICAgYXJyW2ldID0gdmFsdWU7XHJcbiAgICByYW5nZVNsaWRlci5ub1VpU2xpZGVyLnNldChhcnIpO1xyXG4gIH07XHJcblxyXG5cclxuICBpbnB1dHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PntcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgIHNldFJhbmdlU2xpZGVyKGluZGV4LCBlLmN1cnJlbnRUYXJnZXQudmFsdWUpXHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgcmFuZ2VTbGlkZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlLXNsaWRlcjEnKTtcclxuXHJcbmlmKHJhbmdlU2xpZGVyMSl7XHJcbiAgbm9VaVNsaWRlci5jcmVhdGUocmFuZ2VTbGlkZXIxLCB7XHJcbiAgICBzdGFydDogWzUwMCwgOTk5OTk5XSxcclxuICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgcmFuZ2U6IHtcclxuICAgICAgICAnbWluJzogWzUwMF0sXHJcbiAgICAgICAgJ21heCc6IFs5OTk5OTldXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgaW5wdXQwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0MicpO1xyXG4gIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dDMnKTtcclxuICBjb25zdCBpbnB1dHMgPSBbaW5wdXQwLCBpbnB1dDFdO1xyXG5cclxuICByYW5nZVNsaWRlcjEubm9VaVNsaWRlci5vbigndXBkYXRlJywgZnVuY3Rpb24odmFsdWVzLCBoYW5kbGUpe1xyXG4gICAgaW5wdXRzW2hhbmRsZV0udmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlc1toYW5kbGVdKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2V0UmFuZ2VTbGlkZXIgPSAoaSwgdmFsdWUpID0+IHtcclxuICAgIGxldCBhcnIgPSBbbnVsbCwgbnVsbF07XHJcbiAgICBhcnJbaV0gPSB2YWx1ZTtcclxuICAgIHJhbmdlU2xpZGVyMS5ub1VpU2xpZGVyLnNldChhcnIpO1xyXG4gIH07XHJcblxyXG5cclxuICBpbnB1dHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PntcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgIHNldFJhbmdlU2xpZGVyKGluZGV4LCBlLmN1cnJlbnRUYXJnZXQudmFsdWUpXHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgcmFuZ2VTbGlkZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlLXNsaWRlcjInKTtcclxuXHJcbmlmKHJhbmdlU2xpZGVyMil7XHJcbiAgbm9VaVNsaWRlci5jcmVhdGUocmFuZ2VTbGlkZXIyLCB7XHJcbiAgICBzdGFydDogWzUwMCwgOTk5OTk5XSxcclxuICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgcmFuZ2U6IHtcclxuICAgICAgICAnbWluJzogWzUwMF0sXHJcbiAgICAgICAgJ21heCc6IFs5OTk5OTldXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgaW5wdXQwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0NCcpO1xyXG4gIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dDUnKTtcclxuICBjb25zdCBpbnB1dHMgPSBbaW5wdXQwLCBpbnB1dDFdO1xyXG5cclxuICByYW5nZVNsaWRlcjIubm9VaVNsaWRlci5vbigndXBkYXRlJywgZnVuY3Rpb24odmFsdWVzLCBoYW5kbGUpe1xyXG4gICAgaW5wdXRzW2hhbmRsZV0udmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlc1toYW5kbGVdKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2V0UmFuZ2VTbGlkZXIgPSAoaSwgdmFsdWUpID0+IHtcclxuICAgIGxldCBhcnIgPSBbbnVsbCwgbnVsbF07XHJcbiAgICBhcnJbaV0gPSB2YWx1ZTtcclxuICAgIHJhbmdlU2xpZGVyMi5ub1VpU2xpZGVyLnNldChhcnIpO1xyXG4gIH07XHJcblxyXG5cclxuICBpbnB1dHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PntcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgIHNldFJhbmdlU2xpZGVyKGluZGV4LCBlLmN1cnJlbnRUYXJnZXQudmFsdWUpXHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWJ0bi1wYXJhbWV0ZXJzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vIENoZWNrQ29udmVuaWVuY2VzXHJcblxyXG5cclxuICBjb25zdCBjaGVja0NvbnZlbmllbmNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLWNoZWNrYm94X19jaGVja2JveCcpO1xyXG4gIGNvbnN0IG5vT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLWNoZWNrYm94X19jaGVja2JveC1ubycpO1xyXG4gIGNvbnN0IGl0ZW1zQ2hlY2tib3hObyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLWNoZWNrYm94LW5vJyk7XHJcbiAgY29uc3QgYmFsY29ueWxvZ2dpYUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFsY29ueS1sb2dnaWFfX2xpc3QnKTtcclxuICBcclxuICBpZihjaGVja0NvbnZlbmllbmNlcyB8fCBub09wdGlvbnMpe1xyXG5cclxuICAgIG5vT3B0aW9ucy5mb3JFYWNoKCBub09wdGlvbiA9PntcclxuICAgICAgaXRlbXNDaGVja2JveE5vLmZvckVhY2goIGVsID0+e1xyXG4gICAgICAgIG5vT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgY2hlY2tDb252ZW5pZW5jZXMxID0gZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1jaGVja2JveF9fbGFiZWwnKTtcclxuICAgICAgICAgIG5vT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZihub09wdGlvbi5jaGVja2VkKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgY2hlY2tDb252ZW5pZW5jZXMxLmZvckVhY2goIGNoZWNrID0+e1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2hlY2sucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgY2hlY2tDb252ZW5pZW5jZXMxLmZvckVhY2goIGNoZWNrID0+e1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNoZWNrLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG4gIH0gXHJcbiAgXHJcbiAgXHJcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8PSA5NTApIHtcclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXN0YW5jZV9fc3dpcGVyJykpe1xyXG5cclxuICAgICAgbmV3IFN3aXBlcignLmRpc3RhbmNlX19zd2lwZXInLHtcclxuICAgIFxyXG4gICAgICBcclxuICAgIFxyXG4gICAgIFxyXG4gICAgICAgIGdyYWJDdXJzb3I6ZmFsc2UsXHJcbiAgICAgIFxyXG4gICAgICAgIGtleWJvYXJkOntcclxuICAgICAgICAgIGVuYWJsZWQ6dHJ1ZSxcclxuICAgICAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxyXG4gICAgICAgICAgcGFnZVVwRG93bjp0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgICAgIG1vdXNld2hlZWw6e1xyXG4gICAgICAgICAgc2Vuc2l0aXZpdHk6MSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzoyLjgsXHJcbiAgICAgICAgd2F0Y2hPdmVyZmxvdzp0cnVlLFxyXG4gICAgICBcclxuICAgICAgICBzcGFjZUJldHdlZW46MTAsXHJcbiAgICAgIFxyXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOjEsXHJcbiAgICAgIFxyXG4gICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVkOjUwMCxcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9IZWlnaHRfX3N3aXBlclxyXG5pZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDw9IDk1MCkge1xyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWlnaHRfX3N3aXBlcicpKXtcclxuICAgIG5ldyBTd2lwZXIoJy5oZWlnaHRfX3N3aXBlcicse1xyXG4gIFxyXG4gIFxyXG4gICAgICBncmFiQ3Vyc29yOmZhbHNlLFxyXG4gICAgXHJcbiAgICAgIGtleWJvYXJkOntcclxuICAgICAgICBlbmFibGVkOnRydWUsXHJcbiAgICAgICAgb25seUluVmlld3BvcnQ6IHRydWUsXHJcbiAgICAgICAgcGFnZVVwRG93bjp0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgXHJcbiAgICAgIG1vdXNld2hlZWw6e1xyXG4gICAgICAgIHNlbnNpdGl2aXR5OjEsXHJcbiAgICAgICBcclxuICAgICAgfSxcclxuICAgIFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OjQuNCxcclxuICAgICAgd2F0Y2hPdmVyZmxvdzp0cnVlLFxyXG4gICAgXHJcbiAgICAgIHNwYWNlQmV0d2VlbjoxMixcclxuICAgIFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDoxLFxyXG4gICAgXHJcbiAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICBzcGVlZDo1MDAsXHJcbiAgICAgIGJyZWFrcG9pbnRzOntcclxuICAgICAgICA5NTA6e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA+PSA5NTApIHtcclxuICBjb25zdCBpdGVtUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLXJlc3VsdHMnKTtcclxuICBcclxuXHJcbiAgaWYoaXRlbVJlc3VsdHMpe1xyXG4gICAgaXRlbVJlc3VsdHMuZm9yRWFjaCggZWw9PntcclxuICAgICAgY29uc3QgcmVzdWx0c1NsaWRlciA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS1yZXN1bHRzX3N3aXBlcicpO1xyXG4gICAgICBjb25zdCByZXN1bHRzU2xpZGVybWluaSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS1taW5pLXNsaWRlcicpO1xyXG4gICAgICBjb25zdCBpbWFnZVNsaWRlck9uZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS1yZXN1bHRzX3N3aXBlci1vbmUnKTtcclxuICAgICAgY29uc3QgbWluaVNsaWRlcyA9IG5ldyBTd2lwZXIocmVzdWx0c1NsaWRlcm1pbmkse1xyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcclxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICBuZXcgU3dpcGVyKHJlc3VsdHNTbGlkZXIse1xyXG4gICAgICAgIGdyYWJDdXJzb3I6ZmFsc2UsXHJcbiAgICAgIFxyXG4gICAgICAgIGtleWJvYXJkOntcclxuICAgICAgICAgIGVuYWJsZWQ6dHJ1ZSxcclxuICAgICAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxyXG4gICAgICAgICAgcGFnZVVwRG93bjp0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgICAgIG1vdXNld2hlZWw6e1xyXG4gICAgICAgICAgc2Vuc2l0aXZpdHk6MSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzoxLFxyXG4gICAgICAgIHdhdGNoT3ZlcmZsb3c6dHJ1ZSxcclxuICAgICAgIFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6MSxcclxuICAgICAgXHJcbiAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgc3BlZWQ6NTAwLFxyXG4gICAgXHJcbiAgICAgICAgdGh1bWJzOntcclxuICAgICAgICAgICAgc3dpcGVyOiBtaW5pU2xpZGVzLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgIFxyXG4gICAgICBuZXcgU3dpcGVyKGltYWdlU2xpZGVyT25lLHtcclxuICAgICAgICBncmFiQ3Vyc29yOmZhbHNlLFxyXG4gICAgICBcclxuICAgICAgICBrZXlib2FyZDp7XHJcbiAgICAgICAgICBlbmFibGVkOnRydWUsXHJcbiAgICAgICAgICBvbmx5SW5WaWV3cG9ydDogdHJ1ZSxcclxuICAgICAgICAgIHBhZ2VVcERvd246dHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBcclxuICAgICAgICBtb3VzZXdoZWVsOntcclxuICAgICAgICAgIHNlbnNpdGl2aXR5OjEsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6MSxcclxuICAgICAgICB3YXRjaE92ZXJmbG93OnRydWUsXHJcbiAgICAgICBcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOjEsXHJcbiAgICAgIFxyXG4gICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVkOjUwMCxcclxuICAgIFxyXG4gICAgICAgIHRodW1iczp7XHJcbiAgICAgICAgICBzd2lwZXI6IG1pbmlTbGlkZXMsICBzbGlkZXNQZXJWaWV3OjEsXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSlcclxuICB9XHJcbiBcclxuICBcclxufVxyXG5cclxuXHJcblxyXG4gIFxyXG4gIFxyXG5cclxuICBpZihwcm9kdWN0KXtcclxuICAgIHByb2R1Y3QuZm9yRWFjaCggZWw9PntcclxuICAgICAgY29uc3QgcHJvZHVjdFNsaWRlciA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X19zd2lwZXInKTtcclxuICAgICAgY29uc3QgcHJvZHVjdFNsaWRlcm1pbmkgPSBlbC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fc3dpcGVyLW1pbmknKTtcclxuICAgICAgXHJcblxyXG4gICAgICBuZXcgU3dpcGVyKHByb2R1Y3RTbGlkZXIse1xyXG4gICAgICAgIGdyYWJDdXJzb3I6ZmFsc2UsXHJcbiAgICAgIFxyXG4gICAgICAgIGtleWJvYXJkOntcclxuICAgICAgICAgIGVuYWJsZWQ6dHJ1ZSxcclxuICAgICAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxyXG4gICAgICAgICAgcGFnZVVwRG93bjp0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZXdoZWVsOntcclxuICAgICAgICAgIHNlbnNpdGl2aXR5OjEsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6MSxcclxuICAgICAgICB3YXRjaE92ZXJmbG93OnRydWUsXHJcbiAgICAgICBcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOjEsXHJcbiAgICAgIFxyXG4gICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVkOjUwMCxcclxuICAgIFxyXG4gICAgICAgIHRodW1iczp7XHJcbiAgICAgICAgICBzd2lwZXI6e1xyXG4gICAgICAgICAgICBlbDogcHJvZHVjdFNsaWRlcm1pbmksXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6MyxcclxuICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgICBcclxuXHJcbiAgICB9KVxyXG4gIH1cclxuIFxyXG5cclxuICBjb25zdCBob3VzaW5nQ29tcGxleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VzaW5nQ29tcGxleCcpO1xyXG5cclxuXHJcbiAgXHJcbiAgaWYoaG91c2luZ0NvbXBsZXgpe1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RTbGlkZXIgPSBob3VzaW5nQ29tcGxleC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdF9fc3dpcGVyJyk7XHJcblxyXG4gICAgcHJvZHVjdFNsaWRlci5mb3JFYWNoKCBlbCA9PiB7XHJcblxyXG4gICAgICBuZXcgU3dpcGVyKGVsLHtcclxuICAgICAgICBncmFiQ3Vyc29yOmZhbHNlLFxyXG4gICAgICBcclxuICAgICAgICBrZXlib2FyZDp7XHJcbiAgICAgICAgICBlbmFibGVkOnRydWUsXHJcbiAgICAgICAgICBvbmx5SW5WaWV3cG9ydDogdHJ1ZSxcclxuICAgICAgICAgIHBhZ2VVcERvd246dHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91c2V3aGVlbDp7XHJcbiAgICAgICAgICBzZW5zaXRpdml0eToxLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICBcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OjEsXHJcbiAgICAgICAgd2F0Y2hPdmVyZmxvdzp0cnVlLFxyXG4gICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgICBzbGlkZXNQZXJHcm91cDoxLFxyXG4gICAgICBcclxuICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDo1MDAsXHJcbiAgICBcclxuICAgICBcclxuXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qbGV0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGlvbl9fY29udGVudCcpO1xyXG5sZXQgdmFsdWVQcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb25fX3ZhbHVlJyk7XHJcblxyXG5sZXQgcHJvZ3Jlc3NWYWx1ZSA9IDA7XHJcbmxldCBwcm9ncmVzc0VuZFZhbHVlID0gNjU7XHJcbmxldCBzcGVlZCA9IDUwO1xyXG5cclxuXHJcblxyXG5sZXQgcHJvZ3Jlc3MgPSBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgcHJvZ3Jlc3NWYWx1ZSsrO1xyXG4gICAgdmFsdWVQcm9ncmVzcy50ZXh0Q29udGVudCA9IGAke3Byb2dyZXNzVmFsdWV9JWA7XHJcbiAgICBwcm9ncmVzc0Jhci5zdHlsZS5iYWNrZ3JvdW5kID0gYGNvbmljLWdyYWRpZW50KFxyXG4gICAgICAjNGQ1YmY5ICR7cHJvZ3Jlc3NWYWx1ZSAqIDMuNn1kZWcsXHJcbiAgICAgICNjYWRjZmYgJHtwcm9ncmVzc1ZhbHVlICogMy42fWRlZ1xyXG4gICAgKWA7XHJcbiAgICBpZihwcm9ncmVzc1ZhbHVlID09IHByb2dyZXNzRW5kVmFsdWUpe1xyXG4gICAgICBjbGVhckludGVydmFsKHByb2dyZXNzKTtcclxuICAgIH1cclxufSwgc3BlZWQpO1xyXG5cclxuKi9cclxuXHJcbi8veWVhcl9fc3dpcGVyXHJcbmlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPD0gOTUwKSB7XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllYXJfX3N3aXBlcicpKXtcclxuICAgIG5ldyBTd2lwZXIoJy55ZWFyX19zd2lwZXInLHtcclxuICBcclxuICBcclxuICAgICAgZ3JhYkN1cnNvcjpmYWxzZSxcclxuICAgIFxyXG4gICAgICBrZXlib2FyZDp7XHJcbiAgICAgICAgZW5hYmxlZDp0cnVlLFxyXG4gICAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxyXG4gICAgICAgIHBhZ2VVcERvd246dHJ1ZSxcclxuICAgICAgfSxcclxuICAgIFxyXG4gICAgICBtb3VzZXdoZWVsOntcclxuICAgICAgICBzZW5zaXRpdml0eToxLFxyXG4gICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICBcclxuICAgICAgc2xpZGVzUGVyVmlldzo0LjQsXHJcbiAgICAgIHdhdGNoT3ZlcmZsb3c6dHJ1ZSxcclxuICAgIFxyXG4gICAgICBzcGFjZUJldHdlZW46MTIsXHJcbiAgICBcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6MSxcclxuICAgIFxyXG4gICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgc3BlZWQ6NTAwLFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICB9KTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vQUNDT1JESU9OXHJcblxyXG5jb25zdCBhY2NvcmRpb25CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fdGl0bGUnKTtcclxuXHJcbmlmKGFjY29yZGlvbkJ0bnMpe1xyXG4gIGFjY29yZGlvbkJ0bnMuZm9yRWFjaCggYnRuID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBidG4ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuLy8gU0xJREVSIENBRFxyXG5cclxuY29uc3Qgc2xpZGVyQ0FEQnV5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlLXNsaWRlci1DQUQtYnV5Jyk7XHJcblxyXG5pZihzbGlkZXJDQURCdXkpe1xyXG4gIG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlckNBREJ1eSwge1xyXG4gICAgc3RhcnQ6IFswLCAxMDBdLFxyXG4gICAgdG9vbHRpcHM6dHJ1ZSxcclxuICAgIGNvbm5lY3Q6ZmFsc2UsXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgcmFuZ2U6IHtcclxuICAgICAgJ21pbic6IDAsXHJcbiAgICAgICdtYXgnOiAxMDAsXHJcbiAgXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgZm9ybWF0OiB7XHJcbiAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgICBmcm9tOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBzbGlkZXJDQURUYWtlT2ZmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlLXNsaWRlci1DQUQtdGFrZU9mZicpO1xyXG5cclxuaWYoc2xpZGVyQ0FEVGFrZU9mZil7XHJcbiAgbm9VaVNsaWRlci5jcmVhdGUoc2xpZGVyQ0FEVGFrZU9mZiwge1xyXG4gICAgc3RhcnQ6IFswLCAxMDBdLFxyXG4gICAgdG9vbHRpcHM6dHJ1ZSxcclxuICAgIGNvbm5lY3Q6ZmFsc2UsXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgcmFuZ2U6IHtcclxuICAgICAgJ21pbic6IDAsXHJcbiAgICAgICdtYXgnOiAxMDAsXHJcbiAgXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgZm9ybWF0OiB7XHJcbiAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgICBmcm9tOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG59XHJcblxyXG5cclxuaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8PSA5NTApIHtcclxuICBjb25zdCBpdGVtUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLXJlc3VsdHMnKTtcclxuXHJcbiAgaWYoaXRlbVJlc3VsdHMpe1xyXG4gICAgaXRlbVJlc3VsdHMuZm9yRWFjaCggZWwgPT57XHJcbiAgICAgIGNvbnN0IHRvcERhdGEgPSBlbC5xdWVyeVNlbGVjdG9yKCcudG9wLWRhdGEnKTtcclxuICAgICAgY29uc3QgaXRlbVJlc3VsdHNUaXRsZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS1yZXN1bHRzJyk7XHJcbiAgXHJcbiAgICAgIGl0ZW1SZXN1bHRzVGl0bGUuYmVmb3JlKHRvcERhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDw9IDc2Nykge1xyXG4gIGNvbnN0IHByb2R1Y3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLXByb2R1Y3RfX3RpdGxlJyk7XHJcbiAgY29uc3QgcHJvZHVjdEFmdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYWZ0ZXInKTtcclxuICBpZihwcm9kdWN0VGl0bGUpe1xyXG4gICAgcHJvZHVjdEFmdGVyLmFmdGVyKHByb2R1Y3RUaXRsZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY29uc3Qgc2VsZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3Rpb25fX2NvbnRlbnQnKTtcclxuY29uc3Qgc2VsZWN0aW9uVGl0bGVZZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0aW9uX192YWx1ZS15ZXMnKTtcclxuY29uc3Qgc2VsZWN0aW9uVGl0bGVObyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb25fX3ZhbHVlLW5vJyk7XHJcblxyXG5jb25zdCB5ZXMgPSAn0JTQsCc7XHJcbmNvbnN0IG5vID0gJ9Cd0LXRgidcclxuXHJcbmlmKHNlbGVjdGlvbkNvbnRlbnQpe1xyXG5cclxuICBzZWxlY3Rpb25Db250ZW50LmZvckVhY2goIGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGlvblZhbHVlID0gZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGlvbl9fdmFsdWUnKTtcclxuICAgICAgY29uc3Qgc2VsZWN0aW9uX19wZXIgPSBlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0aW9uX19wZXInKTtcclxuICAgICAgXHJcbiAgICAgXHJcbiAgXHJcbiAgICBcclxuICAgICAgc2VsZWN0aW9uQ29udGVudC5mb3JFYWNoKCBlbCA9PntcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgIHNlbGVjdGlvblRpdGxlTm8udGV4dENvbnRlbnQgPSBgJHtub31gO1xyXG4gICAgICAgc2VsZWN0aW9uVGl0bGVZZXMudGV4dENvbnRlbnQgPSBgJHt5ZXN9YDtcclxuICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgICAgc2VsZWN0aW9uVmFsdWUudGV4dENvbnRlbnQgPSBgJHtzZWxlY3Rpb25fX3Blci5zdHlsZS53aWR0aCA9ICc0NSUnfWAgO1xyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHBhcmFtZXRlcnNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFtZXRlcnMtcmVzdWx0c19fbGluay1tZW51Jyk7XHJcblxyXG5jb25zdCBwYXJhbWV0ZXJzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYW1ldGVycy1yZXN1bHRzX19ibG9jay0xJyk7XHJcbmNvbnN0IGhpc3RvcnlUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlzdG9yeV9fdG9wJyk7XHJcblxyXG5pZihwYXJhbWV0ZXJzQmxvY2spe1xyXG4gXHJcbiBcclxuICAgIGNvbnN0IHBhcmFtZXRlcnNJdGVtID0gcGFyYW1ldGVyc0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJhbWV0ZXJzLXJlc3VsdHNfX2l0ZW0nKTtcclxuICAgIGNvbnN0IHBhcmFtZXRlcnNDb250ZW50ID0gcGFyYW1ldGVyc0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbWV0ZXJzLXJlc3VsdHNfX2NvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgcGFyYW1ldGVyc0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBcclxuICAgICAgcGFyYW1ldGVyc0xpbmsuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIHBhcmFtZXRlcnNMaW5rLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIHBhcmFtZXRlcnNDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICBwYXJhbWV0ZXJzSXRlbS5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgcGFyYW1ldGVyc0xpbmsuaW5uZXJUZXh0ID0gZWwuaW5uZXJUZXh0O1xyXG4gICAgICAgIHBhcmFtZXRlcnNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHBhcmFtZXRlcnNMaW5rLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgcGFyYW1ldGVyc0NvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgcGFyYW1ldGVyc0l0ZW0uZm9yRWFjaCggZWw9PntcclxuICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gXHJcbn1cclxuXHJcblxyXG5pZihoaXN0b3J5VG9wKXtcclxuIFxyXG4gXHJcbiAgY29uc3QgcGFyYW1ldGVyc0l0ZW0gPSBoaXN0b3J5VG9wLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJhbWV0ZXJzLXJlc3VsdHNfX2l0ZW0nKTtcclxuICBjb25zdCBwYXJhbWV0ZXJzQ29udGVudCA9IGhpc3RvcnlUb3AucXVlcnlTZWxlY3RvcignLnBhcmFtZXRlcnMtcmVzdWx0c19fY29udGVudCcpO1xyXG4gIFxyXG4gIHBhcmFtZXRlcnNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIHBhcmFtZXRlcnNMaW5rLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgcGFyYW1ldGVyc0xpbmsucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIHBhcmFtZXRlcnNDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG4gIHBhcmFtZXRlcnNJdGVtLmZvckVhY2goIGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIHBhcmFtZXRlcnNMaW5rLmlubmVyVGV4dCA9IGVsLmlubmVyVGV4dDtcclxuICAgICAgcGFyYW1ldGVyc0xpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIHBhcmFtZXRlcnNMaW5rLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIHBhcmFtZXRlcnNDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBwYXJhbWV0ZXJzSXRlbS5mb3JFYWNoKCBlbD0+e1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBzYXZlU2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNhdmVCdG4nKTtcclxuY29uc3Qgbm90aWZ5U2F2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZnktc2F2ZScpO1xyXG5jb25zdCBub3RpZnlDb21wYXJpc29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmeS1jb21wYXJpc29uJyk7XHJcblxyXG5pZihzYXZlU2VhcmNoQnRuKXtcclxuICBzYXZlU2VhcmNoQnRuLmZvckVhY2goIGVsPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgbm90aWZ5U2F2ZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbihlKXtcclxuICAgICAgICBub3RpZnlTYXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9LDIwMDApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgIFxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBjb21wYXJpc29uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBhcmlzb24tYWRkJyk7XHJcblxyXG5pZihjb21wYXJpc29uQWRkKXtcclxuICBjb21wYXJpc29uQWRkLmZvckVhY2goZWw9PntcclxuICAgIFxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBub3RpZnlDb21wYXJpc29uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIG5vdGlmeUNvbXBhcmlzb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0sMjAwMCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgYWNjb3JkaW9uRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWRlc2NyaXB0aW9uJyk7XHJcbmlmKGFjY29yZGlvbkRlc2NyaXB0aW9uKXtcclxuXHJcbiAgYWNjb3JkaW9uRGVzY3JpcHRpb24uZm9yRWFjaChlbD0+e1xyXG4gICAgY29uc3QgdGl0bGVEZXNjcmlwdGlvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1kZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgYWNjb3JkaW9uQm9keSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24tZGVzY3JpcHRpb25fX2JvZHknKTtcclxuICAgIGlmKHRpdGxlRGVzY3JpcHRpb24pe1xyXG4gICAgICB0aXRsZURlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdGl0bGVEZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBhY2NvcmRpb25Cb2R5LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEJ0bicpO1xyXG5pZihjb250YWN0QnRuKXtcclxuICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuLy8g0JTQmNCe0JPQoNCQ0JzQnNCQXHJcbi8vINCU0JjQntCT0KDQkNCc0JzQkFxyXG5jb25zdCBjaGFydEQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JhcGgxJyk7XHJcblxyXG5pZihjaGFydEQpe1xyXG5cclxuXHJcbiAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICBjaGFydDogeyBoZWlnaHQ6IDIwMCwgdHlwZTogXCJhcmVhXCIsIHN0YWNrZWQ6ICEwLCBcclxuXHJcbnRvb2xiYXI6IHtcclxudG9vbHM6IHtcclxuICAgICAgICBkb3dubG9hZDogZmFsc2UsXHJcbn1cclxufSxcclxuXHJcbnpvb206IHtcclxuICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbn0sXHJcblxyXG59LFxyXG4gICAgY29sb3JzOiBbXCIjRjdFMUZGXCIsIFwiI0MxQkVFN1wiXSxcclxuICAgIGRhdGFMYWJlbHM6IHsgXHJcbmVuYWJsZWQ6IDEsXHJcbmZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCwgb3B0cykge1xyXG4gIHJldHVybiB2YWwrJyDQvNC70L0nXHJcbn0sXHJcbnRleHRBbmNob3I6ICdtaWRkbGUnLFxyXG5cclxuc3R5bGU6IHtcclxuICBmb250U2l6ZTogJzE0cHgnLFxyXG5cclxuICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICBjb2xvcnM6IFsnIzE1MTUxNiddXHJcbn0sXHJcbmJhY2tncm91bmQ6IHtcclxuICBlbmFibGVkOiBmYWxzZSxcclxuXHJcbn0sXHJcbmRyb3BTaGFkb3c6IHtcclxuICBlbmFibGVkOiBmYWxzZSxcclxuXHJcbn0sXHJcbm9mZnNldFg6IDAsXHJcbm9mZnNldFk6IC0xMCxcclxuXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdHJva2U6IHsgIGNvbG9yczogWycjNkE1NkU4J10sIGN1cnZlOiBcInN0cmFpZ2h0XCIsIHdpZHRoOiAxLCBkYXNoQXJyYXk6IFswLCA0XSwgbGluZUNhcDogXCJyb3VuZFwiIH0sXHJcbiAgICBncmlkOiB7IHBhZGRpbmc6IHsgbGVmdDogMCwgcmlnaHQ6IDAgfSwgc3Ryb2tlRGFzaEFycmF5OiAwLFxyXG5cclxuXHJcbnlheGlzOiB7XHJcbiAgbGluZXM6IHtcclxuICAgIHNob3c6IGZhbHNlXHJcbiAgfVxyXG59LFxyXG54YXhpczoge1xyXG4gIGxpbmVzOiB7XHJcbiAgICBzaG93OiBmYWxzZVxyXG4gIH1cclxufSwgIFxyXG59LFxyXG4gICAgbWFya2VyczogeyBzaXplOiAwLCBob3ZlcjogeyBzaXplOiAwIH0gfSxcclxuICAgIHNlcmllczogW1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgeyBuYW1lOiBcIlwiLCBkYXRhOiBbMS45LCAgMS43LCAgMi41LCAgXSB9LFxyXG5cclxuXHJcblxyXG4gICAgXSxcclxuICAgIHhheGlzOiB7IHR5cGU6IFwibW9udGhcIiwgY2F0ZWdvcmllczogWycxINC90L7Rjy4nLCcxINGP0L3Qsi4nLCcxINGE0LXQsi4nLF0sIGF4aXNCb3JkZXI6IHsgc2hvdzogITAgfSwgYXhpc1RpY2tzOiB7IHNob3c6ICEwIH0sXHJcblxyXG4gICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgY29sb3JzOiAnIzZDN0Y5QydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB5YXhpczoge1xyXG5zaG93OiB0cnVlLFxyXG4gICAgICAgIGxhYmVsczoge1xyXG4gIG9mZnNldFg6IC05OSxcclxuICAgICBcclxuICBzaG93OiB0cnVlLFxyXG4gXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGZpbGw6IHsgdHlwZTogXCJncmFkaWVudFwiLCBncmFkaWVudDogeyBzaGFkZUludGVuc2l0eTogMiwgb3BhY2l0eUZyb206IDEsIG9wYWNpdHlUbzogMC40LCBzdG9wczogWzAsIDEwMF0gfSB9LFxyXG4gICAgdG9vbHRpcDogeyBlbmFibGVkOiBmYWxzZX0sXHJcbiAgICBsZWdlbmQ6IHsgc2hvdzpmYWxzZSwgcG9zaXRpb246IFwidG9wXCIsIGhvcml6b250YWxBbGlnbjogXCJyaWdodFwiLCB9LFxyXG59O1xyXG52YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoMVwiKSwgb3B0aW9ucyk7XHJcblxyXG5jaGFydC5yZW5kZXIoKTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuY29uc3Qgb25lU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29uZS1zbGlkZXInKTtcclxuY29uc3QgdGVybVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXJtLXNsaWRlcicpO1xyXG5cclxuaWYob25lU2xpZGVyKXtcclxuICBub1VpU2xpZGVyLmNyZWF0ZShvbmVTbGlkZXIsIHtcclxuICAgIHN0YXJ0OiAyNDMwMDAwLFxyXG4gICAgY29ubmVjdDogW3RydWUsIGZhbHNlXSxcclxuICAgIHN0ZXA6IDEsXHJcbiAgXHJcbiAgICByYW5nZToge1xyXG4gICAgICAgICdtaW4nOiA3MjAwMDAsXHJcbiAgICAgICAgJ21heCc6IDc4MDAwMDBcclxuICAgIH0sXHJcbiAgICBmb3JtYXQ6IHtcclxuICAgICAgdG86IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgICBmcm9tOiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbmxldCBpbml0aWFsUGF5bWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbml0aWFsUGF5bWVudCcpO1xyXG5cclxuaWYoaW5pdGlhbFBheW1lbnQpe1xyXG4gIG9uZVNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbih2YWx1ZXMsIGhhbmRsZSl7XHJcbiAgIFxyXG4gICAgICBpbml0aWFsUGF5bWVudC5pbm5lckhUTUwgPSB2YWx1ZXNbaGFuZGxlXTtcclxuICAgIFxyXG4gIH0pO1xyXG59XHJcbn1cclxuXHJcbmlmKHRlcm1TbGlkZXIpe1xyXG5cclxuICBub1VpU2xpZGVyLmNyZWF0ZSh0ZXJtU2xpZGVyLCB7XHJcbiAgICBzdGFydDogMTIsXHJcbiAgICBjb25uZWN0OiBbdHJ1ZSwgZmFsc2VdLFxyXG4gICAgc3RlcDogMSxcclxuICBcclxuICAgIHJhbmdlOiB7XHJcbiAgICAgICAgJ21pbic6IDEsXHJcbiAgICAgICAgJ21heCc6IDMwXHJcbiAgICB9LFxyXG4gICAgZm9ybWF0OiB7XHJcbiAgICAgIHRvOiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgfSxcclxuICAgICAgZnJvbTogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIGxldCBsb2FuVGVybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FuVGVybScpO1xyXG5cclxuICBpZihsb2FuVGVybSl7XHJcbiAgICB0ZXJtU2xpZGVyLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uKHZhbHVlcywgaGFuZGxlKXtcclxuICAgIFxyXG4gICAgICAgIGxvYW5UZXJtLmlubmVySFRNTCA9IHZhbHVlc1toYW5kbGVdO1xyXG4gICAgICBcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPD0gNTIwKSB7XHJcblxyXG4gICAgY29uc3QgbW9ydGdhZ2VCdXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ydGdhZ2UtZGVzY3JpcHRpb25fX3RvcCcpO1xyXG4gICAgY29uc3QgbW9ydGdhZ2VEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3J0Z2FnZS1kZXNjcmlwdGlvbicpO1xyXG4gICAgaWYobW9ydGdhZ2VCdXkpe1xyXG4gICAgICBjb25zdCBzd2l0Y2hlckJvZHkgPSBtb3J0Z2FnZUJ1eS5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoZXJfX2JvZHknKTtcclxuICAgICAgY29uc3Qgc3dpdGNoZXJMaXN0ID0gbW9ydGdhZ2VCdXkucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyX19saXN0Jyk7XHJcbiAgICAgIGNvbnN0IHN3aXRjaGVySXRlbSA9IG1vcnRnYWdlQnV5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2l0Y2hlcl9faXRlbScpO1xyXG4gICAgICBzd2l0Y2hlckl0ZW0uZm9yRWFjaChlbD0+e1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1zbGlkZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgc3dpdGNoZXJCb2R5LmNsYXNzTGlzdC5hZGQoJ3N3aXBlcicpO1xyXG4gICAgICBzd2l0Y2hlckxpc3QuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLXdyYXBwZXInKVxyXG4gICAgICBuZXcgU3dpcGVyKHN3aXRjaGVyQm9keSx7XHJcbiAgICAgICAgZ3JhYkN1cnNvcjpmYWxzZSxcclxuICBcclxuICAgICAgICBrZXlib2FyZDp7XHJcbiAgICAgICAgICBlbmFibGVkOnRydWUsXHJcbiAgICAgICAgICBvbmx5SW5WaWV3cG9ydDogdHJ1ZSxcclxuICAgICAgICAgIHBhZ2VVcERvd246dHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBcclxuICAgICAgICBtb3VzZXdoZWVsOntcclxuICAgICAgICAgIHNlbnNpdGl2aXR5OjEsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICBcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OjEuNSxcclxuICAgICAgICB3YXRjaE92ZXJmbG93OnRydWUsXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgICAvL3NsaWRlc1Blckdyb3VwOjEsXHJcbiAgICAgIFxyXG4gICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVkOjUwMCxcclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vaW50ZXJlc3RSYXRlXHJcblxyXG5jb25zdCBpbnRlcmVzdFJhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW50ZXJlc3RSYXRlJyk7XHJcblxyXG5pZihpbnRlcmVzdFJhdGUpe1xyXG4gIGludGVyZXN0UmF0ZS5mb3JFYWNoKGVsID0+e1xyXG4gICAgY29uc3QgaW50ZXJlc3RSYXRlSXRlbSA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnRlcmVzdFJhdGVfX2l0ZW0nKTtcclxuICAgIGludGVyZXN0UmF0ZUl0ZW0uZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBpbnRlcmVzdFJhdGVJdGVtLmZvckVhY2goZWwgPT57XHJcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vINCh0JrQoNCe0JvQmyBUTyBDT01QQVJFXHJcblxyXG5cclxuICBcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwnKTtcclxuY29uc3Qgc2xpZGVySW1hZ2VDb21wYXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBhcmVfX2l0ZW1zJyk7XHJcbmNvbnN0IGl0ZW1Db21wYXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBhcmVfX2l0ZW0nKTtcclxuXHJcblxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGFyZV9faXRlbXMgLml0ZW0tY29tcGFyZScpLmxlbmd0aCA8PSAyKXtcclxuICBpdGVtQ29tcGFyZS5mb3JFYWNoKCBlbD0+e1xyXG4gICAgZWwuc3R5bGUubWluV2lkdGggPSAnMjU3cHgnO1xyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5pZihzbGlkZXIpe1xyXG4gIGxldCBpc0Rvd24gPSBmYWxzZTtcclxubGV0IHN0YXJ0WDtcclxubGV0IHNjcm9sbExlZnQ7XHJcblxyXG5zbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICBpc0Rvd24gPSB0cnVlO1xyXG4gXHJcbiAgc3RhcnRYID0gZS5wYWdlWCAtIHNsaWRlci5vZmZzZXRMZWZ0O1xyXG4gIHNjcm9sbExlZnQgPSBzbGlkZXIuc2Nyb2xsTGVmdDtcclxuIFxyXG59KTtcclxuc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgaXNEb3duID0gZmFsc2U7XHJcbiAgXHJcbn0pO1xyXG5zbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcclxuICBpc0Rvd24gPSBmYWxzZTtcclxuIFxyXG59KTtcclxuc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgaWYoIWlzRG93bikgcmV0dXJuO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB4ID0gZS5wYWdlWCAtIHNsaWRlci5vZmZzZXRMZWZ0O1xyXG4gIGNvbnN0IHdhbGsgPSAoeCAtIHN0YXJ0WCkgKiAzOyAvL3Njcm9sbC1mYXN0XHJcbiAgc2xpZGVyLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0IC0gd2FsaztcclxuICBcclxufSk7XHJcblxyXG5cclxuc2xpZGVySW1hZ2VDb21wYXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgaXNEb3duID0gdHJ1ZTtcclxuIFxyXG4gIHN0YXJ0WCA9IGUucGFnZVggLSBzbGlkZXIub2Zmc2V0TGVmdDtcclxuICBzY3JvbGxMZWZ0ID0gc2xpZGVySW1hZ2VDb21wYXJlLnNjcm9sbExlZnQ7XHJcbiBcclxufSk7XHJcbnNsaWRlckltYWdlQ29tcGFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gIGlzRG93biA9IGZhbHNlO1xyXG4gIFxyXG59KTtcclxuc2xpZGVySW1hZ2VDb21wYXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XHJcbiAgaXNEb3duID0gZmFsc2U7XHJcbiBcclxufSk7XHJcbnNsaWRlckltYWdlQ29tcGFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gIGlmKCFpc0Rvd24pIHJldHVybjtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgeCA9IGUucGFnZVggLSBzbGlkZXIub2Zmc2V0TGVmdDtcclxuICBjb25zdCB3YWxrID0gKHggLSBzdGFydFgpICogMzsgLy9zY3JvbGwtZmFzdFxyXG4gIHNsaWRlckltYWdlQ29tcGFyZS5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIHdhbGs7XHJcbiAgXHJcbn0pO1xyXG5cclxuXHJcblxyXG4gIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKXtcclxuICBcclxuICAgIFxyXG4gICAgc2xpZGVySW1hZ2VDb21wYXJlLnNjcm9sbFRvcCA9IHNsaWRlci5zY3JvbGxUb3A7XHJcbiAgICBzbGlkZXJJbWFnZUNvbXBhcmUuc2Nyb2xsTGVmdCA9IHNsaWRlci5zY3JvbGxMZWZ0O1xyXG4gIFxyXG4gICAgXHJcbiAgICBcclxuICAgXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbiAgc2xpZGVySW1hZ2VDb21wYXJlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpe1xyXG4gXHJcbiAgICBcclxuICAgIHNsaWRlci5zY3JvbGxUb3AgPSBzbGlkZXJJbWFnZUNvbXBhcmUuc2Nyb2xsVG9wO1xyXG4gICAgc2xpZGVyLnNjcm9sbExlZnQgPSBzbGlkZXJJbWFnZUNvbXBhcmUuc2Nyb2xsTGVmdDtcclxuICBcclxuICAgXHJcbiAgICBcclxuICAgXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vL2hpc3RvcnkgYWN0aXZlXHJcblxyXG5jb25zdCBoaXN0b3J5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaXN0b3J5X19pdGVtJyk7XHJcblxyXG5pZihoaXN0b3J5SXRlbSl7XHJcbiAgaGlzdG9yeUl0ZW0uZm9yRWFjaCggZWw9PntcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGhpc3RvcnlJdGVtLmZvckVhY2goZWw9PntcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy9XRUJcclxuY29uc3Qgd2ViSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWJfX2l0ZW0nKTtcclxuXHJcbmlmKHdlYkl0ZW0pe1xyXG4gIHdlYkl0ZW0uZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIFxyXG4gICAgICB3ZWJJdGVtLmZvckVhY2goIGVsPT57XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBBUEFSVE1FTlRcclxuXHJcbmNvbnN0IGFwYXJ0bWVudEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXBhcnRtZW50X19pdGVtLXRhYnMnKTtcclxuYXBhcnRtZW50SXRlbS5mb3JFYWNoKCBlbD0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgYXBhcnRtZW50SXRlbS5mb3JFYWNoKCBlbD0+e1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vLyBBUEFSVE1FTlQgQUNDT1JESU9OXHJcblxyXG5jb25zdCBhY2NvcmRpb25BcGFydG1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWFwYXJ0bWVudCcpO1xyXG5cclxuaWYoYWNjb3JkaW9uQXBhcnRtZW50KXtcclxuICBhY2NvcmRpb25BcGFydG1lbnQuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgY29uc3QgYXBhcnRtZW50SXRlbSA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24tYXBhcnRtZW50X19pdGVtJyk7XHJcbiAgIFxyXG4gXHJcbiAgICBhcGFydG1lbnRJdGVtLmZvckVhY2goIGFjYyA9PntcclxuICAgICAgY29uc3QgYXBhcnRtZW50TGlzdCA9IGFjYy5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWFwYXJ0bWVudF9fbGlzdCcpO1xyXG4gICAgICBjb25zdCBhcGFydG1lbnRUaXRsZSA9IGFjYy5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWFwYXJ0bWVudF9fdGl0bGUnKTtcclxuICAgICAgY29uc3QgYXBhcnRtZW50TGluayA9IGFjYy5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWFwYXJ0bWVudF9fbGluaycpO1xyXG5cclxuICAgICAgaWYoYXBhcnRtZW50VGl0bGUpe1xyXG4gICAgICAgIGFwYXJ0bWVudFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBhY2MuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICBhcGFydG1lbnRUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgIGFwYXJ0bWVudExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihhcGFydG1lbnRMaW5rKXtcclxuICAgICAgICBhcGFydG1lbnRMaW5rLmZvckVhY2goIGVsID0+IHtcclxuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGFwYXJ0bWVudFRpdGxlLmlubmVyVGV4dCA9IGVsLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgYXBhcnRtZW50VGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGFwYXJ0bWVudExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGFjYy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICBcclxuICAgICAgICAgICAgYXBhcnRtZW50TGluay5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgfSk7XHJcbiAgIFxyXG4gIH0pO1xyXG59IFxyXG5cclxuXHJcblxyXG4vLyBQSE9UTy1BUEFSVE1FTlRcclxuXHJcblxyXG5cclxuY29uc3QgZmxhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGF0LWNvbnRlbnQnKTtcclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWNvbnRlbnQnKTtcclxuY29uc3Qgcm9vbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb29tLWNvbnRlbnQnKTtcclxuXHJcbmlmKGZsYXQpe1xyXG4gIGNvbnN0IHBob3RvQXBhcnRtZW50ID0gZmxhdC5xdWVyeVNlbGVjdG9yQWxsKCcucGhvdG8tYXBhcnRtZW50X19pdGVtJyk7XHJcbiAgcGhvdG9BcGFydG1lbnQuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwaG90b0FwYXJ0bWVudC5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbmlmKGhvbWUpe1xyXG4gIGNvbnN0IHBob3RvQXBhcnRtZW50ID0gaG9tZS5xdWVyeVNlbGVjdG9yQWxsKCcucGhvdG8tYXBhcnRtZW50X19pdGVtJyk7XHJcbiAgcGhvdG9BcGFydG1lbnQuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwaG90b0FwYXJ0bWVudC5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbmlmKHJvb20pe1xyXG4gIGNvbnN0IHBob3RvQXBhcnRtZW50ID0gcm9vbS5xdWVyeVNlbGVjdG9yQWxsKCcucGhvdG8tYXBhcnRtZW50X19pdGVtJyk7XHJcbiAgcGhvdG9BcGFydG1lbnQuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwaG90b0FwYXJ0bWVudC5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBwaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waG90by1hcGFydG1lbnQnKTtcclxuXHJcblxyXG5pZihwaG90byl7XHJcblxyXG4gIHBob3RvLmZvckVhY2goIGVsID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnRQbGFuID0gZWwucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtcGxhbicpOyBcclxuICAgIGNvbnN0IGNvbnRlbnRQaG90byA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXBob3RvJyk7IFxyXG4gICAgY29uc3QgYWRkUGhvdG8gPSBlbC5xdWVyeVNlbGVjdG9yKCcuYWRkUGhvdG8nKTtcclxuICAgIGNvbnN0IGFkZExheW91dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5hZGRMYXlvdXQnKTtcclxuICAgIGNvbnN0IGFkZFBhbm9yYW1hID0gZWwucXVlcnlTZWxlY3RvcignLmFkZFBhbm9yYW1hJyk7XHJcbiAgIFxyXG4gIFxyXG4gICAgaWYoYWRkUGhvdG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgIGNvbnRlbnRQaG90by5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGFkZFBob3RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgIGNvbnRlbnRQaG90by5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgYWRkTGF5b3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgIGNvbnRlbnRQbGFuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbn1cclxuXHJcbi8vU1RFUFxyXG5cclxuY29uc3QgaXRlbVN0ZXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1zdGVwJyk7XHJcbmlmKGl0ZW1TdGVwKXtcclxuICBpdGVtU3RlcC5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXN0ZXBfX2lucHV0Jyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXN0ZXBfX2xhYmVsJyk7XHJcblxyXG4gICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYoIWVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGVsLHtcclxuICAgICAgICBhdHRyaWJ1dGVzOnRydWVcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIH0pO1xyXG5cclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgXHJcbiAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gIFxyXG4gICAgaWYoIWVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICBpbnB1dC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShlbCx7XHJcbiAgICBhdHRyaWJ1dGVzOnRydWVcclxuICB9KTtcclxuICB9KTtcclxuICAgXHJcbiAgfSk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3Qgc3RlcExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1zdGVwX19saW5rJyk7XHJcblxyXG5pZihzdGVwTGluayl7XHJcbiAgc3RlcExpbmsuZm9yRWFjaChlbD0+e1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgXHJcbiAgICB9KTtcclxuICAgXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBzdGVwSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1zdGVwX19pbnB1dCcpO1xyXG5cclxuaWYoc3RlcElucHV0KXtcclxuICBzdGVwSW5wdXQuZm9yRWFjaChlbD0+e1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGlmKGVsLmNoZWNrZWQpe1xyXG4gICAgICAgIHN0ZXBMaW5rLmZvckVhY2goZWw9PntcclxuICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuLy9TVEVQU1xyXG5cclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0ZXAgLmFjdGl2ZS1zdGVwJykubGVuZ3RoID4gMSl7XHJcbiAgICBjb25zdCBzdGVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0ZXAnKTtcclxuICAgIGNvbnN0IHN0ZXBCb2R5ID0gc3RlcC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RlcF9fYm9keScpO1xyXG4gICAgc3RlcEJvZHkuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2dvJykpe1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcclxuICAgICAgfWVsc2UgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdnby1lcnJvcicpKXtcclxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkb25lLWVycicpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG59XHJcblxyXG5jb25zdCBkYXRlUGlja2VySW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY291bnQtZWRpdF9fc2VsZWN0IGlucHV0Jyk7XHJcblxyXG5pZiAoZGF0ZVBpY2tlcklucHV0cykge1xyXG5cdGRhdGVQaWNrZXJJbnB1dHMuZm9yRWFjaChpbnN0YW5jZSA9PiB7XHJcbiAgICBcclxuICBcclxuXHRcdGNvbnN0IGRhdGVwaWNrZXIgPSBuZXcgRGF0ZXBpY2tlcihpbnN0YW5jZSwge1xyXG5cdFx0XHRsYW5ndWFnZTogJ3J1JyxcclxuXHRcdFx0cHJldkFycm93OiAnPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiOFwiIHZpZXdCb3g9XCIwIDAgMTYgOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTUgMUw4IDdMMSAwLjk5OTk5OVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9zdmc+JyxcclxuXHRcdFx0bmV4dEFycm93OiAnPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiOFwiIHZpZXdCb3g9XCIwIDAgMTYgOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTUgMUw4IDdMMSAwLjk5OTk5OVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9zdmc+JyxcclxuXHRcdH0pO1xyXG5cdFxyXG5cdFx0aW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcignc2hvdycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoZGF0ZXBpY2tlci5waWNrZXIuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2RhdGVwaWNrZXItb3JpZW50LWJvdHRvbScpKSB7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKCdkYXRlcGlja2VyLW9yaWVudC1ib3R0b20nKVxyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZCgnZGF0ZXBpY2tlci1vcmllbnQtdG9wJylcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcclxuXHRcdGluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdkYXRlcGlja2VyLW9yaWVudC1ib3R0b20nLCAnZGF0ZXBpY2tlci1vcmllbnQtdG9wJylcclxuXHRcdH0pXHRcdFxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEFDQ09VTlQgREVMRVRFIENPTU1FTlRTXHJcblxyXG5cclxuXHJcbmNvbnN0IGJvZHlDb21lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRzLWRlc2NyaXB0aW9uX19ib2R5Jyk7XHJcblxyXG5pZihib2R5Q29tZW50cyl7XHJcbiAgYm9keUNvbWVudHMuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgbGV0IHN3aXBlQm94ID0gZWwucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWRlc2NyaXB0aW9uX19pdGVtJyk7XHJcbiAgICBsZXQgZGVsZXRlQ29tZW50ID0gZWwucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1jb21tZW50Jyk7XHJcbiAgICAgIHN3aXBlQm94LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVUb3VjaFN0YXJ0LCBmYWxzZSk7XHJcbiAgICAgIHN3aXBlQm94LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSwgZmFsc2UpO1xyXG4gIFxyXG4gIGxldCB4MSA9IG51bGxcclxuICBcclxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2ZW50KXtcclxuICAgICAgY29uc3QgZmlyc3RUb3VjaCA9IGV2ZW50LnRvdWNoZXNbMF1cclxuICAgICAgeDEgPSBmaXJzdFRvdWNoLmNsaWVudFhcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGV2ZW50KXtcclxuICAgICAgaWYgKCF4MSl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBsZXQgeDIgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcclxuICAgICAgbGV0IHhEaWZmID0geDIteDFcclxuICBcclxuICAgICAgaWYgKHhEaWZmPjApe1xyXG4gICAgICAgICAgc3dpcGVCb3guc3R5bGUucmlnaHQgPSAnMHB4JztcclxuICAgICAgICAgIGRlbGV0ZUNvbWVudC5zdHlsZS5yaWdodCA9ICcwcHgnO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgIHN3aXBlQm94LnN0eWxlLnJpZ2h0ID0gJzExMHB4JztcclxuICAgICAgICAgIGRlbGV0ZUNvbWVudC5zdHlsZS5yaWdodCA9ICctMThweCc7XHJcbiAgXHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgfSk7XHJcbiBcclxuXHJcbiBcclxufVxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPj0gNzY3KSB7XHJcbiAgY29uc3QgYWNjb3VudFZpZXdNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnQtdmlld01vZGUnKTtcclxuXHJcblxyXG4gIGlmKGFjY291bnRWaWV3TW9kZSl7XHJcbiAgICBjb25zdCBjb21tZW50cyA9IGFjY291bnRWaWV3TW9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudHMtZGVzY3JpcHRpb25fX2l0ZW0nKTtcclxuICBcclxuICAgIGNvbW1lbnRzLmZvckVhY2goIGVsID0+IHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcHJvbW9Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1hY2NvdW50X19ib2R5LS1wcm9tbycpO1xyXG5cclxuaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8PSA3NjcpIHtcclxuICBpZihwcm9tb0JvZHkpe1xyXG4gICAgY29uc3QgYnRuRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1hY2NvdW50X19idG4tLW1haWwnKTtcclxuICAgIGJ0bkVtYWlsLmFmdGVyKHByb21vQm9keSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INCf0J7QlNCi0JLQldCg0JTQmNCi0Kwg0J/QntCn0KLQo1xyXG5jb25zdCBtb2RhbENlbnRlckNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNlbnRlckNsb3NlJyk7XHJcblxyXG5mdW5jdGlvbiBoaWRlTW9kYWwoKSB7XHJcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93bi1tb2RhbCcpKSB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvd24tbW9kYWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93bi1tb2RhbCcpXHJcblx0fVxyXG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3ctaGlkZGVuJywgJ2JvZHktZGFyaycpXHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtYWRkLXNob3duXScpKSB7XHJcbiAgICBoaWRlTW9kYWwoKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtYWRkLXNob3duXScpLmRhdGFzZXQuYWRkU2hvd24pLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duLW1vZGFsJylcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmZsb3ctaGlkZGVuJylcclxuICB9XHJcbiAgXHJcbiAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbC1jZW50ZXJDbG9zZScpKSB7XHJcbiAgICBoaWRlTW9kYWwoKVxyXG4gIH1cclxuICBcclxuICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy5zaG93bi1tb2RhbCcpICYmICFlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1hZGQtc2hvd25dJykgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3duLW1vZGFsJykpIHtcclxuICAgIGhpZGVNb2RhbCgpXHJcbiAgfVxyXG4gIGlmIChlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1ib2R5LWRhcmtdJykpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keS1kYXJrJylcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnI2FkZC13b3JrcGxhY2UnKSkge1xyXG4gICAgY29uc3QgZGF0ZVBpY2tlcklucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvdW50LWVkaXRfX3NlbGVjdCBpbnB1dCcpO1xyXG5cdFx0bGV0IHdvcmtwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50LWVkaXRfX2Jsb2NrJyk7XHJcblx0XHRsZXQgd29ya3BsYWNlTmV4dCA9IHdvcmtwbGFjZS5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3BsYWNlLW5vdycpLmJlZm9yZSh3b3JrcGxhY2VOZXh0KTtcclxuXHJcbiAgICBpZiAoZGF0ZVBpY2tlcklucHV0cykge1xyXG4gICAgICBkYXRlUGlja2VySW5wdXRzLmZvckVhY2goaW5zdGFuY2UgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICBjb25zdCBkYXRlcGlja2VyID0gbmV3IERhdGVwaWNrZXIoaW5zdGFuY2UsIHtcclxuICAgICAgICAgIGxhbmd1YWdlOiAncnUnLFxyXG4gICAgICAgICAgcHJldkFycm93OiAnPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiOFwiIHZpZXdCb3g9XCIwIDAgMTYgOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTUgMUw4IDdMMSAwLjk5OTk5OVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9zdmc+JyxcclxuICAgICAgICAgIG5leHRBcnJvdzogJzxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjhcIiB2aWV3Qm94PVwiMCAwIDE2IDhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE1IDFMOCA3TDEgMC45OTk5OTlcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPjwvc3ZnPicsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgIGluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3cnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGlmIChkYXRlcGlja2VyLnBpY2tlci5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGF0ZXBpY2tlci1vcmllbnQtYm90dG9tJykpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkYXRlcGlja2VyLW9yaWVudC1ib3R0b20nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2RhdGVwaWNrZXItb3JpZW50LXRvcCcpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgICAgaW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcignaGlkZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdkYXRlcGlja2VyLW9yaWVudC1ib3R0b20nLCAnZGF0ZXBpY2tlci1vcmllbnQtdG9wJylcclxuICAgICAgICB9KVx0XHRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cdH1cclxuXHRcclxufSk7XHJcblxyXG5cclxuXHJcbi8vQUNDT1VOVCBBR0VOVCBQQVJUTkVSUyBUQUJTXHJcblxyXG5jb25zdCBwYXJ0bmVyc1RhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3VudC1wYXJ0bmVyc19faXRlbS10YWJzJyk7XHJcbmNvbnN0IGFjY291bnRQYXJ0bmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50LXBhcnRuZXJzX19jb250ZW50Jyk7XHJcbmNvbnN0IGFjY291bnRQYXJ0bmVyc1RhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3VudC1wYXJ0bmVyc19fYm9keScpO1xyXG5cclxuaWYoYWNjb3VudFBhcnRuZXJzKXtcclxuICBhY2NvdW50UGFydG5lcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWNjb3VudC1wYXJ0bmVyc19faXRlbS10YWJzJykpIHtcclxuICAgICAgY29uc3QgdGFic1BhdGggPSBlLnRhcmdldC5kYXRhc2V0LnBhcnRuZXJzUGF0aDtcclxuICAgICAgcGFydG5lcnNIYW5kbGVyKHRhYnNQYXRoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgcGFydG5lcnNIYW5kbGVyID0gKHBhdGgpID0+IHtcclxuICBwYXJ0bmVyc1RhYnMuZm9yRWFjaCggZWw9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICBhY2NvdW50UGFydG5lcnNUYWJzLmZvckVhY2goIGVsPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFydG5lcnMtcGF0aD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICBcclxuICBhY2NvdW50UGFydG5lcnNUYWJzLmZvckVhY2goZWwgPT4geyBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYXJ0bmVycy10YXJnZXQ9XCIke3BhdGh9XCJdYCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcblxyXG4vLyBBQ0NPVU5UIENBUlQgVEFCU1xyXG5jb25zdCBjYXJ0VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvdW50LWNhcnRfX2l0ZW0nKTtcclxuY29uc3QgYWNjb3VudENhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudC1jYXJ0Jyk7XHJcbmNvbnN0IGFjY291bnRDYXJ0VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvdW50LWNhcnRfX3RhYnMtY29udGVudCcpO1xyXG5cclxuaWYoYWNjb3VudENhcnQpe1xyXG4gIGFjY291bnRDYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY291bnQtY2FydF9faXRlbScpKSB7XHJcbiAgICAgIGNvbnN0IHRhYnNQYXRoID0gZS50YXJnZXQuZGF0YXNldC5jYXJ0UGF0aDtcclxuICAgICAgY2FydEhhbmRsZXIodGFic1BhdGgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBjYXJ0SGFuZGxlciA9IChwYXRoKSA9PiB7XHJcbiAgY2FydFRhYnMuZm9yRWFjaCggZWw9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICBhY2NvdW50Q2FydFRhYnMuZm9yRWFjaCggZWw9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jYXJ0LXBhdGg9XCIke3BhdGh9XCJdYCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgXHJcbiAgYWNjb3VudENhcnRUYWJzLmZvckVhY2goZWwgPT4geyBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jYXJ0LXRhcmdldD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gRkxBVC1CVE5cclxuXHJcbmNvbnN0IGZsYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxhdC1idG4nKTtcclxuXHJcbmlmKGZsYXRCdG4pe1xyXG4gIGZsYXRCdG4uZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBNRVNTQUdFIEFDQ09VTlRcclxuXHJcbmNvbnN0IG1lc3NhZ2VJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxlZnQtbWVzc2FnZV9faXRlbScpO1xyXG5cclxuaWYobWVzc2FnZUl0ZW0pe1xyXG4gIG1lc3NhZ2VJdGVtLmZvckVhY2goIGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIG1lc3NhZ2VJdGVtLmZvckVhY2goIGVsID0+IHtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20tbWVzc2FnZV9faW1hZ2VzJyk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gIGlmKGltYWdlcyl7XHJcblxyXG4gICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcudG9GaXgnKSAmJiAhZS50YXJnZXQuY2xvc2VzdCgnLmJvdHRvbS1tZXNzYWdlX19pbWFnZXMnKSkge1xyXG4gICAgICBpbWFnZXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcclxuICAgIH1cclxuICBcclxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcudG9GaXgnKSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGltYWdlcy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpXHJcbiAgICB9XHRcdFxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy8gQlROLUJPUkRFUiBBQ1RJVkVcclxuXHJcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ucy1jbGljaycpO1xyXG5cclxuaWYoYnV0dG9ucyl7XHJcbiAgY29uc3QgYnV0dG9uID0gYnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWJvcmRlcicpO1xyXG4gIGJ1dHRvbi5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBidXR0b24uZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcbi8vIENBTENcclxuXHJcbmNvbnN0IG1vcnRnYWdlQm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLW1vcnRnYWdlLS1ib3R0b20nKTtcclxuXHJcbmlmKG1vcnRnYWdlQm90dG9tKXtcclxuICBcclxubGV0IGNhbGNUdG90YWxDb3VudGVyID0gMCwgY2FsY1RvdGFsU3RhcnQsIGNhbGNUb3RhbEVuZCwgY2FsY1RvdGFsRW5kTW92ZSwgY2FsY1RvdGFsRGVsdGEgPSAwO1xyXG5cclxubW9ydGdhZ2VCb3R0b20uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgIGZ1bmN0aW9uKGUpIHtcclxuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gXHJcblx0aWYgKCFjYWxjVG90YWxTdGFydCB8fCBjYWxjVG90YWxFbmRNb3ZlKSB7XHJcblx0XHRjYWxjVG90YWxTdGFydCA9IGNhbGNUb3RhbEVuZCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcclxuXHR9XHJcblxyXG5cdGVsc2Uge1xyXG5cdFx0Y2FsY1RvdGFsU3RhcnQgPSBjYWxjVG90YWxFbmQ7XHJcblx0XHRjYWxjVG90YWxFbmQgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlbllcclxuXHR9XHJcblxyXG5cclxuXHRjYWxjVG90YWxEZWx0YSArPSAoY2FsY1RvdGFsRW5kIC0gY2FsY1RvdGFsU3RhcnQpXHJcblxyXG4gICAgaWYgKGNhbGNUdG90YWxDb3VudGVyICUgMiA9PSAwKSB7XHJcbiAgXHJcbiAgICAgIGNhbGNUb3RhbERlbHRhXHJcbiAgICAgIGlmKGNhbGNUb3RhbERlbHRhPD0wKXtcclxuICAgICAgICBjYWxjVG90YWxNb3ZlRW5kXHJcbiAgICAgICBcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgbW9ydGdhZ2VCb3R0b20uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtjYWxjVG90YWxEZWx0YX1weClgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgIFxyXG5cdFxyXG5cdH1cclxuXHJcbiAgXHJcblxyXG5cclxuXHRjYWxjVHRvdGFsQ291bnRlcisrXHJcblx0Y2FsY1RvdGFsRW5kTW92ZSA9IGZhbHNlO1xyXG59KVxyXG5cclxubW9ydGdhZ2VCb3R0b20uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAgY2FsY1RvdGFsTW92ZUVuZClcclxubW9ydGdhZ2VCb3R0b20uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCAgY2FsY1RvdGFsTW92ZUVuZClcclxuXHJcbmZ1bmN0aW9uIGNhbGNUb3RhbE1vdmVFbmQoZSkge1xyXG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcblx0XHJcblx0Y2FsY1RvdGFsRW5kTW92ZSA9IHRydWU7XHJcbn1cclxufVxyXG5cclxuXHJcbi8vIHBheU9mZl9fYnRuXHJcblxyXG5jb25zdCBwYXlPZmZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5T2ZmX19idG4nKTtcclxuXHJcbmlmKHBheU9mZkJ0bil7XHJcbiAgcGF5T2ZmQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBwYXlPZmZCdG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyZWVuJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBNWSBPQkpFQ1RTXHJcblxyXG5jb25zdCBhY2NNeU9iamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudC1NeW9iamVjdHMnKTtcclxuXHJcblxyXG5pZihhY2NNeU9iamVjdHMpe1xyXG4gIFxyXG4gXHJcbiAgY29uc3QgaXRlbUNob2ljZUJvZHkgPSBhY2NNeU9iamVjdHMucXVlcnlTZWxlY3RvckFsbCgnLmFjY291bnQtTXlvYmplY3RzX19pdGVtLWJvZHktLWNob2ljZScpO1xyXG4gIGl0ZW1DaG9pY2VCb2R5LmZvckVhY2goIGVsID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignLml0ZW0tc3RlcF9faW5wdXQnKTtcclxuICAgIGNvbnN0IGxhYmVsID0gZWwucXVlcnlTZWxlY3RvcignLml0ZW0tc3RlcF9fbGFiZWwnKTtcclxuICAgICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICBcclxuICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgaWYoIWVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShlbCx7XHJcbiAgICAgICAgICBhdHRyaWJ1dGVzOnRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgXHJcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgIFxyXG4gICAgICBpZighZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShlbCx7XHJcbiAgICAgIGF0dHJpYnV0ZXM6dHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB9KTtcclxuICBcclxuICBcclxuICB9KTtcclxuIFxyXG59XHJcblxyXG5jb25zdCBhY2NTZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjLXNlbycpO1xyXG5jb25zdCBsZWZ0QWNjb3VudENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1hY2NvdW50X19jb250ZW50Jyk7XHJcbmlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPD0gOTUwKSB7XHJcbiAgaWYoYWNjU2VvKXtcclxuICAgIGxlZnRBY2NvdW50Q29udGVudC5hZnRlcihhY2NTZW8pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZmluZE91dEhvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW5kLW91dC1ob3cnKTtcclxuY29uc3Qgc3RlcFR3b04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RlcC10d29fX25vdGlmeS1jaG9pY2UnKTtcclxuY29uc3QgY29udGVudFN0ZXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1zdGVwJyk7XHJcblxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS1wYWtjTGlnaHQnKSl7XHJcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8PSA5NTApIHtcclxuICAgICAgc3RlcFR3b04uYmVmb3JlKGZpbmRPdXRIb3cpO1xyXG4gIH1cclxufVxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS1wYWtjTWFyaycpKXtcclxuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDw9IDk1MCkge1xyXG4gICAgICBjb250ZW50U3RlcC5hZnRlcihmaW5kT3V0SG93KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5pZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDw9IDk1MCkge1xyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dE5ld0J1aWxkaW5ncycpKXtcclxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXROZXdCdWlsZGluZ3NfX2NvbnRhY3RzJyk7XHJcbiAgICBjb25zdCBhYm91dE5ld0J1aWxkaW5nc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXROZXdCdWlsZGluZ3NfX2xpc3QnKTtcclxuICAgIGFib3V0TmV3QnVpbGRpbmdzTGlzdC5hZnRlcihjb250YWN0QnRuKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEFycm93KCkge1xyXG5cdGxldCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRhcnJvdy5jbGFzc0xpc3QuYWRkKCd0cy1hcnJvdycpO1xyXG5cdGFycm93LmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiX2ljb24tYXJyb3dcIj48L2Rpdj4nXHJcblxyXG5cdCByZXR1cm4gYXJyb3dcclxufVxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LXN0eWxlZCcpKSB7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdC1zdHlsZWQnKS5mb3JFYWNoKGVsID0+IHtcclxuXHRcdG5ldyBUb21TZWxlY3QoZWwsIHtcclxuXHRcdFx0b25Jbml0aWFsaXplOmZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoaXMuY29udHJvbC5hcHBlbmQoY3JlYXRlU2VsZWN0QXJyb3coKSlcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblx0XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1zdHlsZWQtbXVsdGlwbGUnKSkge1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3Qtc3R5bGVkLW11bHRpcGxlJykuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRuZXcgVG9tU2VsZWN0KGVsLCB7XHJcblx0XHRcdHBsdWdpbnM6IFsnY2hlY2tib3hfb3B0aW9ucyddLFxyXG5cdFx0XHRoaWRlUGxhY2Vob2xkZXI6IHRydWUsXHJcblx0XHRcdHJlbmRlcjoge1xyXG5cdFx0XHRcdGl0ZW06IGZ1bmN0aW9uKGRhdGEsIGVzY2FwZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICc8ZGl2PjxmaWd1cmU+PC9maWd1cmU+JyArIGVzY2FwZShkYXRhLnRleHQpICsgJzwvZGl2Pic7XHJcblx0XHRcdFx0fSxcclxuICAgICAgICBvcHRpb246IGZ1bmN0aW9uKGRhdGEsIGVzY2FwZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICc8ZGl2PicgKyBlc2NhcGUoZGF0YS50ZXh0KSArICc8ZmlndXJlPjwvZmlndXJlPjwvZGl2Pic7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0b25Jbml0aWFsaXplOmZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoaXMuY29udHJvbC5hcHBlbmQoY3JlYXRlU2VsZWN0QXJyb3coKSlcclxuXHRcdFx0XHR0aGlzLm9uKCdpdGVtX3NlbGVjdCcsIChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUl0ZW0oaXRlbSlcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge3RoaXMud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1oaWRkZW4nKX0sIDApO1xyXG5cclxuXHRcdFx0XHRcdHNob3dTZWxlY3RNb3JlKHRoaXMuY29udHJvbClcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0c2hvd1NlbGVjdE1vcmUodGhpcy5jb250cm9sKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkNoYW5nZTpmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRzaG93U2VsZWN0TW9yZSh0aGlzLmNvbnRyb2wpXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblxyXG5cdGZ1bmN0aW9uIHNob3dTZWxlY3RNb3JlKGNvbnRyb2wpIHtcclxuXHRcdGxldCBjb3Ryb2xTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRyb2wpXHJcblx0XHRsZXQgZWxsaXBzaXMgPSA0NTtcclxuXHRcdGxldCBjb250cm9sUmlnaHRCb3JkZXIgPSBjb250cm9sLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0IC0gcGFyc2VJbnQoY290cm9sU3R5bGUucGFkZGluZ1JpZ2h0KSAtIGVsbGlwc2lzXHJcblx0XHRsZXQgaXRlbXMgPSBjb250cm9sLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtJylcclxuXHRcdGxldCBpID0gaXRlbXMubGVuZ3RoIC0gMVxyXG5cclxuXHRcdGNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZSgndHMtbW9yZScpXHJcblx0XHRpdGVtcy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcclxuXHRcdH0pO1xyXG5cclxuXHRcdHdoaWxlKGl0ZW1zLmxlbmd0aCAmJiBpdGVtc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCA+IGNvbnRyb2xSaWdodEJvcmRlciAmJiBpID4gMCkge1xyXG5cdFx0XHRpdGVtc1tpXS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKVxyXG5cdFx0XHRjb250cm9sLmNsYXNzTGlzdC5hZGQoJ3RzLW1vcmUnKVxyXG5cclxuXHRcdFx0aS0tXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmlmICh0YWJzKSB7XHJcblxyXG5cclxuICB0YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYnMtbWFpbl9fYnRuJykpIHtcclxuICAgICAgY29uc3QgdGFic1BhdGggPSBlLnRhcmdldC5kYXRhc2V0LnRhYnNQYXRoO1xyXG4gICAgICB0YWJzSGFuZGxlcih0YWJzUGF0aCk7XHJcbiAgICB9O1xyXG5cclxuICAgXHJcblxyXG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bi1tZW51X19pdGVtLXRha2VPZmYnKSl7XHJcbiAgICAgIGNvbnN0IGZpbHRlcnRha2VQYXRoID0gZS50YXJnZXQuZGF0YXNldC52YWx1ZTtcclxuICAgIFxyXG4gICAgICBmaWx0ZXJUYWtlT2ZmSGFuZGxlcihmaWx0ZXJ0YWtlUGF0aCk7XHJcblxyXG4gICAgICAgfTtcclxuICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGFwYXJ0bWVudE1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGVwLXR3b19fY29udGVudC0tZGVrc3RvcCcpO1xyXG5jb25zdCBtb2RhbEFwYXJ0bWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hcGFydG1lbnRfX2NvbnRlbnQnKTtcclxuXHJcbmlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPD0gOTUwKSB7XHJcblxyXG4gIGlmKGFwYXJ0bWVudE1vZGFsQ29udGVudCl7XHJcbiAgICBtb2RhbEFwYXJ0bWVudC5iZWZvcmUoYXBhcnRtZW50TW9kYWxDb250ZW50KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyByb2xsVXAgXHJcbmNvbnN0IHJvbGxVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb2xsVXAnKTtcclxuaWYocm9sbFVwKXtcclxuICByb2xsVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXRyb1NlYXJjaCcpLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICB9KTtcclxufVxyXG5cclxuLy9EUkFXXHJcblxyXG5jb25zdCBkcmF3QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1kcmF3Jyk7XHJcbmlmKGRyYXdCdG4pe1xyXG4gIGRyYXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hCeU1hcCcpLmNsYXNzTGlzdC5hZGQoJ2RyYXcnKTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgZHJhd1N0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhdy1zdG9wJyk7XHJcbmlmKGRyYXdTdG9wKXtcclxuICBkcmF3U3RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaEJ5TWFwJykuY2xhc3NMaXN0LnJlbW92ZSgnZHJhdycpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUVBLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxTQUFSLENBQWtCQyxnQkFBdkIsRUFBeUM7RUFBQSxJQUU5QkMsWUFGOEIsR0FFdkMsU0FB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
