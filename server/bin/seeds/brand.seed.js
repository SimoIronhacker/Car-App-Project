require ("dotenv").config();
require("./../../config/mongo");
const Mongoose  = require("mongoose");
const BrandModel = require("./../../models/Brand");




const seedBrands = [ 

  
{
    title: "bugatti veyron",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVnYXR0aSUyMHZleXJvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    description: "The Bugatti Veyron EB 16.4 is a mid-engine sports car, designed and developed in France by the Volkswagen Group and Bugatti and manufactured in Molsheim, France, by French automobile manufacturer Bugatti. It was named after the racing driver Pierre Veyron. The original version has a top speed of 407 km/h (253 mph).!!!!",
    releaseDate: "date",
    price: 1100000


},


{
    title: "bugatti chiron",
    image: "https://images.unsplash.com/photo-1566024245916-b677d7f3a1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoaXJvbiUyMGJ1Z2F0dGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    description: "The CHIRON is the fastest, most powerful, and exclusive production super sports car in BUGATTI's history. Its sophisticated design, innovative technology, and iconic, performance-oriented form make it a unique masterpiece of art, form and technique, that pushes boundaries beyond imagination.!!!!",
    releaseDate: "date",
    price: 2990000


},

 {
    title: "bugatti one off",
    image: "https://images.unsplash.com/photo-1594033809600-8b5d60cc5bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9uZSUyMG9mZiUyMGJ1Z2F0dGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    description: "A breathtaking sculpture, perfect in form and entirely in black – the La Voiture Noire1. This one-off was created exclusively for a Bugatti enthusiast within the space of two years. A piece of automotive haute couture will now soon be delivered following extensive development work and testing.!!!!",
    releaseDate: "date",
    price: 12500000


},

{
    title: "bugatti concept car",
    image: "https://media.istockphoto.com/photos/electric-sports-car-struck-by-electrical-lightning-from-coil-picture-id1291903867?b=1&k=20&m=1291903867&s=170667a&w=0&h=gOMV4rq4BUZyqX9ICOujnw0VMv8-RPzQn2PwJF8MrWE=",
    description: "This past week, Bugatti has taken to Instagram to share teaser photos for La Voiture Noire parked next to French landmarks such as the Arc de Triomphe and Eiffel Tower, with the caption, “Past? Future? It does not matter what year this is anymore. When you want to find something so badly, it’s always Day 1 of the chase. See you on May 31st, 2021 Similar to the Bugatti Chiron, supercar fans can expect the “La Voiture Noire” to be powered by an 8.0-liter, 16-cylinder quad-turbo engine, set to produce 1,479hp with 1,180lb-ft of torque. Aesthetically, the auto features a dynamically, sleek shell constructed in a bespoke carbon-fiber body that appears to be made of a single shell. Though it takes design cues from the Type 57SC Atlantic, “La Voiture Noire” also includes a rear fascia with six exhaust pipes, adding to the superlative price of the hypercar is valued at a staggering $18 million USD, claiming the title for the most expensive new car ever made. The owner of the one-off hypercar has yet to be officially revealed but there has been speculation that it was bought by former VW Group chairman Ferdinand Piech.!!!",
    releaseDate: "date",
    price: 18100000


},

{
  title: "bugatti veyron era",
  image: "https://images.unsplash.com/photo-1631828919277-7c6975758db3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmV5cm9uJTIwZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  description: "The digital speedometer shows 304.77 miles per hour. 490.484 km/h. In summer 2019, the practically impossible became possible with the Bugatti Chiron Super Sport 300+1: with its hyper sports car, the French company became the first manufacturer to break the 300-mph barrier, highlighting the brand's technically outstanding performance. A record that has yet to be broken. As unique as this record still is, it was not the first in Bugatti's history. Bugatti is a brand of superlatives and has been spearheading automotive engineering for over 110 years, with Ettore Bugatti as its ingenious designer.  !!!",
  releaseDate: "date",
  price: 1750000


},

{
  title: "bugatti concept car",
  image: "https://media.istockphoto.com/photos/electric-sports-car-struck-by-electrical-lightning-from-coil-picture-id1291903867?b=1&k=20&m=1291903867&s=170667a&w=0&h=gOMV4rq4BUZyqX9ICOujnw0VMv8-RPzQn2PwJF8MrWE=",
  description: "After its official unveiling at the 2019 Geneva Motor Show, Bugatti‘s “La Voiture Noire” is finally ready. The Chiron-based concept is a contemporary reimagining of the iconic Bugatti Type 57SC Atlantic and was initially launched in celebration of Bugatti’s 110th anniversary.",
  releaseDate: "date",
  price: 18100000


},

{
  title: "bugatti chiron era",
  image: "https://images.unsplash.com/photo-1594033999035-4784b610fba8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVnYXR0aSUyMGNoaXJvbiUyMGVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  description: "After an agonising drip-feed of teaser images and titbits of information, Bugatti has finally revealed the Chiron, and we’re thrilled to say it’s even more jaw dropping than the Veyron it replaces…We’ll let the headline figures speak for themselves: 1,480bhp developed from a heavily redeveloped version of the Veyron’s quad-turbocharged W16; 1,180lb ft of torque between 2,000 and 6,000rpm; a limited (yes, limited) top speed of 261mph; and an eye-watering, before-options price tag of 2.4m euros. ‘We left behind us all the parameters we were familiar with, and defined new ones that had not existed before’. That they did – the Chiron is the most powerful and fastest production car in history, a mantle we suspect it will hold for some time!!!",
  releaseDate: "date",
  price: 3900000

},

{
  title: "bugatti type 35",
  image: "https://images.unsplash.com/photo-1561535756-5233cff0a759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVnYXR0aSUyMHR5cGUlMjAzNXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  description: "The original Bugatti Type 35 was the fastest, most powerful car of its day. Fewer than 100 were made, and they're exceedingly rare and expensive to buy today. But there is a way to get your hands on one that's just like the originals. It's not a modern remake. It's not a close imitation. It's an exact replica, down to the very last bolt.",
  releaseDate: "date",
  price: 13500000


},

{
  title: "bugatti centodieci",
  image: "https://images.unsplash.com/photo-1631828919277-7c6975758db3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1Z2F0dGklMjBjZW50b2RpZWNpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  description: "The Centodieci continues Bugatti’s successful 110-year course of exceptional design and performance, while reviving the memory of the brand’s recent history. With the Centodieci – Italian for 110 – Bugatti created a reinterpretation of the epochal EB110, which, when presented in 1991, was considered the fastest and most extraordinary supercar of its time. The EB110, built by Romano Artioli in Italy, was an important intermediate step for the refoundation of Bugatti in 1998 and for the return to the French roots in Molsheim.!!!",
  releaseDate: "date",
  price: 8000000


},

{
  title: "bugatti chiron sport",
  image: "https://images.unsplash.com/photo-1567863786964-9d65fa4469ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVnYXR0aSUyMGNoaXJvbiUyMHNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  description: "Bugatti has announced its latest, the 2022 Chiron Super Sport. The €3.2 million ($3.9 million) coupe is the latest iteration of the Chiron family line that includes the Chiron, the Chiron Sport, the Chiron Pur Sport, and the Chiron Super Sport 300+, which hit a record-breaking speed of 304.773 mph in 2019.!!!",
  releaseDate: "date",
  price: 3200000


},

];


const seedDB = async () => {
  await BrandModel.deleteMany({});
  await BrandModel.insertMany(seedBrands);
};

seedDB().then(() => {
  Mongoose.connection.close();
});



