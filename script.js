function addReminder() {
  const reminderInput = document.getElementById("reminderInput");
  const reminderList = document.getElementById("reminderList");
  const reminderText = reminderInput.value.trim();

  if (reminderText === "") {
    alert("Please enter a reminder.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = reminderText;
  reminderList.appendChild(li);

  reminderinput.value = "";
}

function clearReminders() {
  const reminderList = document.getElementById("reminderList");
  reminderList.innerHTML = "";
}                                 
