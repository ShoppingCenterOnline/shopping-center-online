const PRODUCTS = [
  {
    "id": "01",
    "name": "Member's Selection Cupcakes de Vainilla Recién Horneados 12 Unidades",
    "price": 203.94,
    "category": "Repostería",
    "image": "assets/product-01.jpg"
  },
  {
    "id": "02",
    "name": "Member’s Selection Donas Surtidas Recién Preparadas 12 Unidades",
    "price": 227.94,
    "category": "Repostería",
    "image": "assets/product-02.jpg"
  },
  {
    "id": "03",
    "name": "Member's Selection Pastel de Vainilla Recién Horneado 20 a 24 Porciones",
    "price": 407.94,
    "category": "Repostería",
    "image": "assets/product-03.jpg"
  },
  {
    "id": "04",
    "name": "Member's Selection Galletas de Chispas de Chocolate Recién Horneadas 24 Unidades",
    "price": 215.94,
    "category": "Repostería",
    "image": "assets/product-04.jpg"
  },
  {
    "id": "05",
    "name": "Member's Selection Croissant de Mantequilla Recién Horneado 18 Unidades",
    "price": 299.94,
    "category": "Repostería",
    "image": "assets/product-05.jpg"
  },
  {
    "id": "06",
    "name": "Member's Selection Donas Glaseadas con Azúcar Recién Preparadas 12 Unidades",
    "price": 167.94,
    "category": "Repostería",
    "image": "assets/product-06.jpg"
  },
  {
    "id": "07",
    "name": "Member's Selection Pastel de Vainilla y Chocolate Recién Horneado 40 a 50 Porciones",
    "price": 707.94,
    "category": "Repostería",
    "image": "assets/product-07.jpg"
  },
  {
    "id": "08",
    "name": "Member's Selection Pastel de Vainilla y Chocolate Recién Horneado 80 a 100 Porciones",
    "price": 1223.94,
    "category": "Repostería",
    "image": "assets/product-08.jpg"
  },
  {
    "id": "09",
    "name": "Member's Selection Bizcochos de Sabores Variados Recién Horneados 3 Unidades",
    "price": 245.94,
    "category": "Repostería",
    "image": "assets/product-09.jpg"
  },
  {
    "id": "10",
    "name": "Member's Selection Donuts Rellenas Variadas 12 Unidades",
    "price": 239.94,
    "category": "Repostería",
    "image": "assets/product-10.jpg"
  },
  {
    "id": "11",
    "name": "Member's Selection Deditos de Queso 2.04 kg / 4.5 lb",
    "price": 677.94,
    "category": "Congelados",
    "image": "assets/product-11.jpg"
  },
  {
    "id": "12",
    "name": "Member's Selection Agua Purificada 40 Unidades / 500 mL / 16.9 oz",
    "price": 287.94,
    "category": "Bebidas",
    "image": "assets/product-12.jpg"
  },
  {
    "id": "13",
    "name": "Member's Selection Agua Purificada 80 Unidades / 236 mL / 8 oz",
    "price": 623.94,
    "category": "Bebidas",
    "image": "assets/product-13.jpg"
  },
  {
    "id": "14",
    "name": "Member's Selection Aceite de Oliva Extra Virgen Extraído en Frío 2 L",
    "price": 671.94,
    "category": "Abarrotes",
    "image": "assets/product-14.jpg"
  },
  {
    "id": "15",
    "name": "Member's Selection Mayonesa Cremosa con Sabor Natural 3.78 L / 128 oz",
    "price": 479.94,
    "category": "Abarrotes",
    "image": "assets/product-15.jpg"
  },
  {
    "id": "16",
    "name": "Member's Selection Salsa de Tomate Ketchup 1.81 kg / 64 oz",
    "price": 167.94,
    "category": "Abarrotes",
    "image": "assets/product-16.jpg"
  },
  {
    "id": "17",
    "name": "Member's Selection Aceite de Girasol 100 % Puro 5 L / 1.32 gal",
    "price": 563.94,
    "category": "Abarrotes",
    "image": "assets/product-17.jpg"
  },
  {
    "id": "18",
    "name": "Member's Selection Trocitos de Chocolate Semi Amargo 2.04 kg / 72 oz",
    "price": 857.94,
    "category": "Repostería",
    "image": "assets/product-18.jpg"
  },
  {
    "id": "19",
    "name": "Member's Selection Aderezo Ranch 3.78 L / 128 oz",
    "price": 479.94,
    "category": "Abarrotes",
    "image": "assets/product-19.jpg"
  },
  {
    "id": "20",
    "name": "Member's Selection Papel Higiénico Suave y Resistente 24 Unidades / 340 Hojas",
    "price": 399.54,
    "category": "Hogar",
    "image": "assets/product-20.jpg"
  },
  {
    "id": "21",
    "name": "Member's Selection Blanqueador 3 Unidades / 3.7 L",
    "price": 239.94,
    "category": "Hogar",
    "image": "assets/product-21.jpg"
  },
  {
    "id": "22",
    "name": "Member's Selection Suavizante 2 Unidades / 5 L",
    "price": 527.94,
    "category": "Hogar",
    "image": "assets/product-22.jpg"
  },
  {
    "id": "23",
    "name": "Member's Selection Whisky Escocés Mezclado Añejado 3 Años 1.5 L / 50 oz",
    "price": 581.94,
    "category": "Bebidas",
    "image": "assets/product-23.jpg"
  },
  {
    "id": "24",
    "name": "Member's Selection Vodka Premium Americano 1.75 L / 59 oz",
    "price": 557.94,
    "category": "Bebidas",
    "image": "assets/product-24.jpg"
  },
  {
    "id": "25",
    "name": "Member's Selection Tequila Blanco 1 L / 34 oz",
    "price": 635.94,
    "category": "Bebidas",
    "image": "assets/product-25.jpg"
  },
  {
    "id": "26",
    "name": "Member's Selection Toallitas Húmedas Hipoalergénicas para Bebé 6 Paquetes / 100 Unidades",
    "price": 647.94,
    "category": "Bebé",
    "image": "assets/product-26.jpg"
  },
  {
    "id": "27",
    "name": "Sweet Traditions Mini Bastones de Caramelo 300 Unidades / 6 g / 0.2 oz",
    "price": 785.94,
    "category": "Dulces",
    "image": "assets/product-27.jpg"
  },
  {
    "id": "28",
    "name": "Pringles Snacks Chips de Papa Sabores Surtidos 48 Unidades /960 g / 33.8 oz",
    "price": 899.94,
    "category": "Snacks",
    "image": "assets/product-28.jpg"
  },
  {
    "id": "29",
    "name": "Hostess Twinkies y Cupcakes Empacados Individualmente Surtidos 32 Unidades",
    "price": 449.94,
    "category": "Snacks",
    "image": "assets/product-29.jpg"
  },
  {
    "id": "30",
    "name": "Member's Selection Salsa con Queso Cheddar 3.03 kg / 107 oz",
    "price": 407.94,
    "category": "Abarrotes",
    "image": "assets/product-30.jpg"
  },
  {
    "id": "31",
    "name": "Member's Selection Salsa Barbacoa Sabor Original 2.2 kg / 5 lb",
    "price": 329.94,
    "category": "Abarrotes",
    "image": "assets/product-31.jpg"
  },
  {
    "id": "32",
    "name": "Kitty Mix De Snacks 800 g",
    "price": 251.94,
    "category": "Snacks",
    "image": "assets/product-32.jpg"
  },
  {
    "id": "33",
    "name": "All Inklusive Proteína Multicereal 1 kg / 2.2 lb",
    "price": 311.94,
    "category": "Abarrotes",
    "image": "assets/product-33.jpg"
  },
  {
    "id": "34",
    "name": "Member's Selection Lite Mayonnaise Mayonesa 3.78 L / 128 oz",
    "price": 389.94,
    "category": "Abarrotes",
    "image": "assets/product-34.jpg"
  },
  {
    "id": "35",
    "name": "Red Bull Bebida Energizante Vitaliza Mente y Cuerpo 6 Unidades / 250 mL",
    "price": 389.94,
    "category": "Bebidas",
    "image": "assets/product-35.jpg"
  },
  {
    "id": "36",
    "name": "Rica Sula Bolis Cereal de Maíz Horneado con sabor a Extra Queso 800 g",
    "price": 203.94,
    "category": "Snacks",
    "image": "assets/product-36.jpg"
  },
  {
    "id": "37",
    "name": "Nuvars Maracuya Habanero 12oz salsa Artesanal",
    "price": 110,
    "category": "Abarrotes",
    "image": "assets/product-37.jpg"
  },
  {
    "id": "38",
    "name": "Nuvars Mango Habanero 12oz salsa Artesanal",
    "price": 110,
    "category": "Abarrotes",
    "image": "assets/product-38.jpg"
  },
  {
    "id": "39",
    "name": "Nuvars Original Ranch 12oz salsa Artesanal",
    "price": 110,
    "category": "Abarrotes",
    "image": "assets/product-39.jpg"
  },
  {
    "id": "40",
    "name": "Nuvars Smoked Ranch 12oz salsa Artesanal",
    "price": 110,
    "category": "Abarrotes",
    "image": "assets/product-40.jpg"
  },
  {
    "id": "41",
    "name": "Nuvars Aderezo Chipotle 12oz salsa Artesanal",
    "price": 110,
    "category": "Abarrotes",
    "image": "assets/product-41.jpg"
  },
];
