document.getElementById('download-invoice').addEventListener('click', function() {
    var element = document.getElementById('modal-section');
    html2canvas(element).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var pdf = new jsPDF('p', 'mm', 'a4'); // Use A4 size

        // A4 size dimensions in mm
        var pdfWidth = 210;
        var pdfHeight = 297;

        // Get the dimensions of the canvas
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;

        // Calculate the scale factor to fit the canvas within the PDF dimensions
        var scaleFactor = Math.min(pdfWidth / canvasWidth, pdfHeight / canvasHeight);

        // Calculate the image dimensions in the PDF
        var imgWidth = canvasWidth * scaleFactor;
        var imgHeight = canvasHeight * scaleFactor;

        // Add the image to the PDF without margins
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        // Save the PDF
        pdf.save('invoice.pdf');

        // Show message box
        document.getElementById('message-box').style.display = 'block';

        // Hide message box after 3 seconds
        setTimeout(function() {
            document.getElementById('message-box').style.display = 'none';
        }, 3000);
    });
});
