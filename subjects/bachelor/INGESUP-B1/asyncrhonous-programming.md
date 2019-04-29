# Asynchronous Programming

**KEZAKO?**

Il s'agit de programmer de manière à ne pas bloquer l'action à venir par le traitement en arrière plan de l'action actuelle.

<img src ="https://i.stack.imgur.com/BTm1H.png" width=700>

## Synchronous problem

Node.JS est asynchrone par nature, mais qu'est ce que cela signigie?

Synchrone => éxécuter étape par étape, pour du code ligne par ligne. On attend le résultat courant avant de passer à la suite

```javascript
1. const options = {dbName: orders} //0.1ms
2. const orders = DB.getOrders(options) //8ms
|
|
|
|
3. logger.log(‘orders fetched’) //4ms
|
|
=> Résultat obtenu après 12.1ms
```

Le défaut principal de cette manière de faire réside dans le fait que l'utilisateur est bloqué en attendant l'obtention de résultat.

## Asynchronous solution

On attend plus cette fois-ci les résultats des actions, mais pour le moment on ne sait pas les récupérer après avoir lancer l'action.

```javascript
1. const options = {dbName: orders} //0.1ms
2. const orders = "Don't wait" -> DB.getOrders(options) //0.1ms
3. "Don't wait" -> logger.log(‘orders fetched’) //0.1ms

=> Résultat obtenu après 0.3ms
```

Pour corriger le problème que pose la programmation synchrone 3 solutions s'offrent aux développeurs.

1. Les Callbacks
2. Les Promises
3. `async`/`await`

### Callbacks

L'idée principale de cette solution est de passer en paramètre de la méthode qui nous fait patienter, la méthode qui sera exécuté à son tour un fois le traitement effectué.

```javascript
const myFunction = (cb) => {
    /**
     * traitement long et fastidieux
     */

    cb(args?); // appel du callback en fin de processus
}

// On passe le callback lors de l'appel de notre méthode asynchrone
// Il sera exécuté à la fin du traiment de `myFunction`
myFunction((...args) => args )

```

Cela entraîne malgré tout certaines dérives (voir `callback hell` 😉)

### Promises ou promesses en bon français

Pour contourner le soucis des `callback hell`, une solution est née les Promises.
<span style='font-size:1em;'>🧐</span>

Comme son nom l'indique il s'agit de promesses faites entre une méthode et l'utilisateur:

La méthode nous promet de retourner quelquechose et après cela on pourra faire un traitement quelconque.

#### suite

```javascript
const myFunction = () => {
    return new Promise((resolve, reject)=>{
        /**
         * traitement long et fastidieux
         */

        if(err) reject(err?); //gestion de l'erreur

        resolve(...args?) // dans le cas d'un succès ou de l'absence d'erreur
    });
}

myFunction()
    .then((...args?) => {...})// en cas de succès (après un `resolve`)
    .catch((...err?) => {...})// en cas d'erreur ou de rejet
    (.finally(()=>{...}))// pour éxécuter du code quoi qu'il arrive
```

#### Autres exemples d'utilisation

```javascript
const myFunction = () => {
    /**
     * traitement
     */

    return Promise.resolve(args?) || return Promise.reject(args?);
}
function otherFunction {
    return Promise.resolve(args?);
}

// On peut enchainer les promises => Promise chain
myFunction(args)
.then(()=>otherFunction())
.then()
...
.then()
.catch()
...
.catch()
```

#### suite

```javascript
// Note: un seul catch suffit pour récupérer les `reject` de toutes les promises précédentes
myFunction(args)
.then(()=>otherFunction())
.then() // Ils sont attrapés par le `catch en cas d'erreur car antérieur à celui-ci
...     //
.catch()
.then() // Ce `then` n'est pas attrapé
```

Plus d'information => [ici](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)

### Async / await, de l'asynchrone en synchrone

Ici, il s'agit de faire de l'asynchrone en écrivant du code synchrone.

Un exemple:

```javascript
// Reprenons le code du début
const options = {dbName: orders} //0.1ms
const orders = "Don't wait" -> DB.getOrders(options) //0.1ms
"Don't wait" -> logger.log(‘orders fetched’) //0.1ms

// Pour garder le fonctionnement et l'écriture tout en récupérant les actions de manières asynchrones
// utilisons `async/await`

//Override de la classe DB
class DB {
    //on précise que `getOrders` est une méthode asynchrone à l'aide du mot clé `async`
    async getOrders(opts){}
}

//logger.log est défini comme ceci `async log(params){}`

