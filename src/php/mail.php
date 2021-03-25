
<?php
$to = "budzik555@interia.pl";
$name = $_POST['name'];
$nazwisko = $_POST['email'];
$subject = 'Nowy e-mail od ' . $name . ' (' . $email . ')';
$massage = $_POST['massage'];

$headers = 'From:'  . $name . '(' . $email . ')';
$headers = "Content-type: text/html; charset=utf-8\r\n";

echo '<h1>Wiadomosc wyslana :)</h1>';
mail($to, $subject, $txt, $headers);
?>
   
