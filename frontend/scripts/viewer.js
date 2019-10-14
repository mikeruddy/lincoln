$(function() {
    let urlParam = window.location.search.split('=')[1];
    let date = new Date(urlParam);
    


    $('#myTable').DataTable( {
        ajax: {
            url: "/api/donate/"+urlParam,
            dataSrc: ''
        },
        columns: [ { "data": "donor_id" }, { "data": "name" }, { "data": "email" }, { "data": "gender" }, { "data": "address" }, { "data": "amount" }]
    } );


    

    $('#fileinput').on('change', function () {
        var fileReader = new FileReader();
        fileReader.onload = function () {
          var data = fileReader.result;  // data <-- in this var you have the file data in Base64 format

          $.ajax({
            type: "POST",
            url: '/api/donate/' + date.getTime(),
            data: data,
            success: function() {
                window.location.reload()
            },
            processData: false,
            contentType: 'application/octet-stream'
          });
          
        };
        fileReader.readAsBinaryString($('#fileinput').prop('files')[0]);
    });

})