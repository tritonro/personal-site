<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" >
    <link href="favicon.ico" type="image/x-icon" rel="icon" >
    <title>Rosario's Website</title>
    <meta name="description" content="Rosario Ortiz's personal Web page for CSE 134B" >
    <meta name="keywords" content="Rosario Ortiz" >
    <meta name="author" content="Rosario Ortiz" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    <link href="style/main.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="/scripts/theme-toggle.js"></script>
    <noscript>
        <style>
            .toggle-container{
                display: none;
            }
        </style>
    </noscript>
</head>
<body data-theme="dark">
    <?php $current_page = 'Home'; include __DIR__ . '/src/header.php'; ?>
<main id="home">
    <div id="top-content">
        <h1>Hi, I'm Rosario.</h1>
        <p>It's nice to meet you !</p>
        <p>I'm a Senior majoring in Computer Science at the University of California, San Diego.
            I also work as an IT technician for UCSD's Information Technology Services.</p>
        <p>You can learn more about me on my
            <a href="src/about.html">About</a>
            page.</p>

        <p>You can see what I've been up to on my
            <a href="src/now.html">Now</a>
            page.</p>
    </div>
    <div id="home-columns">
    <section class="home-sections">
        <h2>Do you care about code ?</h2>
        <p>See my projects
        <a href="src/projects.html">here</a>.</p>
    </section>
    <section class="home-sections">
        <h2>Want to hire me ?</h2>
        <p>My resum&#233; is right
            <a href="src/resume.html">here</a>. If you're still on the fence, you can see me answer some interview questions
            <a href="FAIQ.html">here</a>.</p>
    </section>
    <section class="home-sections">
        <h2>Let's chat.</h2>
        <a href="contact.html">Contact</a>
    </section>
    </div>
</main>
<footer class="empty">
</footer>
</body>

</html>