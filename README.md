# Jobs Portal

` React JS Developer Test for Technorix `

## Problem Statement

Teknorix wishes to build a ReactJS application to display their active job openings.

The application should show a list of all active job openings with search/filter functionality. Job opening details should be shown on a unique url.

## Demo
[Final Site](https://capable-bienenstitch-6ed7b6.netlify.app/)
[4 Hour Mark](https://amazing-hummingbird-337a18.netlify.app/)


## Result

### List page

![image](https://user-images.githubusercontent.com/50771217/177085607-ae2da6e6-576f-45f7-816a-c191f1b4a8e8.png)

![image](https://user-images.githubusercontent.com/50771217/177085643-9b342d08-3dd7-4c72-bd73-39dd68b3e79f.png)


### Details page

![image](https://user-images.githubusercontent.com/50771217/177085687-ae4d8962-8a56-406e-9272-959874c2d6e2.png)

![image](https://user-images.githubusercontent.com/50771217/177085725-58ce8927-62dc-4439-a0ba-7c695e865956.png)


### Global Loader

![image](https://user-images.githubusercontent.com/50771217/177085776-3b5b258e-599d-456d-a7b0-59dc8de5155a.png)


## Features



### Rematch and Rematch Persist

One of the requirements of the search was to retain the search fields on page revisit and on page reload. To solve this I have used `@rematch/core` (Redux) along with `@rematch/persist`. On each store update `persist` stores the data in the local store and updates it on reload. 

![image](https://user-images.githubusercontent.com/50771217/177085882-2f265ec0-9cd5-43eb-96e9-8488a7ca555a.png)


I chose not to use query parameters to achieve this since query params are `undefined` on initial run of `useEffect` which makes it harder to handle errors and lloading states.

### Social media sharing (Bonus)

I've used `react-share` to implement Facebook, Linkedin, Twitter share buttons. 

Share message:

```js
`${company} is Hiring a ${title}. Apply Here: ${applyUrl}`
```

### Debounced Input

The search bar on the List page makes a debounced Api call ask and when the user types and the duration between 2 key strokes is `500ms`.  I've done this because this provides better UX as compared to a search button.
![image](https://user-images.githubusercontent.com/50771217/177085911-54eeb7ce-9009-43b1-b865-ceb4dcae9b70.png)

( Note: this can be changed to `1000ms` depending on UX requirements )

### Global Theme file and Scss

When projects grow big in size managing common css values becomes a hassel. To overcome this, I've used stored the colours used in a global theme file, `theme.js`
and I've also stored them as Scss variables. To maintain the consistensy of fonts, I;ve used scss mixins to create `font-family` `font-weight` pairs.

#### Future improvements of Styling

 1. Let each component have its on `.scss` file.
 2. Identify and ceate common reuseable components.
 3. Add font sizes to scss variables and theme file.


## ISSUES

 1. Need proper data to show "Other Openings" on details page.
 2. Missed a `key` prop in the return statement of a `map` function in `SearchFieldData.jsx`
 3. Global loader has `position: absolute`, needs to be changes to `position: fixed` .

## TODO

 - [ ] Use `react-helmet` to add title to pages for better SEO.
 - [ ] Handle error cases for Api`s

    
