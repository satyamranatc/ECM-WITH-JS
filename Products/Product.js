// Get references to DOM elements
let Main = document.getElementsByTagName("main")[0];
let SearchBoxBtn = document.getElementById("SearchLogo")
let SearchBox = document.getElementById("SearchBox")

// Initialize variables for category and product data
let category = [];
let Products;

// Function to filter data based on selected categories
function FilterData() {
    let newProducts = Products.filter((e) => category.includes(e.category));
    console.log(newProducts);
    Main.innerHTML = "";
    displayDataOnPage(newProducts);
}

// Event listener for search box click
SearchBox.addEventListener("click", () => {
    let SearchText = SearchBox.value;
    let newProducts = Products.filter((e) => e.title.includes(SearchText));
    console.log(newProducts);
    Main.innerHTML = "";
    displayDataOnPage(newProducts);
    // Clear the search box value
    SearchBox.value = "";
});

// Function to display product data on the page
function displayDataOnPage(Products) {
    Products.map((e) => {
        console.log(e.category)
        Main.innerHTML +=
            `
        <div class='Card'>
            <div class="CardImage">
                <img src="${e.thumbnail}">
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
    })
}

// Function to fetch product data from the dummy API
async function GetProductData() {
    let Data = await fetch("https://dummyjson.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error("Error fetching product data:", error);
        });

    if (Data) {
        Products = Data.products;
        displayDataOnPage(Products);
    }
}

// Initial fetch of product data
GetProductData();

// Event listeners for category buttons
let NavUlButtons = document.getElementsByClassName("Nav2Li");

for (let i of NavUlButtons) {
    i.addEventListener("click", (e) => {
        // Remove background from all category buttons
        for (let i of NavUlButtons) {
            i.classList.remove("Nav2LiBg")
        }
        // Add background to the clicked category button
        e.target.classList.add("Nav2LiBg")

        // Set category based on the clicked button
        if (e.target.innerHTML == "Electronics") {
            category = ["smartphones", "laptops"]
        } else if (e.target.innerHTML == "Personal Care") {
            category = ["fragrances", "skincare"]
        } else if (e.target.innerHTML == "Grocery") {
            category = ["groceries"]
        } else if (e.target.innerHTML == "Decorations") {
            category = ["home-decoration"]
        } else {
            // Display an alert for an unknown category
            alert("Chala ja")
        }
        // Filter and display data based on the selected category
        FilterData();
    });
}
