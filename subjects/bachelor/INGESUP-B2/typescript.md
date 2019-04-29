# Typescript

<img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width=500>

## Présentation

> "Javascript that scales." => Un Javascript qui s'adapte.

Langage open-source, crée par Microsoft

Transpilable en JS

Crée par Anders Hejlsberge (créateur de C#)

### Objectifs

1. Le support des propositions existantes et à venir d'EcmaScript
2. L'apport du typage optionnel à JavaScript
3. L'identification anticipée (static) de codes potentiellement invalides
4. La compilation vers du JavaScript optimisé, avec pour cible, au choix: ES3, ES5, ES6...

Mais n'a pas pour vocation a:

- Imiter les langages existants MAIS exploiter la nature de JavaScript et les usages des développeurs comme guide pour rendre le langage pertinent
- Utiliser un système de types "sage" (_sound_)

### Superset et transpilation

"TypeScript est un superset de JavaScript"

Un superset apportant le typage, les interfaces, les énumérations, les types génériques, les décorateurs...

![Superset](https://vinceops.me/content/images/2018/02/TypeScript_circles.png)
Il n'est pas totalement faux, mais à nuancer.

#### Suite

Un code passé en entrée :

```typescript
// person.js
class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }
}

console.log(new Person('John')); // Person { firstName: 'John' }
```

Sa compilation (ou plutôt, transpilation) :

```typescript
$ tsc --allowJs person.js --outDir dist
```

Le résultat ainsi transpilé, avec l'option target à "es5" (valeur par défaut) :

```typescript
// dist/person.js
var Person = /** @class */ (function() {
  function Person(firstName) {
    this.firstName = firstName;
  }
  return Person;
})();
console.log(new Person('John')); // Person { firstName: 'John' }
```

#### Suite

Par contre, si l'on renomme `person.js` (contenant notre code ES6) en `person.ts`, la compilation n'est plus possible :

```bash
$ tsc person.ts
```

_person.ts(3,10): error TS2339: Property 'firstName' does not exist on type 'Person'._

**Ce code n'est pas du TypeScript valide, bien qu'il soit du JavaScript valide.**

=> la notion de "Superset" telle que le graphique des 3 ensembles la présente est imprécise : on ne peut pas considérer ES6 comme un sous-ensemble de TypeScript.

Une syntaxe TypeScript valide, parmi d'autres :

```typescript
// person.ts
class Person {
  constructor(public firstName) {}
}

console.log(new Person('John')); // Person { firstName: 'John' }
```

## Les avantages de TS

2 citations du créateur de TS (Anders Hejlsberg)

> **Erik Meijer:** Vous insinuez que l'on ne peut pas écrire de grosses applications en JavaScript ?
>
> **Anders Hejlsberg:** Non, vous pouvez les écrire. Mais vous ne pouvez pas les maintenir. 😁

_Lang.NEXT 2012_

> Les très gros codes source JavaScript ont tendance à finir en "Lecture seule". 🤣

_Anders Hejlsberg, Microsoft Build 2016_

### Avantage du typage

Bien qu'optionnel, il apporte:

- analyse statique du code (sans exécution)
- amélioration significative de la maintenabilité et de la refactorisation du code
- une meilleur lisibilité et facilité d'apprentissage (genération automatique de la doc)

TypeScript est accompagné de fichiers de déclaration des API d'ES5, ES6, du DOM, etc

`tsc` est capable d'en tirer parti pour anticiper des erreurs éventuelles de programmation

```typescript
import * as module from 'module';

function normalizeName(name: string) {
  return module.start(name.toLocalUpperCase());
}
normalizeName(undefined);
```

#### Erreurs exemples

En premier :

```
 error TS2551: Property 'toLocalUpperCase' does not exist on type 'string'. Did you mean 'toLocaleUpperCase'?
```

Après correction :

```
 error TS2345: Argument of type 'undefined' is not assignable to parameter of type 'string'
```

### Refactoring

<img src="https://vincent-g.fr/content/images/2018/04/56-refactor-man.png" width=500>

## Programmation Orienté Objet (POO)

Si vous n'avez pas les bases arrêtez moi ;) !

### Interface

Les interfaces n'existent que dans le code TypeScript : il n'en reste rien dans la version transpilée en JavaScript.

Cependant, elles ont de multiples avantages :

- Documenter le code en spécifiant la structure attendues des données passées en paramètres ou retournées par les fonctions
- Permettre la validation des déclarations de classes qui les implémentent (rôle de Contrat)
- Étendre les interfaces de modules existants grâce à la Combinaison de déclaration ou Declaration merging

### Class

Malgré l'arrivée d'ECMAScript 2015 a apporté le support des classes en JavaScript. Cependant, certaines notions de la POO sont manquantes.

C'est le cas notamment :

- Des classes et méthodes abstraites
- Des attributs de visibilité (ou accessibilité) `private`, `protected`, `public`

Que l'on retrouve dans TypeScript. <img src="/subjects/img/oop_meme.jpg" width=300>

## Intégration, Installation et Migration

### Installation

```bash
npm install -g typescript
```

Le paquet typescript contient le compilateur `tsc` découvert dans précédemment.

L'installation du paquet `tslint` est aussi souvent conseillée (globale, ou locale à votre projet).

Dans le répertoire du projet, sont requis (recommandés) :

- Un fichier tsconfig.json, généré avec la commande `tsc --init` ou récupéré d'un projet type boilerplate.
- Un fichier tslint.json, généré avec la commande `tslint --init` ou récupéré d'un projet type boilerplate.

Pour "linter" le projet, on exécute `tslint -p .` à la racine du projet

Un éditeur de code avec un support décent de TypeScript : VSCode, WebStorm, ...

### Frontend

Il existe des configurations/plugins pour les principaux outils de transpilation et packaging:

- Avec Babel 7 et le preset `babel-preset-typescript`
- Avec Webpack et `ts-loader` ou `awesome-typescript-loader` d'avantage d'informations dans la documentation officielle
- Avec Rollup et `rollup-plugin-typescript2`
- Pour Browserify, Grunt, Gulp, référez-vous à la documentation officielle

### Backend

`ts-node` accélère légèrement le processus de développement, en permettant à node de charger des modules TypeScript (transpilés en mémoire lors de l'import).

Il peut être utilisé en ligne de commande, pour exécuter directement des fichiers TypeScript :

```
ts-node index.ts
```

ou bien exécuté comme module, dans un point d'entrée JavaScript classique (node index.js) :

```typescript
require('ts-node').register();
// on peut ensuite importer un fichier TypeScript (./src/index.ts)
require('./src/index');
```

### Migration

#### Adapter le code

- Activer allowJs (tsconfig.json) afin que le code existant soit intégré au code généré par tsc

- Procéder à la modification du code, fichier par fichier, à l'aide de l'annotation // `@ts-check`

##### @ts-check

`tsc` effectue l'analyse statique du code JavaScript contenant le commentaire // @ts-check.

Il est aussi possible d'utiliser l'option --checkJs (CLI de tsc, ou dans tsconfig.json) pour analyser tous les fichiers JavaScript passés en entrée.

Si vous optez pour checkJs, utilisez @ts-nocheck pour exclure certains fichiers JavaScript de l'analyse. Pour exclure seulement certaines lignes de code, utilisez @ts-ignore (avant chaque ligne).

#### Mieux encore

TypeScript peut aussi utiliser votre JSDoc pour trouver des erreurs dans votre code.

Voici un exemple, normalize-name.js :

```typescript
// @ts-check

/**
 * @param {string} name Name to be normalized
 *
 * @return {string} Normalized name.
 */
function normalizeName(name) {
  return name.trim().toUpperCase();
}

// Erreur : 5 n'est pas une string
normalizeName(5);
// Erreur : normalizeName retourne une string (calcul impossible)
const a = 3 * normalizeName('MiKe');
```

#### Suite

À la compilation tsc renvoie les erreurs suivantes :

_normalize-name.js(13,15): error TS2345: Argument of type '5' is not assignable to parameter of type 'string'._

_normalize-name.js(15,15): error TS2363: The right-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type._

Par contre, dans le code code ci-dessus, passer undefined à normalizeName n'est pas signalé comme une erreur par tsc.

Car JS et non TS mais si l'option `strict` n'est pas activée, TS ne nous avertira pas non plus

### Packages NPM et Imports

Lorsqu'on importe un package NPM dans un projet TS, `tsc` s'attend à trouver _des fichiers de décaration_.

Cependant tous les packages importés n'ont pas de fichier de déclaration, dans ce cas, 2 possibilités:

1. Installer les packages DefinitelyTyped correspondants. Il en existe pour la plupart des packages `(@types/node, @types/express, @types/lodash, @types/jest, ...)`
2. Créer des déclarations vides (stubs) de ces packages, pour autoriser leur import sans qu'ils soient signalés comme inconnus

```typescript
declare module 'nom-du-module'; // solution de secours

// le mieux reste de le faire correspondre au module importé
// ici pour pouvoir importer tous les fichiers JSON
// `import * as fileContent from './file.json'`
declare module '*.json' {
  const value: any;
  export default value;
}
```

## Conclusion

Passons à TS !