const options = {dbName: orders} //0.1ms
//on prévient le process node qu'il lance l'action de `getOrders` et qu'il recuperera plus tard les résultats
const orders = await DB.getOrders(options) //0.1ms
await logger.log(‘orders fetched’) //0.1ms
```

#### Utilisations

Avec l'arrivée de la syntaxe `async/await`, les complexités que pouvaient apporté les callbacks et les promises ont disparues.
On développe toujours de manière synchrone mais juste dans l'écriture.

Dans l'éxécution, en précisant `await` devant une méthode qui a été décrite avec le mot clé `async`, on rend l'éxécution asynchrone sans s'en rendre compte.

Cependant, on peut mélanger les `async/await` avec les `Promises` car de manière interne les méthodes `async` retourne des `Promises` 😉

#### Exercice

Transformez le code ci-dessous contenant des `Promises` en code utilisant la nouvelle syntaxe d'ES6, `async/await`:

```javascript
function getOrders(){
    new Promise((resolve, reject) =>{
        logIn("username", "password")
        .then((user) => {
            getOrdersByUser(user.name)
        })
        .then((orders)=> {
            resolve(orders)
        }
    })
}
```

##### Correction

```javascript
async function getOrders() {
  const user = await logIn('username', 'password');
  const orders = await getOrdersByUser(user.name);

  return orders;

  // Ou

  return await getOrdersByUser((await logIn('username', 'password')).name); // mais un peu moins lisible
}

// ou encore

const getOrders = async () =>
  await getOrdersByUser((await logIn('username', 'password')).name);
```

### TP 2 Asynchrones et météo

Ce TP a pour objectif de vous familiariser avec le développement asynchrone.

Dans ce cadre, en vous basant sur le tp sur l'utilisation d'ajax dans une page via l'api OpenWeather, vous devrez convertir le code du boilerplate de manière à supprimer l'utilisation des callbacks.
Dans un premier temps, utilisez les promises, puis dans un second temps utilisez `async/await`.

**Intro**:

1. créer un nouveau dossier et initialiser le à l'aide de `npm init`
2. ajouter la dépendance à `weather-js` au projet
3. créer un fichier `index.js`
4. ajouter la commande `start: 'node index.js'` dans le `package.json`

#### Partie 1 - Callback

Utiliser le module `weather-js` de manière asynchrone en utilisant la méthode de **Callback**.

Objectif => Logger (`console.log`) le _1er_ résultat de la météo d'une ville de votre choix, en cas d'erreur le logger aussi.

#### Partie 2 - Promise

Utiliser le module `weather-js` de manière asynchrone en utilisant la méthode de **Promise**.

Objectif => Logger (`console.log`) le _1er_ résultat de la météo d'une ville de votre choix, en cas d'erreur le logger aussi.

#### Partie 3 - Async/Await

Utiliser le module `weather-js` de manière asynchrone en utilisant la méthode de **async/await**.

Objectif => Logger (`console.log`) le _1er_ résultat de la météo d'une ville de votre choix, en cas d'erreur le logger aussi.

#### Partie BONUS

1. Permettre le passage de paramètre à la commande de manière à laisser à l'utilisateur le soin de passer sa ville et le type de température qu'il souhaite:

```javascript
npm start Paris C // Pour avoir la température en °Celsius et la météo de Paris
npm start Aix-en-Provence F // Pour avoir la température en °Fahrenheit et la météo de Aix-en-Provence
```

2. Permettre à l'utilisateur de choisir le type d'asynchrone qu'il souhaite effectuer dans la commande:

```javascript
npm start Paris C async // Pour de l'async/await
npm start Aix-en-Provence F promise// Pour des promises
```

### Conclusion Asynchrone

**Callback** => simple de compréhension mais vite complexe à l'usage
![callback hell](https://d33wubrfki0l68.cloudfront.net/870ea459cafeff1f3c6b45b066de0e54db726158/90afd/images/posts/serializing-promises/callback-hell.png)

####

**Promise** => complexe à appréhender mais très utile
<img src="https://cdn-images-1.medium.com/max/1600/1*5Oj4qxp6BaWyAgZzLbddxQ.png" width=750>

####

**Async/await** => meilleur compromis perf/usage
<img src="https://s3.amazonaws.com/com.twilio.prod.twilio-docs/images/asyncawait.width-808.png" width=750>

#### Final hints

Async/await est votre meilleur ami – utilisez-le le plus souvent possible

Pour éxécuter plusieurs tâches de manières asynchrones ensembles, utilisé `Promise.all` (meme avec `async/await`)

Pour éviter les callbacks (too old 👨‍🦳), pensez à `util.promisify`!
