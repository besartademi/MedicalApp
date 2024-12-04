// Default date set to today's date
document.getElementById("date-select").value = new Date()
    .toISOString()
    .split("T")[0];
