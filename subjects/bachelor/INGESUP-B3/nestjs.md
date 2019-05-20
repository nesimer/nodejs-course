# NestJS

<img src="/subjects/img/logonest.svg" width=700>

## Histoire

Kamil MYSLIWIEC (@kammysliwiec) **2017**

Dev front -> best framework backend en node.js 😱

<img src="/subjects/img/troll.gif" width=300>
<img src="/subjects/img/withKamil.jpg" width=300>

## Aujourd'hui

- plus de 15 800 stars sur Github
- 82 contributeurs
- Près de 1550 issues dont seulement 70 encore ouvertes
- Déjà en version 6.2.2 !
- Compatibilité TS & JS

<img src="/subjects/img/tenor.gif" width=450>

## Installation

**Node.js(>= 8.9.0)**

To get started, avec le Nest CLI:

```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```

Ou

```bash
$ git clone https://github.com/nestjs/typescript-starter.git project
$ cd project
$ npm install
$ npm run start
```

Ou encore avec NPM ou yarn:

```bash
$ npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata
```

### Nest CLI

[Documentation](https://docs.nestjs.com/cli/usages)

`nest -h` =>

```bash
Options:

  -V, --version                                            output the version number
  -h, --help                                               output usage information

Commands:

  new|n [options] [name] [description] [version] [author]  Generate a new Nest application.
  generate|g [options] <schematic> <name> [path]           Generate a Nest element.
  info|i                                                   Display Nest CLI details
  update|u [options]                                       Update @nestjs dependencies.
  add <library>                                            Allow user to add a library
```

`<schematic>` => application, module, controller, service, pipe, interceptor, ...

## Architecture

Nest est né pour résoudre un problème

L'absence d'architecture complète et abstraite pour créer une application node.js

**Solution :**

Une architecture prête à l'emploi pour créer des applications hautement testables, évolutives, couplées de manière peu dépandantes (lâches) et faciles à maintenir

### Principe

Tout est interface !

Chaque option, chaque méthode, chaque classe est typée => meilleur maintenabilité et lisibilité (si usage de TS 😉)

Si installation avec CLI =>

```
- src
  - app.controller.ts // Définition des routes du AppModule (basic controller)
  - app.module.ts // Définition de AppModule, le module root de l'application
  - main.ts // Le fichier d'entrée de l'application (NestFactory)
```

### Suite

Par convention, 1 module = 1 répertoire avec ses tests ses sous-modules

<img src="/subjects/img/exemplearchi.png" width=150>

NestJs => Lego de module (comme node ;) )

<img src="/subjects/img/batmanlego.gif" width=300>

## Composants

<img src="/subjects/img/heart.gif">

Documentation => [ici](https://docs.nestjs.com/)

## Projet 👼

2 projets => 1 seul à choix qui sera définitif

1 niveau starter => pour les personnes ayant fait peu de JS/TS

1 niveau expert => pour les personnes ayant déjà fait du JS/TS et familier avec Node

### Niveau "Starter"

Réalisation d'une API connectée à une base PostgreSql qui mettra à disposition un CRUD complet et documenté

Elle devra gérer des zoos:

- on peut avoir x zoos
- chaque zoo possède des employés (humains)
- chaque zoo possède des enclos
- chaque enclos peut avoir deux espèces d'animaux ayant le même type d'alimentation (carnivore/herbivore)

Vous êtes libre quant aux informations contenues dans chacunes des entités mais les contraintes doivent être respectées

Pas besoin de gestion de connexion/inscription d'utilisateur

Vous utiliserez TypeOrm comme ORM de votre API

### Niveau "Expert"

Réalisation d'un micro-service RabbitMQ via l'architecture proposée par Nest

Ce micro-service aura pour objectif d'être utilisé par l'API de gestion de zoo afin de nourrir et soigner les animaux en consommant les messages d'un serveur de messaging

Vous ne devrez pas gérer des employés mais avoir une visibilité sur cette entité (en vous basant sur le travail de l'autre groupe)

Vous gérerez le statut des animaux, la nourriture et le stock.

Votre micro-service devra exposer au moins 4 point d'api afin de répondre à 4 commandes différentes:

- retourner les stocks de nourriture en dessous d'une quantité de 10
- changer le statut d'un animal en le passant de malade à normal (commande de soin)
- nourrir un animal (statut de faim de l'animal mis à jour et stock de nourriture mis à jour)
- Changer un animal d'enclos en respectant la contrainte d'alimentation de l'animal

Votre micro-service ne repondra pas directement en http mais sur un serveur de Pub/sub (Redis) car les résultats de vos commandes seront traitées et transformées en action par d'autres outils qui consommeront les informations envoyées au pubsub

### Contraintes pour les projets

Tout code écrit doit être tester unitairement.

Vos modules doivent être tester en mode end to end (e2e).

Vous mettrez en place une documentation claire et soignée.

Vos projets doivent être dans le groupe gitlab correspondant:

- https://gitlab.com/zoo-ynov/starter
- https://gitlab.com/zoo-ynov/expert

Maximum de 3 personnes par projet
