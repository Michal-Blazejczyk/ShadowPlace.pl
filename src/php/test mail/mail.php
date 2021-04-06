<?PHP
$to      = 'budzik555@interia.pl';
$subject = $_POST['subject'];
$message = '<b>Imię </b>' . $_POST['name'] . "<br />\n" . '<b>Email </b>' . $_POST['email'] . "<br />\n" . '<b>Subject </b>' . $_POST['subject'] . "<br /><br />\n" . '<b> </b>' .  $_POST['message'];
$headers = 'From: ' . $_POST['name'] . ' < ' . $_POST['email'] . "\r\n" .  'Reply-To: ' . $_POST['email'] . "\r\n" . 'Content-type: text/html; charset=utf-8';
 
 
 echo '<h1>Wiadomość wysłana</h1>';
mail($to, $subject, $message, $headers);
 

 
?>
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shadowplace</title>
    <meta name="description" content="Your project description" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;400;700&display=swap" rel="stylesheet">
    
    
  </head>
  <body> 
    <div class="wrapper">

      <header class="header"> 
        <div class="header__logo">
          <a href="./index.html"><img class="header__logo-image" src="../foto/logo.png" alt="logo firmy ShadowPlace"></a>
        </div>
        <div class="header__help">
          <i class="fas fa-phone-volume"></i>Pomoc
          <div>602-307-003</div>
        </div>
        <div class="header__hours"><i class="fas fa-clock"></i>Godziny otwarcia
          <div>09.00 - 20.00</div>
        </div>
        <div class="header__email">
            <i class="fas fa-at"></i>E-mail
          <div>kontakt@shadowplace.pl</div>
        </div>


        <div class="header-settings">
            <a href="https://www.facebook.com/Shadowplace-124922406091178"><i class="fab fa-facebook"></i></a>
            </div>
      </header> 
      <!----------------------nav---------------> 

      <nav class="nav">
         
        <ul class="menu-nav">
            <li class="menu-nav__item">
                <a href="index.html" class="menu-nav__link">
                    <i class="fas fa-home"></i>
                </a>
            </li>
            <li class="menu-nav__item">
                <a class="menu-nav__link" href="about.html">O nas</a>
            </li>
            <li class="menu-nav__item">
                <a href="" class="menu-nav__link-special"></a>Produkt
                      <ul class="fff">
                          <li><a class="menu-nav__link" href="zaluzje-poziome.html">Żaluzje poziome</a></li>
                          <li><a class="menu-nav__link" href="rolety.html">Rolety</a></li>
                          <li><a class="menu-nav__link" href="zaluzje-panelowe.html">Żaluzje panelowe</a></li>
                          <li><a class="menu-nav__link" href="zaluzje-plisowane.html">Żaluzje plisowane</a></li>
                          <li><a class="menu-nav__link" href="zaluzje-pionowe.html">Żaluzje pionowe</a></li>
                          <li><a class="menu-nav__link" href="roleta-rzymska.html">Rolety rzymskie</a></li>
                          <li><a class="menu-nav__link" href="moskitiery.html">Moskitiery</a></li>
                          <li><a class="menu-nav__link" href="karnisze.html">Karnisze</a></li>
                          <li><a class="menu-nav__link" href="zaslony.html">Zasłony</a></li>
                          <li><a class="menu-nav__link" href="maty-drewniano-bambusowe.html">Maty drewniano-bambusowe</a></li>
                          <li><a class="menu-nav__link" href="markizy.html">Markizy</a></li>
                          <li><a class="menu-nav__link" href="pergole.html">Pergole</a></li>
                          <li><a class="menu-nav__link" href="Veranda.html">Weranda</a></li>
                          <li><a class="menu-nav__link" href="zip.html">Zip</a></li>
                          <li><a class="menu-nav__link" href="screen.html">Screen</a></li>
                          <li><a class="menu-nav__link" href="smart-home.html">Smart Home</a></li>
                          <li><a class="menu-nav__link" href="fotowoltaika.html">Fotowoltaika</a></li>
                      </ul>
              </li>
                <li class="menu-nav__item">
                  <a class="menu-nav__link" href="kontakt.html">Kontakt</a>
              </li>
              <li class="menu-nav__item">
                <a class="nav-btn" href="./kontakt.html">Napisz do nas!</a>
              </li>
        </ul>
        
      </nav>  
       <!------------------------burger-side--------------------------> 
       <div class="menu-btn">
        <span class="menu-btn__burger"></span>
      </div>
  
      <nav class="menu-side">
        <ul class="menu-nav-side">
          <li class="menu-nav--item active"> 
            <a href="zaluzje-poziome.html" class="menu-nav-link">
              Żaluzje poziome
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="rolety.html" class="menu-nav-link">
              Rolety
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="projects.html" class="menu-nav-link">
              Żaluzje plisowane
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="zaluzje-plisowane.html" class="menu-nav-link">
              Żaluzje plisowane
            </a>
          </li>
          <li class="menu-nav--item "> 
            <a href="zaluzje-pionowe.html" class="menu-nav-link">
              Żaluzje pionowe (verticale)
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="roleta-rzymska.html" class="menu-nav-link">
              Rolety rzymskie
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="moskitiery.html" class="menu-nav-link">
              Moskitiery
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="karnisze.html" class="menu-nav-link">
              Karnisze
            </a>
          </li>
          <li class="menu-nav--item "> 
            <a href="ogrody-zimowe.html" class="menu-nav-link">
              Ogrody Zimowe
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="zaslony.html" class="menu-nav-link">
              Zasłony
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="markizy.html" class="menu-nav-link">
              Markizy
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="pergole.html" class="menu-nav-link">
              Pergole
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="Veranda.html" class="menu-nav-link">
              Verandy
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="zip.html" class="menu-nav-link">
              Zip
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="screen.html" class="menu-nav-link">
              Screen
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="smart-home.html" class="menu-nav-link">
              Smart Home
            </a>
          </li>
          <li class="menu-nav--item">
            <a href="fotowoltaika.html" class="menu-nav-link">
              Fotowoltaika
            </a>
          </li>
        </ul>
      </nav>
        
        
        <!-------------------------article-flex-------------------->
      
      <section class="article__flex--wrapper">
        <nav class="article__wrap">
          
          <div class="article__list--left">
             
            <div class="article__list--left">
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="zaluzje-poziome.html">Żaluzje poziome</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaluzje-aluminiowe16mm.html">aluminiowe 16 mm</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaluzje-aluminiowe25mm.html">
                          aluminiowe 25 mm</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaluzje-aluminiowe35mm.html">
                          aluminiowe 35 mm</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaluzje-aluminiowe50mm.html">
                          aluminiowe 50 mm</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="drewniano-bambusowe25mm.html">drewniane/bambusowe 25 mm
                          </a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="drewniano-bambusowe35mm.html">drewniane/bambusowe 35 mm
                          </a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="drewniano-bambusowe50mm.html">drewniane/bambusowe 50 mm
                          </a></br>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="rolety.html">Rolety</a></td>
                  <tr>
                    <td>
                      <div class="example">
                          <i class="fas fa-sign-out-alt"></i><a class="example-link" href="rolety-wolnowiszace.html">Wolnowiszące</a></br>
                          <i class="fas fa-sign-out-alt"></i><a class="example-link" href="rolety-kasetowe.html">Kasetowe</a></br>
                          <i class="fas fa-sign-out-alt"></i><a class="example-link" href="rolety-dachowe.html">dachowe</a></br>
                          <i class="fas fa-sign-out-alt"></i><a class="example-link" href="rolety-sprenzynowe.html">Sprężynowe
                          </a></br>
                          <i class="fas fa-sign-out-alt"></i><a class="example-link" href="roletyDuolight.html">Duolight Dzień/Noc
                          </a></br>
                        </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="zaluzje-panelowe.html">Żaluzje panelowe</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaluzje-paneloweBasic.html">Basic</a>
                        
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="zaluzje-plisowane.html">Żaluzje plisowane</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaluzja-plisowana20.html">Żaluzje plisowane 20 mm</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaluzja-plisowana50.html">Żaluzje plisowane 50 mm</a></br>
                        
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="zaluzje-pionowe.html">Żaluzje pionowe (verticale)</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaluzje-pioniwe89Basic.html">System 89 mm Basic (verticale)</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaluzje-pioniwe127Basic.html">System 127 mm Basic (verticale)</a></br>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="roleta-rzymska.html">Rolety rzymskie</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="roleta-rzymskaBasic.html">System Basic</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="roleta-rzymskaUltra.html">System Ultra</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="roleta-rzymskaSoftline.html">System Softline</a></br>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="moskitiery.html">Moskitiery</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="moskitiery-ramkowe.html">System Ramkowy</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="moskitiery-drzwiowe.html">System Drzwiowy</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="moskitiery-plisowane.html">System Plisowany</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="moskitiery-rolowane.html">System Rolowany</a></br>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="karnisze.html">Karnisze</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="karnisze-reczneKS-CS.html">System KS/CS</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="karnisze-elektryczneTorro.html">System Torro</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="karnisze-elektryczneMovelite-Irismo.html">System Movelite/Irismo</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="karnisze-elektryczneGlydea-Ultra.html">System Glydea Ultra</a></br>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="ogrody-zimowe.html">Ogrody Zimowe</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="ogrody-zimoweWMU.html">System Roofio</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="ogrody-zimoweSLS.html">System Skylitespring</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="ogrody-zimoweSunshield.html">System Sunsfield</a></br>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="zaslony.html">Zasłony</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaslony-moderno.html">System Moderno</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaslony-flex.html">System Flex</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaslony-ring.html">System Ring</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaslony-tasma-olowek.html">System Taśma Ołówek</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zaslony-tasma-smok.html">System Taśma Smok</a></br>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="maty-drewniano-bambusowe.html">Maty drewniano-bambusowe</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="maty-drewniano-bambusowe-rolowany.html">System Rolowany</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="maty-drewniano-bambusowe-rzymski.html">System Rzymski</a></br>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="markizy.html">Markizy</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a  class="example-link" href="markizy-tarasowe.html"> Klasyczne tarasowe</a></br>
                        <i class="fas fa-sign-out-alt"></i><a  class="example-link" href="markizy-evo.html"> Klasyczne balkonowo-okienne</a></br>
                        <i class="fas fa-sign-out-alt"></i><a  class="example-link" href="markizy-bistro.html"> Wielkogabarytowe</a>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="pergole.html">Pergole</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="pergole-segmentowe-proste.html">Segmentowe - proste</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="pergole-segmentowe-skosne.html">Segmentowe - ukośne</a></br>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="veranda.html">Veranda</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link"href="veranda-wielkogabarytowa-sun-pro.html">Wielkogabarytowa</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link"href="veranda-ogrody-okna-dachowe.html">Ogrody zimowe i okna dachowe</a></br>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="zip.html">Zip</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zip-85.html">System 85</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zip-95.html">System 95</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zip-105.html">System 105</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="zip-125.html">System 125</a></br>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="screen.html">Screen</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="screen-85.html">System 85</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="screen-95.html">System 95</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="screen-105.html">System 105</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="screen-125.html">System 125</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="screen-markizorolety.html">Markizorolety</a></br>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
              <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="smart-home.html">Smart Home</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="smart-home-torro-plato.html">System Torro-Plato</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="smart-home-Somfy-Connexoon-RTS.html">Somfy-Connexoon RTS</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="smart-home-Somfy-TaHoma Premium.html">Somfy-TaHoma Premium</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="smart-home-Coulisse-Motion-Wi-Fi.html">Coulisse-Motion Wi-Fi</a></br>
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>


            <div class="article__list--list">
                <table>
                  <td><i class="fas fa-sign-in-alt"></i><a class="article__list--link" href="fotowoltaika.html">Fotowoltaika</a></td>
                  <tr>
                    <td>
                      <div class="example">
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="fotowoltaika-markizy.html">Markizy</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="fotowoltaika-zip-sceen.html">Zip screen</a></br>
                        <i class="fas fa-sign-out-alt"></i><a class="example-link" href="fotowoltaika-fasadowy.html">System fasadowy</a></br>
                        
                      </div>
                    </td>
                  </tr>
                </table>
              
            </div>
        
      </nav>
     
          <!---------------------right----------------------->
        <section class="category-wrap">
            <div class="main-wrap">
              
                <h1 class="main-title">Markizy <i class="fas fa-angle-double-right"></i> Wielkogabarytowe - Wolnostojąca</h1>
            </div>
             
            <section  class="zaluzja16mm">
             
              <div class="wrap-pictures">   
                <div id="imageGallery">
                  <div id="mainImage"></div>
                
                    <img src="../foto/alumiowe35.png" alt="Mechanizm FI 17 thumbnail" class="thumbnail tooltip" title="tu bedzie opis v13">
                    <img src="../foto/z-bambi25.png" alt="Mechanizm FI 17 thumbnail 2" class="thumbnail tooltip" title="tu bedzie opis v13">
                    <img src="../foto/z-drewno25.png" alt="Mechanizm FI 17 thumbnail 3" class="thumbnail tooltip" title="tu bedzie opis v13">
                    <img src="../foto/z-poziome50.png" alt="Mechanizm FI 17 thumbnail 4" class="thumbnail tooltip" title="tu bedzie opis v13">  
  
                    <img src="../foto/p1.png" alt="Mechanizm FI 17 thumbnail" class="thumbnail tooltip" title="pokrętło aluminium/pokrętło drewno-bambus">
                    <img src="../foto/p2.png" alt="Mechanizm FI 17 thumbnail 2" class="thumbnail tooltip" title="monogmagic/korba">
                    <img src="../foto/p3.png" alt="Mechanizm FI 17 thumbnail 3" 
                    class="thumbnail tooltip" title="łańcuszek/silnikDC">
  
                    
           
                  </div>    
                  <div class="system-wrap">
                    <h2 class="system-wrap__title">System Bistro</h2>
                    <p class="system-description">Wolnostojąca, dwustronna markiza tarasowa wykonana z
                        aluminium. Z tkaninami firm Dickson i Recasens (gwarancja 10 5
                        lat). Bogata paleta kolorów i wzorów. Obsługiwana za pomocą
                        korby lub elektrycznie. Model przygotowany technicznie do
                        ustawienia w dowolnym miejscu. 
                        
                      </p>
                      <div class="banner-title">
                        <p class="banner-title__description">Nie czekaj umów się już dziś na bezpłatny pomiar i wycenę:</p>
                        <i class="fas fa-phone-volume"></i>Zadzwoń
                        <p class="banner-title__time-email">602-307-003</p>
                        <i class="fas fa-at"></i>E-mail
                        <p class="banner-title__time-email">kontakt@shadowplace.pl</p>
                      </div>
                    </div>
                    
                  </div>
                <div class="to4">
  
                
                  
                <div class="system-description__system">
                  <p class="system-description__subsystem">
                  Opis produktu:<br><br>
                  
                  - Dostępne wszystkie kolory z
                  palety RAL (za dopłatą).<br>
                  - Bogata paleta kolorów i
                    wzorów.<br> 
                  - Obsługiwana za pomocą korby lub elektrycznie.<br> 
                  
              </p>
              </div>
               
              </div> 
             
          </section> 
         
         <!-----------------------------------------footer--------------------------------------------------->
      <footer class="footer">
    
        <div class="footer-wrap sm-links--darken">
          <div class="sm-links">
            <h2 class="sm-links__title">Menu</h2>
            <a href="about.html"><p class="sm-links__item">O firmie</p></a>
            <a href="kontakt.html"><p class="sm-links__item">Kontakt</p></a>
            <a href="regulamin.html"><p class="sm-links__item">Regulamin</p></a>
            <a href="polityka-cookies.html"><p class="sm-links__item">Polityka Cookies</p></a>
            <a href="galeria-shadowplace.html"><p class="sm-links__item">Zobacz naszą Galerię </p></a>
           </div>
           <div class="sm-links"> 
             <h2 class="sm-links__title">Adres</h2>
             <p class="sm-links__item"><i class="fas fa-map-marker-alt"></i>Shadow Place</p>
             <p class="sm-links__item">Młynarska 21 lok. 46</p>
             <p class="sm-links__item">05-500 Piaseczno</p>
             
            </div>
           <div class="sm-links"> 
             <h2 class="sm-links__title">Kontakt</h2>
             <p class="sm-links__item"><i class="fas fa-at"></i>biuro@shadowplace.pl</p>
              <a href="www.shadowplace.pl"><p class="sm-links__item"><i class="fas fa-globe-americas"></i>www.shadowplace.pl</p></a>
              <p class="sm-links__item"><i class="fas fa-phone-volume"></i>602 307 003</p>
            </div>
          </div>  
          <div class="wrap-icons">
            
            <p class="sm-links__item">
              <a href="https://www.facebook.com/Shadowplace-124922406091178"><i class="fab fa-facebook-square"></i></a>
              
              <i class="fab fa-amazon-pay"></i>
              <i class="fab fa-cc-mastercard"></i>
              <i class="fab fa-apple"></i>
              <i class="fab fa-windows"></i>
              <i class="fab fa-android"></i>
            </p>
          
        </div>   
          <p class="footer-description">© 2021 realizacja MB www.shadowplace.pl</p>
        </div>    
      </footer>
        </section>
      </section>                 
  </div>

  </body>
</html>
