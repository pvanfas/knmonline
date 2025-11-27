function submitFormAjax(formData) {
    $.ajax({
        type: "POST",
        url: "",
        data: formData,
        success: function (data) {
            console.log("Form submitted successfully");
        },
        error: function (data) {
            console.log("Error submitting form");
        }
    });
}

$("#approvalForm select").on("change", function () {
    var formData = $(this).closest("form").serialize();
    submitFormAjax(formData);
    // if selected value is approved, add bg-success to select, add bg-danger to rejected, and bg-warning to on_hold
    $(this).removeClass("bg-success bg-danger bg-warning");
    if ($(this).val() == "approved") {
        $(this).addClass("bg-success");
    } else if ($(this).val() == "rejected") {
        $(this).addClass("bg-danger");
    } else if ($(this).val() == "on_hold") {
        $(this).addClass("bg-warning");
    }
});

// for each select inside #approvalForm, if the value is approved, add bg-success to select, add bg-danger to rejected, and bg-warning to on_hold
$("#approvalForm select").each(function () {
    if ($(this).val() == "approved") {
        $(this).addClass("bg-success");
    } else if ($(this).val() == "rejected") {
        $(this).addClass("bg-danger");
    } else if ($(this).val() == "on_hold") {
        $(this).addClass("bg-warning");
    }
});


$("#approvalForm input").on("blur", function () {
    var formData = $(this).closest("form").serialize();
    submitFormAjax(formData);
});


// if any td has input or select, but the td content is not wraped in a form, wrap it in a form
$("td").each(function () {
    var $td = $(this);
    if ($td.find("input, select").length && !$td.find("form").length) {
        $td.wrapInner('<form method="post" action="" id="approvalForm" ></form>');
        // then if select value is approved, add bg-success to select, add bg-danger to rejected, and bg-warning to on_hold
        $td.find("select").each(function () {
            if ($(this).val() == "approved") {
                $(this).addClass("bg-success");
            } else if ($(this).val() == "rejected") {
                $(this).addClass("bg-danger");
            } else if ($(this).val() == "on_hold") {
                $(this).addClass("bg-warning");
            }
        });

        $td.find("input").on("change", function () {
            var formData = $(this).closest("form").serialize();
            submitFormAjax(formData);
        });
        $td.find("select").on("change", function () {
            var formData = $(this).closest("form").serialize();
            submitFormAjax(formData);
            $(this).removeClass("bg-success bg-danger bg-warning");
            if ($(this).val() == "approved") {
                $(this).addClass("bg-success");
            } else if ($(this).val() == "rejected") {
                $(this).addClass("bg-danger");
            } else if ($(this).val() == "on_hold") {
                $(this).addClass("bg-warning");
            }
        });
    }

    var id = $td.find("#approvalData").data("id");
    var verifier = $td.find("#approvalData").data("verifier");
    var previousVerifier = $td.find("#approvalData").data("previous-verifier");
    var verifier = $td.find("#approvalData").data("verifier");
    var previousAction = $td.find("#approvalData").data("previous-action");
    var previousRemarks = $td.find("#approvalData").data("previous-remarks");

    if (previousAction=="rejected") {
        // hide select and input type text
        $td.find("select, input[type=text]").hide();
        $td.find("#approvalForm").append('<span class="badge badge-danger">Rejected by ' + previousVerifier + '</span>');
    } else if (previousAction=="on_hold") {
        $td.find("select, input[type=text]").hide();
        $td.find("#approvalForm").append('<span class="badge badge-warning">Waiting for ' + previousVerifier + ' Approval</span>');
    }
    
});

