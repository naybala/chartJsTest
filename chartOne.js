const chart = document.getElementById("myChart");

const data01 = {
  labels: ["Yangon", "Mandalay", "NayPyiTaw", "Mawlamyine", "Bago", "Pathein"],
  datasets: [
    {
      label: "Myanmar",
      data: [4477638, 1208099, 925000, 1438861, 1044376, 1237089],
      backgroundColor: ["red", "green", "blue", "yellow", "pink", "lime"],
    },
  ],
};
const config01 = {
  type: "polarArea",
  data: data01,
  options: {
    plugins: {
      title: {
        display: true,
        text: "Hello",
        color: "red",
      },
      tooltip: {
        enabled: true,
      },
      legend: {
        display: true,
        position: "right",
      },
    },
  },
};

const chart01 = new Chart(chart, config01);
