export class router {

  constructor(root, headerRoot) {
    this.root = document.querySelector(root)
    this.headerRoot = document.querySelector(headerRoot)
    this.add()
  }

  add() {
    this.products = [
      {
        image: "https://http2.mlstatic.com/D_NQ_NP_639460-MLB49764172453_042022-O.webp",
        description: "Tênis Masculino Vulc Raid3r Skateboarding adidas" ,
        price: "179,99",
        class: "tenis",
        store:"mercadolivre.com.br",
        link: "https://produto.mercadolivre.com.br/MLB-2188378446-tnis-masculino-vulc-raid3r-skateboarding-adidas-_JM"
      },
      {
        image: "https://static.netshoes.com.br/produtos/tenis-puma-aviator-eng-pro-bdp-masculino/10/2I3-3731-010/2I3-3731-010_zoom1.jpg?ts=1649614383&?ims=544xhttps://static.netshoes.com.br/produtos/tenis-puma-aviator-eng-pro-bdp-masculino/10/2I3-3731-010/2I3-3731-010_zoom1.jpg?ts=1649614383&?ims=1088x",
        description: "Tênis Puma Aviator ENG Pro BDP Masculino - Cinza",
        price: "206,99",
        class: "tenis",
        store:"netshoes.com.br",
        link: "https://www.netshoes.com.br/tenis-puma-aviator-eng-pro-bdp-masculino-cinza-2I3-3731-010?campaign=afil-teniscerto&af_sub1=43984&pid=rakuten_int&af_channel=Affiliates&af_media_type=web&af_adset_id=43984&af_sub_siteID=AD7D4g.56f4-zV0gysQnzPWPp._DN991mQ&af_click_lookback=7d&clickid=AD7D4g.56f4-zV0gysQnzPWPp._DN991mQ&is_retargeting=true&utm_source=me-s_pgit__&utm_medium=post&utm_campaign=me-s_pgit-_-tnfild__tca___-_-post-_-_var_me_pgit_::N3T:AF-PG-00-00-00-TD-00-MAS-00:N3T::_Pelando_&utm_term=3643153&ranMID=43984&ranU1=132721822&ranEAID=AD7D4g*56f4&ranSiteID=AD7D4g.56f4-zV0gysQnzPWPp._DN991mQ"
      },

      {
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/x/rx6500xt-pgd-4go3.jpg",
        description: "PLACA DE VIDEO ASROCK RADEON RX 6500 XT PHANTOM GAMING D OC, 4GB, GDDR6, 64-BIT, 90-GA3DZZ-00UANF",
        price: "999,99",
        class: "placa de video",
        store:"pichau.com.br",
        link: "https://www.pichau.com.br/placa-de-video-asrock-radeon-rx-6500-xt-phantom-gaming-d-oc-4gb-gddr6-64-bit-90-ga3dzz-00uanf"
      },
      {
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_297,f_auto,fl_progressive,q_auto:eco,w_80/v1/imagens/product/B2019020309/38832d43-57d8-4626-a066-2e94394006b7-combo-cuide-se-bem-deleite-locao-corporal-hidratante-400ml-refil-400ml-cuide-se-bem.png",
        description: "Combo Cuide-se Bem Deleite: Loção Corporal Hidratante 400ml + Refil 400ml",
        price: "54,90",
        class: "locao",
        store:"boticario.com",
        link: "https://www.boticario.com.br/combo-cuide-se-bem-deleite-locao-corporal-hidratante-400ml-refil-400ml-cuide-se-bem/?af_sub1=43464&pid=rakuten_int&af_adset_id=43464&af_sub_siteID=AD7D4g.56f4-nc99SC1YVp9VnbImZOeGNQ&af_media_type=web&af_click_lookback=7d&clickid=AD7D4g.56f4-nc99SC1YVp9VnbImZOeGNQ&is_retargeting=true&utm_source=rakuten&utm_medium=af-deeplink&utm_campaign=3643153&utm_term=3643153&ranMID=43464&ranEAID=3643153&ranSiteID=AD7D4g.56f4-nc99SC1YVp9VnbImZOeGNQ"
      },
      {
        image: "https://www.fastshop.com.br//wcsstore/FastShopCAS/images/catalog/TK50C725_PRD/TK50C725_PRD_447_1.jpeg",
        description: "Smart TV TCL QLED Ultra HD 4K 50? Android TV com Google Assistant, Dolby Vision, HDR10+ e Wi-Fi - 50C725",
        price: "2589,00",
        class: "televisao",
        store:"fastshop.com",
        link: "https://www.fastshop.com.br/web/p/d/TK50C725_PRD/x?awc=17590_1662003249_d0a2c0f1652a0ab9357cfdbcf7a827a6&partner=parceiro-zanox&cm_mmc=aff_zanox-_-home-_-ND-_-ND&utm_medium=aff&utm_source=aff_zanox&utm_campaign=home&utm_content=638467&utm_term=132722546"
      },
      {
        image:"https://a-static.mlcdn.com.br/450x450/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/magazineluiza/234661800/a57c1ab14765ab0b7ca87de98ba94b94.jpg",
        description: "Apple iPhone 13 128GB Meia-noite Tela 6,1” 12MP",
        price: "4949,10",
        class: "telefone",
        store:"magalu.com",
        link: "https://m.magazineluiza.com.br/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/p/234661800/te/ip13/?partner_id=56885&utm_source=bob&utm_medium=email&utm_campaign=-ft_none-nc_recomendacao-oc_venda&utm_content=-un_magalu-ce_b2c-cp_crmagendadoabandono-view-site"
      },
      {
        image:"https://carrefourbr.vtexassets.com/arquivos/ids/10199888-800-auto?v=637387375111600000&width=800&height=auto&aspect=true",
        description: "Frigideira Francesa Rochedo Limpa Fácil 20 Cm Vermelho",
        price: "43,99",
        class: "frigideira",
        store:"carrefour.com",
        link: "https://www.carrefour.com.br/frigideira-francesa-rochedo-limpa-facil-20-cm-vermelho-mp908132707/p?awc=17665_1662003875_e167d69d8f4d1cb84cd21399a35d42d7&utm_source=awin&utm_medium=afiliados&utm_campaign=132723371&utm_term=638467"
      }, 
      {
        image:"https://m.media-amazon.com/images/I/61Nnl7fnf-L._AC_SX522_.jpg",
        description: "Monitor Gamer AOC SNIPER 27 75Hz IPS 1ms",
        price: "1017,12",
        class: "monitor",
        store:"amazon.com",
        link: "https://www.amazon.com.br/Monitor-Gamer-AOC-SNIPER-75Hz/dp/B08TMWKMX5?tag=pelando-20"
      },
      { 
        image:"https://m.media-amazon.com/images/I/51ktlE5VFYL._AC_.jpg",
        description: "Protetor Diário Clin Off Leve 15 Pague 12, CLIN OFF",
        price: "3,68",
        class: "absorvente",
        store:"amazon.com",
        link: "https://www.amazon.com.br/dp/B07GZZPMGJ/ref=asc_df_B07GZZPMGJ1661868000000/?creative=380333&ascsubtag=b738f18bbd1044419545e0df265d2d82&tag=pelando-20"
      },
      {
        image:"https://images.kabum.com.br/produtos/fotos/311909/kit-console-sony-playstation-5-jogo-demon-s-soul-s-ps5-jogo-uncharted-colecao-legado-dos-ladroes-ps5_1644945593_gg.jpg",
        description: "AKit Console Sony Playstation 5 + Jogo Demon´s Soul´s PS5 + Jogo Uncharted: Coleção Legado dos Ladrões, PS5",
        price: "4599,90",
        class: "playstation 5",
        store:"kabum.com",
        link: "https://m.magazineluiza.com.br/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/p/234661800/te/ip13/?partner_id=56885&utm_source=bob&utm_medium=email&utm_campaign=-ft_none-nc_recomendacao-oc_venda&utm_content=-un_magalu-ce_b2c-cp_crmagendadoabandono-view-site"
      },
      {
        image:"https://api.pelando.com.br/media/8c143f4f-5537-4340-93fc-b87832a03a2c?v=2&t=eyJoZWlnaHQiOjQwNn0%3D",
        description: "Faça uma doação e Receba um cupom de R$ 10 na Shopee",
        price: "10OFF",
        class: "cupom",
        store:"shopee.com",
        link: "https://shopee.com.br/m/shopee-doacoes?utm_source=an_18183670000&utm_medium=affiliates&utm_campaign=-&utm_content=----&af_siteid=an_18183670000&pid=affiliates&af_click_lookback=7d&af_viewthrough_lookback=1d&is_retargeting=true&af_reengagement_window=7d&af_sub_siteid=----&c=-"
      }, /**/ 
      {
        image:"https://a-static.mlcdn.com.br/450x450/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/magazineluiza/234661800/a57c1ab14765ab0b7ca87de98ba94b94.jpg",
        description: "Apple iPhone 13 128GB Meia-noite Tela 6,1” 12MP",
        price: "4949,10",
        class: "telefone",
        store:"magalu.com",
        link: "https://m.magazineluiza.com.br/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/p/234661800/te/ip13/?partner_id=56885&utm_source=bob&utm_medium=email&utm_campaign=-ft_none-nc_recomendacao-oc_venda&utm_content=-un_magalu-ce_b2c-cp_crmagendadoabandono-view-site"
      },
      {
        image:"https://a-static.mlcdn.com.br/450x450/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/magazineluiza/234661800/a57c1ab14765ab0b7ca87de98ba94b94.jpg",
        description: "Apple iPhone 13 128GB Meia-noite Tela 6,1” 12MP",
        price: "4949,10",
        class: "telefone",
        store:"magalu.com",
        link: "https://m.magazineluiza.com.br/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/p/234661800/te/ip13/?partner_id=56885&utm_source=bob&utm_medium=email&utm_campaign=-ft_none-nc_recomendacao-oc_venda&utm_content=-un_magalu-ce_b2c-cp_crmagendadoabandono-view-site"
      },
      {
        image:"https://a-static.mlcdn.com.br/450x450/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/magazineluiza/234661800/a57c1ab14765ab0b7ca87de98ba94b94.jpg",
        description: "Apple iPhone 13 128GB Meia-noite Tela 6,1” 12MP",
        price: "4949,10",
        class: "telefone",
        store:"magalu.com",
        link: "https://m.magazineluiza.com.br/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/p/234661800/te/ip13/?partner_id=56885&utm_source=bob&utm_medium=email&utm_campaign=-ft_none-nc_recomendacao-oc_venda&utm_content=-un_magalu-ce_b2c-cp_crmagendadoabandono-view-site"
      },
      {
        image:"https://a-static.mlcdn.com.br/450x450/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/magazineluiza/234661800/a57c1ab14765ab0b7ca87de98ba94b94.jpg",
        description: "Apple iPhone 13 128GB Meia-noite Tela 6,1” 12MP",
        price: "4949,10",
        class: "telefone",
        store:"magalu.com",
        link: "https://m.magazineluiza.com.br/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/p/234661800/te/ip13/?partner_id=56885&utm_source=bob&utm_medium=email&utm_campaign=-ft_none-nc_recomendacao-oc_venda&utm_content=-un_magalu-ce_b2c-cp_crmagendadoabandono-view-site"
      },
      {
        image:"https://a-static.mlcdn.com.br/450x450/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/magazineluiza/234661800/a57c1ab14765ab0b7ca87de98ba94b94.jpg",
        description: "Apple iPhone 13 128GB Meia-noite Tela 6,1” 12MP",
        price: "4949,10",
        class: "telefone",
        store:"magalu.com",
        link: "https://m.magazineluiza.com.br/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/p/234661800/te/ip13/?partner_id=56885&utm_source=bob&utm_medium=email&utm_campaign=-ft_none-nc_recomendacao-oc_venda&utm_content=-un_magalu-ce_b2c-cp_crmagendadoabandono-view-site"
      },
      {
        image:"https://a-static.mlcdn.com.br/450x450/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/magazineluiza/234661800/a57c1ab14765ab0b7ca87de98ba94b94.jpg",
        description: "Apple iPhone 13 128GB Meia-noite Tela 6,1” 12MP",
        price: "4949,10",
        class: "telefone",
        store:"magalu.com",
        link: "https://m.magazineluiza.com.br/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/p/234661800/te/ip13/?partner_id=56885&utm_source=bob&utm_medium=email&utm_campaign=-ft_none-nc_recomendacao-oc_venda&utm_content=-un_magalu-ce_b2c-cp_crmagendadoabandono-view-site"
      },
      {
        image:"https://a-static.mlcdn.com.br/450x450/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/magazineluiza/234661800/a57c1ab14765ab0b7ca87de98ba94b94.jpg",
        description: "Apple iPhone 13 128GB Meia-noite Tela 6,1” 12MP",
        price: "4949,10",
        class: "telefone",
        store:"magalu.com",
        link: "https://m.magazineluiza.com.br/apple-iphone-13-128gb-meia-noite-tela-61-12mp-ios/p/234661800/te/ip13/?partner_id=56885&utm_source=bob&utm_medium=email&utm_campaign=-ft_none-nc_recomendacao-oc_venda&utm_content=-un_magalu-ce_b2c-cp_crmagendadoabandono-view-site"
      },



    ]
  }

