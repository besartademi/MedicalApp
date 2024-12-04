document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("date-select");
  if (dateInput) {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    dateInput.value = formattedDate;
  }
});
