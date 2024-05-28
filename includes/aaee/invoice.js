document.getElementById('download-invoice').addEventListener('click', function() {
    var element = document.getElementById('modal-section');
    html2canvas(element).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10);
        pdf.save('invoice.pdf');

        // Show message box
        document.getElementById('message-box').style.display = 'block';

        // Hide message box after 3 seconds
        setTimeout(function() {
            document.getElementById('message-box').style.display = 'none';
        }, 3000);
    });
});