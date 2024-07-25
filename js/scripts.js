const team = [
    {
        name: 'Wayne Barnett',
        role:  'Founder & CEO',
        image: "img/wayne-barnett-founder-ceo.jpg",

    },

    {
        name: 'Angela Caroll',
        role:  'Chief Editor',
        image:  'img/angela-caroll-chief-editor.jpg',

    },

    {
        name: 'Walter Gordon',
        role:  'Office Manager',
        image:  'img/walter-gordon-office-manager.jpg',

    },

    {
        name: 'Angela Lopez',
        role:  'Social Media Manager',
        image:  'img/angela-lopez-social-media-manager.jpg',

    },

    {
        name: 'Scott Estrada',
        role:  'Developer',
        image:  'img/scott-estrada-developer.jpg',

    },

    {
        name: 'Barbara Ramos',
        role:  'Graphic Designer',
        image:  'img/barbara-ramos-graphic-designer.jpg',

    },
];





const cardTeamHtml = document.getElementById('cardsTeam')

for (let i = 0; i < team.length; i++) {
    let card = document.createElement('div');

    let imgCard = document.createElement('img');
    let nameCard = document.createElement('div');
    let roleCard = document.createElement('div');

    
    imgCard.src = team[i].image;
    nameCard.innerHTML = ` name: ${team[i].name} ` ;
    roleCard.innerHTML = ` role: ${team[i].role} ` ;

    // role: ${team[i].role} image: ${team[i].image}
    
    console.log('-  name:', team[i].name , typeof team[i].name);
    console.log('-  role:', team[i].role, typeof team[i].role);
    console.log('-  image:', team[i].image, typeof team[i].image);

    cardTeamHtml.append(card)
    card.append(imgCard)
    card.append(nameCard)
    card.append(roleCard)
};