const team = [
    {
        name: 'Wayne Barnett',
        role:  'Founder & CEO',
        image:  'wayne-barnett-founder-ceo.jpg',

    },

    {
        name: 'Angela Caroll',
        role:  'Chief Editor',
        image:  'angela-caroll-chief-editor.jpg',

    },

    {
        name: 'Walter Gordon',
        role:  'Office Manager',
        image:  ' walter-gordon-office-manager.jpg',

    },

    {
        name: 'Angela Lopez',
        role:  'Social Media Manager',
        image:  'angela-lopez-social-media-manager.jpg',

    },

    {
        name: 'Scott Estrada',
        role:  'Developer',
        image:  'scott-estrada-developer.jpg',

    },

    {
        name: 'Barbara Ramos',
        role:  'Graphic Designer',
        image:  'barbara-ramos-graphic-designer.jpg',

    },
];

const cardTeamHtml = document.getElementById('cardTeam')

for (let i = 0; i < team.length; i++) {
    let card = document.createElement('div');


    card.innerHTML += ` name: ${team[i].name} role: ${team[i].role} image: ${team[i].image}` 
    
    console.log('-  name:', team[i].name , typeof team[i].name);
    console.log('-  role:', team[i].role, typeof team[i].role);
    console.log('-  image:', team[i].image, typeof team[i].image);

    cardTeamHtml.append(card)
};