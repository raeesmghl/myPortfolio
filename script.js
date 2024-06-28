let emailCopyBtn = document.querySelector('#email');

emailCopyBtn.addEventListener('click', () => {
    let text = 'raees.mughal.official@gmail.com';
    
    // Create a temporary input element
    let tempInput = document.createElement('input');
    tempInput.value = text;

    tempInput.style.textTransform = 'lowercase'

    
    document.body.appendChild(tempInput);

    
    // Select the input value
    tempInput.select();
    
    // Copy the selected value to the clipboard
    document.execCommand('copy');
    
    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, give feedback to the user
    alert('Email copied to clipboard!');
});
