document.getElementById('download-invoice').addEventListener('click', function() {
    // Set the current date with the desired format
    var options = { day: 'numeric', month: 'long', year: 'numeric' };
    var currentDate = new Date().toLocaleDateString('en-GB', options);
    document.getElementById('current-date').innerText = currentDate;

    var element = document.getElementById('modal-section');
    
    // Configure the options for html2pdf
    var opt = {
        margin:       0,
        filename:     'invoice.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    // Generate the PDF
    html2pdf().from(element).set(opt).save().then(function() {
        // Show message box
        document.getElementById('message-box').style.display = 'block';

        // Hide message box after 3 seconds
        setTimeout(function() {
            document.getElementById('message-box').style.display = 'none';
        }, 3000);
    }).catch(function(error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF');
    });
});
