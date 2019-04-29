# AJAX

## Kezako?

**Asynchronous JAvascript and XML**

Introduit par _Jesse James Garrett_ en 2005, réunion de trois technologies:

- JavaScript pour l'intéraction côté client
- XMLHttpRequest pour les requêtes asychrones
- XML pour l'échange de données client/serveur

=> RUI (Rich User Interface)

## XHR

_XHR = XMLHttpRequest_

**1998** : développé par Microsoft en tant qu'objet **ActiveX**
**2002** : repris par Mozilla, puis par les autres navigateurs
**2006** : devient une recommandation du W3C

Permet d'envoyer une requête asynchrone au serveur

Gestion des résultats/events pour mettre à jour le DOM

### XHR - 2

```typescript
class XMLHttpRequest {
    Status: statut sous forme numérique
    (200 pour OK, 204 pour NO_CONTENT),

    statusText: statut sous forme texte,

    readyState: état de l'objet
    (0=uninitialized, 1=open, 2=sent, 3=receiving, 4=loaded),

    Onreadystatechange: permet d'attacher un
    gestionnaire d'événement,

    responseText: reponse du serveur sous forme texte
    (HTML ou JSON),

    responseXML: reponse du serveur sous forme XML
}
```

_Info:_ les données reçu sont prêtes à être traitées lorsque:

- `readyState = 4`
- `Status = 200`

### XHR - 3

```typescript
class XMLHttpRequest {
    open(method: 'GET' | 'POST', url: string, async: boolean):
    ouverture d'une connexion pour envoi ou reception de données,

    send(content): envoi d'une requête,

    abort(): met fin à la requête,
}
```

### Créer un objet XHR

[Documentation W3C](https://www.w3schools.com/xml/xml_http.asp)

```ts
const xhttp = new XMLHttpRequest();
```

Pour les navigateurs anciens:

```ts
const xhttp = new ActiveXObject('Msxml2.XMLHTTP');

ou;

const xhttp = new ActiveXObject('Microsoft.XMLHTTP');
```

#### Tool - getXMLHttpRequest()

```ts
function getXMLHttpRequest() {
  let xhttp;
  try {
    xhttp = new XMLHttpRequest();
  } catch (e1) {
    try {
      xhttp = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e2) {
      try {
        xhttp = new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e3) {
        xhttp = false;
      }
    }
  }
  return xhttp;
}
```

### Utilisation de XHR

```ts
function sendGetRequest(callback: function, data: object = null) {
  const pseudo = 'nicolas';
  const xhr = getXMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
      callback(xhr.responseText);
    }
  };

  xhr.open('GET', 'http://my.api.com?userName=' + pseudo, true);
  xhr.send(data);
}
```

## TP

[TP on Moodle](https://moodle.ynov.com/pluginfile.php/108792/mod_resource/content/0/AJAX%20-%20API%20-%20Callbacks%20et%20promises.html)
