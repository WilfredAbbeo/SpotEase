// ===== Demo BUSY LEVEL heatmap style for Starbucks (static demo only) =====

// Demo data: time slots & busy levels (made-up)
const busyGelman = [
  { time: "8 AM",  value: 20 },
  { time: "10 AM", value: 55 },
  { time: "12 PM", value: 80 },
  { time: "3 PM",  value: 60 },
  { time: "6 PM",  value: 30 },
  { time: "9 PM",  value: 10 }
];

const busyHospital = [
  { time: "8 AM",  value: 65 },
  { time: "10 AM", value: 90 },
  { time: "12 PM", value: 75 },
  { time: "3 PM",  value: 85 },
  { time: "6 PM",  value: 50 },
  { time: "9 PM",  value: 25 }
];

// Convert to chart labels & values
const gelmanLabels = busyGelman.map(d => d.time);
const gelmanValues = busyGelman.map(d => d.value);

const hospitalLabels = busyHospital.map(d => d.time);
const hospitalValues = busyHospital.map(d => d.value);

// Heatmap-like styling plugin (block colors by busy intensity)
const heatmapPlugin = {
  id: 'heatmapLook',
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    const bars = chart.getDatasetMeta(0).data;
    bars.forEach(bar => {
      const intensity = bar.height; // busy level expressed as bar height
      let alpha = Math.min(Math.abs(intensity) / 100, 1);
      ctx.fillStyle = `rgba(255, 99, 132, ${alpha})`; // looks like heatmap gradient
    });
  }
};

// Create Gelman demo chart
new Chart(document.getElementById('gelmanHeatmapDemo'), {
  type: 'bar',
  data: {
    labels: gelmanLabels,
    datasets: [{
      label: "Busy Level (0–100+)",
      data: gelmanValues
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { title: { display: true, text: "Time Slot" }},
      y: { title: { display: true, text: "Busy Intensity" }}
    }
  },
  plugins: [heatmapPlugin]
});

// Create Hospital demo chart
new Chart(document.getElementById('hospitalHeatmapDemo'), {
  type: 'bar',
  data: {
    labels: hospitalLabels,
    datasets: [{
      label: "Busy Level (0–100+)",
      data: hospitalValues
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { title: { display: true, text: "Time Slot" }},
      y: { title: { display: true, text: "Busy Intensity" }}
    }
  },
  plugins: [heatmapPlugin]
});
