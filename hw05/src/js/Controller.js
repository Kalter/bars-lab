function GoodsListCtrl($scope){

    $scope.body = document.getElementsByTagName('body')[0];

    $scope.bool = false;

    $scope.data = [
        {
            name:'15.6" [Home] Ноутбук DNS (0164783) (HD)',
            price: '20 490 руб.',
            src: 'src/img/1.jpg',
            inBasket: 0
        },
        {
            name:'17.3" [Gamer] Ноутбук DNS (0801153) (HD+)',
            price: '33 990 руб.',
            src: 'src/img/2.jpg',
            inBasket: 0
        },
        {
            name:'Компьютер DNS Prestige XL [0800795]',
            price: '59 990 руб.',
            src: 'src/img/3.jpg',
            inBasket: 0
        },
        {
            name:'ПО Microsoft " Windows 8.1 " Русская версия DVD (ВОХ) [WN7-00937]',
            price: '6 090 руб.',
            src: 'src/img/4.jpg',
            inBasket: 0
        },
        {
            name:'15.6" [Home] Ноутбук DNS (0164783) (HD)',
            price: '20 490 руб.',
            src: 'src/img/1.jpg',
            inBasket: 0
        },
        {
            name:'17.3" [Gamer] Ноутбук DNS (0801153) (HD+)',
            price: '33 990 руб.',
            src: 'src/img/2.jpg',
            inBasket: 0
        },
        {
            name:'Компьютер DNS Prestige XL [0800795]',
            price: '59 990 руб.',
            src: 'src/img/3.jpg',
            inBasket: 0
        },
        {
            name:'ПО Microsoft " Windows 8.1 " Русская версия DVD (ВОХ) [WN7-00937]',
            price: '6 090 руб.',
            src: 'src/img/4.jpg',
            inBasket: 0
        },
        {
            name:'15.6" [Home] Ноутбук DNS (0164783) (HD)',
            price: '20 490 руб.',
            src: 'src/img/1.jpg',
            inBasket: 0
        },
        {
            name:'17.3" [Gamer] Ноутбук DNS (0801153) (HD+)',
            price: '33 990 руб.',
            src: 'src/img/2.jpg',
            inBasket: 0
        },
        {
            name:'Компьютер DNS Prestige XL [0800795]',
            price: '59 990 руб.',
            src: 'src/img/3.jpg',
            inBasket: 0
        },
        {
            name:'ПО Microsoft " Windows 8.1 " Русская версия DVD (ВОХ) [WN7-00937]',
            price: '6 090 руб.',
            src: 'src/img/4.jpg',
            inBasket: 0
        }
    ];

    $scope.add = function(element){
        element.d.inBasket++;
        $scope.sum += parseInt(element.d.price.replace(/\s/g, ''))
    }

    $scope.delete = function(element){
        element.good.inBasket--;
        $scope.sum -= parseInt(element.good.price.replace(/\s/g, ''))
    }

    $scope.sum = 0;

}