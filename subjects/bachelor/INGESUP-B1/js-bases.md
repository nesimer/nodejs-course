# Les Bases du JavaScript

<img src="https://user.oc-static.com/files/350001_351000/350845.png" style="margin-left:150px;">

## Définition

> Le JavaScript est un langage de programmation de scripts orienté objet

Kezako? <span style="font-size:30pt">🤔</span>

### Langage de programmation

Il s'agit d'un langage destiné aux développeurs afin de rédiger du `code source`.

Le JS est un langage de programmation **interprété**.

### Utilisation

Majoritairement utilisé pour `dynamiser` des pages HTML

Il permet de gérer le DOM d'une page Web.

On dit qu'il s'agit d'un langage **client-side** (exécuté côté client donc pas sur un serveur). Pour comparer, `PHP` ou `Java` sont des langages **server-side**.

<img src="https://user.oc-static.com/files/292001_293000/292939.png">

#### Mais pas que dans le navigateur

Cependant depuis sa création le JS c'est abstrait de son rôle simple dans les pages Web et est aujourd'hui un langage universel dans le sens où il est peut être interpreté aussi bien **client-side** que **server-side** (grâce à des frameworks tel que `Node.js`).

Il est maintenant de plus en plus utilisé pour faire des applications natives pour mobiles (`React-Native` notamment) ou des applications desktop (`Electron`).

## Histoire

1995 - Brendan Eich - NETSCAPE

<img src="https://yard.onl/sitelycee/cours/js/lib/NouvelElement5.jpg">

Crée en 10 jours mais s'appelait à la base `LiveScript`, cependant, en hommage à Java et pour se faire de la publicité, il s'est fait renommé **JavaScript**

### ECMA

=> European association for standardizing information and communication systems

Gère la standardisation du langage sous le nom d'`ECMAScript`.

<img src= "https://www.arpatech.com/blog/wp-content/uploads/2017/06/The-Evolution-Of-JavaScript-In-Recent-Times-2.png">

### ECMA - 2

Chaque version nouvelle bouleverse les habitudes des développeurs JS mais dans le bon sens :

- 1997 ECMAScript 1 First Edition.
- 1998 ECMAScript 2 Editorial changes done only.
  -1999 ECMAScript 3 Regular Expressions added. (fully supported in all browsers.)
  **Try/catch added**.
- 2009 ECMAScript 5 Strict mode added. (fully supported in all modern browsers.)
  **JSON support added**.
- 2010 ECMAScript 5 Also called as JavaScript 1.8.5.
- 2015 ECMAScript 6 Classes and modules added. (partially supported in all modern browsers.)
- 2016 ECMAScript 7 Exponential operator added (\*\*).
  **Array.prototype.includes added**.
- 2017 ECMAScript 8 Advanced to stage 4

## Premier Pas

**Pré-requis:** Vous munir d'un bon IDE

<img src="https://st2.depositphotos.com/6436316/10120/v/950/depositphotos_101202576-stock-illustration-lets-try-it-paper-sticky.jpg" style="width:150px">

### Comment insérer un programme JavaScript dans une page HTML ?

```javascript
<script type="text/javascript"> ou <script> pour HTML5
<!--
 instructions
//-->
</script>
```

### Mais où ?

- Dans l'en-tête du document HTML.

```javascript
<head>
  <script type="text/javascript">…….</script>
</head>
```

- Dans une balise HTML pour détecter un événement.

```javascript
<input type="button" ….. onClick="alert('ok');">
```

Mais les balises `<script></script>` sont inutiles.

(Manière la moins propre)

- Dans le corps de la page

```javascript
<body>
  <script type="text/javascript">var toto = 42;</script>
</body>
```

### Mais où ? - 2

- Dans un lien.

```javascript
Ex: <a href="javascript:alert('merci');"> lien </a>;
```

- Dans un formulaire.

```javascript
Ex: <form name="f1" action="javascript:alert('ok');">
```

- Dans un fichier externe.
  Le code des programmes JavaScript peut-être enregistré dans un fichier externe
  ayant l'extension ".js"
  La relation s'effectuera de la manière suivante:

```javascript
<script type="text/javascript" src="fichier.js" />
```

Attention aucun code entre les balises <script> et </script>

=> Lié ainsi le JS est interprété donc exécuté lors du chargement de la page HTML

## Bases

<img src="https://i.ytimg.com/vi/XkvrHQNmigs/maxresdefault.jpg" style="width:750px;">

### First things

Les instructions doivent êtres séparées par un point-virgule `;` (guidelines mais pas obligatoire)

