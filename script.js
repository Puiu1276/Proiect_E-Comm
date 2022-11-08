// let shop = document.getElementById("shop");

// let basket = JSON.parse(localStorage.getItem("data")) || [];

// let shopItemsData = [{
//   id:"10",
//   name:"Nurofen",
//   pret: 50,
//   desc:"Cu doza maximă de ibuprofen disponibilă fără reţetă, Nurofen Forte 400 mg drajeuri ţinteşte sursa durerii, calmând eficace un spectru larg de dureri acute.",
//   img:"nurofen.jpg",
// },
// {
//   id:"11",
//   name:"Melatonina",
//   pret: 40,
//   desc:"Melatonina induce somnul, îl face mai odihnitor și mărește durata somnului profund.",
//   img:"melatonina.jpg",
// },
// {
//   id:"12",
//   name:"Algocalmin",
//   pret: 60,
//   desc:"Algocalmin apartine grupei de medicamente cunoscuta sub denumirea de analgezice (impotriva durerilor) si antipiretice (medicamente care scad febra). Amelioreaza durerea si reduce temperatura corpului in caz de febra.",
//   img:"algocalmin.jpg",
// },
// ];

// let generateshop = () => { 
//   return (shop.innerHTML = shopItemsData
//     .map((x)=>{
//       let {id, name, pret, desc, img} = x;
//       let search = basket.find((x) => x.id === id) || [];
//       return `
//     <div id=product-id-${id} class="item">
//           <img src=${img} width="220" alt="">
//           <div class="details">
//             <h3>${name}</h3>
//             <p>${desc}</p>
//             <div class="pret-cantitate">
//               <h2>${pret}</h2>
//               <div class="buttons">
//                 <i onlick="increment(${id})" class="bi bi-plus"></i>
//                 <div id=${id} class="quantity">
//                 ${search.item === undefined ? 0 : search.item}
//                 </div>
//                 <i onlick="decrement(${id})" class="bi bi-dash-lg"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       `;
//     })
//     .join(""));
  
// };

// generateshop();


// let increment = (id)=>{
//   let selectedItem = id;
//   let search = basket.find((x)=> x.id === selectedItem.id);

//   if(search === undefined){
//   basket.push({
//     id: selectedItem.id,
//     item: 1,
//   });
//   }
//   else{
//     search.item += 1;
//   }
//   //console.log(basket);
//   update(selectedItem.id);
//   localStorage.setItem("data", JSON.stringify(basket));
// };

// let decrement = (id)=>{
//   let selectedItem = id;
//   let search = basket.find((x)=> x.id === selectedItem.id);

//   if (search === undefined) return;
//   else if(search.item === 0) return;
//   else{
//     search.item -= 1;
//   }
//   update(selectedItem.id);
//   basket = basket.filter((x) => x.item !== 0);
//   //console.log(basket);
//   localStorage.setItem("data", JSON.stringify(basket));
// };
// let update = (id)=>{
//   let search = basket.find((x) => x.id === id);
//   //console.log(search.item);
//   document.getElementById(id).innerHTML = search.item;
//   calculation();
// };

// let calculation =()=>{
//   let cartIcon = document.getElementById("cartAmount");
//   cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
// };

let total = 0;
let count = 0;
var comand = document.querySelector('#comand');

const cartAmount = document.querySelector('.cartAmount');

function cumparaProdus(pret, produsIndex) {
  total += pret;
  count++;
  cartAmount.innerText = 'Nr prod: ' +  count + ' - Suma: ' + total
}

function cumpara() {
  if (total => 100) {
    alert("Comanda a fost plasata!");
    confirm.style.display='none';
    total = 0;
    count = 0;
    cartAmount.innerText = '0';

  } else {
    alert("Comanda minima trebuie sa fie de 100 lei.");
  }
}



function upqty(linie, pret){
  var currentqty = Number(document.getElementById("qty"+ linie).innerHTML);
  currentqty++;
  document.getElementById("qty"+linie).innerHTML = currentqty;
}

function downqty(linie, pret){
  var currentqty = Number(document.getElementById("qty"+ linie).innerHTML);
  if (currentqty<=1){
    alert("Cosul este gol.");
  }
  currentqty--;
  document.getElementById("qty"+linie).innerHTML = currentqty;
}

