<template>
    <div class="chart-container">
      <canvas id="myChartBar"></canvas>
      <canvas id="myChartLine"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    console.log('mounted');

    const ctx = document.getElementById('myChartBar');
    const ctxLine = document.getElementById('myChartLine');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: '# of Votes',
          data: [20, 5, 3, 5, 2, 3, 4],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false, // Set this to false
            suggestedMin: -20,
          },
        }
      }
    });

    new Chart(ctxLine, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: '# of Votes',
          data: [20, 5, 3, 5, 2, 3, 4],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false, // Set this to false
            suggestedMin: -20,
          },
        }
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.chart-container {
  display: inline-flex;
}

#myChartBar, #myChartLine {
  margin: 30px;
  max-width: 45vw;
  max-height: 40vh;
}
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>