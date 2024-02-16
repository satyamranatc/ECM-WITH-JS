let Main = document.getElementsByTagName("main")[0];
function displayDataOnPage(Products) {
  Products.map((e) => {
  
    Main.innerHTML += `
        <div class = 'Card'>

            <div class="CardImage">
                <img src= ${e.thumbnail} >
            </div>
             
            <div class="CardContent">
                <p>${e.title}</p>
                <p>${e.description}</p>
                <p>Price:- ${e.price} $</p>
                <div class="CardBtns">

                <button>Add To Cart</button>
                <button>Buy Now</button>
                </div>
            </div>


        </div>
        
        `;
  });
}


function FilterData(category)
{
    let newProducts = Products.filter(e => e.category == category);
    Main.innerHTML = "";
    displayDataOnPage(newProducts);
    
}




async function GetProductData() {
  let Data = await fetch("https://dummyjson.com/products");
  Data = await Data.json();

  Products = Data.products;

  displayDataOnPage(Products);
}
GetProductData();



let NavUlButtons = document.getElementsByClassName("Nav2Li");

for (let i of NavUlButtons) {
    i.addEventListener("click", (e) => {
        e.target.classList.toggle("Nav2LiBg")
        
        if(e.target.innerHTML == "Electronics")
        {
            category = "Electronics"
        }
        else if(e.target.innerHTML == "Personal Care")
        {
            category = "fragrances"
        }
        else if(e.target.innerHTML == "Grocery")
        {
            category = "groceries"
        }
        else if(e.target.innerHTML == "Decorations")
        {
            category = "Decorations"
        }

        else
        {
            alert("Chala ja")
        }
        FilterData(category);

    });
}