L'indentation des instructions n'est pas non plus obligatoires mais un code lisible c'est un code maintenable

<span style="font-size:30pt">😜</span>

```javascript
// commentaire one-line
/*
 * commentaire multi-line
 */
```

### Orienté Objet

Il permet donc de manipuler des objets, des propriétés et des méthodes.

JavaScript permet de manipuler deux types d'objets existants:

- Les objets du navigateur (window, document, history etc)
- Les objets du langage (String, Math, Array, Date etc.)

Mais on peut créer aussi ses propres types depuis les dernières version d'ECMAScript.

```javascript
String.charAt(); // éxécution de la méthode `charAt` de l'objet `String`
['value'].length; // retourne la taille du tableau en question
// anonyme
let Person = class {
  constructor(gender, age) {
    this.gender = gender;
    this.age = age;
  }
};
// nommée
let Person = class Person {
  constructor(gender, age) {
    this.gender = gender;
    this.age = age;
  }
};
```

#### Objets du navigateur

<img src="http://www.yaldex.com/javascript_tutorial_3/images/fig05_01_0.jpg" style="width:750px">

##### `window`

- location : URL de la fenêtre courante. Non modifiable.
  `window.alert(window.location);`
- name : nom de la fenêtre
  `window.name="première fenêtre"`

- alert(): pour afficher un message dans une boîte de dialogue.
  `window.alert("bonjour" + nom );`
- prompt() : pour saisir une donnée dans une boîte de dialogue.
  `const v = window.prompt("message"[,"valeur par défaut"])`
- confirm() : pour cliquer sur OK ou ANNULER dans une boîte de dialogue
  `rep = window.confirm("voulez-vous continuer")`
- open() : pour créer une nouvelle fenêtre.
  `f = window.open("URL","nom de la fenêtre","liste des propriétés")`
- close() : Permet de fermer une fenêtre.
  `f.close();`
- setTimeout(). Permet d'exécuter une action après un certain délai.

```javascript
compt = window.setTimeout('action;', tempsEnMilliseconde);
c = window.setTimeout(f.close(), 5000);
```

- clearTimeout() . permet d'interrompre un compteur mis en route.
  `window.clearTimeout(c)`

##### `document`

- title : représente le titre de la page
- URL : indique l'URL du document. Non modifiable.
- referrer : L'URL de la page précédente
- lastModified : date de la dernière modification
  IV.3.2.b Ses méthodes.
- write(): permet d'écrire dans un document.
  `window.document.write("<B> bonjour "+ nom +" </B>")`
- open() et close() : la méthode open() ouvre un flux ce qui
  efface le contenu du document et permet d'en créer un autre
  avec write(). On peut spécifier dans la méthode open() le type
  de document à créer (ex: MIME="text/html" ou
  MIME="text/plain") . La méthode close() referme le flux
  ouvert par la méthode open() .
  Attention: ne jamais utiliser ces méthodes dans le document
  ouvert car le script serait interrompu. A utiliser dans une
  nouvelle fenêtre ou dans des cadres

```javascript
f = window.open('', '');
f.document.write('bonjour');
f.document.open((MIME = 'text/html'));
f.document.write('<B>Au revoir</B>');
f.document.close();
```

##### `forms`

- length : nombre de formulaires dans le document
  `alert (document.forms.length)`
- method : retoune la méthode utilisée dans le formulaire (get ou post )
  `document.forms[0].method ou document.forms["f1"].method ou document.f1.method`
- action : retourne le contenu du paramètre action du formulaire
  `document.forms[0].action`
- submit() : permet de soumettre le formulaire
  `document.forms[0].submit()`
- reset() : permet de re-initialiser un formulaire
  `document.forms[0].reset()`

##### `elements`

**elements** représente l'ensemble des éléments d'un formulaire

- length : nombre d'éléments dans le formulaire
  `document.forms[0].elements.length`
- name : nom de l'élément
  `document.forms[0].elements[0].name`
- value : valeur de l'élement
  `document.forms[0].elements[0].value`

##### `links`

**links** représente l'ensemble des liens d'une page

- length : nombre de liens dans la page
  `document.links.length`
- href: URL du lien
  `document.links[0].href`
- hash: signet de l'URL s'il existe
  `document.links[0].hash`
- target: cible ou s'éffectue l'affichage
  `document.links[0].target`

##### `anchors`

**anchors** représente l'ensemble des ancres d'une page. anchors[n] représente la (n+1)ième ancre d'une page.

- length: nombre d'ancres dans la page.
  `document.anchors.length`