  filter(value) {
    try{
      const filteredProducts = this.products.filter(product => product.class == value);

      if(filteredProducts .length === 0){
        throw new Error("Este produto nao existe, tente outro produto!")
      }

      this.products = filteredProducts
      this.update()

    } catch(error) {
      alert(error.message);
    }
  } 

}

export class productsView extends router {
  constructor(root, headerRoot) {
    super(root, headerRoot)
    this.update()
    this.search()
  }
  
  search() {
    const buttonSearch = this.headerRoot.querySelector(".search button");
    
    buttonSearch.onclick = () => {
      const {value} = this.headerRoot.querySelector(".search input");

      this.filter(value);
    }
  }

  update() {
    this.removeAllProducts();

    this.products.map(product => {
      const div = this.createProduct()

      div.querySelector(".description img").src = product.image
      div.querySelector(".description p").textContent = product.description
      div.querySelector(".price").textContent = `R$ ${product.price}`
      div.querySelector(".store").textContent = product.store
      div.querySelector(".link a").href = product.link;



      this.root.append(div)
    })
  }


  createProduct() {
    const div = document.createElement("div")

    div.innerHTML = `
      <div class="product">
        <div class="description">
          <img src="" alt="">
          <p></p>
        </div>
        <div class="information"> 
          <span class="price">289,90</span>
          <span class="store"></span>
        </div>
          <div class="line"></div>
          <footer> 
            <div class="actions">
              <button class="link">
              <a href="" target="_blank">
                <span>compre agora</span>
              </a>
              </button>
             
            </div>
          </footer>
      </div>
    `
    return div
  } 

  removeAllProducts() {
    this.root.querySelectorAll("div").forEach(product => {
      product.remove();
    });
  }
} 
