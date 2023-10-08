/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Siviwe Kibido',
    photo: 'images/image.jpg',
    favoriteFoods: ['Bread', 'Juice', 'Meat' ,'Chocolate'],
    hobbies: ['reading', 'writing', 'coding'],
    placesLived: [
      { place: 'George', length: '25 years'},
      { place: 'Oudtshoorn', length: '2 year' },
      { place: 'Mossel bay', length: '6 months' }
    ]
  };


/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
  });

