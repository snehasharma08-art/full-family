const family = {
  "Mansotra Family": [
    {
      name: "Jyoti Parkash",
      relations: {
        spouse: "Santosh Devi",
        children: ["Himani Sharma", "Sandeep Sharma", "Sneha Sharma"],
        mother: "Lt.Smt.Dwarku Devi",
        father: "Lt.SH.Tara Chand",
      },
    },
    {
      name: "Santosh Devi",
      relations: {
        spouse: "Jyoti Parkash",
        children: ["Himani Sharma", "Sandeep Sharma", "Sneha Sharma"],
        father: "Lt.Sh.Jaganath Magotra",
        mother: "Lt.Smt.Raja Devi",
      },
    },
    {
      name: "Himani Sharma",
      relations: {
        spouse: "Harish Kumar",
        child: "Gourik",
        father: "Jyoti Parkash",
        mother: "Santosh Devi",
        brother: "Sandeep Sharma",
        sister: ["Sneha Sharma", "SimiSharma"],
      },
    },
    {
      name: "Harish Kumar",
      relations: {
        spouse: "Himani Sharma",
        child: "Gourik",
        father: "Jyoti Parkash",
        mother: "Santosh Devi",
      },
    },
    {
      name: "Gourik",
      relations: {
        father: "Harish Kumar",
        mother: "Himani Sharma",
        maternalGrandparents: ["Jyoti Parkash", "Santosh Devi"],
      },
    },
    {
      name: "Sandeep Sharma",
      relations: {
        father: "Jyoti Parkash",
        mother: "Santosh Devi",
        spouse: "Simi Sharma",
        sister: ["Sneha Sharma", "Himani Sharma"],
      },
    },
    {
      name: "Simi Sharma",
      relations: {
        father: "Jyoti Parkash",
        mother: "Santosh Devi",
        spouse: "Sandeep Sharma",
        sister: ["Himani Sharma", "Sneha Sharma"],
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
      relationsHTML += `<b>${key}:<?b> ${member.relations[key]} <br>`;
    }
  }

  resultDiv.innerHTML = `
  <div class = "result-card">
  <h3>${member.name}</h3>
  ${member.father ? `<b>Father:</b> ${member.father}<br>` : ""}
  ${member.mother ? `<b>Mother:</b> $ {member.mother}<br>` : ""}
  ${relationsHTML}
  </div>
  `;
}

displayAll();
