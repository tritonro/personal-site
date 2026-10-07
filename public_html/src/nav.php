<?php
/**
 * Shared site navigation.
 *
 * Usage, from a .php page in public_html/src/:
 *
 *     <?php $current_page = 'resume'; include __DIR__ . '/nav.php'; ?>
 *
 * (From a page in public_html/, include __DIR__ . '/src/nav.php' instead.)
 *
 * $current_page is optional; when it matches a key below, that link gets
 * aria-current="page". Links are root-absolute so the same markup works from
 * any directory depth. To add or reorder a link, edit $nav_links only.
 */
$nav_links = [
    'home'     => ['/index.html',        'Home'],
    'about'    => ['/src/about.html',    'About'],
    'now'      => ['/src/now.html',      'Now'],
    'projects' => ['/src/projects.html', 'Projects'],
    'resume'   => ['/src/resume.html',   'Resum&#233;'], // label is pre-escaped HTML
    'faiq'     => ['/src/404.html',      'FAIQ'],
];
$current_page = $current_page ?? '';
?>
<header>
    <nav aria-label="Main">
        <ul>
<?php foreach ($nav_links as $key => [$href, $label]): ?>
            <li>
                <a href="<?= htmlspecialchars($href, ENT_QUOTES) ?>"<?= $key === $current_page ? ' aria-current="page"' : '' ?>><?= $label ?></a>
            </li>
<?php endforeach; ?>
        </ul>
    </nav>
</header>
