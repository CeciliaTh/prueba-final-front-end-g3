import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="footer-distributed">

        <div class="footer-left">

          <h3>Burger<span>Town</span></h3>


          <p class="footer-company-name">BurgerTown © 2023 | All rigths reserved</p>
        </div>

        <div class="footer-center">

          <div>
            <i class="fa fa-map-marker"></i>
            <p>Providencia, Santiago de Chile </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>Nuesto whatsapp para ordenar <a href='https://web.whatsapp.com'><img src="https://icones.pro/wp-content/uploads/2021/02/icone-du-logo-whatsapp-vert.png" className='imgws' alt='imgws'></img></a></p>

          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p>Siguenos en instagram <a href='https://instagram.com'><img src=" https://static.vecteezy.com/system/resources/previews/017/743/717/original/instagram-icon-logo-free-png.png" className='imgws' alt='imgws'></img></a></p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">support@burgertown.com</a></p>
          </div>

        </div>

        <div class="footer-right">

          <p class="footer-company-about">
            <span>Sobre nosotros</span>
            Somos un nuevo restaurante dedicado a llevar hasta tu casa las mejores hamburguesas de la ciudad.
          </p>

        </div>

      </footer>

    </div>

  )
}

export default Footer