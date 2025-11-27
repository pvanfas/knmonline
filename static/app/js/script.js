function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

$(function () {
    'use strict'

    $('select:not(.offcanvas select)').select2({
        minimumResultsForSearch: '',
        placeholder: "Search",
        width: '100%',
        allowClear: true,
    });

    $('.offcanvas select').select2({
        minimumResultsForSearch: '',
        placeholder: "Search",
        width: '100%',
        allowClear: true,
        dropdownParent: $('.offcanvas form')
    });

    $('.niceselect').select2({
        minimumResultsForSearch: -1,
        placeholder: "Search",
        width: '100%',
    });

    $('.selectmultiple').select2({
        minimumResultsForSearch: '',
        placeholder: "Search",
        width: '100%'
    });

    $('.select2').on('click', () => {
        let selectField = document.querySelectorAll('.select2-search__field')
        selectField.forEach((element, index) => {
            element?.focus();
        })
    });

    $('input.dateinput').bootstrapdatepicker({
        format: "dd/mm/yyyy",
        viewMode: "date",
        multidate: false,
        multidateSeparator: "-",
        orientation: "bottom right"
    });

    // $('input.datetimeinput').bootstrapdatepicker({
    //     format: "dd/mm/yyyy hh:ii",
    //     viewMode: "time",
    //     multidate: false,
    //     multidateSeparator: "-",
    //     orientation: "bottom right"
    // })

    // $('input.timeinput').bootstrapdatepicker({
    //     format: "hh:ii",
    //     viewMode: "time",
    //     multidate: false,
    //     multidateSeparator: "-",
    //     orientation: "bottom right"
    // })



    $('.theme-layout').on('click', () => {
        if (document.body.className.split(" ").indexOf("dark-mode") >= 0) {
            setCookie("mode", "dark-mode", 7);
        };
        if (document.body.className.split(" ").indexOf("light-mode") >= 0) {
            setCookie("mode", "light-mode", 7);
        };
    });

    var mode = getCookie("mode");
    $('body').removeClass('light-mode');
    $('body').removeClass('dark-mode');
    $('body').addClass(mode);

    $('.timeinput').timepicker({
        timeFormat: 'HH:mm',
        interval: 5,
        dynamic: true,
        dropdown: true,
        scrollbar: false
    });

    $(document).on("click", ".instant-action-button", function (e) {
        e.preventDefault();
        var key = $(this).attr("data-key");
        var url = $(this).attr("data-url");
        var title = $(this).attr("data-title");
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            data: { pk: key },
            success: function (data) {
                var status = data.status;
                var message = data.message;
                if (status == "success") {
                    title ? (title = title) : (title = "Success");
                    $(`[data-key="${key}"]`).html(
                        `<i class="bi bi-check-square-fill text-success"></i>`
                    );
                    $(`span#${key}`).html(message);
                } else {
                    title ? (title = title) : (title = "An Error Occurred");
                    alert(message);
                }
            },
            error: function (data) {
                var title = "An error occurred";
                var message = "An error occurred. Please try again later.";
            },
        });
    });

    $(document).on("change", "#image_update_form input[type=file]", function () {
        var $this = $(this);
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            $this
                .closest(".avatar-xxl")
                .css("background-image", "url(" + reader.result + ")");
        };
        if (file) {
            reader.readAsDataURL(file);
            $.ajax({
                type: "POST",
                url: "/employees/profile/",
                data: new FormData($("#image_update_form")[0]),
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                },
                error: function (data) {
                    console.log(data);
                }
            });

        }
    });


});
