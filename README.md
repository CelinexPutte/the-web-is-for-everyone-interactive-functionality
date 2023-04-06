# Reserveerpagina
Een pagina om een smartzone te boeken op het gewenste moment.

## Inhoudsopgave

  * [📄 Beschrijving](#-beschrijving)
  * [💻 Gebruik](#-gebruik)
  * [📌 Kenmerken](#-kenmerken)
  * [⚙️ Installatie](#%EF%B8%8F-installatie)
  * [📁 Bronnen](#-bronnen)
  * [🔒 Licentie](#-licentie)

## 📄 Beschrijving
Deze pagina is gemaakt voor de userstory "Als vervoerder wil een smart zone kunnen reserveren, zodat ik mijn plek kan bevestigen". Het is een pagina waar een reserveerformulier staat waar je de gewenste smartzone kunt boeken en je gegevens invult.

<img src="https://user-images.githubusercontent.com/112859814/230344581-07100867-1d4e-4df4-8307-ee7c0f6931fc.jpg" alt="Desktop" width=100%>

De website vind je [hier](https://vast-pink-gazelle.cyclic.app/book).

## 💻 Gebruik
Deze reserveerpagina bestaat uit twee delen. Aan de linkerkant staat een overzicht van alle smartzones. Aan de rechterkant staat het formulier om te kunnen reserveren.

Elke smartzone heeft een eigen tegel en ziet er als volgt uit:

<img src="https://user-images.githubusercontent.com/112859814/230345542-3a59f385-c7b5-4f68-a519-74d8cdda5d79.jpg" alt="" width=25%>

Het logo en de navigatiebar blijven in beeld staan als je scrollt:

<img src="https://user-images.githubusercontent.com/112859814/230345919-e858723c-ceb8-4587-9e37-31503e0325be.jpg" alt="" height=400px>

De navigatiebar bevat de volgende pagina's. De huidige pagina is de 'book' pagina.

<img src="https://user-images.githubusercontent.com/112859814/225850302-d20bc7fe-85ff-4ba7-8da9-976c6d91de6e.jpg" alt="" width=25%>

Het formulier om te reserveren bevat de volgende velden:

<img src="https://user-images.githubusercontent.com/112859814/230346385-455f642b-8d06-422b-b6fc-8cdcb3ae71ef.jpg" alt="" width=25%>

Er zijn drie manieren om met het formulier te beginnen:
1. Op de 'Book' knop uit de navigatie klikken. Het formulier begint dan helemaal leeg.
2. Op de 'Book now' knop van een smartzone klikken. In het formulier worden al de smartzone en de start datum ingevuld.
3. Op de 'Book later' knop van een smartzone klikken. In het formulier wordt al de smartzone ingevuld.


## 📌 Kenmerken
Voor dit project heb ik met node.js, express en ejs gewerkt. Daarnaast heb ik ook gebruik gemaakt van een client side css en js document.

Ook heb ik progressive enhancement toegepast. Progressive enhancement is een (coding) strategy waarmee je er voor kan zorgen dat je website het altijd doet.

<ol>
 <li> Content: De html structuur is zorgvuldig opgebouwd. Hierbij is ook gelet op de semantische waarde van elementen.
 <li> Presentation layer: Met css heb ik alles opgemaakt. Ook heb ik hiermee de positie van bepaalde onderdelen bepaald.
 <li> Client-side scripting: Met client-side js heb ik er bijvoorbeeld voor gezorgd dat de datum automatisch wordt ingevuld en dat je geen datum in het verleden kan selecteren.
</ol>

## ⚙️ Installatie
Om (verder) te kunnen werken aan dit project, moet je de volgende stappen volgen:

<ol>
 <li> Clone deze repository
 <li> Open de terminal (CTRL + `)
 <li> Type 'npm install'
 <li> Je ziet nu de node_modules map
 <li> Kijk eventueel in het .gitignore document of je nog iets mist
</ol>

Let op, er is gebruik gemaakt van een .env bestand.

## 📁 Bronnen
Voor de smartzones heb ik data gebruikt uit de API. De link staat in het .env bestand.

## 🔒 Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
