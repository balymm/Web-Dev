export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string[];
  rating: string;
  category: string;
  like: number;
  liked: boolean;
  currentImageIndex: number;
}

export const products = [
  {
    id: 1,
    name: 'Кошкин Рай когтеточка',
    price: 3498,
    description: 'Кошкин Рай когтеточка 2125 бежевый',
    
    img:[
      'https://resources.cdn-kaspi.kz/img/m/p/hb9/h73/86349420560414.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h81/hea/87034609139742.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h58/h14/87034609205278.png?format=gallery-large'
    ],
    rating: '4.9',
    category: 'Когтеточки',
    like: 1,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 2,
    name: 'Когтеточка sku',
    price: 1500,
    description: 'Когтеточка sku мультиколор, коричневый',
    
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/h75/h4f/68656990191646.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h2a/h70/68656995008542.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/haf/h9a/68657003135006.jpg?format=gallery-large'
    ],
    rating: '5.0',
    category: 'Когтеточки',
    like: 1,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 3,
    name: 'Когтеточка',
    price: 849,
    description: 'Когтеточка серый',
    
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h92/h29/84000333201438.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h60/h55/84000334118942.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h4e/hc9/84000335167518.jpg?format=gallery-large'
    ],
    rating: '5.0',
    category: 'Когтеточки',
    like: 1,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 4,
    name: 'SHOPIK игровой комплекс',
    price: 39900,
    description: 'SHOPIK игровой комплекс IKS серый',
    
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hb2/hfb/85849368494110.jpg?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/hd2/h6c/85849368559646.jpg?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/h07/h67/85849368625182.jpg?format=gallery-large'
  ],
    rating: '5.0',
    category: 'Игровые комплексы',
    like: 1,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 5,
    name: 'Когтедралка',
    price: 1600,
    description: 'Когтедралка когтеточка 100001 коричневый',
    
    img: ['https://resources.cdn-kaspi.kz/img/m/p/p62/pdf/4512403.png?format=gallery-large',
    'https://resources.cdn-kaspi.kz/img/m/p/p2a/pdf/4512405.png?format=gallery-large',
    'https://resources.cdn-kaspi.kz/img/m/p/p0e/pdf/4512406.png?format=gallery-large'
  ],
    rating: '4.9',
    category: 'Когтеточки',
    like: 1,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 6,
    name: 'Когтеточка',
    price: 2850,
    description: 'Когтеточка белый, черный',
    
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h54/h7f/86649642516510.jpg?format=gallery-large',
    'https://resources.cdn-kaspi.kz/img/m/p/h0f/haa/86649642582046.jpg?format=gallery-large',
    'https://resources.cdn-kaspi.kz/img/m/p/h0f/haa/86649642582046.jpg?format=gallery-large'
  ],
    rating: '5.0',
    category: 'Когтеточки',
    like: 1,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 7,
    name: 'Игровой комплекс',
    price: 45000,
    description: 'Игровой комплекс Z015126см белый, коричневый',
    
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h2d/h7e/81176807899166.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/hed/84982523363358.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h61/84982523428894.png?format=gallery-large'
  ],
    rating: '4.9',
    category: 'Игровые комплексы',
    like: 1,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 8,
    name: 'Игровой комплекс Симба',
    price: 24999,
    description: 'Игровой комплекс Симба 343456 бежевый',
      
      img: ['https://resources.cdn-kaspi.kz/img/m/p/p0d/pf5/12618580.png?format=gallery-large',
    'https://resources.cdn-kaspi.kz/img/m/p/pbb/p56/12618581.jpeg?format=gallery-large',
    'https://resources.cdn-kaspi.kz/img/m/p/pbb/p56/12618581.jpeg?format=gallery-large'
    ],
      rating: '5.0',
      category: 'Игровые комплексы',
      like: 1,
      liked: false,
      currentImageIndex: 0,
    },
    {
      id: 9,
      name: 'Игровой комплекс',
      price: 9900,
      description: 'Игровой комплекс KIK25 бежевый',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/p9e/p1d/23296812.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p71/p24/23296814.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p9e/p1d/23296812.jpeg?format=gallery-large'
    ],
      rating: '0.0',
      category: 'Игровые комплексы',
      like: 1,
      liked: false,
      currentImageIndex: 0,
    },
    {
      id: 10,
      name: 'Игровой комплекс',
      price: 7465,
      description: '81 см черныйИгровой комплекс kit172 розовый',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/pba/p6a/20441787.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pba/p6a/20441787.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pba/p6a/20441787.jpg?format=gallery-large'
    ],
      rating: '0.0',
      category: 'Игровые комплексы',
      like: 1,
      liked: false,
      currentImageIndex: 0,
    },
    {
      id: 11,
      name: 'Лежанка для кошек и собак',
      price: 4999,
      description: '60 см',
     
      img: ['https://resources.cdn-kaspi.kz/img/m/p/pc3/p92/21939970.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p19/p6f/21939972.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p1c/p85/21939974.jpeg?format=gallery-large'
    ],
      rating: '5.0',
      category: 'Лежанки',
      like: 1,
      liked: false,
      currentImageIndex: 0,
    },
    {
      id: 12,
      name: 'Домик лежак',
      price: 6900,
      description: 'Домик лежак для кошек и маленьких собак 50x50 см',
      
      img: ['https://resources.cdn-kaspi.kz/img/m/p/h23/hdf/86293054128158.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hfc/hb3/86293054193694.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h23/hdf/86293054128158.jpg?format=gallery-large'
    ],
      rating: '5.0',
      category: 'Лежанки',
      like: 1,
      liked: false,
      currentImageIndex: 0,
    },
    {
      id: 13,
      name: 'Лежак Глазастик',
      price: 8750,
      description: 'Лежак Глазастик для кошек, круглый, голубой, 45х16 см',
    
      img: ['https://resources.cdn-kaspi.kz/img/m/p/p54/p32/19753665.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p54/p32/19753665.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p54/p32/19753665.jpeg?format=gallery-large'
    ],
      rating: '0.0',
      category: 'Лежанки',
      like: 1,
      liked: false,
      currentImageIndex: 0,
    },
    {
      id: 14,
      name: 'Лежак для кошeк',
      price: 8750,
      description: 'Лежак для кошек, Глазастик, круглый, красный, 45x45 см',
      
      img: ['https://resources.cdn-kaspi.kz/img/m/p/p8c/p7f/19831502.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p8c/p7f/19831502.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p8c/p7f/19831502.jpeg?format=gallery-large'
    ],
      rating: '0.0',
      category: 'Лежанки',
      like: 1,
      liked: false,
      currentImageIndex: 0,
    },
    {
      id: 15,
      name: 'Домик-лежанка для кошек',
      price: 4988,
      description: 'Домик-лежанка для кошек, морковка 40х40 см',
      
      img: ['https://resources.cdn-kaspi.kz/img/m/p/pfc/p0d/3788044.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p28/p07/3788046.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p55/p00/3788048.jpeg?format=gallery-large'
    ],
      rating: '5.0',
      category: 'Лежанки',
      like: 1,
      liked: false,
      currentImageIndex: 0,
    },
    {
      id: 16,
      name: 'Корм Felix',
      price: 160,
      description: 'Аппетитные кусочки в желе говядина 75 г 1 шт',

      img: ['https://resources.cdn-kaspi.kz/img/m/p/h3b/h01/84564384645150.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hf8/h5b/84564384677918.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h2f/h6c/86904007819294.png?format=gallery-large'
    ],
      rating: '5.0',
      category: 'Корм',
      like: 1,
      liked: false,
      currentImageIndex: 0,
    },
    {
      id: 17,
      name: 'Корм Felix',
      price: 160,
      description: 'Аппетитные кусочки в желе кролик 75 г 1 шт',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/p24/p1c/5058341.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/peb/p1b/5058343.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pb3/p1b/5058345.jpg?format=gallery-large'
    ],
      rating: '5.0',
      category: 'Корм',
      like: 1,
      liked: false,
      currentImageIndex: 0,
    },
    {
      id: 18,
      name: 'Корм Felix',
      price: 160,
      description: 'Аппетитные кусочки в желе ягненок 75 г 1 шт',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/p05/p11/5058379.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p61/p0e/5058382.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p0c/p0e/5058385.jpg?format=gallery-large'
    ],
      rating: '5.0',
      category: 'Корм',
      like: 1,
      liked: false,
      currentImageIndex: 0,
    },
    {
      id: 19  ,
      name: 'Корм Felix',
      price: 157,
      description: 'Аппетитные кусочки в желе индейка 75 г 1 шт',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/hb4/h67/84564385169438.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hb3/hd0/84564385202206.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h15/he6/84564385234974.png?format=gallery-large'
    ],
      rating: '5.0',
      category: 'Корм',
      like: 1,
      liked: false,
      currentImageIndex: 0,
    },
    {
      id: 19  ,
      name: 'Корм Felix',
      price: 157,
      description: 'Аппетитные кусочки в желе лосось 75 г 1 шт',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/h1f/h07/80548097851422.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hc0/h87/80548097916958.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h2b/h51/80548097982494.jpg?format=gallery-large'
    ],
      rating: '5.0',
      category: 'Корм',
      like: 1,
      liked: false,
      currentImageIndex: 0,
    }
  ];