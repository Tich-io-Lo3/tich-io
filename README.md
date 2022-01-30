# EMPLACEMENT DU SITE WEB

Le site web est accessible à l'addresse suivante http://26.muffin.pm/

# EMPLACEMENT DE L'API

L'api est accessible à partire de la route http://api.26.muffin.pm/

# NAVIGUER SUR LE SITE

Sur l'ensemble du site, on peut y voir une barre de navigation présentant les différentes actions possibles.

- Créer un nouveau jeu (Create game)
- Afficher les jeux (Games)
- Se connecter (Sign in)
- S'inscrire (Sign up)
- Une fois connecté, il est aussi possible de se déconnecter (Sign out)

# TÉLÉCHARGER L'APPLICATION
Buildez le frontend avec ```npm install``` et ```npm build``` dans la repertoire ./buildReact
Mettez vous dans la rep parent de buildReact avant de lancer les commandes suivants.
Bien que cela ne soit pas recommandé, nous laissons le docker-compose et backend.env sur le git afin que vous y ayez accès. Connectez-vous avec le compte Git membre du ce projet: ```sudo docker login ghcr.io -u *user* -p *mdp*```. En lançant ```sudo docker-compose up``` dans la repertoire avec ces fichiers, tous les dockers nécessaires seront lancés. Toutes les variables d'environnement sont comprises dedans. Tous ce dont vous avez besoin est le fichier docker-compose et backend.env.

# L'APPLICATION FRONTEND

Nous avons décidé de construire le front end à l'aide du framework react. Nous avons fait ce choix car c'est un framework que nous connaissions tous et pour lequel nous avions beaucoup d'affinité.

# L'APPLICATION BACKEND

La partie backend a été réalisée avec le framework express. Ce framework est facile à prendre en main et nous y avions déjà touché durant nos cours. Nous avons aussi utilisé le framework sequelize pour la gestion de données. Léger, simple à mettre en place, ce framework est parfait pour la réalisation de petits projets comme le notre.

# FONCTIONALITÉS

Les actions de GitHub sont en place et permettent de mettre à jour l’application sur la vm a chaque pull request sur dev.

EsLint et Prettier sont configures pour assurer la lisibilité du code de projet.

L’application est déployée grâce à docker-compose. Tous les containers nécessaires tel que aws et la bdd sont lance avec.

Le Traefik gère les redirections et permet d’accéder à api et à l’application avec les liens simples.

Certaines fonctionnalités n’ont pas été implémentes de côté frontend, mais ont été teste avec Postman. L’interaction avec aws fonction. Il est possible d’ajouter et récupérer les images du jeu et ces distributions.
