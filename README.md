<img src="https://vitejs.dev/logo.svg" alt="Lit" height="100">   <img src="https://svelte.dev/svelte-logo-horizontal.svg" alt="Lit" height="100">

# Functional wireframe with Vite, Svelte & Wired Elements
Simple but fully functionnal web UI wireframe for a chat app (codenamed Blah!) using the compiler framework Svelte[^1], the web build tool Vite[^2] and the UI elements librairy Wired Elements[^3].

# Introduction
Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.

Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes. [^1]

Vite, from the creator of Vue.js Evan You, is a developement and building tool for frontend developement.
It consist of a dev server that serves your source files and a build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production. [^2]

Wired Elements is a set of common UI elements with a hand-drawn, sketchy look. These can be used for wireframes, mockups, or just the fun hand-drawn look.
Wired-elements was built using [RoughJS](https://roughjs.com/) and [Lit](https://lit.dev/). [^3]

Using those three tools combined will allow for fast prototyping of UI using reusable web components.
# Dependencies
* [Node >=12.0.0.](https://nodejs.org/en/)
* [Vite](https://github.com/vitejs/vite)
* [svelte](https://github.com/sveltejs/svelte)
* [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess)
* [svelte-navigator](https://github.com/mefechoel/svelte-navigator)
* [wired-elements](https://github.com/rough-stuff/wired-elements)
* [*Yarn*](https://yarnpkg.com/) *(Optional)*
# Getting started
1. Clone this project.
2. Install:

````bash
cd blah
````
````bash
npm install
````
3. Run the project
````bash
npm run dev
````

# Notes

## Using SCSS
We want to use scss in our project for convenience and to make the code more readable.

Svelte itself doesn't have a built-in scss preprocessor and only handles Javascript/CSS/HTML-like syntax. [^4]

However, Svelte provides the [preprocess API](https://svelte.dev/docs#svelte_preprocess) to support all kinds of languages and flavours. By default svelte-preprocess[^4] support Sass, Stylus, Less, CoffeeScript, TypeScript, Pug, PostCSS and Babel out of the box.

First, install the needed librairies

````bash
npm install svelte-preprocess node-sass --save-dev
````
Then adapt the vite.config.js as follow

````js
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: sveltePreprocess()
  })]
})
````
## Routing
We use the simple [svelte-navigator](https://github.com/mefechoel/svelte-navigator) as a router to navigate the application.

First, install the needed librairy

````bash
npm install --save svelte-navigator
````

We can import the navigator and use it as follow in App.svelte

````html
<script>
import { Router } from "svelte-navigator";
...
</script>

<Router>
  <main>
    ...
  </main>
</Router>
````
Then we can navigate to specific urls using programmatic navigation
````html
<script>
...
import { navigate } from "svelte-navigator";
...
</script>
...
<wired-item value={group.id} on:click="{() => navigate(`/group/${group.id}`)}">
  {group.name}
</wired-item>
...
````
Finaly, we can display components based on the current route
````html
<script>
...
import { Route } from "svelte-navigator";
...
</script>
...
<Route path="/group/:id" let:params primary={false}>
  <div class="center-top">
      <GroupMenubar group={getGroup(params.id)}/>
  </div>
  <div class="center-middle">
      <Chat chat={getChat(params.id)}/>
  </div>
</Route>
...
````

# Results

[^1]: https://svelte.dev/
[^2]: https://github.com/vitejs/vite
[^3]: https://wiredjs.com/
[^4]: https://github.com/sveltejs/svelte-preprocess
