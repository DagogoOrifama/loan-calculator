// Listen for click event
document.getElementById('loan-form').addEventListener('submit', function(event){
    // Prevent default
    event.preventDefault();

    // Show results
    document.getElementById('result').style.display = 'none';
    // Hide loader
    document.getElementById('loader').style.display = 'block';
    // call function that evaluates the result to display result after 5sec
    setTimeout(CalculatedResult, 5000);
    
});

function CalculatedResult(){
    // Get all the data
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthlyPayment');
    const totalPayment = document.getElementById('totalPayment');
    const totalInterest = document.getElementById('totalInterest');

    // convert values to float
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value / 100 / 12);
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute montly payment
    const cal = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*cal* calculatedInterest)/(cal-1);

    // Check if calculated montly value is a finite number
    if(isFinite(monthly)){
        // approximate the result of the totalPayment payment to two decimal places
        monthlyPayment.value = monthly.toFixed(2);
        // approximate monthly payment to two decimal places
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly* calculatedPayments)-principal).toFixed(2);
        
        // Show results
        document.getElementById('result').style.display = 'block';
        // Hide loader
        document.getElementById('loader').style.display = 'none';
    }else{
        displayError('Please check your numbers');
    }
    
}

// Display Error
function displayError(error){
    // Show results
    document.getElementById('result').style.display = 'none';
    // Hide loader
    document.getElementById('loader').style.display = 'none';

    // Get element
    const card = document.querySelector('.card');
    const heading = document.querySelector('#heading');
    // Create error div
    const errorDiv = document.createElement('div');
    // Add Bootstrap alert class to div
    errorDiv.className = 'alert alert-danger';
    // Add error text to be ouputted to the user
    errorDiv.appendChild(document.createTextNode(error));

    // Specify where to output the error div
    card.insertBefore(errorDiv, heading);
    // clear error div after 3s
    setTimeout(clearErrorDiv, 3000);

}

// Clear error div
function clearErrorDiv(){
    document.querySelector('.alert').remove();
}