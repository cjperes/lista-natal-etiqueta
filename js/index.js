$('#exportForm').click(function(){
  html2canvas($('#form'), {
    onrendered: function(canvas) {
      var pdf = new jsPDF('a', 'mm', 'a4');

      var imgData = canvas.toDataURL('image/jpeg', 1.0);
      pdf.addImage(imgData, 'JPEG', 5, 5, 200, 0);

      pdf.save("Minha Lista de Natal.pdf");
    }
  });
});

var inputs = $('input[type="text"]');

inputs.on('change', function() {
    if ( $.map(inputs, function(el) { return el.value; }).join('').length ) 
        inputs.removeAttr('placeholder');
});