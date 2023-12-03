const chart = new Chart(document.getElementById("myChart"), {
  type: "line",
  options: {
    scales: {
      x: {
        ticks: { color: "#cdd6f4" },
        grid: { color: "#313244" },
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        ticks: { color: "#cdd6f4" },
        grid: { color: "#313244" },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        ticks: { color: "#cdd6f4" },
        grid: { color: "#313244", drawOnChartArea: false },
      },
    },
    plugins: {
      legend: {
        labels: { color: "#cdd6f4" },
      },
      title: {
        display: true,
        text: "lol gotem",
        color: "#cdd6f4",
      },
    },
  },
  data: {
    datasets: [
      {
        label: "Temperature",
        yAxisID: "y1",
        data: [],
        fill: true,
        borderColor: "rgb(243, 139, 168)",
        backgroundColor: "rgba(243, 139, 168, 0.05)",
      },
      {
        label: "Power",
        yAxisID: "y",
        data: [],
        fill: true,
        borderColor: "rgb(166, 227, 161)",
        backgroundColor: "rgba(166, 227, 161, 0.05)",
      },
    ],
  },
});
