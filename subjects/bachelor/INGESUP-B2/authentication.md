#Authentification

Principe ?

## Idée

Sécuriser le contenu de son application (web, application)

Légitimer/identifier un utilisateur, lui donner accès à des entités de données pour un laps de temps

### Processus classique d'authentification

**1- Authentification** - vérification de la validité des clefs d'accès (token)

**2- Identification** - lien entre une entité réelle et une entité virtuelle

**3- Contrôle d'accès aux entités** - permet de restreindre ou non un utilisateur à l'accès de certaines données

### Facteurs d'authentification

Il existe 4 facteurs d'authentification pour identifier un utilisateur:

- utiliser ce qu'on possède
- utiliser une information que l'on peut produire
- utiliser une information que l'on connaît
- utiliser une information contextuel permettant d'identifier qui on est

On peut cependant aussi rajouter des contraintes temporelles ou spaciales pour renforcer l'authentification

### Preuves

Dans le cas de l'authentification d'un individu, il suffit généralement d'apporter une PREUVE de son identité:

- ce qu'il sait (mot de passe, numéro d'identification unique, etc...)
- ce qu'il possède (papier d'identité, token d'identification spécifique, etc...)
- ce qu'il sait faire (schéma de dévérouillage, signature)
- ce qu'il est (photo, biométrie, etc...)
- où il se situe (position géographique spécifique) => souvent utilisé en complément
- quand il s'authentifie => souvent utilisé en complément

## L'authentification dans le web

<img width="700" src="https://thumbs.gfycat.com/WanAccurateGoosefish-small.gif">

### Types

SIMPLE <span style="font-size:35px;">🔒<span/>

FORTE <span style="font-size:35px;">💪<span/>

UNIQUE => SSO (Single Sign On) <span style="font-size:35px;">🌍🔒<span/>

#### SIMPLE

ne repose que sur un seul élément ou « facteur »

email / mot de passe => authentification simple

<img src="https://o7planning.org/fr/11071/cache/images/i/11053297.png"/>

#### FORTE

repose sur deux facteurs ou plus

email / mot de passe + code de validation par mail ou sms => authentification forte

<img width="700" src="https://www.inventy.com/sites/default/files/pictures/sso_strongauthentification_0.png"/>

#### UNIQUE

Une authentification pour les légitimer. Une authentification pour les identifier tous et dans les plateformes les certifier.

permet à un utilisateur de ne procéder qu'à une seule authentification pour accéder à plusieurs applications informatiques

en anglais et dans le jargon IT => SSO pour Single Sign On

<img width="700" src="https://www.economie.gouv.fr/files/france-connect-910.png">

### Une problématique encore très actuelle

Malgré tout les progrès en matière d'authentification et de sécurité, cet aspect du développement reste essentiel et important à faire mûrir avant de le développer.

Les spécifications ne cessent d'évoluer palliant les lacunes des précédentes spécifications établies mais redoutant les avancées technologiques rendant obsolètes certains algorithmes de cryptage.

**Mars 2019** - Officialisation du protocole WebAuthn

https://www.zdnet.fr/actualites/le-w3c-finalise-la-norme-web-authentication-webauthn-39881553.htm

https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API

## Mise en place d'un authentification sur un serveur Node.js

Et si on voyait ensemble la mise en place d'une authentification simple basique ?

### Principe

<img width="500" src="https://yt3.ggpht.com/a-/AAuE7mBC3OVdiO5m598akQ8LiO37Qre-qQtJB5YbKA=s900-mo-c-c0xffffffff-rj-k-no">

#### Les attentes

Nous avons un serveur Node.js qui retourne juste des requêtes basiques à propos d'une entité `dog`

Nous souhaitons protéger les données de nos futurs utilisateurs ainsi que les données des chiens.

Cette protection sera effectué grâce à un service d'authentication simple email/password.

Grâce à cela nous pourrons protéger mais aussi identifier les utilisateurs au fil de leurs actions sur notre application

### L'application technique

<img width="750" src="https://camo.githubusercontent.com/39b8f961b3441444c5a64aaa90ec999d21633158/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f323030302f312a53535855514a3164576a695572446f4b616169474c412e706e67" >

#### Passport

<img width="125" src="https://avatars1.githubusercontent.com/u/1160530?s=280&v=4">

C'est un middleware d'authentification pour Node.

Il est extrement modulaire et flexible, en effet, on peut l'utiliser aussi bien dans un projet from-scratch que dans un projet avec un contraite technique importante (Nest)

Le gros plus de passport c'est sa diversité de stratégies d'authentification, allant du simple email/password en passant par Facebook, twitter ou autre...

voir docs 📁 => http://www.passportjs.org/

```
// pour éviter de télécharger le mauvais
npm install --save passport passport-jwt
```

#### JWT / jsonwebtoken

<img width="200" src="https://atomrace.com/blog/wp-content/uploads/2016/03/jwt-json-web-token-avec-angular-js.png">

Il s'agit d'une norme ouverte (RFC 7519) qui définit un moyen compact et autonome pour la transmission sécurisée d'informations entre parties sous forme d'objet JSON.

Ces informations peuvent être vérifiées et fiables car elles sont signées numériquement.

Les JWT peuvent être signées à l'aide d'une clé secrète (avec l'algorithme HMAC) ou d'une paire clé publique/clé privée utilisant RSA ou ECDSA.

On utilise notamment les JWT dans la génération de token pour faire passer des ids ou des informations qui une fois décryptées permettent d'identifier un utilisateur 😉

voir docs 📁 => https://jwt.io

```
// pour éviter de télécharger le mauvais
npm install --save jsonwebtoken
```

### TP

A partir du code fourni à l'adresse suivante: https://github.com/millehorde/dogs-api, il vous faudra:

- créer une entité `user` afin de créer des entités virtuelles d'utilisateur avec au moins un _email_ et un _mot de passe_ en plus de l'id
- créer un service d'authentification qui permet de créer un utilisateur (signup) et de connecter un utilisateur (signin)
- créer une strategy Passport avec JWT (voir docs `passport-jwt`)
- utiliser `passport.authenticate` comme il faut en tant que middleware pour protéger les routes qui nécessitent d'être authentifié

[Bonus] Encrypter les mots de passe en base et faire de la comparaison lors de la connexion (voir `bcrypt`)

```
PS: lors des ajouts des dependances,
n'oublier d'ajouter les `@types` car on est en Typescript
npm install --save @types/jsonwebtoken @types/passport @types/passport-jwt
```

### Corrections

<img src="https://media.giphy.com/media/cI45LEPRoFQhLVq7AB/giphy.gif">
