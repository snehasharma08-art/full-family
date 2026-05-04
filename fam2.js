const family = {
  "Mansotra Family": [
    {
      name: "Sneha Sharma",
      father: "Jyoti Parkash",
      mother: "Santosh Devi",
      relations: {
        sister: "Himani Sharma",
        brother: "Sandeep Sharma",
      },
    },
    {
      name: "Jyoti Parkash",
      relations: {
        spouse: "Santosh Devi",
        children: ["Himani Sharma", "Sandeep Sharma", "Sneha Sharma"],
        father: "Lt.Sh.Tara Chand",
        mother: "Lt.Smt.Dwarku Devi",
      },
    },
    {
      name: "Santosh Devi",
      relations: {
        spouse: "Jyoti Parkash",
        children: ["Himani Sharma", "Sandeep Sharma", "Sneha Sharma"],
        mother: "Lt.Smt.Raja Devi",
        father: "Lt.Sh.Jaganath Magotra",
      },
    },
    {
      name: "Himani Sharma",
      father: "Jyoti Prakash",
      mother: "Santosh Devi",
      relations: {
        spouse: "Harish",
        child: "Gourik",
        brother: "Sandeep Sharma",
        sister: ["Sneha Sharma", "Simi Sharma"],
      },
    },
    {
      name: "Harish",
      mother: "Santosh Devi",
      father: "Jyoti Parkash",
      relations: {
        spouse: "Himani Sharma",
        child: "Gourik",
      },
    },
    {
      name: "Gourik",
      relations: {
        mother: "Himani Sharma",
        father: "Harish",
        maternalGrandparents: ["Jyoti Parkash", "Santosh Devi"],
      },
    },
    {
      name: "Sandeep Sharma",
      mother: "Santosh Devi",
      father: "Jyoti Praksh",
      relations: {
        spouse: "Simi Sharma",
        sister: ["Sneha Sharma", "Himani Sharma"],
      },
    },
    {
      name: "Simi Sharma",
      father: " Jyoti Parkash",
      mother: "Santosh Devi",
      relations: {
        spouse: "Sandeep Sharma",
        sister: ["Himani Sharma", "Sneha Sharma"],
      },
    },
  ],
};

function displayAll() {
  const container = document.getElementById("members");
  container.innerHTML = "";

  family["Mansotra Family"].forEach((m) => {
    container.innerHTML += `
		<div class = "member">
		 <b>${m.name}</b>
		 </div>
	     `;
  });
}

function searchMember() {
  const name = document.getElementById("search").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  const member = family["Mansotra Family"].find((m) =>
    m.name.toLowerCase().includes(name),
  );

  if (!member) {
    resultDiv.innerHTML = "Member not found";
    return;
  }

  let relationsHTML = "";

  if (member.relations) {
    for (let key in member.relations) {
      relationsHTML += `<b>${key}:</b> ${member.relations[key]} <br>`;
    }
  }

  resultDiv.innerHTML = `
  <div class = "result-card">
  <h3>${member.name}</h3>
  ${member.father ? `<b>Father:</b> ${member.father}<br>` : ""}
  ${member.mother ? `<b>Mother:</b> ${member.mother}<br>` : ""}
  ${relationsHTML}
  </div>
  `;
}

displayAll();
