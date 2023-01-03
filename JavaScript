function InsertDetails() {

    var Details = {};
    Details.StudName = document.getElementById('txtStudName').value;
    Details.StudRollNo = document.getElementById('txtStudRollNo').value;


    $.ajax({
        type: "POST",
        url: "/Home/InsertStudDetails",
        data: '{Details: ' + JSON.stringify(Details) + '}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

        },       
    })

}
function GetDetails() {
    var html = '';
    $('#tbtable').empty();
    $.ajax({
        type: "GET",
        url: "/Home/GetStudDetails",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (Response) {
            var data = JSON.parse(Response);
            $.each(data, function (i, value) {

                html += '<tr id="tr' + "" + '"><td>' + data[i].StudentName +
                    '</td><td>' + data[i].studentRollNumber +
                    '</td></tr>';


            });
            $('#tbList').empty();
            $('#tbList').append(html);

        },
    })



}
