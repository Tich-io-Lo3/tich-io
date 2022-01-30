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

Bien que cela ne soit pas recommandé, nous laissons le docker-compose sur le git afin que vous y ayez accès. En lançant ce fichier ```sudo docker-compose up```, tous les dockers nécessaires seront lancés. Toutes les variables d'environnement sont comprises dedans. Tous ce dont vous avez besoin est le fichier docker-compose.

# L'APPLICATION FRONTEND

Nous avons décidé de construire le front end à l'aide du framework react. Nous avons fait ce choix car c'est un framework que nous connaissions tous et pour lequel nous avions beaucoup d'affinité.

# L'APPLICATION BACKEND

La partie backend a été réalisée avec le framework express. Ce framework est facile à prendre en main et nous y avions déjà touché durant nos cours. Nous avons aussi utilisé le framework sequelize pour la gestion de données. Léger, simple à mettre en place, ce framework est parfait pour la réalisation de petits projets comme le notre.