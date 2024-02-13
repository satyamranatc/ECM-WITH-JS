let Main = document.getElementsByTagName("main")[0];


function filterData(Products)
{

}



function displayDataOnPage(Products)
{
    Products.map((e)=>
    {
        console.log(e.category)

        Main.innerHTML +=
        `
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
        
        `

    })
}




async function GetProductData()
{
    let Data = await fetch("https://dummyjson.com/products");
    Data = await Data.json();
    // console.log(Data.products);
    displayDataOnPage(Data.products);
}


GetProductData();
