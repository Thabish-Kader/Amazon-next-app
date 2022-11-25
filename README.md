### Problems Faced

-   During the execution of Next auth I was constantly gettin error on "Hydration failed because the initial UI does not match what was rendered on the server." After closer inspection on the error message i found that it was this 'p cannot appear as a descendant of p.

<img width="1680" alt="Screen Shot 2022-11-04 at 3 02 19 PM" src="./public/Error_ScreenShot/hyradationError.png">

[Josh W. Cameau](https://www.joshwcomeau.com/react/the-perils-of-rehydration/) has a great article on this.

-   When i was implementing the delete function in cart page for some reason redux wasnt deleteing it from the store after some research i fond a very good solution form [stackoverflow](https://stackoverflow.com/questions/67436949/removing-a-value-from-an-array-using-redux-toolkit)

### Resources

-[Removeing carousel Thumbnail](https://stackoverflow.com/questions/64358616/how-can-i-remove-the-part-below-the-carousel)

-[The Perils of Rehydration - Josh W. Cameau](https://www.joshwcomeau.com/react/the-perils-of-rehydration/)

-[Removing a value from an array using redux toolkit](https://stackoverflow.com/questions/67436949/removing-a-value-from-an-array-using-redux-toolkit)
