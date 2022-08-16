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
        price: "1200, 00",
      },
      {
        image: "https://images-americanas.b2w.io/produtos/4201596234/imagens/aspirador-de-agua-e-po-1400w-gtw-10-litros-wap-110v/4201596234_1_large.jpg",
        description: "Aspirador De Água e Pó 1400W gtw 10 Litros Wap 110v",
        price: "289,90"
      },

      {
        image: "https://images-americanas.b2w.io/produtos/5530010177/imagens/cooktop-essencial-itatiaia-5-bocas-preto-bivolt/5530010177_1_medium.jpg",
        description: "Cooktop Essencial Itatiaia 5 bocas Preto - Bivolt",
        price: "387,81"
      },
      {
        image: "https://a-static.mlcdn.com.br/280x210/notebook-lenovo-ideapad-3i-intel-celeron-4gb-128gb-ssd-156-windows-11-microsoft-365-82bu0008br/magazineluiza/235181100/b2490c4a7e18c14706af0bde15eb6511.jpg",
        description: "Notebook Lenovo Ideapad 3i Intel Celeron 4GB 128GB - SSD 15,6” Windows 11 + Microsoft 365 82BU0008BR",
        price: "1934,10"
      },
      {
        image: "https://a-static.mlcdn.com.br/210x210/fritadeira-eletrica-sem-oleo-air-fryer-electrolux-efficient-por-rita-lobo-eaf30-grafite-4l-com-timer/magazineluiza/234061400/952be780fc2ad964be21d7f62202a897.jpg",
        description: "Fritadeira Elétrica sem Óleo/Air Fryer Electrolux - Efficient por Rita Lobo EAF30 Grafite 4L com Timer",
        price: "445,55"
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

      div.querySelector(".product img").src = product.image
      div.querySelector(".description p").textContent = product.description
      div.querySelector(".price").textContent = `R$ ${product.price}`

      this.root.append(div)
    })
  }

  createProduct() {
    const div = document.createElement("div")

    div.innerHTML = `
    <div class="product">
      <img src="" alt="">
      <div class="content">
        <div class="description">
          <p>
           
          </p>
          <span class="price">
          </span>
        </div>
        <div class="line"></div>
        <div class="informations">
          <a href="">
            Ver na loja
          </a>
        </div>
      </div>
   </div>
    `
    return div
  } 
} 
