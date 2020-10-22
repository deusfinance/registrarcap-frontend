# Django + Vue.js SPA

## Heroku Setup
1. Create an new app with npm and python build pack.
2. In heroku configure env variable SECRET_KEY.
3. Add heroku domain in ALLOWED_HOSTS variable in settings.py.

## Backend - Run django

1. create python environment and install dependencies in it.
2. install python dependencies
`pip install -r requirements.txt`
3. Migrate database.
`python manage.py migrate`
4. After it you will be able to run the project.
`python manage.py runserver`

## Frontend - Run vue
1. Install npm dependencies.
`npm install`
2. Build and run frontend dev server.
`npm run dev`


## Fontend Build Scripts

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
