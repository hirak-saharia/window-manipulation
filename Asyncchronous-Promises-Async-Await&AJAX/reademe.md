The goal of asynchronous JavaScript is basically to deal with long-running tasks, that basically run in the background.
And the most common use case of asynchronous JavaScript is to fetch data from remote servers, in so-called AJAX calls.

Topics to cover: - First AJAX Call: XMLHttpRquest - How to Web works: Request and Responses - Welcome to Callback Hell - Promises and the Fetch API - Consuming Promises - Chaining Promises - Handling Rejected Promises - Throwing Errors Manually - COding challenge #1 - Asynchronous behind the scences: The Event loop - The Event loop in Practice - Buliding a Simple Promise - Promisifying the Geolocation API - Coding Challenge #2 - Consuming Promises with Async/AWait - Error Handling with try..catch - Returning Values from Async Functions - Running Promises in Parrallel - Other Promise Combinators: race, allSettled and any - Coding Challenge #3

> AJAX: Asynchronous JavaScript and XML: Allows us to communicate with remote web servers in an asynchronous way. With AJAX call, we can request data from web servers dynamically.

> Create a sequence of AJAX calls, so the second one runs only after the first one has finished.

    - nested callback function to get Neighbour country
    - getCountryAndNeighbour

> But now imagine that we wanted to do more requests in sequence, like the neighbor of the neighbor of the neighbor, and like 10 times over. So in that case, we would end up with callbacks inside of callbacks inside of callbacks, like 10 times.

    - We have a special name callback hell function - to execute asynchronus tasks in sequence when we habe a lot of nested callback.

> Promises and the Fetch API - To escape callback hell

> Chaining Promises

> Handiling errro >>>> https://countries-api-836d.onrender.com/countries
> then() method is called while the promise is fulfilled
> catch() method uses when promises rejtected
> finally() method called always no matter if the promise is fulfilled or rejected.

> > Throwing error menually - handle 404

    - Create a new error by using again the constructor function, and then we pass in a message which is error message, then we use the throw keyword that will immediately terminate the current fuction.

    - helper function will wrap us the fetch the error handling, and also the conversion to JSON,
