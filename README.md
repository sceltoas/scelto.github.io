# Scelto WEB

Site'n bygges med Gatsby og hostes på Azure.  
Pipeline er satt opp i [azure-pipelines](./azure-pipelines.yml).

Tilgang til prosjektet:  
https://dev.azure.com/scelto/scelto-web

For å få fiksa en Microsoft-konto, snakk med Herman.

## Kjør opp lokalt

Appen bruker standard npm-script oppsett. 
Forslag til oppsett for å kjøre det opp på egen PC:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 10
nvm use 10
npm install
npm start
```

Det er mulig det fungerer med nyere versjon av node enn 
det som ligger i [pipeline](./azure-pipelines.yml) og det
er mulig at det er oppdatert til nyere versjon i pipeline
og glemt her.



## Legg til ansatt

- Legg til et bilde i `src/images/mugshots`
- Legg til CV i `src/cvs`
- Legg til en ny blokk i `src/ansatte.js`
- Legg til en ny blokk i `src/ansatte-med-assets.js`
- Legg til en ny fil i `src/pages/ansatte/`