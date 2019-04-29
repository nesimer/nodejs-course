# NestJS

<img src="/subjects/img/logonest.svg" width=700>

## Histoire

Kamil MYSLIWIEC (@kammysliwiec) **2017**

Dev front -> best framework backend en node.js 😱

<img src="/subjects/img/troll.gif" width=300>
<img src="/subjects/img/withKamil.jpg" width=300>

## Aujourd'hui

- plus de 11 000 stars sur Github
- 60 contributeurs
- Près de 1200 issues donc seulement 51 encore ouvertes
- Déjà en version 5.4.1 !
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

Tout est interface !

Chaque option, chaque méthode, chaque classe est typée => meilleur maintenabilité et lisibilité

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

### Controller

Gère les requêtes provenants des clients

<img src="https://docs.nestjs.com/assets/Controllers_1.png">

Doc => [ici](https://docs.nestjs.com/controllers)

### Service / Provider

Il s'agit de code dit 'injectable' car on peut vouloir l'utiliser à différentes endroits.

Il contient le métier et les actions à effectuer sur les données.

<img src="https://docs.nestjs.com/assets/Components_1.png" style="margin-left:-150px;">

Doc => [ici](https://docs.nestjs.com/providers)

### Module

Doc => [ici](https://docs.nestjs.com/modules)

### Middleware

Doc => [ici](https://docs.nestjs.com/middleware)

### Exception Filters

Doc => [ici](https://docs.nestjs.com/exception)

### Pipes

Doc => [ici](https://docs.nestjs.com/pipes)

### Guards

Doc => [ici](https://docs.nestjs.com/guards)

### Interceptors

Doc => [ici](https://docs.nestjs.com/interceptors)

### Decorators (custom)

Doc => [ici](https://docs.nestjs.com/custom-decorators)
