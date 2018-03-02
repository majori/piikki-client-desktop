<script>
  import { Line, mixins } from 'vue-chartjs';

  export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    mounted() {
      this.renderChart(
        this.chartData,
        {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                tooltipFormat: 'D.M. hh:mm:ss',
              },
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date',
              },
              ticks: {
                marjor: {
                  fontStyle: 'bold',
                  fontColor: '#4b29c5',
                },
              },
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Saldo',
              },
            }],
          },
        },
      );
    },
  };
</script>
