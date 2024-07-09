const table = document.getElementById("dataTable");

const updateName = document.getElementById("updateName");
const updateScore = document.getElementById("updateScore");
const updateResult = document.getElementById("updateResult");
const updateId = document.getElementById("updateid");

table.addEventListener("click", function (event) {
  if (event.target.tagName === "TD") {
    const row = event.target.parentElement;

    updateId.value = row.cells[0].textContent;
    updateName.value = row.cells[1].textContent;
    updateScore.value = row.cells[2].textContent;
    updateResult.value = row.cells[3].textContent;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const enterId = document.getElementById("enterId");
  const updateid = document.getElementById("updateid");
  const updateName = document.getElementById("updateName");
  const updateScore = document.getElementById("updateScore");
  const updateResult = document.getElementById("updateResult");
  const submitButton = document.getElementById("submitButton");

  // Function to handle updating data
  submitButton.addEventListener("click", () => {
    const id = enterId.value;
    const updatedData = {
      id: updateid.value,
      name: updateName.value,
      score: updateScore.value,
      result: updateResult.value,
    };

    // Send a POST request to the server to update the data
    fetch("/update-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response, show success or error message
        console.log(data);
        // Show a success message or handle accordingly
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        // Handle the error or show an error message
      });
  });

  // Fetch data based on the entered ID
  enterId.addEventListener("input", () => {
    fetch(`/get-data-by-id?id=${enterId.value}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const result = data[0];
          updateid.value = result.id;
          updateName.value = result.name;
          updateScore.value = result.score;
          updateResult.value = result.result;
        } else {
          updateid.value = "";
          updateName.value = "";
          updateScore.value = "";
          updateResult.value = "";
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  // Existing code...
});

document
  .getElementById("showalldataButton")
  .addEventListener("click", function () {
    fetch("/get-all-data")
      .then((response) => response.json())
      .then((data) => {
        const tableBody = document.querySelector("#dataTable tbody");
        tableBody.innerHTML = "";

        data.forEach((row) => {
          const newRow = tableBody.insertRow();
          newRow.insertCell(0).textContent = row.id;
          newRow.insertCell(1).textContent = row.name;
          newRow.insertCell(2).textContent = row.score;
          newRow.insertCell(3).textContent = row.result;
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

document.getElementById("updateButton").addEventListener("click", function () {
  const idToUpdate = document.getElementById("updateid").value;
  const nameToUpdate = document.getElementById("updateName").value;
  const scoreToUpdate = document.getElementById("updateScore").value;
  const resultToUpdate = document.getElementById("updateResult").value;

  // Send a POST request to update the row in the quiz_result table
  fetch("/update-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: idToUpdate,
      name: nameToUpdate,
      score: scoreToUpdate,
      result: resultToUpdate,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      document.getElementById("updateid").value = "";
      document.getElementById("updateName").value = "";
      document.getElementById("updateScore").value = "";
      document.getElementById("updateResult").value = "";
    })
    .catch((error) => {
      console.error("Error updating data:", error);
    });
});

document.getElementById("deleteButton").addEventListener("click", function () {
  const idToDelete = document.getElementById("updateid").value;

  fetch("/delete-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: idToDelete,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      document.getElementById("updateid").value = "";
      document.getElementById("updateName").value = "";
      document.getElementById("updateScore").value = "";
      document.getElementById("updateResult").value = "";
    })
    .catch((error) => {
      console.error("Error deleting data:", error);
    });
});
