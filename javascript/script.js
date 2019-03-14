/*Donut Chart*/
	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: ["% Brandstof in de tank.", "% Brandstof verbruikt."],
			datasets: [{
				label: '# of Votes',
				data: [70, 30],			
				backgroundColor: [
					'rgba(0, 65, 106, 1.0)',
					'rgba(255, 255, 255, 0.4)',
				],
				borderColor: [
					'rgba(8,69,126,1)',
					'rgba(8,69,126,1)',
				],
				borderWidth: 3
			}]
		},   
	});
/*Bar Chart*/
	var ctx = document.getElementById("myChart2");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"],
			datasets: [{
				label: 'Aantal KM afgelegd.',
				data: [120000, 130000, 130000, 135000, 136000, 137000, 56000],
				backgroundColor: [
					'rgba(0, 65, 106, 1.0)',
					'rgba(0, 65, 106, 1.0)',
					'rgba(0, 65, 106, 1.0)',
					'rgba(0, 65, 106, 1.0)',
					'rgba(0, 65, 106, 1.0)',
					'rgba(0, 65, 106, 1.0)',
					'rgba(0, 65, 106, 0.6)'
				],
				borderColor: [
					'rgba(8,69,126,1)',
					'rgba(8,69,126,1)',
					'rgba(8,69,126,1)',
					'rgba(8,69,126,1)',
					'rgba(8,69,126,1)',
					'rgba(8,69,126,1)',
					'rgba(8,69,126,1)'
				],
				borderWidth: 3
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
/*Line Chart*/
	var ctx = document.getElementById("myChart3");
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
			datasets: [{
				label: 'In Procenten',
				data: [40, 38, 95, 90, 80, 40],
				backgroundColor: [
					'rgba(0, 65, 106, 0.8)',
				],
				borderColor: [
					'rgba(0,0,0,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 3
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});