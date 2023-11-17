// Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
  
    //1. Store Mark's and John's mass and height in variables
    //2. Calculate both their BMIs using the formula (you can even implement both variables)
    //3. Create a boolean variable 'markHigherBMI' containing information about about whether Mark has a higher  BMI than John.
    
    // TEST DATA 1: Marks weight 78 kg and is 1.69 m tall. John weight 92 kg and is 1.95 m tall.
    // TEST DATA 2: Marks weight 95 kg and is 1.88 m tall. John weight 85 kg and is 1.76 m tall.

    // TEST DATA 1:
    // const massMark = 78;
    // const heightMark = 1.69;
    // const massJohn = 92;
    // const heightJohn = 1.95;

    // const BMIMark = massMark / heightMark ** 2;
    // const BMIJohn = massJohn / (heightJohn * heightJohn);
    // const markHigherBMI = BMIMark > BMIJohn;

    // console.log(BMIMark, BMIJohn, markHigherBMI);

    

    // TEST DATA 2:

    const massMark = 95;
    const heightMark = 1.88;
    const massJohn = 85;
    const heightJohn = 1.76;

    const BMIMark = massMark / heightMark ** 2;
    const BMIJohn = massJohn / heightJohn ** 2;
    const markHigherBMI = BMIMark > BMIJohn;

    console.log(BMIMark, BMIJohn, markHigherBMI);
    