const meals = {
    name: ['soğuk içecek','Espresso','soğuk kahve','vitamin bar','kokteyl','dondurma','milkshake','smoothie','filtre kahve','tatlı','nargile','türk kahvesi','salep','sıcak içecekler',
    'frozen','Burger','bitki çayı','Tost','pizza','aparitifler','ana yemek','makarna','wrap'
    ],
    image: ['soguk-icecek.jpeg','espresso.webp','soguk-kahve.jpeg','vitamin-bar.jpeg','kokteyl.jpeg',
    'dondurma.jpeg','milkshake.jpg','smoothie.jpeg','filtre-kahve.jpeg','tatli.jpeg','nargile.jpeg',
    'turk-kahvesi.jpeg','salep.jpeg','sicak-icecek.jpeg','frozen.jpeg','burger.jpg','bitki-cayi.jpeg',
    'tost.jpeg','pizza.jpg','aparitif.jpeg','tavuk-izgara.jpg','tavuklu-penne.jpg','tavuklu-wrap.jpg'
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

