const meals = {
    name: ['Tost','Espresso','Burger','aparitifler','pizza','filtre kahve','türk kahvesi','salep','sıcak içecekler',
        'soğuk kahve','milkshake','bitki çayı','frozen','soğuk içecek','smoothie','kokteyl','vitamin bar','tatlı',
        'nargile','dondurma','ana yemek','makarna','wrap'
    ],
    image: ['tost.jpeg','espresso.webp','burger.jpg','aparitif.jpeg','pizza.jpg','filtre-kahve.jpeg','turk-kahvesi.jpeg','salep.jpeg',
        'sicak-icecek.jpeg','soguk-kahve.jpeg','milkshake.jpg','bitki-cayi.jpeg','frozen.jpeg','soguk-icecek.jpeg','smoothie.jpeg','kokteyl.jpeg','vitamin-bar.jpeg',
        'tatli.jpeg','nargile.jpeg','dondurma.jpeg','tavuk-izgara.jpg','tavuklu-penne.jpg','tavuklu-wrap.jpg'
    ],
    path: ['tost','espresso','burger','aparitif','pizza','filtre-kahve','turk-kahvesi','salep','sicak-icecek',
        'soguk-kahve', 'milkshake','bitki-cayi','frozen','soguk-icecek','smoothie','kokteyl','vitamin-bar' ,'tatli','nargile','dondurma',
        'ana-yemek','makarna','wrap'
    ]
};
let content = '';

for (let index = 0; index < meals.name.length; index++) {
    content += `
    <div class="card">
        <img src="images/${meals.image[index]}" class="card-img-top" alt="...">
        <div class="card-body">
            
            <a href="products.html#${index}" class="btn btn-lg btn-warning">${meals.name[index]}</a>
        </div>
        </div>
    `
}

document.getElementById('food-category').innerHTML = content;
