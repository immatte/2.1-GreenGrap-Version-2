export default[
    { 
        //change Month to calendar sql date format instead of string
        //sql query --> if Month has these Month = 3, this is March - month = “202*-12-**"
        // 1. add a “months” field to your veggies
        // select * veggies where month includes “202*-12-**"
        // 2. Join tables - Left join? sql search includes
        id: 1,
        name: "January", 
        vegetables: "acelga,ajo seco,ajo tierno,alcachofa,apio,batata,borraja,calabaza,cardo,cebolla seca,cebolla,chirivía,col lisa,col rábano,coles de bruselas,coliflor,escarola,espinaca,hinojo,kale,lechuga,lombarda,nabo,pack choi,patata,perejil,puerro,rábano,remolacha,zanahoria,brócoli,habas",
        fruits: "aguacate,guayaba,kiwi,limón,mandarina,naranja,papaya,plátano,pomelo,caqui,membrillo,pitahaya",

    },
    {
        id: 2,
        name: "February", 
        vegetables: "ajo seco,ajo tierno,alcachofa,apio,borraja,calabaza,cardo,cebolla seca,chirivía,col lisa,col rábano,coliflor,escarola,espinaca,habas,hinojo,kale,lechuga,lombarda,nabo,pack choi,patata,perejil,puerro,rábano,remolacha,batata,brócoli,cebolla,coles de bruselas,espárrago,guisante",
        fruits:  "limón,mandarina,naranja,aguacate,kiwi,guayaba,membrillo,papaya,pitahaya"
    },
    {
        id: 3,
        name: "March", 
        vegetables: "ajo seco,ajo tierno,alcachofa,apio,calabaza,cardo,cebolla seca,chirivía,col lisa,col rábano,coliflor,escarola,espárrago,espinaca,guisante,habas,hinojo,kale,lechuga,lombarda,nabo,pack choi,patata,puerro,rábano,remolacha,batata,borraja,brócoli,cebolla,perejil",
        fruits:  "mandarina,naranja,plátano,aguacate,limón,kiwi,níspero,pomelo"
    },
    {
        id: 4,
        name: "April", 
        vegetables: "ajo seco,ajo tierno,alcachofa,apio,cebolla seca,cebolla,chirivía,col lisa,col rábano,coliflor,escarola,espárrago,espinaca,guisante,habas,hinojo,kale,lechuga,lombarda,nabo,pack choi,patata,puerro,rábano,remolacha,zanahoria,batata,borraja,brócoli,calabaza,cardo,perejil",
        fruits:  "naranja,níspero,plátano,aguacate,limón,fresa,mandarina"
    },
    {
        id: 5,
        name: "May", 
        vegetables: "ajo seco,apio,borraja,cebolla seca,cebolla,chirivía,col lisa,col rábano,espinaca,habas,hinojo,kale,lechuga,lombarda,nabo,pack choi,patata,perejil,puerro,rábano,remolacha,zanahoria,ajo tierno,alcachofa,brócoli,calabacín,calabaza,coliflor",
        fruits:  "cerezas,fresa,naranja,aguacate,albaricoque,ciruela,limón,mandarina,melocotón"
    },
    {
        id: 6,
        name: "June", 
        vegetables: "borraja,calabacín,cebolla seca,cebolla,judía verde,patata,pepino,perejil,remolacha,zanahoria,acelga,albahaca,apio,berenjena,cebolla,chirivía",
        fruits:  "ciruela,fresa,melocotón,albaricoque,cerezas,aguacate,frambuesa,melón,naranja"
    },
    {
        id: 7,
        name: "July", 
        vegetables: "albahaca,berenjena,calabacín,cebolla seca,cebolla,judía verde,maiz,patata,pepino,pimiento,tomate,acelga,chirivía,col lisa,lechuga,lombarda,perejil",
        fruits:  "frambuesa,fresa,melocotón,arándano,ciruela,aguacate,albaricoque,higo,pitahaya"
    },
    {
        id: 8,
        name: "August", 
        vegetables: "albahaca,berenjena,calabacín,cebolla seca,judía verde,maiz,patata,pepino,pimiento,tomate,calabaza,perejil,zanahoria",
        fruits:  "frambuesa,fresa,higo,arándano,ciruela,mango,manzana,nectarina,papaya"
    },
    {
        id: 9,
        name: "September", 
        vegetables: "albahaca,berenjena,calabacín,calabaza,cebolla seca,judía verde,maiz,patata,pepino,perejil,pimiento,tomate,acelga,borraja,espinaca,lechuga,nabo,pack choi",
        fruits:  "mango,manzana,melón,frambuesa,higo,chirimoya,ciruela,fresa,granada"
    },
    {
        id: 10,
        name: "October", 
        vegetables: "ajo seco,albahaca,batata,borraja,calabaza,cebolla seca,espinaca,kale,maiz,pack choi,patata,pepino,perejil,puerro,rábano,remolacha,tomate,apio,berenjena,brócoli,calabacín,chirivía,col lisa",
        fruits:  "granada,guayaba,kiwi,chirimoya,frambuesa,aguacate,caqui,fresa,higo"
    },
    {
        id: 11,
        name: "November", 
        vegetables: "ajo seco,apio,batata,borraja,brócoli,calabaza,cardo,cebolla seca,chirivía,col lisa,col rábano,coles de bruselas,coliflor,escarola,espinaca,kale,lechuga,lombarda,nabo,pack choi,patata,perejil,puerro,rábano,remolacha,zanahoria,ajo tierno,albahaca,alcachofa,berenjena,cebolla,habas",
        fruits:  "chirimoya,granada,guayaba,aguacate,caqui"
    },
    {
        id: 12,
        name: "December", 
        vegetables: "ajo seco,ajo tierno,alcachofa,apio,batata,borraja,brócoli,calabaza,cardo,cebolla seca,cebolla,chirivía,col lisa,col rábano,coles de bruselas,coliflor,escarola,espinaca,hinojo,kale,lechuga,lombarda,nabo,pack choi,patata,perejil,puerro",
        fruits:  "chirimoya,guayaba,kiwi,limón,mandarina,aguacate,caqui,membrillo,naranja,papaya,pitahaya,plátano,pomelo,granada,lima,mango,manzana,uvas"
    }
]