- name: nom de l'ancre
  `document.anchors[0].name`

##### `images`

**images** représente l'ensemble des images d'une page.

- name: nom de l'image
- src: nom du fichier contenant l'image
- width: largeur de l'image.
- height: hauteur de l'image
- border: taille de la bordure
- alt: message dans la bulle

##### `history`

- length: nombre de pages différentes visitées par l'utilisateur.
- go(n) : ouvre une URL de l'historique
  `window.history.go(-2)`
  équivaut à 2 clics sur le bouton précédent
- back() : équivalent à go(-1)
- forward() équivalent à go(+1)

##### `navigator`

- appCodeName: est le nom de code interne du navigateur (en général "Mozilla")
- appName: nom du navigateur , exemple: Netscape ou Internet Explorer
- appVersion: numéro de version du navigator.
- userAgent: informations de version complète
- browserLanguage: langue du navigator (fr, en etc..)
- platform: system d'exploitation du navigateur

##### `location`

- href: URL de la page courante. Permet de changer de page
  `alert(window.location.href)` ||
  `window.location.href="http://www.tf1.fr"`
- reload(): actualise la page
- replace(): remplace la page courante par une nouvelle page.
  L'utilisateur ne pourra pas revenir sur la page précédente.
  `window.location.replace("www.tf1.fr")`

#### Objets natifs principaux

##### Création d'instance

`new` permet de créer un élément de même type que l'objet, auquel on peut
appliquer les propriétés et les méthodes.

```javascript
const city = new String('Aix') === const city = 'Aix';

const date = new Date()

const arr = new Array('Aix', 'Ynov') === const arr = ['Aix', 'Ynov'];

// Attention! Math & Global pas de `new`
```

##### String

```javascript
const ch = 'bonjour';
```

- **length**: longueur en caractères
  `alert(ch.length) affiche : 7`
- **charAt(n)** : pour extraire le n ième caractère
  `ch.charAt(0)="b"et ch.charAt(6)="r"`
- **charCodeAt(n)** : retourne le code ASCII du n ième caractère
  `ch.charCodeAt(0) = 98 et charCodeAt(6)= 114`
- **concat(c)**: Concatène la chaîne c à la chaîne courante (idem +)
- **indexOf(chaine)** : recherche la position d'une chaîne dans une
  `ch.indexOf("o")=1 et ch.indexOf("jon")=-1`
- l**astIndexOf(chaine)**: recherche la position d'une chaîne dans une
  `ch.lastIndexOf("o")=4 et ch.lastIndexOf("jon")=-1`
- **substring(x,y)**: pour extraire les caractères de la position x à y-1
  `ch.substring(2,4)="nj"`
- **toLowerCase() et toUpperCase()**: convertissent la chaîne en minuscule ou en majuscule
  `ch.toUpperCase()="BONJOUR"`
- **toString()**: retourne la valeur de la chaine.
  `ch.toString()="bonjour"`
- **split()**: Permet d'extraire des données d'une chaîne de caractères pour les mettre dans un tableau. voir
- **match() ,replace() et search()** : nécessitent des expressions régulières en paramètre

##### Math

```javascript
const y = 2.3;
const x = 3;
const z = 4;
```

- **abs()**: valeur absolue `Math.abs(y)=2.3`
- **ceil()**: entier supérieur ou égal `Math.ceil(y)=-2`
- **floor()**: entier inférieur ou égal `Math.floor(y)=-3`
- **round()**: entier le plus proche `Math.round(y)=-2`
- **max()**: plus grande valeur parmi deux `Math.max(x,y)=3`
- **min()**: plus petite valeur parmi deux. `Math.max(x,y)=-2.3`
- **pow()** : puissance d'un nombre `Math.pow(z,x)=4^3=64`
- **random()**: nombre aléatoire compris entre 0 compris et 1 exclus
- **sqrt()**: racine carré `Math.sqrt(z)=2`

Remarque: il existe d'autres fonctions intéressantes que nous ne détaillerons pas.

- **Math.PI**=3.141592653589793
- **Math.sin(w),Math.cos(w), Math.tan(w)** (w en radian)

##### Global

C’est une classe pré-instanciée comme la classe Math, mais ces méthodes font
partie du langage de base et doivent s’utiliser sans les précéder de Global.

- **parseFloat(chaine)**: convertit une chaîne de caractères en un
  nombre en virgule flottante: `parseFloat("3.25abc") = 3.25`
  Doit commencer par un chiffre ou un point mais peut contenir des
  caractères qui seront ignorés
