/* ==========================================================================
   Eliseo Ruiz Nowell — portfolio behaviour
   No dependencies. Everything degrades gracefully without JavaScript.
   ========================================================================== */
(function () {
    'use strict';

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------------------------------------------------------------- header */
    var header = document.querySelector('.js-header');

    if (header) {
        var onScroll = function () {
            header.classList.toggle('is-scrolled', window.scrollY > 8);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ------------------------------------------------------------ mobile nav */
    var toggle = document.querySelector('.js-nav-toggle');
    var navList = document.querySelector('.js-nav-list');
    var mobile = window.matchMedia('(max-width: 48rem)');

    var closeNav = function () {
        if (!toggle || !navList) return;
        toggle.setAttribute('aria-expanded', 'false');
        if (mobile.matches) navList.hidden = true;
    };

    var syncNav = function () {
        if (!navList) return;
        // Outside the mobile breakpoint the list is always laid out inline.
        navList.hidden = mobile.matches && toggle.getAttribute('aria-expanded') !== 'true';
    };

    if (toggle && navList) {
        syncNav();

        toggle.addEventListener('click', function () {
            var open = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
            navList.hidden = open;
        });

        navList.addEventListener('click', function (event) {
            if (event.target.closest('a')) closeNav();
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') closeNav();
        });

        document.addEventListener('click', function (event) {
            if (!mobile.matches) return;
            if (event.target.closest('.nav')) return;
            closeNav();
        });

        if (mobile.addEventListener) {
            mobile.addEventListener('change', syncNav);
        } else if (mobile.addListener) {
            mobile.addListener(syncNav);
        }
    }

    /* --------------------------------------------------------- reveal on scroll */
    var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealables.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

        revealables.forEach(function (el) { revealObserver.observe(el); });
    }

    /* ------------------------------------------------------- active nav link */
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
    var sections = links
        .map(function (link) { return document.querySelector(link.getAttribute('href')); })
        .filter(Boolean);

    if (sections.length && 'IntersectionObserver' in window) {
        var setActive = function (id) {
            links.forEach(function (link) {
                if (link.getAttribute('href') === '#' + id) {
                    link.setAttribute('aria-current', 'true');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        };

        var visible = {};
        var sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                visible[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
            });

            var best = null;
            Object.keys(visible).forEach(function (id) {
                if (visible[id] > 0 && (!best || visible[id] > visible[best])) best = id;
            });

            if (best) setActive(best);
        }, { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] });

        sections.forEach(function (section) { sectionObserver.observe(section); });
    }

    /* ------------------------------------------------------------ footer year */
    var year = document.querySelector('.js-year');
    if (year) year.textContent = String(new Date().getFullYear());
}());
