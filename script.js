document.addEventListener('DOMContentLoaded', function(){
    const menu = {
    category: [
         'tost','espresso','burger','aparatifler','pizza','filtre kahve','türk kahvesi','salep','sıcak içecekler',
        'soğuk kahveler','milkshake','bitki çayı','frozen','soğuk içecekler','smoothie','kokteyl','vitamin bar','tatlı',
        'nargile','dondurma','ana yemek','makarna','wrap'
    ],
    meal: [
        {
            name: ['KAŞARLI TOST','KARIŞIK TOST','SUCUKLU TOST'],
            price: ['190','200','190'],
            image_path:  ['kasarli-tost.jpg','karisik-tost.jpg','karisik-tost.jpg'],
        },
        {
            name: ['ESPRESSO','DOUBLE ESPRESSO','AMERICANO','CAFFE MOCHA','WHITE MOCHA','CAFFE LATTE','CAPPUCİNO'],
            price: ['120','130','130','160','160','150','150'],
            image_path:  ['espresso.webp','espresso.webp','americano.webp','caffe-mocha.jpg','white-mocha.jpg','caffe-latte.jpg','cappucino.jpg'],
        },
        {
            name: ['KLASİK BURGER','CHEESE BURGER','MEXİCAN BURGER'],
            price: ['360','380','380'],
            image_path:  ['klasik-burger.jpg','cheese-burger.jpg','mexican-burger.avif'],
        },
        {
            name: ['COMBO TABAĞI','PATATES KIZARTMASI','ELMA DİLİM PATATES'],
            price: ['280','190','190'],
            image_path:  ['combo-tabak.jpg','patates-tabak.jpg','elma-dilim-patates.webp'],
        },
        {
            name: ['KARIŞIK PİZZA','MARGARİTA PİZZA','TAVUKLU PİZZA','SUCUKLU PİZZA'],
            price: ['340','320','370','320'],
            image_path:  ['karisik-pizza.png','margerita-pizza.jpg','tavuklu-pizza.jpg','sucuklu-pizza.jpg'],
        },
         {
            name: ['SADE FİLTRE KAHVE','SÜTLÜ FİLTRE KAHVE','SADE NESCAFE','SÜTLÜ NESCAFE'],
            price: ['150','160','140','150'],
            image_path:  ['sade-filtre-kahve.jpeg','sade-filtre-kahve.jpeg','sade-nescafe.jpeg','sutlu-nescafe.jpeg'],
        },
        {
            name: ['DAMLA SAKIZLI KAHVE','DİBEK KAHVESİ','MENENGİÇ KAHVESİ','KLASİK TÜRK KAHVESİ'],
            price: ['90','90','90','90'],
            image_path:  ['damla-sakizli.jpeg','dibek-kahve.jpeg','dibek-kahve.jpeg','damla-sakizli.jpeg'],
        },
        {
            name: ['KLASİK SALEP','SICAK ÇİKOLATA'],
            price: ['160','160'],
            image_path:  ['klasik-salep.jpeg','sicak-cikolata.jpeg'],
        },
       {
            name: ['ÇAY','FİNCAN ÇAY','BALLI SICAK SÜT','Oralet'],
            price: ['35','40','125','40'],
            image_path:  ['cay.jpeg','fincan-cay.jpeg','balli-sut.jpeg','oralet.jpg'],
        },
        {
            name: ['ICE LATTE','ICE AMERICANO','ICE WHITE MOCHA','FRAPPE','ICE MOCHA'],
            price: ['180','150','190','180','190'],
            image_path:  ['ice-latte.jpeg','ice-americano.jpeg','ice-white-mocha.jpeg','frappe.jpeg','ice-mocha.jpeg'],
        },
        {
            name: ['VANILYA MILKSHAKE','ÇİKOLATALI MILKSHAKE','ÇİKLEKLİ MILKSHAKE','KARAMELLİ MILKSHAKE','MUZLU MILKSHAKE','SPECIAL MILKSHAKE'],
            price: ['200','200','200','200','200','200'],
            image_path:  ['vanilya-milkshake.jpeg','cikolata-milkshake.jpeg','cilekli-milkshake.jpeg','karamel-milkshake.jpeg','muzlu-milkshake.jpeg','special-milkshake.jpeg'],
        },
         {
            name: ['IHLAMUR','KIŞ ÇAYI','ELMA TARÇIN','PAPATYA','NANE LİMON','ADA ÇAYI','YEŞİL ÇAY'],
            price: ['160','160','160','160','160','160','160'],
            image_path:  ['ihlamur.jpeg','kis-cayi.jpeg','elma-tarcin.jpeg','papatya.jpeg','nane-limon.jpeg','ada-cayi.jpeg','yesil-cay.jpeg'],
        },
        {
            name: ['çilek frozen','ŞEFTALİ frozen','MUZ frozen','MANGO frozen','KİVİ frozen','SPECIAL frozen','NANE LİMONLU frozen'],
            price: ['200','200','200','200','200','200','200'],
            image_path:  ['cilek-frozen.jpeg','seftali-frozen.jpeg','muz-frozen.jpeg','mango-frozen.jpeg','kivi-frozen.jpeg','special-frozen.jpeg','nane-limon-frozen.jpeg'],
        },
        {
            name: ['PEPSİ','YEDİGÜN','Sprite','KUTU MEYVE SUYU','LIPTON ICE TEA','MEYVELİ SODA','SADE SODA'
                ,'CHURCHILL','REDBULL','findıklı REDBULL','SU'
            ],
            price: ['95','95','95','95','95','70','65','80','150','180','35'],
            image_path:  ['pepsi.jpeg','yedigun.jpeg','sprite.jpeg','kutu-meyve-suyu.jpeg','lipton-ice-tea.webp','meyveli-soda.jpeg'
                ,'sade-soda.jpeg','churchill.jpeg','redbull.jpeg','redbull.jpeg','su.jpeg'
            ],
        },
        {
            name: ['çilek smoothie','ŞEFTALİ smoothie','MUZ smoothie','kavun smoothie','KİVİ smoothie','SPECIAL smoothie'],
            price: ['200','200','200','200','200','200'],
            image_path:  ['cilek-smoothie.jpeg','seftali-smoothie.jpeg','muz-smoothie.jpeg','kavun-smoothie.jpeg','kivi-smoothie.jpeg','special-smoothie.jpeg'],
        },
        {
            name: ['MOJITO','SEX ON THE BEACH','JAMAİKA','RED PASSION'],
            price: ['250','250','250','250'],
            image_path:  ['mojito.jpeg','sex-on-the-beach.jpeg','jamayka.jpg','red-passion.jpg'],
        },
        {
            name: ['PORTAKAL SUYU','LİMONATA','AROMALI LİMONATA','ATOM'],
            price: ['200','160','170','200'],
            image_path:  ['portakal-suyu.jpeg','limonata.jpeg','aromali-limonata.jpeg','atom.jpeg'],
        },
        {
            name: ['Sponful','BALLI FISTIKLI PASTA','MAGNOLYA','sufle','SAN SEBASTİAN CHEESECAKE','tiramisu','ÇEREZ','ÇEREZ yarim'],
            price: ['270','270','270','250','270','270','250','140'],
            image_path:  ['sponful.webp','balli-fistikli.jpeg','magnolya.jpg','sufle.jpeg','san-sebastian.jpeg','tiramisu.jpeg','cerez.jpeg','cerez.jpeg'],
        },

        {
            name: ['lord killer','pışmış şeftalı','deja vu','love 66','üzüm nane','plombir','cappucino'
                ,'anason','damla sakız','kole redbull','KAFA DEĞİŞİMİ'
            ],
            price: ['400','400','400','400','400','400','400','400','400','400','225'],
            image_path:  ['nargile.jpeg','nargile.jpeg','nargile.jpeg','nargile.jpeg','nargile.jpeg','nargile.jpeg'
                ,'nargile.jpeg','nargile.jpeg','nargile.jpeg','nargile.jpeg','nargile.jpeg'
            ],
        },
        {
            name: ['Dondurma Top','Dondurma Porsiyon'],
            price: ['75', '220'],
            image_path:  ['dondurma.jpeg','dondurma.jpeg'],
        },
        {
            name: ['IZGARA TAVUK','KÖRİ SOSLU TAVUK','MEXİCAN USULÜ TAVUK','KREMALI MANTARLI TAVUK','BBQ SOSLU TAVUK'
                ,'IZGARA köfte','köfte ekmek'],
            price: ['350','360','360','360','360','400','300'],
            image_path:  ['tavuk-izgara.jpg','kori-sos-tavuk.jpg','mexican-sos-tavuk.webp',
                'kremali-mantarli-tavuk.jpg','bbq-sos-tavuk.jpg','kofte-izgara.jpeg','kofte-ekmek.jpg']
        },
        {
            name: ['Kremalı mantarlı penne','Fettucini Alfredo','Mantı','Penne arabiata','Spagetti Napoliten'],
            price: ['270','270','240','250','260'],
            image_path:  ['tavuklu-penne.jpg','fettucine-alfredo.jpg','manti.webp',
                'penne-arabiata.webp','spaghetti.webp']
        },
        {
            name: ['TAVUK WRAP','ET WRAP'],
            price: ['300','380'],
            image_path:  ['tavuklu-wrap.jpg','tavuklu-wrap.jpg']
        },

    ],
    
};




for (let i = 0; i < menu.category.length; i++) {
    let menu_html = '';

    for (let j = 0; j < menu.meal[i].name.length; j++) {
        menu_html += `
            
             <div class="card single-product-container">
  <img src="images/${menu.meal[i].image_path[j]}" class="card-img-top" alt="...">
  <div class="card-body">
    <br>
    <p class="card-text text-warning">${menu.meal[i].name[j]}</p>
    <div class="p-3 mb-2 text-white">${menu.meal[i].price[j]}&#8378;</div>
  </div>
</div>
        `;
        
    }

    document.getElementById('big-container').innerHTML += `
    <h2 style="color: antiquewhite;" id="${i}">${menu.category[i]}</h2>
<div class="food-category">
${menu_html}
</div>
    `;
    
}
});


