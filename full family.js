let families = {};

function addFamily() {
  const familyName = document.getElementById("familyName").value.trim();

  if (!familyName) {
    alert("Enter family name");
    return;
  }

  if (!families[familyName]) {
    families[familyName] = [];
    updateFamilyDropdown();
    displayData();
  }

  document.getElementById("familyName").value = "";
}

function updateFamilyDropdown() {
  const select = document.getElementById("familySelect");
  select.innerHTML = "";

  for (let family in families) {
    let option = document.createElement("option");
    option.value = family;
    option.textContent = family;
    select.appendChild(option);
  }
}

function addMember() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const family = document.getElementById("familySelect").value;
  const father = document.getElementById("father").value;
  const mother = document.getElementById("mother").value;
  const spouse = document.getElementById("spouse").value;
  const address = document.getElementById("address").value;

  if (!name || !family) {
    alert("Fill required fields");
    return;
  }

  const member = {
    name,
    age,
    father,
    mother,
    spouse,
    address,
  };

  families[family].push(member);

  clearForm();
  displayData();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("father").value = "";
  document.getElementById("mother").value = "";
  document.getElementById("spouse").value = "";
  document.getElementById("address").value = "";
}

function displayData() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  for (let family in families) {
    let familyDiv = document.createElement("div");
    familyDiv.className = "family-card";

    let membersHTML = `<h2>${family}</h2>`;

    families[family].forEach((member) => {
      membersHTML += `
        <div class="member">
          <strong>Name:</strong> ${member.name} <br>
          <strong>Age:</strong> ${member.age} <br>
          <strong>Father:</strong> ${member.father} <br>
          <strong>Mother:</strong> ${member.mother} <br>
          <strong>Spouse:</strong> ${member.spouse} <br>
          <strong>Address:</strong> ${member.address}
        </div>
      `;
    });

    familyDiv.innerHTML = membersHTML;
    output.appendChild(familyDiv);
  }
}
