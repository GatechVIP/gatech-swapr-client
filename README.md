# swapr-client

The SWAPR front-end thin client.

## Theoretical usage steps

0. pull changes from `react` branch

1. Run the npm script that just calls webpack. This will build the js bundle to the `dist` directory:

`npm run webpack`

2. Then serve out the `dist` folder by running `http-server` or similar from the project root directory:

`http-server dist`

To get `http-server`, install globally via npm:

`npm install -g http-server`
