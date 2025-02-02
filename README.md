# Azertium - Visualizador de imagenes

Este es un ejercicio técnico consistente en la creación de una aplicación que obtenga mediante llamada de API un array de imagenes a mostrar en una cuadricula responsiva. La carga de imagenes ha de ser fluida y mostrar por paginado (activado por scrolling) partes de esas imagenes obtenidas.

La aplicación está desarrollada en Nuxt 3 usando Pinia y un componente de terceros para cargar más imágenes cuando el scroll llega al fondo. También se ha usado vitest para incluir tests unitarios.

La gestión de las llamadas de API y guardado de los resultados se hace mediante una store de pinia (Image Store)

La aplicación cuenta con una sola página con un componente que gestiona el array de imágenes en cuadrícula usando grid y un componente interior que gestiona el visualizado de cada imagen, renderizando la imagen de cada url que se provee.

(Se detectó que los links de las imágenes que provee el JSON para el ejercicio no funcionaban, así que se optó por reemplazarlos por un servicio que proveyese nuevas urls para imágenes basándose en el id de cada imagen).

La aplicación cuenta con tests unitarios para el store y los componentes.

## Estructura

Carpetas:
- components: Contiene los componentes de la aplicación
- interfaces: Contiene la estructura de JSON de los elementos de la respuesta fetch
- pages: Contiene la "plantilla" de la página principal sobre la cual se compone la aplicación
- plugins: Contiene la definición del componente de carga por scroll
- public: Contiene assets como el logo de la aplicación y favicon
- stores: Contiene el store de imagenes, que gestiona la llamada al JSON y donde se guarda la información del mismo
- utils: Contiene la función que reemplaza las url de las imagenes del JSON por nuevas url que si devuelven imagenes

- tests: Carpetas que contienen los tests unitarios

## Instalación

Instalar dependencias:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Servidor de desarrollo

Podrá arrancar un servidor para ver la aplicación en `http://localhost:3000` si se ejecuta alguno de los siguientes comandos:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Producción

Si quiere una versión estática de la aplicación para producción:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Puedes también ver una preview de este build con:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Por Yessenia Colocho. 2025.