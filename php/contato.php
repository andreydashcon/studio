<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Contato - AgroConnect SC</title>
    <style>
        body {font-family: Arial, sans-serif;margin:0;padding:0;background:#F5F5DC;}
        header, footer {background:#90EE90;padding:1em;text-align:center;}
        nav a {margin:0 1em;color:#000;text-decoration:none;}
        section {padding:2em;}
        form {display:flex;flex-direction:column;max-width:400px;margin:auto;gap:0.5em;}
        input, textarea {padding:0.5em;}
    </style>
</head>
<body>
<header>
    <h1>AgroConnect SC</h1>
    <nav>
        <a href="index.php">Home</a>
        <a href="sobre_nos.php">Sobre N\xF3s</a>
        <a href="contato.php">Contato</a>
    </nav>
</header>
<section>
    <h2>Entre em Contato</h2>
    <form method="post" action="">
        <input type="text" name="nome" placeholder="Seu nome" required>
        <input type="email" name="email" placeholder="Seu email" required>
        <textarea name="mensagem" placeholder="Mensagem" required></textarea>
        <button type="submit">Enviar</button>
    </form>
</section>
<footer>
    &copy; <?= date('Y') ?> AgroConnect SC
</footer>
</body>
</html>
