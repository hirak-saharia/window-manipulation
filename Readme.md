Concurrency Model >>>

How the JavaScript engine handles multiple tasks happening at the same time?

	Ø Why do we need that?
		○ JavaScript runs in one single thread, so it can only do one thing at a time.

	Ø So what about a long-running task?
		○ Sounds like it would block the single thread. However, we want non-blocking behavior!
        
	Ø How do we achieve that ?
		○ By using an even loop: takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finished.




* The findIndex method - Works almost same way as find.
 - But it returns the index of the found element and not the element itself. 
	--- Use case > Close/delete an account feature in the Bankist App.
	-- To delete an array of an element, we use the Splice method. 



* Some and every method
	- Use case > Some method to implement the missing functionality, which is to request a loan to the bank.
	- code between the transfer button and the close button.
	- And the some method will become helpful for this loan feature because our bank has a rule, which says that it only grants a loan if there at least one deposit with at least 10% of the requested loan amount.
	-- Ex: 
		console.log(movements);

		// Euality

		console.log(movements.includes(-130))

		// Some: Condition

		consoly.log(momements.some(mov => mov === -130));

		const anyDeposits = movement.some(mov => mov > 0);

		console.log(anyDeposites)


*** Every method ----------
	- Every only retunrs true if all of the elements in the array satisfy the condition that we pass in.

	Ex: 
	console.log(movements.every(mov => mov >0));
	console.log(account4.movements.every(mov => mov >0));


*** Flat and flatMap
-	Use case > For the Bankist App > bank accounts > lets say bank itself wants to calculate the overall balance all the movements of all the accounts. 
	- Solution: We have all these movements stored in arrays, and these arrays are inside the objects in the accounts array. 
	- Put all them into one array.

- flatMap > essentially combines a map and a flat method into just one method which is better for performance.