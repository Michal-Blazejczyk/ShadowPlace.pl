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
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content ="tanio, żaluzje plisowanie, żaluzje pionowe, rolety, rolety rzymskie, żaluzje pionowe, karnisze, Shadow place, warszawa, moskitiery, karnisze, piaseczno, markizy, żaluzje panelowe, żaluzje sunshield, maty drewniano-bambusowe, żaluzje wewnętrze, żaluzja zewnętrzna, żaluzja dzień noc, żaluzje okienne, montaż, bezpłatny pomiar, markiza na balkon"/>
        <meta name="description" content="Komfort i styl są na wyciągnięcie ręki – aby wprowadzić je do wnętrza, wystarczy zamontować żaluzje plisowane. W naszej ofercie znajdziesz mnóstwo modnych rolet oraz żaluzji.">
        <title>Żaluzje Shadowplace Warszawa-Piaseczno, rolety, plisy, rolety, markizy i inne akcesoria okienne </title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style.css">
    </head>
<body>
    
    
        
        <div class="menu-btn"> 
            <span class="menu-btn__burger"></span>
        </div>   
      
        <nav class="nav">
            <ul class="menu-nav">
    
                <li class="menu-nav__item active">
                   <a href="about_us_shadowplace.html" class="menu-nav__link">
                      o nas
                   </a>   
                </li>
                <li class="menu-nav__item active">
                   <a href="zaluzje_poziome_shadowplace.html" class="menu-nav__link">
                      żaluzje poziome 
                   </a>   
                </li>
                <li class="menu-nav__item">
                   <a href="rolety_shadowplace.html" class="menu-nav__link">
                       rolety
                   </a>   
                </li>
                <li class="menu-nav__item">
                   <a href="zaluzje_pionowe_shadowplace.html" class="menu-nav__link">
                       żaluzje pionowe
                   </a>   
                </li>
                
                <li class="menu-nav__item">
                   <a href="zaluzje_plisowane_shadowplace.html" class="menu-nav__link">
                       żaluzje plisowane
                   </a>   
                </li>
                
                <li class="menu-nav__item">
                   <a href="rolety_rzymskie_shadowplace.html" class="menu-nav__link">
                       rolety rzymskie
                   </a>   
                </li>
                <li class="menu-nav__item">
                   <a href="moskitiery_shadowplace.html" class="menu-nav__link">
                       moskitiery
                   </a>   
                </li>
                <li class="menu-nav__item">
                   <a href="zaluzje_panelowe_shadowplace.html" class="menu-nav__link">
                        żaluzje panelowe
                   </a>   
                </li>
                <li class="menu-nav__item">
                   <a href="karnisze_shadowplace.html" class="menu-nav__link">
                       karnisze
                   </a>   
                </li>
                <li class="menu-nav__item">
                   <a href="sunshield_shadowplace.html" class="menu-nav__link">
                       żaluzje sunshield
                   </a>   
                </li>
                <li class="menu-nav__item">
                   <a href="ogrody_zimowe_shadowplace.html" class="menu-nav__link">
                       ogrody zimowe
                   </a>   
                </li>
                <li class="menu-nav__item">
                   <a href="maty_bambusowe_shadowplace.html" class="menu-nav__link">
                       maty drewniano-bambusowe
                   </a>   
                </li>
                <li class="menu-nav__item">
                   <a href="markizy_shadowplace.html" class="menu-nav__link">
                       markizy
                   </a>   
                </li>
            </ul>
        </nav>



  
<footer class="footer">

    <div class="footer__menu">
            
        <a href="index.html">Home</a>
        <a href="about_us_shadowplace.html">O firmie</a>
        <a href="kontakt_shadowplace.html">Kontact</a>
        <a href="regulamin_shadowplace.html">Regulamin</a>
        <a href="cookies_shadowplace.html">Polityka COOKIES</a>
    
        <div class="footer__fonts">    
            <i class="fab fa-cc-visa font"></i>
            <i class="fab fa-cc-mastercard font"></i>
            <i class="fab fa-cc-amex font"></i>
            <i class="fab fa-cc-paypal font"></i>
            <p class="footer__copy">&;copy Shadow Place 2020 Rezalizacja: Michael B</p>
        </div>
    </div>     

</footer>
    <script src="https://kit.fontawesome.com/6d2ea823d0.js"></script> 
    <script src="js/menu.js"></script>
    <script src="jquery-3.4.1.min.js"></script>
    
</body>
</html>
 
