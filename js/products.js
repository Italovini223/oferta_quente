export class router {

  constructor(root) {
    this.root = document.querySelector(root)
    this.add()
  }

  add() {
    this.products = [
      {
        image: "https://images-americanas.b2w.io/produtos/01/00/img/3234381/2/3234381205_1GG.jpg",
        description: "Smartphone Samsung Galaxy S20 Fe 128GB 4G Wi-Fi Tela 6.5  Dual Chip 6GB RAM Câmera Tripla + Selfie 32MP - Cloud Navy" ,
        price: "1200,00",
        store:"www.americanas.com",
        user: "https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/117749876_3019107001551372_8840871970672128446_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UlwI3rooDBgAX_eAJ9l&_nc_ht=scontent-gig2-1.xx&oh=00_AT-iN6lpRjqK3FB-n-vlfvmNJMLOEClf6qRBFE2o4tzNMw&oe=632C9FF4"
      },
      {
        image: "https://images-americanas.b2w.io/produtos/4201596234/imagens/aspirador-de-agua-e-po-1400w-gtw-10-litros-wap-110v/4201596234_1_large.jpg",
        description: "Aspirador De Água e Pó 1400W gtw 10 Litros Wap 110v",
        price: "289,90",
        store:"www.americanas.com",
        user: "https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/117749876_3019107001551372_8840871970672128446_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UlwI3rooDBgAX_eAJ9l&_nc_ht=scontent-gig2-1.xx&oh=00_AT-iN6lpRjqK3FB-n-vlfvmNJMLOEClf6qRBFE2o4tzNMw&oe=632C9FF4"
      },

      {
        image: "https://images-americanas.b2w.io/produtos/5530010177/imagens/cooktop-essencial-itatiaia-5-bocas-preto-bivolt/5530010177_1_medium.jpg",
        description: "Cooktop Essencial Itatiaia 5 bocas Preto - Bivolt",
        price: "387,81",
        store:"www.americanas.com",
        user: "https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/117749876_3019107001551372_8840871970672128446_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UlwI3rooDBgAX_eAJ9l&_nc_ht=scontent-gig2-1.xx&oh=00_AT-iN6lpRjqK3FB-n-vlfvmNJMLOEClf6qRBFE2o4tzNMw&oe=632C9FF4"
      },
      {
        image: "https://a-static.mlcdn.com.br/280x210/notebook-lenovo-ideapad-3i-intel-celeron-4gb-128gb-ssd-156-windows-11-microsoft-365-82bu0008br/magazineluiza/235181100/b2490c4a7e18c14706af0bde15eb6511.jpg",
        description: "Notebook Lenovo Ideapad 3i Intel Celeron 4GB 128GB - SSD 15,6” Windows 11 + Microsoft 365 82BU0008BR",
        price: "1934,10",
        store:"www.americanas.com",
        user: "https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/117749876_3019107001551372_8840871970672128446_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UlwI3rooDBgAX_eAJ9l&_nc_ht=scontent-gig2-1.xx&oh=00_AT-iN6lpRjqK3FB-n-vlfvmNJMLOEClf6qRBFE2o4tzNMw&oe=632C9FF4"
      },
      {
        image: "https://a-static.mlcdn.com.br/210x210/fritadeira-eletrica-sem-oleo-air-fryer-electrolux-efficient-por-rita-lobo-eaf30-grafite-4l-com-timer/magazineluiza/234061400/952be780fc2ad964be21d7f62202a897.jpg",
        description: "Fritadeira Elétrica sem Óleo/Air Fryer Electrolux - Efficient por Rita Lobo EAF30 Grafite 4L com Timer",
        price: "445,55",
        store:"www.americanas.com",
        user: "https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/117749876_3019107001551372_8840871970672128446_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UlwI3rooDBgAX_eAJ9l&_nc_ht=scontent-gig2-1.xx&oh=00_AT-iN6lpRjqK3FB-n-vlfvmNJMLOEClf6qRBFE2o4tzNMw&oe=632C9FF4"
      },

      {
        image:"https://images-americanas.b2w.io/produtos/01/00/img/4455139/6/4455139640P1.jpg",
        description: "Smartphone Samsung Galaxy M52 5G 128GB 5G Wi-Fi Tela 6.7'' Dual Chip 6GB RAM Câmera Tripla + Selfie 32MP - Preto",
        price: "1599,00",
        store:"www.americanas.com",
        user: "https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/117749876_3019107001551372_8840871970672128446_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UlwI3rooDBgAX_eAJ9l&_nc_ht=scontent-gig2-1.xx&oh=00_AT-iN6lpRjqK3FB-n-vlfvmNJMLOEClf6qRBFE2o4tzNMw&oe=632C9FF4"
      }

    ]
  }  
}

export class productsView extends router {
  constructor(root) {
    super(root)
    this.update()
  }

   update() {
    this.products.map(product => {
      const div = this.createProduct()

      div.querySelector(".description img").src = product.image
      div.querySelector(".description p").textContent = product.description
      div.querySelector(".price").textContent = `R$ ${product.price}`
      div.querySelector(".store").textContent = product.store
      div.querySelector(".user img").src = product.user

      

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
            <div class="user">
              <img src="" alt="">
            </div>
            <div class="actions">
              <button class="favorites">
              <i class="fa-regular fa-heart fa-2x"></i>
              </button>
              <button class="comments">
                <i class="fa-regular fa-comments fa-2x"></i>
              </button>
            </div>
          </footer>
      </div>
    `
    return div
  } 
} 
