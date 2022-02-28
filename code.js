// * save data to cookies
function saveData() {
  document.cookie = "item=" + document.getElementById("item").value + "; expires=Tue, 01 Mar 2022 12:00:00 UTC";
  document.cookie = "quantity=" + document.getElementById("quantity").value + "; expires=Tue, 01 Mar 2022 12:00:00 UTC";

  console.log("Data Saved!");
}
console.log("Saved Data:" + document.cookie);


// * Insert item and quantity to table below the form
document.getElementById("submit").onclick = function() {
  document.getElementById("itemsTable").style.display = "block";

  let table = document.getElementById("itemsTable"),
      row   = table.insertRow(-1),
      item  = row.insertCell(0),
      quantity = row.insertCell(1),
      totalPrice = row.insertCell(2);

      item.innerHTML = document.getElementById("item").value;
      quantity.innerHTML = document.getElementById("quantity").value;
      totalPrice.innerHTML = document.getElementById("quantity").value * 10;

      return false;
}

// * remove item
