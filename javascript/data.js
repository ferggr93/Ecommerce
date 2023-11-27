const productsArr = [
    {
        id:'1',
        productName:'God of War',
        price:45000,
        productDate:new Date('2023-09-01' + 'T00:00:00-03:00').getTime(),
        category:'Videogame',
        description: 'Desde Santa Monica Studio llega la secuela del aclamado por la crítica, God of War (2018). Únete a Kratos y Atreus en un viaje mítico en busca de respuestas antes de que llegu',
        consoles:'PS4',
        image:'https://cdn.mos.cms.futurecdn.net/o2h4wsfCpYyXirdEBLCJ2n.jpg'
    },
    {
        id:'2',
        productName:'Sea of Stars',
        price:56000,
        productDate:new Date('2023-10-02' + 'T00:00:00-03:00').getTime(),
        category:'Videogame',
        description: 'Sea of Stars promete el toque de Sabotage en todos los sistemas y viene para modernizar el género de RPG clásico en cuando al combate por turnos, narrativa',
        consoles:'steam',
        image:'https://generacionxbox.com/wp-content/uploads/2023/09/sea-of-stars-.jpg'
    },
    {
        id:'3',
        productName:'final fantasy XVI',
        price:62000,
        productDate:new Date('2023-11-01' + 'T00:00:00-03:00').getTime(),
        category:'Videogame',
        description: 'Un mundo épico de oscura fantasía donde los poderosos Eikon y los Dominantes a los que habitan deciden el futuro de la tierra. Esta es la historia de Clive Rosfield, un guerrero al',
        consoles:'PS5',
        image:'https://www.gameinformer.com/sites/default/files/styles/product_box_art/public/2023/05/15/d3b7f0dc/ffxvi.jpeg'
    },
    {
        id:'4',
        productName:'Starfield',
        price:34000,
        productDate:new Date('2023-09-12' + 'T00:00:00-03:00').getTime(),
        category:'Videogame',
        description: 'Starfield es el primer universo nuevo en 25 años que crea Bethesda Game Studios, los galardonados creadores de The Elder Scrolls V: Skyrim y Fallout 4. Crea el personaje ',
        consoles:'XBOX',
        image:'https://sm.ign.com/t/ign_es/cover/s/starfield/starfield_c3j4.300.jpg'
    },
    {
        id:'5',
        productName:'Hollow Knight',
        price:25000,
        productDate:new Date('2023-09-04' + 'T00:00:00-03:00').getTime(),
        category:'Videogame',
        description: 'Debajo de la oscura ciudad de Bocasucia duerme un vasto y antiguo reino, muchos son atraidos a descender en busca de riquezas, gloria o en busca de respuestas a un antig',
        consoles:'PS4',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2N3p3ErZ5ccYHaif1mD6O_qodKiBcMHIJWA&usqp=CAU'
    },
    {
        id:'6',
        productName:'Resident evil 4',
        price:76000,
        productDate:new Date('2023-09-01' + 'T00:00:00-03:00').getTime(),
        category:'Videogame',
        description: 'Seis años después de la catástrofe biológica en Raccoon City, el agente Leon S. Kennedy, uno de los supervivientes del desastre, ha sido enviado a rescatar a la hija del presidente',
        consoles:'PS4',
        image:'https://cheapdigitaldownload.com/wp-content/uploads/Resident-Evil-4-Remake-All-Facts-on-Release-and-Gameplay-Scenes_featured-300x300-1.png'
    },
    {
        id:'7',
        productName:'Zelda totk',
        price:45000,
        productDate:new Date('2023-12-01' + 'T00:00:00-03:00').getTime(),
        category:'Videogame',
        description: 'The Legend of Zelda: Tears of the Kingdom es un videojuego de acción-aventura de 2023 de la serie The Legend of Zelda, desarrollado por la filial Nintendo EPD en colaboració',
        consoles:'SWITCH',
        image:'https://errekgamer.com/wp-content/uploads/2022/11/the-legend-of-zelda-tears-of-the-kingdom-edad.jpg'
    }
    
]

if(localStorage.getItem( ('products') )  === null){
    localStorage.setItem('products', JSON.stringify( productsArr ));
}



const usersArr = [
    {
        name: 'John Doe',
        age: 30,
        email: 'admin@admin.com',
        id: '1',
        password:'admin',
        date: new Date('1993-17-01' + 'T00:00:00-03:00').getTime(),
        location: 'Cordoba',
        role:'ADMIN_ROLE'
    },
    {
        name: 'Fernando Gamboa',
        age: 30,
        email: 'fer@gmail.com',
        id: '2',
        password:'123456789',
        date: new Date('1993-13-01' + 'T00:00:00-03:00').getTime(),
        location: 'Cordoba',
        role:'CLIENT_ROLE'
    },
    {
        name: 'Maria Kisiel',
        age: 30,
        email: 'maria@gmail.com',
        id: '3',
        password:'123456789',
        date: new Date('1993-11-01' + 'T00:00:00-03:00').getTime(),
        location: 'Cordoba',
        role:'CLIENT_ROLE'
    }];

if(localStorage.getItem( ('users')) === null){
    localStorage.setItem('users' , JSON.stringify( usersArr ));
}