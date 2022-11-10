let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "one",
    name: "Casual Shirt",
    price: 45,
    desc: "A casual shirt you can wear on any occasion",
    img: "images/img-1.jpg"
  },
  {
    id: "two",
    name: "Office Shirt",
    price: 45,
    desc: "A office shirt you can wear comfortably to work",
    img: "images/img-2.jpg"
    
  },
  {
    id: "three",
    name: "T-Shirt",
    price: 25,
    desc: "A cool tee to express your personality",
    img: "images/img-3.jpg"
  },
  {
    id: "four",
    name: "Men's Suit",
    price: 300,
    desc: "A classic suit for a timeless fashion",
    img: "images/img-4.jpg"
  }
]

let basket = [{
}];


let generateShop = () => {
  return (shop.innerHTML = shopItemsData.map((x) => {
    let { id, name, price, desc, img } = x
    return `
    <div id="product-id-${id}" class="item">
      <img width="220" src="${img}" alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2>$ ${price}</h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">0</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>
  `;
  }).join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id)

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item +=1;
  }
  update(selectedItem.id);
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id)

  if (search === undefined || search.item === 0) return;
  else {
    search.item -=1;
  }
  update(selectedItem.id);
};

let update = (id) => {
  let search = basket.find((x) => x.id === id)
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = 100;
  console.log(basket.map((x) => x.item).reduce((x, y)=> x + y, 0));
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
