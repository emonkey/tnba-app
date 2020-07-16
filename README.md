This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Github Pages

The repository is integrated with `gh-pages` deployment

### `npm run deploy`

Deploys to the repository specified by `homepage` in `packages.json`.<br />
As part of the pre-deployment, runs `build` to get a minimized, production build of the app and deploys only that to the Github repository.

_Remember to update the `CNAME` in `/public`_**

## Data Transforms

The source data as well as the `ipynb` notebook containing the code used is in `/src/Data`. Temporary output of the data analysis and transforms is stored in the `/src/Data/out` directory.

### Data Sources

* 2018-census-main-means-of-travel-to-education-by-statistical.csv
* 2018-census-main-means-of-travel-to-work-by-statistical.csv
* statistical-area-2-2018-centroid-inside.csv
* statistical-area-2-2018-generalised.geojson

