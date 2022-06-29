# ionic-app-react-typescript-places


## Instalación

Instalar la version LTS de [Node.js](https://nodejs.org) v16+ 

clonar el repositorio.

```sh
git clone https://github.com/JersonGerman/ionic-app-react-typescript-places.git
```

Instalar las dependecias del proyecto.

```sh
npm install
```

Instalar la CLI de Ionic. Más información [aquí](https://ionicframework.com/docs/reference/glossary#cli)

```sh
npm install -g @ionic/cli
ionic --help
```

## Ejecución

Iniciar  el servidor de desarrollo. 

```sh
npm start
ó
ionic serve
```

## Construir aplicación android

Construir build para la web. Más información [aquí](https://ionicframework.com/docs/developing/android#project-setup)

```sh
ionic build
```

Agregar plataforma android

```sh
ionic cap add android
```

Sincronizar build con android

```sh
ionic cap copy android
ionic cap sync
```

Abrir el proyecto en el IDE de android studio 

```sh
npx cap open android
```



