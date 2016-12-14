# PasswordManagerIPL

Ceci est le projet Web de l'année 2016-2017 portant sur le développement d'un projet en NodeJS 
dans le cadre du cours. Celui-ci porte sur une application client-serveur de gestionnaire de mot de passe avec encryption 
de toute les communication aussi bien chez le client que le serveur. 

## Se Mettre en route

Les instructions suivantes vous permettront de faire tourner 
l'application sur votre machine locale pour du test et du developpement

### Prerequisites

Les logiciels que vous devriez avoir pour une installation LOCALE

```
MongoDB
npm
nodejs
```
Utilisez votre gestionnaire de paquet préféré pour installer tout cela ou bien installez manuellement sur Windows 

### Installing

Une fois ces conditions remplies, voici une liste non-exhaustive de commandes a introduire dans votre terminal permettant de lancer le projet mais avant tout lancez MongoDB

```
git clone http://github.com/NiGHT-RiDER/PasswordManager.git
cd PasswordManager/passwordManager/
npm install 
npm start
```

Il ne vous reste plus qu'a lancer votre navigateur de choix et d'aller sur http://localhost:3000/ et de créer un compte pour utiliser l'application



### And coding style tests

Explain what these tests test and why

```
├── app.js
├── bin
     └── www
├── helpers
  ├── crypto.js
  └── database.js
├── node_modules
  └── ... 
├── npm-debug.log
├── package.json
├── public
   ├── favicon.ico
   └── stylesheets
       └── style.css
├── routes
    ├── delete.js
    ├── home.js
    ├── index.js
    ├── insert.js
    ├── login.js
    ├── logout.js
    ├── signup.js
    └── update.js
└── views
    ├── error.jade
    ├── home.jade
    ├── insert.jade
    ├── layout.jade
    ├── list.jade
    ├── login.jade
    ├── menu.jade
    └── update.jade
```
Les routes contiennent le gros de l'application avec les helpers , tandis que les view elles ne font que gerer les vues fatalement avec le dossier public 
le repertoire node_modules lui contient tout les modules que l'application utilise mais il n'est pas necessaire de savoir ce qu'il y a dedans


## Deployment

Pour deployer sur en production plusieurs choix s'offre a vous le choix choisi par l'equipe est de push l'application a Heroku avec une base de données dans le cloud (mLab , ...)

## Built With

* [Express]
* [MongoDB]
* [Jade]




## Authors

* **Bogdanovic Stefan**
* **Delhaye Gabriel**
* **Di Vito Dylan**
* **SHEVTCHENKO Philipp**
* **Pirard Delanoe**



