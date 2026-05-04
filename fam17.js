const family = {
  "Mansotra Family": [
    {
      name: "Jyoti Parkash",
      relations: {
        spouse: "Santosh Devi",
        children: ["Himani Sharma", "Sandeep Sharma", "Sneha Sharma"],
      },
    },
    {
      name: "Santosh Devi",
      relations: {
        spouse: "Jyoti Parkash",
        children: ["Himani Sharma", "Sandeep Sharma", "Sneha Sharma"],
      },
    },
    {
      name: "Himani Sharma",
      relations: {
        spouse: "Harish Kumar",
        child: "Gourik Prasher",
        father: "Jyoti Parkash",
        mother: "Santosh Devi",
        brother: "Sandeep Sharma",
        sister: ["Sneha Sharma", "Simi Sharma"],
      },
    },
    {
      name: "Harish Kumar",
      relations: {
        spouse: "Himani Sharma",
        child: "Gourik Prasher",
        father: "Jyoti Parkash",
        mother: "Santosh Devi",
      },
    },
    {
      name: "Gourik Prasher",
      relations: {
        father: "Harish Kumar",
        mother: "Himani Sharma",
        maternalGrandparents: ["Jyoti Parkash", "Santosh Devi"],
      },
    },
    {
      name: "Sandeep Sharma",
      relations: {
        spouse: "Simi Sharma",
        father: "Jyoti Parkash",
        mother: "Santosh Devi",
        sister: ["Himani Sharma", "Sneha Sharma"],
      },
    },
    {
      name: "Simi Sharma",
      relations: {
        spouse: "Sandeep Sharma",
        father: "Jyoti Parkash",
        mother: "Santosh Devi",
        sister: ["Sneha Sharma", "Himani Sharma"],
      },
    },
    {
      name: "Sneha Sharma",
      relations: {
        father: "Jyoti Parkash",
        mother: "Santosh Devi",
        brother: "Sandeep Sharma",
        sister: ["Himani Sharma", "Simi Sharma"],
      },
    },
  ],
};

function displayAll() {
  const Container = document.getElementById("members");
  Container.innerHTML = "";

  family["Mansotra Family"].forEach((m) => {
    Container.innerHTML += `
		<div class  = "member">
		<b>${m.name}</b>
		</div>
		`;
  });
}

function searchMember() {
  const name = document.getElementById("search").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  const member = family["Mansotra Family"].find((m) =>
    m.toLowerCase().includes(name),
  );

  if (!member) {
    resultDiv.innerHTML = "Member not found";
    return;
  }

  let relationsHTML = "";

  if (member.relations) {
    for (let key in member.relations) {
      relationsHTML += `<b>${key}:<?b> ${member.relations[key]} <br>`;
    }
  }

  resultDiv.innerHTML = `
  <div class = "result-card">
  <h3>${member.name}</h3>
  ${member.father ? `<b>Father:</b> ${member.father}<br>` : ""}
  ${member.mother ? `,b>Mother:</b> ${member.mother}<br>` : ""}
  ${relationsHTML} 
  </div>
  `;
}

displayAll();