- **parseInt(chaine)** : convertit une chaîne de caractères en un
  nombre entier: `parseInt("3.25abc")=3`
  Doit commencer par un chiffre mais peut contenir des caractères
  qui seront ignorés
  Chap I : page 14
- **eval(chaine)**: évalue une chaîne de caractères sous forme
  numérique
  `eval("3+5")=8`
- **isNaN(x)**:
  Cette fonction évalue x pour déterminer s’il ne s’agit pas d’un
  nombre . Elle retourne TRUE si x n'est pas un nombre et FALSE
  dans le cas contraire.
- **escape(chaine)** retourne les caractères ASCII pour les caractères
  non visibles de la chaîne. Ex: %20 pour espace, %0A pour LF,
  %0D pour RC etc.
  `escape("Une chaîne") = Une%20cha%EEne`
- **unescape(chaine)** retourne les caractères ASCII en fonction des
  codes hexadécimaux (%xx).
  `unescape("A%3D %3F ") = "A=?"`

##### Number

- **toString(b)** (Transforme le nombre dans la base b sous forme de chaîne)
- **valueOf()** ( Retourne la valeur primitive de l'objet )

##### Date

`const date= new Date()` : sans argument dat sera égal à la date de l'ordinateur de l'utilisateur sous la forme: `Tue Sep 7 23:43:02 UTC+0200 2010`

`const d=new Date (2010,8,10)`: Permet d'introduire une date dans une variable. Attention à l'ordre année, mois-1,
jour.

La variable d contient le 10 Septembre 2010

- getFullYear() : donne l'année
- getMonth(): donne le mois (de 0 janvier à 11 décembre)
- getDate(): donne le quantième du mois (de 1 à 31 )
- getDay(): donne le jour de la semaine (de 0 dimanche à 6 samedi)
- getHours(), getMinutes(), getSeconds() : donnent heures, minutes,secondes
- getTime(): temps écoulé depuis le 1/1/1970 en millisecondes

Pour changer les caractéristiques d'une date on est obligé d'utiliser des
méthodes

- setFullYear(), setMonth(), setDate(), setHours(), setMinutes(),setSecond()
  `Exemple: dat.setYear(2002)`

##### Array

Cet objet permet de déclarer des tableaux classiques `t= new Array(n)`

n est facultatif et représente la taille du tableau.
t est le nom du tableau.

Il existe aussi deux formes littérales permettant d'initialiser un tableau:

- Pour un tableau classique
  `tableau = ["premier élément", "deuxième élément",….]`
- Pour un tableau associatif
  `tabAssociatif ={"cle1":"valeur1","cle2":"valeur2","cle3":"valeur3"}`

Javascript considère les objets comme des tableaux associatifs.

##### Array - 2

- **length**: nombre d'élément dans le tableau (+ grand indice utilisé)
  ```javascript
  t = new Array();
  t[200] = 'bateau';
  alert(t.length); // affiche 201
  ```
- **join("car")**: regroupe tous les éléments du tableau classique dans
  une chaîne séparés par le caractère en argument
  `Exemple: ch=t.join(";")`
- **reverse()**: inverse l'ordre des éléments dans le tableau ( par rapport au dernier)
- **sort()**: trie les éléments par ordre alphabétique par défaut. On
  peut mettre une fonction en paramètre pour préciser le tri.
- **toString()**: convertit un tableau classique en chaîne de caractères
  avec comme séparateur ","
- **concat(tab)**: Concatène un tableau classique à un autre
- **pop()** : Supprime et retourne le dernier élément d'un tableau classique
- **push(v1,v2,…)**: Ajoute des éléments à la fin d'un tableau classique
- **shift()**: supprime et retourne le premier élément d'un tableau classique
- **unshift(v1,v2,..)**: Ajoute des éléments au début d'un tableau
  classique
- **slice(début,fin**): retourne une partie du tableau classique en
  fonction d'indices de début et de fin-1
- **splice(début,nb[,v1,v2 …])**: permet de supprimer des éléments du
  tableau (nb éléments à partir de l'indice début ) et de les
  remplacer éventuellement par d'autres éléments ( v1,v2 …).

###### 3

Il est possible d'avoir des tableaux avec plusieurs lignes et plusieurs
colonnes.

Soit t un tableau avec 3 lignes et 3 clonnes.

```javascript
t = new Array(2)
t[0] =new Array(2)
t[1] =new Array(2)
t[2] =new Array(2)
t[0][2]="toto" insère toto dans la ligne 1 colonne 3
```

##### RegExp

[voir docs](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp)
