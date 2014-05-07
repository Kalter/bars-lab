/**
 * Odin - библиотека, добавляющая в javascript ООП в схожем с ООП-языками виде.
 * Позволяет определять классы, добавлять поля, методы (экземпляра и статические),
 * наследовать один класс от другого, создавать экземпляры класса.
 */
Odin = {

/**
 * @method Odin.def
 * Объявление класса.
 * @example
 *      // Объявление класса
 *      Odin.def('MyClass', {
 *			// Конструктор класса
 *			constructor: function(cfg){
 *				this.name = cfg.name;
 *			},
 *
 *          staticMethods: {
 *              someStaticMethod: function(){
 *
 *              }
 *          },
 *
 *          staticFields: {
 *              frenchGreeting: 'Bonjour',
 *              englishGreeting: 'Hello'
 *          },
 *
 *          fields: {
 *              name: 'MyClassName'
 *          },
 *
 *          methods: {
 *              greeting: function(){
 *                  console.log(MyClass.frenchGreeting + ', ' + this.name);
 *
 * 					// вызов переопределенного метода из родительского класса
 *					this.greeting.callSuper();
 *              }
 *          }
 *      });
 *
 *      var myClass = Odin.create('MyClass');
 *      myClass.greeting(); // В консоли должно быть напечатано 'Bonjour, MyClass'
 *
 * @param {String} className Имя класса
 * @param {Object} config Объект, содержащий конфигурацию объявляемого класса.
 */
define: function(className, config){
    var i;
    window[className] = config['constructor'];
    if(config.staticMethods){
        for(i in config.staticMethods){
            window[className][i] = config.staticMethods[i];
        }
    }
    if(config.staticFields){
        for(i in config.staticFields){
            window[className][i] = config.staticFields[i];
        }
    }
    if(config.fields){
        for(i in config.fields){
            window[className].prototype[i] = config.fields[i];
        }
    }
    if(config.methods){
        for(i in config.methods){
            window[className].prototype[i] = config.methods[i];
        }
    }
},
/**
 * @method Odin.create
 * Создание экземпляра класса.
 * @param {String} className Имя класса
 * @params {Object} config Объект, содержащий конфигурацию создаваемого экземпляра.
 * При создании объекта будет передан в конструктор класса.
 * @example
 *     Odin.create('MyClass', {name: 'Odin'});
 */

    create: function(className, config){
        return new window[className](config);
    }
}

