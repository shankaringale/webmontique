$(document).ready(function () {
 


	$('#datepicker-from').datetimepicker({
		 format: "YYYY-MM-DD"

	});

    $('#datepicker-to').datetimepicker({
        useCurrent: false,
        format: "YYYY-MM-DD"
    });
    $("#datepicker-from").on("dp.change", function (e) {
        $('#datepicker-to').data("DateTimePicker").minDate(e.date);
    });
    $("#datepicker-to").on("dp.change", function (e) {
        $('#datepicker-from').data("DateTimePicker").maxDate(e.date);
    });


});