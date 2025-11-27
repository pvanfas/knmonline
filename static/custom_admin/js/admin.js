document.addEventListener("DOMContentLoaded", function () {
    var dobInput = document.getElementById("id_dob");
    var issueDateInput = document.getElementById("id_passport_issue");
    var expiryDateInput = document.getElementById("id_passport_expiry");

    function calculateAge() {
        var dobValue = dobInput.value;
        if (isValidDateFormat(dobValue)) {
            var parts = dobValue.split("/");
            var day = parseInt(parts[0], 10);
            var month = parseInt(parts[1], 10);
            var year = parseInt(parts[2], 10);

            var dob = new Date(year, month - 1, day);
            var today = new Date();

            var age = today.getFullYear() - dob.getFullYear();
            var monthDiff = today.getMonth() - dob.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
                age--;
            }
            return age;
        }
        return 0;
    }

    function calculateExpiryDate() {
        var issueDateValue = issueDateInput.value;
        if (isValidDateFormat(issueDateValue)) {
            var parts = issueDateValue.split("/");
            var day = parseInt(parts[0], 10);
            var month = parseInt(parts[1], 10);
            var year = parseInt(parts[2], 10);

            var issueDate = new Date(year, month - 1, day);
            var age = calculateAge();
            var validityPeriod = age < 15 ? 5 : 10; // If age < 15, add 5 years; otherwise, add 10

            var expiryDate = new Date(issueDate.getFullYear() + validityPeriod, issueDate.getMonth(), issueDate.getDate());
            expiryDate.setDate(expiryDate.getDate() - 1); // Subtract 1 day

            // Format the expiry date as dd/mm/yyyy
            var formattedExpiryDate =
                String(expiryDate.getDate()).padStart(2, "0") + "/" +
                String(expiryDate.getMonth() + 1).padStart(2, "0") + "/" +
                expiryDate.getFullYear();

            expiryDateInput.value = formattedExpiryDate;
        }
    }

    function isValidDateFormat(dateString) {
        var datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
        return datePattern.test(dateString);
    }

    issueDateInput.addEventListener("input", calculateExpiryDate);
    issueDateInput.addEventListener("change", calculateExpiryDate);
    issueDateInput.addEventListener("paste", function () {
        setTimeout(calculateExpiryDate, 0);
    });
    dobInput.addEventListener("input", calculateExpiryDate);
    dobInput.addEventListener("change", calculateExpiryDate);
    dobInput.addEventListener("paste", function () {
        setTimeout(calculateExpiryDate, 0);
    });
});
