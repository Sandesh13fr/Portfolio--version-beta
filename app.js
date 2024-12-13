new Chart($("#programmingChart"), {
    type: 'polarArea',
    data: {
      labels: ["HTML", "CSS3", "Javascript","Tailwind CSS", 
          "ReactJS", "Npm"],
      datasets: [{
        data: [100, 95, 95,89, 90, 70],
        backgroundColor: ["#FF6384", 
            "#36A2EB", "#FFCE56", 
            "#4CAF50", "#9C27B0","#abcde1"],
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'techstack'
      },
      scales: {
        r: {
            grid: {
                color: 'rgba(225, 0, 0, 0.8)', // Darker grid lines
                lineWidth: 1 // Increase line thickness
            }
        }
    }
    }
  });
  document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const client = "gmail";

    // Construct the email URL based on the client
    const subject = encodeURIComponent("Message from " + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    let mailtoLink;

    if (client === "gmail") {
      mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=sandeshdawkhar13@gmail.com&su=${subject}&body=${body}`;
    } else if (client === "yahoo") {
      mailtoLink = `https://compose.mail.yahoo.com/?to=sandeshdawkhar13@gmail.com&subject=${subject}&body=${body}`;
    } else if (client === "outlook") {
      mailtoLink = `https://outlook.live.com/owa/?path=/mail/action/compose&to=sandeshdawkhar13@gmail.com&subject=${subject}&body=${body}`;
    }

    // Open the selected email client
    window.open(mailtoLink, "_blank");
  });