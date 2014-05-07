/**
 * hulk - библиотека для манипуляции DOMом.
 * Ниже описаны функции, которые должны присутствовать в данной библиотеке.
 * Реализовать hulk таким образом, чтобы можно было вызывать цепочку функций:
 * @example hulk.select('some-selector').addClass('cls').append('div')
 */
function Hulk(input) {
    if (this === window) {
        return new Hulk(input);
    }

    var data = (input || []);

    this.getData = function () {
        return data;
    };
    /**
     * @method select
     * Функция, с которой начинается манипуляция dom-объектов.
     * Возвращает hulk-объект, который содержит массив html-элементов, удовлетворяющих переданному селектору.
     * Все дальнейшие манипуляции из цепочки вызовов будут применены к элементам из данной выборки.
     * @param {String} selector css-селектор.
     */

    this.select = function (selector) {
        data = document.querySelectorAll(selector);
        return this;
    };


    /**
     * @method addClass
     * Добавляет классы каждому элементу выборки.
     * @param {String} clsNames Имена классов, разделенных пробелом.
     */

    this.addClass = function (calssName) {
        var i;

        for (i in data) {
            data[i].className += ' ' + calssName;
        }

        return this;
    };

    /**
     * @method append
     * Добавляет дочерний html-элемент каждому элементу выборки.
     * @param {String} Имя тега, добавляемого элемента.
     */
    this.append = function (tagName) {
        var i;
        var child;

        for (i in data) {
            child = document.createElement(tagName);
            data[i].appendChild(child);
        }

        return this;
    };
    /**
     * @method attr Если при вызове передается один аргумент, возвращается значение атрибута,
     * если передается два аргумента, то атрибуту присваивается значение второго аргумента.
     * @param {String} attrName Имя атрибута.
     * @param {Number/String} [value] Значение атрибута.
     */

    this.attr = function (attrName, value) {
        if (value) {
            var i;

            for (i in data) {
                data[i].setAttribute(attrName, value);
            }

            return this;
        } else {
            return data[0].getAttribute(attrName);
        }
    };

    /**
     * @method children
     * Возвращает всех непосредственных наследников первого элемента из выборки, обернутых в hulk-объект.
     */

    this.children = function () {
        return new Hulk(data[0].childNodes);
    };

    /**
     * @method css Если при вызове передается один аргумент, возвращается значение css-атрибута,
     * если передается два аргумента, то css-атрибуту присваивается значение второго аргумента.
     * @param {String} cssAttrName Имя css-атрибута.
     * @param {Number/String} value Значение css-атрибута.
     */

    this.css = function (cssAttrName, value) {
        if (value) {
            var i;

            for (i in data) {
                data[i].style[cssAttrName] = value;
            }

            return this;
        } else {
            return data[0].style[cssAttrName];
        }
    };

    /**
     * @method empty
     * Очищает все внутреннее содержимое элементов из выборки.
     */

    this.empty = function() {
        var i;

        for (i in data) {
            data[i].innerHTML = '';
        }
    }

    /**
     * @method find
     * Производит выборку по дочерним элементам выборки, удовлетворяющим переданному селектору.
     * @param {String} selector css-селектор для выборки.
     */

    this.find = function(selector) {
        var i;
        var newData = [];

        for (i in data) {
            newData.concat(data[i].querySelectorAll(selector));
        }

        return this;
    }

    /**
     * @method hasClass
     * Проверяет наличие класса для элементов выборки.
     * @param {String} className Имя класса, наличие которого проверяется.
     * @return {Boolean} Возвращает true, если все элементы выборки содержат переданный класс.
     */

    this.hasClass = function (className) {
        var i,
            res = true,
            re = new RegExp(className, 'g');

        for (i in data) {
            res = res && re.test(data[i].className);
        }

        return res;
    };

    /**
     * @method html
     * Возвращает html-содержимое первого элемента выборки.
     * @return {HTMLElement} html-содержимое первого элемента из выборки.
     */

    this.html = function () {
        return data[0].innerHTML;
    };

    /**
     * @method on
     * Добавляет подписчика на событие для элементов выборки.
     * @param {String} eventName Имя события, на которое будет производиться подписка.
     * @param {Function} func Функция-подписчик.
     */

    this.on = function (eventName, func) {
        var i;

        for (i in data) {
            console.log(data[i])
            data[i].addEventListener(eventName, func);
        }

        return this;
    };

    /**
     * @method parent
     * Возвращает родительский элемент первого элемента выборки.
     */

    this.parent = function () {
        return data[0].parentNode;
    };

    /**
     * @method remove
     * Удаляет из документа все DOM-элементы выборки.
     */

    this.remove = function () {
        var i;

        for (i in data) {
            data[i].remove();
        }

        return this;
    };
    /**
     * @method removeAttr
     * Удаляет атрибут из элементов выборки.
     * @param {String} attrName Удаляемый атрибут.
     */

    this.removeAttr = function (attrName) {
        var i;

        for (i in data) {
            data[i].removeAttribute(attrName);
        }

        return this;
    };

    /**
     * @method removeClass
     * Удаляет css-классы для элементов выборки.
     * @param {String} clsNames Имена классов, разделенных пробелом.
     */

    this.removeClass = function (clsNames) {
        var i;

        for (i in data) {
            data[i].className = data[i].className.replace(re, '').replace(/\s{2,}/, ' ').replace(/^\s*|\s*$/g, '');
        }

        return this;
    };
    /**
     * @method toggleClass
     * Добавляет (если классы отсутствуют) и удаляет (если классы присутствуют) у элементов выборки.
     * @param {String} clsNames Имена классов, разделенных пробелом.
     */

    this.toggleClass = function (clsNames) {
        var i,
            re = new RegExp(clsNames, 'g');

        for (i in data) {
            if (re.test(data[i].className)) {
                data[i].className = data[i].className.replace(re, '');
            } else {
                data[i].className += ' ' + clsNames;
            }
            //не обязательно. для красоты
            data[i].className = data[i].className.replace(/\s{2,}/, ' ').replace(/^\s*|\s*$/g, '');
        }

        return this;
    };

    /**
     * @method unbind
     * Удаляет подписчика на событие для элементов выборки.
     * @param {String} eventName Имя события, для которого будет производиться удаление подписчика.
     * @param {Function} func Удаляемая функция-подписчик.
     */

    this.unbind = function (eventName, func) {
        var i;

        for (i in data) {
            data[i].removeEventListener(eventName, func);
        }

        return this;
    };


    /**
     * @method wrap
     * Оборачивает каждый элемент выборки тегом, имя которого передано в качестве первого аргумента.
     * @param {String} tagName Имя тега.
     */

    this.wrap = function (tagName) {
        var i;

        for (i in data) {
            data[i].outerHTML = '<' + tagName + '>' + data[i].outerHTML + '</' + tagName + '>';
        }
        return this;
    };
}