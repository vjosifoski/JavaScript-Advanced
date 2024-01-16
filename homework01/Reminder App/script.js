let reminders = [];

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addReminderButton")
    .addEventListener("click", addReminder);
  document
    .getElementById("showRemindersButton")
    .addEventListener("click", showReminders);
});

function addReminder() {
  let title = document.getElementById("titleInput").value;
  let priority = document.getElementById("priorityInput").value;
  let color = document.getElementById("colorInput").value;
  let description = document.getElementById("descriptionInput").value;

  let reminder = { title, priority, color, description };
  reminders.push(reminder);

  document.getElementById("titleInput").value = "";
  document.getElementById("priorityInput").value = "";
  document.getElementById("colorInput").value = "";
  document.getElementById("descriptionInput").value = "";
}

function showReminders() {
  let container = document.getElementById("remindersContainer");
  container.innerHTML = "";

  let table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  let headerRow = table.insertRow();
  let headers = ["Title", "Priority", "Description"];
  for (let i = 0; i < headers.length; i++) {
    let headerCell = document.createElement("th");
    headerCell.textContent = headers[i];
    headerCell.style.border = "1px solid black";
    headerRow.appendChild(headerCell);
  }

  for (let i = 0; i < reminders.length; i++) {
    let row = table.insertRow();

    let titleCell = row.insertCell();
    titleCell.textContent = reminders[i].title;
    titleCell.style.color = reminders[i].color;
    titleCell.style.border = "1px solid black";

    let priorityCell = row.insertCell();
    priorityCell.textContent = reminders[i].priority;
    priorityCell.style.border = "1px solid black";

    let descriptionCell = row.insertCell();
    descriptionCell.textContent = reminders[i].description;
    descriptionCell.style.border = "1px solid black";
  }

  container.appendChild(table);
}
