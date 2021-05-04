# I18nPlayground

Ce projet est une application de démo pour la mise en place de l'internationalisation. La branche principale (master) contient le code de l'application en anglais seulement, tandis que la branche i18n contient le code de l'application internationalisée.

Vous pouvez retrouver l'article complet sur https://dessine-moi-un-programme.blogspot.com/2021/05/bonjour-hello-buenas-tardes.html

## Serveur de dev

Pour lancer l'application en mode développement, lancer la commande "ng serve". Attention cela ne marchera pas sur la branche i18n.

## Serveur web pour le build

Pour lancer un build de l'application, lancer la commande "ng build".
Pour tester l'application, vous allez avoir besoin d'un serveur web. Installez le avec la commande "npm i lite-server --save-dev".
Lancer le avec la commande "lite-server --baseDir="dist/i18n-playground".
Naviguer sur "http://localhost:3000/index.html" pour une version buildée de la master.
Naviguer sur "http://localhost:3000/fr/index.html" ou "http://localhost:3000/en-US/index.html" pour une version buildée de la branche i18n.
