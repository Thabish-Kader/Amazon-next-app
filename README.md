# Amazon

## Next-js, Redux, Stripe

<img align="left" alt="NextJS" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
<img align="left" alt="TypeScript" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
<img align="left" alt="TypeScript" width="30px" style="padding-right:10px;" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" />

<img align="left" alt="Tailwind" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
<img align="left" alt="redux" width="30px" style="padding-right:10px;" src="https://cdn.worldvectorlogo.com/logos/redux.svg" />
<br/>
<br/>

This is an amazon web application with authentication and payment procedure useing stripe. The database used for this application is fakestoreapi.

[Live Demo](https://amazon-next-app-zqtc.vercel.app/)

## Skills Aquired

-   Redux Toolkit
-   Stripe

### Problems Faced

-   During the execution of Next auth I was constantly gettin error on "Hydration failed because the initial UI does not match what was rendered on the server." After closer inspection on the error message i found that it was this 'p cannot appear as a descendant of p.

<img width="1680" alt="Screen Shot 2022-11-04 at 3 02 19 PM" src="./public/Error_ScreenShot/hyradationError.png">

[Josh W. Cameau](https://www.joshwcomeau.com/react/the-perils-of-rehydration/) has a great article on this.

-   When i was implementing the delete function in cart page for some reason redux wasnt deleteing it from the store after some research i fond a very good solution form [stackoverflow](https://stackoverflow.com/questions/67436949/removing-a-value-from-an-array-using-redux-toolkit)

-   While implementing stripe i was getting an error of CORS origin not allowed. Which prevented the page to redirect to the checkout page in stripe. After some research i found a solution in [Stack Overflow](https://stackoverflow.com/questions/71525152/cors-error-while-performing-stripe-checkout)

### Resources

-[Removeing carousel Thumbnail](https://stackoverflow.com/questions/64358616/how-can-i-remove-the-part-below-the-carousel)

-[The Perils of Rehydration - Josh W. Cameau](https://www.joshwcomeau.com/react/the-perils-of-rehydration/)

-[Removing a value from an array using redux toolkit](https://stackoverflow.com/questions/67436949/removing-a-value-from-an-array-using-redux-toolkit)

### Screenshots

<img width="1680" alt="Screen Shot 2022-11-04 at 3 02 19 PM" src="./public/Screenshots/ss1.png">

<img width="1680" alt="Screen Shot 2022-11-04 at 3 02 19 PM" src="./public/Screenshots/ss2.png">

<img width="1680" alt="Screen Shot 2022-11-04 at 3 02 19 PM" src="./public/Screenshots/ss3.png">

<img width="1680" alt="Screen Shot 2022-11-04 at 3 02 19 PM" src="./public/Screenshots/ss4.png">

<img width="1680" alt="Screen Shot 2022-11-04 at 3 02 19 PM" src="./public/Screenshots/ss5.png">

<img width="1680" alt="Screen Shot 2022-11-04 at 3 02 19 PM" src="./public/Screenshots/ss6.png">
