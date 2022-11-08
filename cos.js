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

  let label=document.getElementById('label');
  let ShoppingCart=document.getElementById("shopping-cart");

  let generateCart