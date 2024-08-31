#REACTJS Start

#why to learn React?
->type,job,trend,build UI
->makes easy to manage and buld complex frontend

#when should I learn React?
->after mastering JS
->most project don't need react in initial phase

#why react was created
->phantam message problem

->state->js  and  UI->DOM


#React learning Process
->go in-depth->Babel,fibre,virtual Dom,
diff algo,hydration


->by making Projects(one topic at a timme)->todo,calculator,githubApi


#React is a library
->frameWork vs library

#topic to learn
->core of React(state or UI mannipulation,jsx)
->component Reusability
->resuing of component(props)
->how to propogate change(hooks)
->SPA(single page application)


#additional addon to React
->Router(React dont have router)
->state managemnet(React dont have state management)
    -Redux,Redux toolkit,zustand, context Api
->class base components
    -legacy code
->BAAS apps(Backend as a service)
   -social media clone, e-commerce App


#After React
->React is not a complete solution in most case
    -no seo,browser Render of Js, no routing
->Frame work
    ->NextJs,gatsby,Remix



#How to install react or create react project
->Vite or parcel it is a bundler
basic way to create react
  ->npx create-react-app basicreact

  best way
  ->npm create vite@latest

  install node module folder
  ->npm install


  #react-script in package.json
    -it is responsible to load the program for everything


    #in react 
        -when we function are always in capitallize name or file also (Chai)

        --react is single Page Application(SPA) bcz it has a one div in index.html in react


    #React.createElement-property
                -type
                -key
                -ref
                -props



    #install tailwind
    npm install -D tailwind postcss autoprefixer


--after that
npx tailwindcss init -p

--then in tailwind.config.js folder
--change content with  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  --then go in index.js
  on top
@tailwind base;
@tailwind components;
@tailwind utilities;
clear the after css in index.css folder


  #interview question on counter
  --if the setCounter(counter+1) are multiple
  when we want to take the last update value "setCounter((prevCounter)=>prevCounter+1)
  - setCounter(counter+1)// when have multiple setCounter then wee can do that setCounter((prevCounter)=>prevCounter+1)
  --setCounter(counter+1)=>setCounter((prevCounter)=>prevCounter+1)
  --setCounter(counter+1)->setCounter((prevCounter)=>prevCounter+1)
  --setCounter(counter+1)->setCounter((prevCounter)=>prevCounter+1)
  --setCounter(counter+1)->setCounter((prevCounter)=>prevCounter+1)
  --setCounter(counter+1)->setCounter((prevCounter)=>prevCounter+1)


  #built react project
  --Color changer