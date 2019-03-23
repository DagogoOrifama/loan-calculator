// Listen for click event
document.getElementById('loan-form').addEventListener('submit', function(event){
    // Prevent default
    event.preventDefault();

    // Show results
    document.getElementById('results').style.display = 'none';
    // Hide loader
    document.getElementById('loading').style.display = 'block';
    // call function that evaluates the result
    CalculatedResult();
    
})

function CalculatedResult(){
    // Get all the data
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayments = document.getElementById('monthlyPayments');
    const totalPayment = document.getElementById('totalPayment');
    const totalInterest = document.getElementById('totalInterest');

    // convert values to float
    amount = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value / 100 / 12);
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute montly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x* calculatedInterest)/(x-1);

    // Check if calculated montly value is a finite number
    if(isFinite(monthly)){
        // approximate the result of the totalPayment payment to two decimal places
        monthlyPayment.value = monthly.toFixed(2);
        // approximate monthly payment to two decimal places
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly* calculatedPayments)-principal).toFixed(2);
        
            // Show results
        document.getElementById('results').style.display = 'block';
        // Hide loader
        document.getElementById('loading').style.display = 'none';
    }else{
        displayError('Please check your numbers');
    }
    
}

// Display Error
function displayError(error){
    // Show results
    document.getElementById('results').style.display = 'none';
    // Hide loader
    document.getElementById('loading').style.display = 'none';
}