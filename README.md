# Solid Quickstart

![Netlify + Solid](https://user-images.githubusercontent.com/43764894/223558736-6cf48156-2316-419d-8be9-e318ecf0e4be.png)

This template's goal is to showcase the routing features of Solid.
It also showcase how the router and Suspense work together to parallelize data fetching tied to a route via the `.data.ts` pattern.

## Deploy to Netlify

Want to deploy immediately? Click this button

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/solid-quickstart?utm_campaign=template-team&utm_source=dtn-button&utm_medium=dtn-button&utm_term=solid-qt-dtn-button&utm_content=solid-qt-dtn-button)

Clicking this button will create a new repo that looks exactly like this one and will set it up for immediate deployment on Netlify.

## Getting Started

If you want to get started locally, you can clone the project, install the dependencies and run the dev command!

```
git clone https://github.com/netlify-templates/solid-quickstart.git
cd solid-quickstart
npm install
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deploying using the Netlify CLI

- Install the Netlify CLI globally `npm install netlify-cli -g`
    
- Run `npm run build`

- Then use the `netlify deploy` for a deploy preview link or `netlify deploy --prod` to deploy to production

Here are a few other ways you can deploy this template:
    
- Use the Netlify CLI's create from template command `netlify sites:create-template solid-quickstart` which will create a repo, Netlify project, and deploy it
    
- If you want to utilize continuous deployment through GitHub webhooks, run the Netlify command `netlify init` to create a new project based on your repo or `netlify link` to connect your repo to an existing project

## Support

If you get stuck along the way, get help in our [support forums](https://answers.netlify.com/).
