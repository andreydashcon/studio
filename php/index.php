<?php
$slides = [
    [
        'imageUrl' => 'https://placehold.co/1920x600.png',
        'title' => 'Agro Saletense: Solu\xE7\xF5es Completas do Plantio \xE0 Colheita',
        'subtitle' => 'Tecnologia e tradi\xE7\xE3o para o agroneg\xF3cio de Salete e regi\xE3o.'
    ],
    [
        'imageUrl' => 'https://placehold.co/1920x600.png',
        'title' => 'Agricultura de Precis\xE3o com Drones',
        'subtitle' => 'Otimize sua produ\xE7\xE3o com pulveriza\xE7\xE3o e mapeamento a\xE9reo.'
    ],
    [
        'imageUrl' => 'https://placehold.co/1920x600.png',
        'title' => 'Sa\xFAde Animal em Foco',
        'subtitle' => 'Linha completa de medicamentos e suplementos veterin\xE1rios.'
    ]
];
$productCategories = [
    'Insumos Agr\xEDcolas',
    'Sa\xFAde Animal',
    'Servi\xE7os de Precis\xE3o'
];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>AgroConnect SC - PHP</title>
    <style>
        body {font-family: Arial, sans-serif;margin:0;padding:0;background:#F5F5DC;}
        header, footer {background:#90EE90;padding:1em;text-align:center;}
        nav a {margin:0 1em;color:#000;text-decoration:none;}
        .banner img {width:100%;height:auto;display:block;}
        section {padding:2em;}
        .categories {display:flex;flex-wrap:wrap;gap:1em;justify-content:center;}
        .card {background:#fff;border:1px solid #ccc;padding:1em;width:250px;text-align:center;}
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
<div class="banner">
    <?php foreach ($slides as $slide): ?>
        <img src="<?= $slide['imageUrl'] ?>" alt="<?= htmlspecialchars($slide['title']) ?>">
    <?php endforeach; ?>
</div>
<section>
    <h2>Bem-vindo \xE0 AgroConnect SC!</h2>
    <p>Sua parceira completa em Salete e regi\xE3o.</p>
</section>
<section class="categories">
    <?php foreach ($productCategories as $category): ?>
        <div class="card">
            <h3><?= $category ?></h3>
        </div>
    <?php endforeach; ?>
</section>
<footer>
    &copy; <?= date('Y') ?> AgroConnect SC
</footer>
</body>
</html>
