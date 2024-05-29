$(document).ready(function() {
    // Set the current date with the desired format
    var options = { day: 'numeric', month: 'long', year: 'numeric' };
    var currentDate = new Date().toLocaleDateString('en-GB', options);
    document.getElementById('current-date').innerText = currentDate;

    $('#download-invoice').on('click', function() {
        var element = document.getElementById('modal-section');
        
        // Configure the options for html2pdf
        var opt = {
            margin: 0,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Generate the PDF
        html2pdf().from(element).set(opt).save().then(function() {
            // Show message box
            $('#message-box').fadeIn().delay(3000).fadeOut();
        }).catch(function(error) {
            console.error('Error generating PDF:', error);
            alert('Error generating PDF');
        });
    });

    function generateRandom12DigitNumber() {
        let randomNumber = '';
        for (let i = 0; i < 12; i++) {
            randomNumber += Math.floor(Math.random() * 10); // Generates a random digit (0-9)
        }
        return randomNumber;
    }
    
    document.getElementById('invoice-reference').innerText = generateRandom12DigitNumber();
    
});