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

    // $('#invoice-preview').on('click', function() {

    //     $('#invoice-user-name-gen').text() = "Test Name XXXX";
    //     console.log("HERE!....");
    // })

    $('#invoice-preview').on('click', function() {
        // Capture the values from the form inputs
        var userName = $('#invoice-user-name').val();
        var userCompany = $('#invoice-user-company').val();
        var userAddressOne = $('#user-address-one').val();
        var userAddressTwo = $('#user-address-two').val();
        var userEmail = $('#invoice-user-email').val();
        var userPhone = $('#invoice-user-phone').val();

        var receipientName = $('#invoice-receipient-name').val();
        var receipientAddressOne = $('#receipient-address-one').val();
        var receipientAddressTwo = $('#receipient-address-two').val();
        var receipientEmail = $('#invoice-receipient-email').val();
        var receipientPhone = $('#invoice-receipient-phone').val();

        var itemNameOne = $('#item-name-one').val();
        var itemQuantityOne = $('#item-quantity-one').val();
        var itemPriceOne = $('#item-price-one').val();

        var itemNameTwo = $('#item-name-two').val();
        var itemQuantityTwo = $('#item-quantity-two').val();
        var itemPriceTwo = $('#item-price-two').val();

        var vat = $('#vatState').val();
        var itemOneTotal = itemPriceOne * itemQuantityOne;
        var itemTwoTotal = itemPriceTwo * itemQuantityTwo;
        var subTotal = itemOneTotal + itemTwoTotal;
        var total = subTotal * (vat/100) + subTotal;

        if (itemPriceOne){
            var itemPriceOne = 'R ' + itemPriceOne;
        }

        if (itemPriceTwo){
            var itemPriceTwo = 'R ' + itemPriceTwo;
        }

        var itemOneTotal = 'R ' + itemOneTotal;
        var itemTwoTotal = 'R ' + itemTwoTotal;

        // Set the values in the modal
        $('#modal-user-name').text(userName);
        $('#modal-user-company').text(userCompany);
        $('#modal-user-address-one').text(userAddressOne);
        $('#modal-user-address-two').text(userAddressTwo);
        $('#modal-user-email').text(userEmail);
        $('#modal-user-phone').text(userPhone);
        $('#modal-receipient-name').text(receipientName);
        $('#modal-receipient-address-one').text(receipientAddressOne);
        $('#modal-receipient-address-two').text(receipientAddressTwo);
        $('#modal-receipient-email').text(receipientEmail);
        $('#modal-receipient-phone').text(receipientPhone);
        $('#modal-item-name-one').text(itemNameOne);
        $('#modal-item-quantity-one').text(itemQuantityOne);
        $('#modal-item-price-one').text(itemPriceOne);
        $('#modal-item-name-two').text(itemNameTwo);
        $('#modal-item-quantity-two').text(itemQuantityTwo);
        $('#modal-item-price-two').text(itemPriceTwo);
        $('#modal-item-vat').text(vat);
        $('#modal-item-one-total').text(itemOneTotal);
        $('#modal-item-two-total').text(itemTwoTotal);
        $('#modal-item-sub-total').text(subTotal);
        $('#modal-item-total').text(total);

    });

    
    document.getElementById('imgInp').addEventListener('change', function() {
        readURL(this);
    });

    document.getElementById('imgInp1').addEventListener('change', function() {
        readURL1(this);
    });
    
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('blah').setAttribute('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    function readURL1(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('blah1').setAttribute('src', e.target.result);
                document.getElementById('blah2').setAttribute('src', e.target.result);
                document.getElementById('blah3').setAttribute('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $('#download-poster').on('click', function() {
        $('#message-box-poster').fadeIn().delay(3000).fadeOut();

        html2canvas(document.querySelector("#poster-section")).then(canvas => {
            var link = document.createElement('a');
            link.href = canvas.toDataURL("image/png");
            link.download = 'section-image.png';
            link.click();
        });
    });

    function changeTheme(){
        var p_header = $('#poster-header').val();
        var p_details = $('#poster-details').val();
        var p_description = $('#poster-description').val();
        var p_footer = $('#poster-footer-input').val();
        var p_background = $('#poster-background').val();

        $('#poster_header').text(p_header);
        $('#poster_details').text(p_details).css('color', p_background);
        $('#poster_description').text(p_description).css('color', p_background);
        $('#poster_footer_text').text(p_footer);

        $('.poster-footer').css('background-color', p_background);
        $('.bg-stm-blue').css('background-color', p_background);
    }

    $('#open-poster').on('click', function() {
        changeTheme();
    });

    $('.theme-update').on('click', function() {
        changeTheme();
    })
});