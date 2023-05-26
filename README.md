# Browser Technologies - Enquête voor de minor web
<img width="500" alt="Schermafbeelding 2023-05-26 om 08 22 53" src="https://github.com/laibaaac/browser-t/assets/94360732/5ec7f5ee-e907-4782-8b14-4cfd35ab64c4">

Voor het vak Browser technologie, moesten wij een toegankelijk website maken (echt op alle aspecten proberen te letten).
Zo moeten we onze website op verschillende browsers testen, rekening houden met verschillende formaten schermen, ook op kleurcontrast etc letten. 
De aankomende weken ga ik een website maken die echt op alle gebieden toegankelijk gaat zijn. 
Zie mijn proces hieronder

---
## Inhoudsopgave
 - [Concept](#concept)
- [Job story](#job-story)
- [Functionaliteiten](#functionaliteiten)
  * [Core functionaliteiten](#core-functionaliteiten)
  * [Browsers (testen):](#browsers--testen--)
- [Criteria](#criteria)
  * [1. Niet alle formuliervelden in een keer laten zien](#1-niet-alle-formuliervelden-in-een-keer-laten-zien)
  * [2. Formulier validatie](#2-formulier-validatie)
    + [Formulier validatie met HTML](#formulier-validatie-met-html)
    + [Formulier valideren  met CSS](#formulier-valideren--met-css)
  * [3. in local storage data opslaan en weer terug kunnen gaan](#3-in-local-storage-data-opslaan-en-weer-terug-kunnen-gaan)
    + [Wat gebeurdt er al de javascript dan uit staat](#wat-gebeurdt-er-al-de-javascript-dan-uit-staat)
  * [4. Terug en naar de volgende vragen kunnen gaan](#4-terug-en-naar-de-volgende-vragen-kunnen-gaan)
  * [5. Geen zichtbare radio buttons](#5-geen-zichtbare-radio-buttons)
  * [6. Dark / light mode](#6-dark---light-mode)
- [Progressive enhancement](#progressive-enhancement)
- [Server](#server)
    + [Tools](#tools)
    + [Stappen](#stappen)
    + [Feedback](#feedback)
- [Testen](#testen)
- [Getestte features](#getestte-features)
  * [CSS Uitzetten](#css-uitzetten)
  * [Javascript uitzetten](#javascript-uitzetten)
  * [Slechte internet verbinding](#slechte-internet-verbinding)
  * [Een Oplossing](#een-oplossing)
  * [Custom fonts](#custom-fonts)
  * [Contrast](#contrast)
  * [Muis/Trackpad werkt niet](#muis-trackpad-werkt-niet)
    + [Wat nog niet helemaal werkt](#wat-nog-niet-helemaal-werkt)
  * [Screenreader test](#screenreader-test)
  * [Bevindingen](#bevindingen)
    + [Studentgegevens](#studentgegevens)
    + [Vak formulier](#vak-formulier)
- [Browsers](#browsers)
  * [Chrome](#chrome)
    + [Notities](#notities)
- [img chrome](#img-chrome)
  * [Safari](#safari)
    + [Notities](#notities-1)
- [Firefox](#firefox)
    + [Notities](#notities-2)
- [Samsung Internet](#samsung-internet)
  * [Bevindingen](#bevindingen-1)
  * [PrinceXML](#princexml)
    + [Test 1](#test-1)
  * [Test 2](#test-2)
- [Bronnen](#bronnen)


---

## Concept
- Link naar de Demo: https://laibaaac.github.io/browser-t/ 

Voor de aankomende weken mochten wij uit een paar concepten kiezen om die uit te werken. 
Het concept dat ik heb gekozen is de enquete over de minor Web Development. 
Aan mij de taak om een enquete over de minor web development te maken, hierin moet ik de volgende punten verwerken:
- Studentgegevens (naam + nummer) verplicht

-  Per vak
        naam
        docent(en)
        weken waarin je het vak deed
        beoordeling op schaal 1-10 van
        lesstof (hoe moeilijk is het)
        uitleg (hoe duidelijk is het uitgelegd)
        eigen inzicht (hoe goed snap je het)
        Zorg ervoor dat de gebruiker niet teveel formuliervelden in 1 keer ziet.
        Validatie: Zorg ervoor dat het formulier compleet wordt ingevuld. Geef duidelijke foutmeldingen. Bedenk zelf wanneer en hoe de validatie zal plaatsvinden.

- Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

- Duidelijke interface waarmee gebruiker terug kan naar vorige vragen. (En misschien ook om een vraag over te slaan?)

- Duidelijke interface die aangeeft waar je bent in het formulier

- Je mag geen zichtbare radio buttons gebruiken

- Het formulier moet een light mode en dark mode hebben.


Met een best veel punten moeten we rekening houden, het wordt wel een beetje pittig. 

- Verder moeten we ook aan de algemene criteria houden voor het vak
- Student kan de Core functionaliteit van een use case doorgronden
- Student kan uitleggen wat Progressive Enhancement en Feature Detection is en hoe dit toe te passen in Web Development
 - De demo is opgebouwd in 3 lagen, volgens het principe van Progressive Enhancement
 - De user experience van de demo is goed
- Let op leesbaarheidsregels, contrast en kleuren
- Let op gebruiksvriendelijkheid, zoals affordance en feedback op interactieve elementen
- De meest 'enhanced' versie is super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken
- Er is een Readme toegevoegd met daarin:

 - Een link naar de demo.
 - Een beschrijving van de feature(s)/Browser Technologies die in je demo zijn gebruikt en hoe je dit PE hebt toegepast
- Een lijst met browsers waarin je hebt getest:
 - voor de desktop: 1 Chromium, Firefox en Safari
- voor mobiel: Safari iOS + Android: Samsung Internet of Chrome
- 1 obscure browser naar keuze: Lynx, Flow (Flow voor Mac en Flow voor Linux), PrinceXML of KaiOS
 - een testverslag met
 - een beschrijving van de feature-lijst die zijn onderzocht
- welke browsers de feature(s) wel/niet ondersteunen
- welke functionaliteiten zoals JavaScript je aan en uit hebt gezet in de tests
- een screenreader test op de default screenreader van je laptop en/of telefoon.



## Job story
Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Ik wil duidelijk zien waar ik ben en hoeveel ik nog te doen heb. Ik wil eerder ingevulde vragen kunnen herzien. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.



---
## Functionaliteiten 
De enquête moet op bepaalde voorwaarde voldoen en die voorwaarden moeten  zo goed mogelijke werken op alle browser , op verschillende scherm grootte en ook wanneer bepaalde features uitsgeschakeld zijn zoals Javascript. Ik heb een paar core functionaliteiten, om tot de voorwaarden te voldoen. 


### Core functionaliteiten 
- Foutmeldingen, als iets niet is ingevuld of niet goed is ingevuld
- Local storage, waarmee je verder kunt gaan waar je was gebleven (slaat data op)
- Duidelijke interface die aangeeft waar je bent in de enquête
- Duidelijke interface waarmee de gebruiker kan terugkeren naar eerdere vragen

### Browsers (testen):
- Safari op desktop en Iphone
- Google Chrome desktop en mobiel
- Firefox desktop en mobiel
- Samsung Internet mobiel
- PrinceXML

--- 

## Criteria 

### 1. Niet alle formuliervelden in een keer laten zien
Ik heb dit opgelost om de 8 vakken een eigen html pagina te geven, zo kan de gebruiker beter weten over welke vak het gaat. 
Hoe ik dit heb gedaan is een duidelijke nav gebruikt en ook een vorige en volgende button erbij gezet. Zo kan de gebruiker door verschillende pagina's navigeren

### 2. Formulier validatie
Voor de gegevens van de studenten, moet er een mail, naam, achternaam en studentenummer ingevuld worden. om zo goed mogelijk informatie van de studenten te kunnen krijgen, heb ik de functie validatie van een formulier erbij gezet in zowel html als css (progressive enhancement). 
Wanneer een input veld leeg is krijgt de student te zien dat die rood is, dat betekent dat de student snel de input veld moet vullen en als de student die vult, ziet hij groen, dat betekent dat alles klopt!

#### Formulier validatie met HTML 
Om het formulier te valideren met HTML zorg je ervoor dat je de goede input waardes gebruikt, `input type="email"`,`input type="text"`, etc.  Als je de juiste input gebruikt, kun je al ervoor zorgen dat er de juiste datatypes wordt ingevuld wordt.  Om een vraag verplicht te maken kan je de `required` tag gebruiken (die ik niet heb gebruikt bij de studentengegevens, maar bij andere pagina's wel). 


``` 
<form action="./html/waffs.html" id="studentgegevens">
        <fieldset>

            <legend>Studentengegevens</legend>

        
            <label for="voornaam">Voornaam
                <input type="text" 
                    name="voornaam" 
                    id="voornaam" 
                    placeholder="Vul jouw voornaam in" 
                    aria-placeholder="Vul jouw voornaam in">
                   
            </label>
            
            <br>

            <label for="achternaam">Achternaam
                <input type="text"
                    name="achternaam" 
                    id="achternaam" 
                    placeholder="Vul jouw achternaam  in" 
                    aria-placeholder="Vul jouw achternaam in">
                   
            </label>
            
            <br>

            <label for="studentennummer">Studentennummer
                <input type="text" 
                    name="studentennummer" 
                    id="studentennummer" 
                    placeholder="De nummer bestaat uit 9 cijfers"
                    aria-placeholder="De nummer bestaat uit 9 cijfers" 
                    minlength="1" 
                    maxlength="9"  
                    oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                    <!-- een beetje vies gespeeld, maar ik gebruik een stukje javascript hier,
                     om alleen cijfers erin te laten -->
                     
            </label>

```

#### Formulier valideren  met CSS
Ik heb ondekt dat je met css ook makkelijk kan valideren, je kan aan de html element in css de  `:valid `en `:invalid` pseudo classes meegeven om het makkelijk te kunnen valideren.

```css
#studentgegevens label input:valid {
  border: 1px solid var(--valid-form-data-kleur);
  border-bottom: 4px solid var(--valid-form-data-kleur);
}

#studentgegevens label input:invalid {
  border: 1px solid var(--invalid-form-data-kleur);
  border-bottom: 4px solid var(--invalid-form-data-kleur);
}

#studentgegevens label input:placeholder-shown {
  border: 1px solid var(--invalid-form-data-kleur);
  border-bottom: 4px solid var(--invalid-form-data-kleur);
}

#studentgegevens label input[type="text"]:valid::after {
  content: 'Goed bezig!';
  position: absolute;
  transform: translateY(-2.3em);
  right: 3em;
  font-weight: bold;
  color: var(--valid-form-data-kleur);
}

```

---

### 3. in local storage data opslaan en weer terug kunnen gaan
Een van de criteria is "Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.". Om de data op te slaan maak ik gebruik van de local storage in javascript (client-side database, alternatief van een database maar minder goed beveiligd). Ik haal zo de input waardes vanuit het formulier en sla ik direct op in mijn localstorage. Als de gebruiker refresht of de website sluit, kan de gebruiker nogsteeds verder met de antwoorden die ze de vorige keer hadden ingevuld. 


```

// Load input values when the page finishes loading
window.addEventListener('load', loadInput);
window.addEventListener('load', loadRadioValue);
window.addEventListener('load', loadValueTextarea);
window.addEventListener('load', function() {
  loadValueOfSelect(question_1);
  loadValueOfSelect(question_2);
});

// Save input values when they change
inputs.forEach(input => {
  input.addEventListener('input', saveInput);
});

// Save radio values when they change
inputRadios.forEach(radio => {
  radio.addEventListener('change', saveRadioValue);
});

// Save textarea value when it changes
inputTextarea.addEventListener('input', saveValueTextarea);

// Function to save input values in localStorage
function saveInput() {
  if (typeof localStorage !== 'undefined') {
    inputs.forEach(input => {
      const inputName = input.name;
      const inputValue = input.value;
      localStorage.setItem(inputName, inputValue);
    });
  }
}

// Function to load input values from localStorage
function loadInput() {
  if (typeof localStorage !== 'undefined') {
    inputs.forEach(input => {
      const inputName = input.name;
      const storedValue = localStorage.getItem(inputName);
      if (storedValue) {
        input.value = storedValue;
      }
    });
  }
}

// Function to save the value of a select element in localStorage
function saveValueOfSelect(input) {
  if (typeof localStorage !== 'undefined') {
    input.addEventListener('change', function() {
      const selectName = this.name;
      const selectValue = this.value;
      localStorage.setItem(selectName, selectValue);
    });
  }
}

// Function to load the value of a select element from localStorage
function loadValueOfSelect(input) {
  if (typeof localStorage !== 'undefined') {
    const selectName = input.name;
    const storedSelectValue = localStorage.getItem(selectName);
    if (storedSelectValue) {
      input.value = storedSelectValue;
    }
  }
}

// Function to save radio values in localStorage
function saveRadioValue() {
  if (typeof localStorage !== 'undefined') {
    inputRadios.forEach(radio => {
      const radioName = radio.name;
      const radioValue = radio.value;
      if (radio.checked) {
        localStorage.setItem(radioName, radioValue);
      }
    });
  }
}

// Function to load radio values from localStorage
function loadRadioValue() {
  if (typeof localStorage !== 'undefined') {
    inputRadios.forEach(input => {
      const radioName = input.name;
      const storedValue = localStorage.getItem(radioName);
      if (storedValue && input.value === storedValue) {
        input.checked = true;
      }
    });
  }
}

// Function to save textarea value in localStorage
function saveValueTextarea() {
  if (typeof localStorage !== 'undefined') {
    const textareaName = inputTextarea.name;
    const textareaValue = inputTextarea.value;
    localStorage.setItem(textareaName, textareaValue);
  }
}

// Function to load textarea value from localStorage
function loadValueTextarea() {
  if (typeof localStorage !== 'undefined') {
    const textareaName = inputTextarea.name;
    const storedValue = localStorage.getItem(textareaName);
    if (storedValue) {
      inputTextarea.value = storedValue;
    }
  }
}

```
.


#### Wat gebeurdt er al de javascript dan uit staat
Simpel gezegd, dan wordt er geen data opgeslagen in de localstorage. localstorage is een web api, hierdoor kan het echt niet werken zonder javascript. Wat wel kan is meer server kant gericht, dan sla je de data in een database net als mongoose, mongodb, etc. Gelukkig hoefde wij geen backend kant kopelen aan dit project, alleen moeten we wel even uitleggen hoe de server side eruit zou zien. 

----



### 4. Terug en naar de volgende vragen kunnen gaan
Ik heb ik mijn prototype zo goed mogelijk geprobeerd om de gebruiker op weg te helpen met het navigeren van de website. 
De gebruiker kan door 2 manieren naar de vorige/ volgende vragen gaan. 
1. Navigatie, met een class op elke pagina te zetten om te laten zien waar de gebruiker is en dat die terug of naar de volgende vragen kan gaan. 
2. Buttons, door middel van de vorige en volgende buttons kan de gebruiker makkelijk door mijn prototype navigeren. 

---

### 5. Geen zichtbare radio buttons

In de enquête moet je per vak de lesstof, uitleg en eigen inzicht beoordelen met een schaal van 1 tot 10. Wij moesten een creatieve manier bedenken om de radio buttons niet te laten zien. Als de css uit staat zie alles onder elkaar en ga je natuurlijk de radio buttons zien, maar met css heb ik geprobeerd de radio button op een andere manier te stylen. 


```css

input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  vertical-align: middle;
  opacity: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

``` 

---

### 6. Dark / light mode
Nog een criteria was dat het formulier een light/ dark mode moet hebben, dit houdt in dat de kleuren/ contrast veranderd naarmate hoe donker het wordt (dag naar nacht). Ik heb hier ook het principe van progressive enhancement proberen toe te voegen. Ik heb zowel in mijn html  `<meta name="color-scheme" content="light dark">` als css (zie hieronder) de dark/ light mode toegepast. Als mijn css uit staat dan heb ik tenminste de fallback vanuit de html. 
 
 Light mode:
 
<img width="500" alt="Schermafbeelding 2023-05-26 om 11 25 47" src="https://github.com/laibaaac/browser-t/assets/94360732/42c94de5-b623-41a7-a691-7303e58a3b1b">

Dark mode:

<img width="500" alt="Schermafbeelding 2023-05-26 om 11 26 03" src="https://github.com/laibaaac/browser-t/assets/94360732/c6cb813f-e94d-490e-b92f-e0645d54210a">



```
:root {
  --background-color: lightgray;
  --fieldset-color: white;
  --button-color: white;
  --button-text: black;
  --nav-color: black;
  --nav-text: white;
  --drop-shadow: hotpink;
  --valid-form-data-kleur: mediumseagreen;
  --invalid-form-data-kleur: red;
  --input-kleur: #f6f6f6;
  --label-kleur: #261e29;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: gray;
    --fieldset-color: black;
    --button-color: black;
    --button-text: white;
    --nav-color: white;
    --nav-text: black;
    --drop-shadow: #D5076E;
  }
```


## Progressive enhancement
Verschillende soorten progressive enhancement features die ik bij mijn prototype heb gebruikt is: 

- dark/ light mode

- Fonts :font ophalen vanuit html (<link rel="stylesheet" href="https://use.typekit.net/edf1wmn.css">) en in css fallback (font-family: "interstate", sans-serif;)

- Form Validatie

----

## Server 
Zoals ik eerder zei, we hoeven voor dit vak geen back-end kant koppelen, wel is aan ons de opdracht gegeven om na te denken hoe de server side eruit zou zien. 
Ik heb hieronder uitgelegd hoe het erui zou kunnen zien. 

<img width="500" alt="Schermafbeelding 2023-05-26 om 11 27 17" src="https://github.com/laibaaac/browser-t/assets/94360732/6964a4ff-a2ee-4a5c-9acf-c80a7a3b4a97">



#### Tools
- Express.js 
- Body-parser express middleware
- MongoDB Database 
- EJS template engine

#### Stappen
1. Nodejs en Npm installeren
2. package.json installeren met `npm init`
3. Express installeren met npm `npm install express` en implementeren (als html)
4. De express server opstellen
5. De express middleware installeren zoals de bodyparser, cookie-session, moongoose etc. 
6. Routing in je server.js
7. De express modules gebruiken
8. Database koppelen
9. Formulier data eruit halen 
10. De data vanuit de formulier naar de database sturen
11. De data opslaan in de database


#### Feedback
Als de gebruiker klaar is dan krijgt de gebruiker een bevestiging pagina terug.
Hoe deze feedback in de server kant eruit zou zien:


```
<!-- formulier.html -->

<form action="/formulier-bevestiging" method="POST">
<!-- De enquête -->

</form>


```

```
// app.js
 app.post("/formulier-bevestiging", (req, res)=>{
    // Code waar de data geatuurd wordt naar de database met body-parser
    res.send('Bedankt voor het invullen van het enquête!)
    // of
    res.render('formulier-bevestiging')

 })
```

```
<!-- Formulier bevestiging.js -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/style.css">
    <title>Bevestiging</title>
</head>
<body>

    <main>
        <h1>Bedankt voor het invullen van de enquête!!</h1>
        <p>We zullen de door jou gegeven antwoorden zorgvuldig en vertrouwelijk verwerken.</p>
    </main>
</body>
</html>
```




---
## Testen
De volgende onderdeel van de criteria is het testen (feature detection), hier ga ik op verschillende manieren testen met mijn prototype. 

## Getestte features
### CSS Uitzetten
Wat als een gebruiker de css uit heeft gezet? 

Met dit in gedacht ging ik mijn test uitvoerren. In mijn chrome dev tool heb ik de css uitgezet en zag je mijn kale html. 

Zonder css **niet** mogelijk:
- Geen opmaak
- Geen form validatie vanuit css 
- Radio buttons zichtbaar en onder elkaar 
- De nav wordt zichtbaar en is onder elkaar te zien.

Zonder css **wel** mogelijk:
- Vragen overslaan en doorgaan naar het volgende vak
- Formulier invullen
- Feedback krijgen met de fallback foutmeldingen van de browser
- De standaard dark en licht modus van de browser

<img width="500" alt="Schermafbeelding 2023-05-26 om 11 28 42" src="https://github.com/laibaaac/browser-t/assets/94360732/f4d2ec92-b250-4c1b-babb-2d2188333303">




### Javascript uitzetten
Voor mijn applicatie is javascript belangrijk, omdat de data daarin wordt opgeslagen (local storage), maar wat als de javascript uit staat? 

Wat is **niet** mogelijk als javascript uitstaat:
- Data wordt niet opgeslagen in de localstorage van de browser 


---
### Slechte internet verbinding
Wat een veel voorkomende situatie kan zijn, is een slechte internet hebben. De gebruiker gaat bijvoorbeeld onder een tunner of zit in de trein met trage verbinding. Kan de gebruiker dan nogsteeds op mijn prototype? 
Om dit te testen heb ik in mijn netwerk tab in de developer tool, het netwerk op slow 3g geplaatst. Naar andere pagina gaan duurt veelste lang.

<img width="500" alt="Schermafbeelding 2023-05-26 om 10 28 34" src="https://github.com/laibaaac/browser-t/assets/94360732/253a3279-a6a3-4000-8152-a5b5fb7f2de7">


### Een Oplossing
En mogelijke oplossing voor dit probleem zou zijn het formulier progressive web app maken. Daarbij een service worker en manifest.json bestand. Ook nog een hash change event, zo hoeven verschillende pagina's niet geladen worden.

---
### Custom fonts
Om mijn prototype een persoonlijke touch te geven heb ik een custom font gebruikt.
font ophalen vanuit html (<link rel="stylesheet" href="https://use.typekit.net/edf1wmn.css">) en in css fallback (font-family: "interstate", sans-serif;)



```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enquete Browser Technologies</title> 

    <!-- font import -->
    <link rel="stylesheet" href="https://use.typekit.net/edf1wmn.css">

    <!-- dark & light mode -->
    <meta name="color-scheme" content="light dark">

    <link rel="stylesheet" href="css/styling.css">

    <script src="script/enquete.js" defer></script>
   
</head>
```

In css (fallback)

```css
@import url("https://use.typekit.net/edf1wmn.css");

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "interstate", sans-serif;
    background-color: var(--background-color);
}
```
---

### Contrast 
Om een kleur te kiezen dat mensen die bijvoorbeeld kleurenblind zijn, ook het kunnen zien. 

Ik moet rekening houden met:
1. Niet volledig afhanelijk zijn op een kleur. 
2. Genoeg contrast hebben tussen de componenten.


Volgens de WCAG (Web Content accessibilty guidelines) moet de kleurcontrasten tenminste een contrast ratio hebben van 4.5:1. 
Ik heb met verschillende tools bekeken als mijn kleur contrast klopt. 
Zie hier fotos


<img width="500" alt="Schermafbeelding 2023-05-26 om 08 02 55" src="https://github.com/laibaaac/browser-t/assets/94360732/11cd0a6e-76b3-4e1d-a38d-431f83a73ae0">

<img width="500" alt="Schermafbeelding 2023-05-26 om 08 03 12" src="https://github.com/laibaaac/browser-t/assets/94360732/7e5106b3-23d4-40c2-8e37-af4c46ecf9c9">


### Muis/Trackpad werkt niet
Zonder een muis/trackpad is een andere manier van een bedienen met een toetsenbord, mensen die en lichamelijke beperking hebben, gebruiken bijvoorbeeld de toetsenbord om beter te kunnen navigeren. 

- Tab: De focus moet door alle interactieve elementen op de pagina bewegen
- Shift + Tab: Hetzelfde als de Tab-toets, maar dan in omgekeerde volgorde
- Enter/Return: Volgt een link, activeert (drukt op) een knop
- Spatiebalk: Wisselt de waarden van selectievakjes, activeert knoppen
- Pijltoetsen: Scrollen door de inhoud, verplaatsen/selecteren van radioknoppen binnen een groep, soms verplaatsen tussen interactieve menu-items of tabbladen.

Om meer nadruk te kunnen leggen, heb ik ook focus op verschillende elementen via de css gezet. Zo hoop ik dat de gebruiker wat makkelijker door mijn prototype kan navigeren. 


#### Wat nog niet helemaal werkt
- Op radio button met tab focussen
- Kan geen in tabindex toevoegen



```css

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
    outline-style: dotted;
    outline-color: var(--color);
    outline-width: 3px;

}
```



### Screenreader test
Een screenreader test is belangrijk, zo kan je zien hoe navigeerbaar je website is. 
Mensen die een zichtelijke beperking hebben, gebruiken meestal een screenreader, ik wil dat mijn prototype niemand uit sluit, dus heb ik mijn prototype met een screenreader getest. 
Voor de screen reader test heb ik van macbook zelf de voice over gebruikt.

### Bevindingen
#### Studentgegevens
- Bij nav zegt hij steeds bezocht link, alhoewel ik in mijn css op de nav visited zet. 
- Het leest de lijst met links en zegt daar achter waar op de lijst ze staan.
- De screen reader benoemt welke input veld required/verplicht is. 
- De screenreader voorleest het hele formulier en ook de placeholder in, terwijl de gebruiker al data daar hebben staan

#### Vak formulier
- eerst las de screenreader h3 legend etc niet, dus moest ik overal tabindex"0" zetten zodat het leest 
- In het vakken formulier is iets meer volgorde en structuur.
- De legend wordt niet als eerste voorgelezen terwijl op de pagina wel als eerste staat. 
- Leest de textarea met de placeholder.
- Vervolgens zegt de lijst van radio buttons met daarin de waardes. 
- Als laatst worden de buttons om naar de volgende pagina te gaan ook voorgelezen. 

---
## Browsers
Een groot onderdeel van dit project is het testen op verschillende browser en dan aanpassingen doorvoeren. 
Browsers die ik heb gebruikt zijn, chrome, safari, Samsung Internet en firefox.
Door verschillende browsers te gebruiken, kan je kijken welke features wel of niet werken 

### Chrome
Chrome gebruik ik altijd om mijn prototype te testen, dus op chrome weet ik dat het goed komt. 


#### Notities
- `:has()` selector wordt ondersteund
- Formulier validatie met css werkt zoals het hoort
- Het ziet er goed uit op mobiel
- Dark mode en donker modus wordt ondersteund
- Data wordt opgeslagen in local storage

<img width="500" alt="Schermafbeelding 2023-05-26 om 10 10 00" src="https://github.com/laibaaac/browser-t/assets/94360732/e9922586-ad84-47b4-b7d3-4e267d8b1f79">


---

### Safari
Het volgende browser waar ik mijn prototype heb getest is Safari. Ik heb zelf een macbook maar ik gebruik safari persoonlijk nooit. 


#### Notities
- Het formulier zag er goed uit op kleinere schermen
- Het formulier validatie van css was nog te zien
- De browser ondersteund de :has() selector
- Donker modus en licht modus  werken goed
-  Data wordt opgeslagen in local storage



<img width="500" alt="Schermafbeelding 2023-05-26 om 11 33 05" src="https://github.com/laibaaac/browser-t/assets/94360732/65dee68a-ee8d-49a2-8e28-8b066191da60">


## Firefox
Firefox is een browser die ik bijna nooit gebruik, met firefox moet je goed rekening houden, want sommigge css elementen (has) worden niet ondersteund

#### Notities
- Het formulier zag er goed uit op kleinere schermen
- responsive gaat niet zo lekker hier
- De browser ondersteund de :has() selector niet!!
- Donker modus en licht modus werken goed
- Data wordt opgeslagen in local storage

<img width="500" alt="Schermafbeelding 2023-05-26 om 11 33 40" src="https://github.com/laibaaac/browser-t/assets/94360732/c935c959-687f-4619-b073-7ff04065174d">


## Samsung Internet
Samsung Galaxy is een browser voor Samsung apparaten. Samsung gebruik ik zelf ook en samsung internet is ook best een fijne browser. 

### Bevindingen
- `:has()` selector wordt ondersteund
- responsive gaat niet zo lekker hier
- Formulier validatie met css werkt 
- de dark mode wordt niet goed uitgevoerd
- Data wordt opgeslagen in de local storage

![f35a347d-4c98-4139-8ace-aeb03ad6b4a2](https://github.com/laibaaac/browser-t/assets/94360732/d7e4cb2b-133c-45a3-9bf2-fdf9d2d5095e)


![8d4f8bc1-f643-4404-9300-b3ca8db19f86](https://github.com/laibaaac/browser-t/assets/94360732/46f694d3-8c25-4266-9ac4-72a17538a1a6)



### PrinceXML
De laatste browser is de obsecure browser princexml. We kregen de opdracht om een obsecure browser te kiezen en daar te testen. Zelf heb ik dit browser ook nooit gebruikt. 
Princexml zet html en css pagina's om in een pdf bestand (om te printen). Ik heb via de website zelf mijn bestanden erin gezet en die dan gegenereerd. 


#### Test 1
Bij de  1e test ging het flink al mis, ik kreeg steeds een error dat het mijn javascript bestand en css bestand niet kan vinden. 
Ik moest toen op een andere manier in mijn header naar de bestanden navigeren (de css en script bestand verwijzing ernaar weg halen)

<img width="500" alt="Schermafbeelding 2023-05-26 om 09 51 30" src="https://github.com/laibaaac/browser-t/assets/94360732/bd7e6142-5d47-4777-b11b-a5d159b29311">



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enquete Browser Technologies</title> 

    <!-- font import -->
    <link rel="stylesheet" href="https://use.typekit.net/edf1wmn.css">

    <!-- dark & light mode -->
    <meta name="color-scheme" content="light dark">

    <link rel="stylesheet" href="styling.css">

    <script src="enquete.js" defer></script>
   
</head>
```

<img width="500" alt="Schermafbeelding 2023-05-26 om 09 51 35" src="https://github.com/laibaaac/browser-t/assets/94360732/e5f3f220-1eca-42b1-aff8-2f4e732720b6">



### Test 2

Hier kon ik mijn pagina wel zien, alleen wordt mijn javascript niet ondersteund en ook mijn nav zie je bij small screen, dat had ik uitstaan. 

<img width="500" alt="Schermafbeelding 2023-05-26 om 10 08 10" src="https://github.com/laibaaac/browser-t/assets/94360732/c1a9fbc6-a6c4-4bfd-8117-8c874de8cceb">





```terminal

prince: enquete.js:136: error: SyntaxError: unexpected token unknown("`")
prince: styling.css:17: warning: unknown media feature 'prefers-color-scheme'
prince: styling.css:184: warning: unknown pseudo-class ':placeholder-shown'
prince: styling.css: warning: unsupported properties: gap, place-content

```

---


---
## Bronnen
- Will node.js work if JavaScript is disabled? (z.d.). Quora. https://www.quora.com/Will-node-js-work-if-JavaScript-is-disabled
- Bland, J. (2019, 7 mei). Using Node.js & Express.js to save data to MongoDB Database. Medium. https://codeburst.io/hitchhikers-guide-to-back-end-development-with-examples-3f97c70e0073

- Figueroa, R. (2022, 30 maart). How to send data from a form and receive it with Express.js. Medium. https://medium.com/geekculture/how-to-send-data-from-a-form-and-receive-it-with-express-js-3c03af6275b2

- Koldovskyy, V. (2017, 5 mei). Save form data to MongoDB with NodeJS. programming mentor. https://programmingmentor.com/post/save-form-nodejs-mongodb/
- Omisola, I. (2022, 9 juli). Session Storage vs. Local Storage: What Are the Differences? MUO. https://www.makeuseof.com/session-local-storage-differences/

- Prince - Try Prince. (z.d.). https://www.princexml.com/try/
- Client-side form validation - Learn web development | MDN. (2023, 12 maart). https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript

- GeeksforGeeks. (2023, 15 februari). How to get value of selected radio button using JavaScript. https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/
- A. (2021, 5 december). Get value of selected radio button with JavaScript/jQuery. Techie Delight. https://www.techiedelight.com/get-value-of-selected-radio-button-javascript/


- WebAIM: Keyboard Accessibility - Tabindex. (2020, 10 november). https://webaim.org/techniques/keyboard/tabindex

- Express cookie-session middleware. (z.d.). https://expressjs.com/en/resources/middleware/cookie-session.html

- Working with IndexedDB. (2016, 1 januari). web.dev. https://web.dev/indexeddb/
- Change default HTML input validation message. (z.d.-b). Stack Overflow. https://stackoverflow.com/questions/63491564/change-default-html-input-validation-message

- https://www.learnhowtoprogram.com/user-interfaces/advanced-css-features/
viewports-and-media-queries#:~:text=Sometimes%20multiple%20media%20queries%20can,the%20maximum%20value%20of%20480.

