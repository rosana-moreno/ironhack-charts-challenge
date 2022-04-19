(function() {
    if (!Chart) {
        return;
    }
    
    Chart.defaults.color = '#fff'
    Chart.defaults.borderColor = '#444'

    fetch('https://multiapi-app.herokuapp.com/foods')
        .then(response => response.json())
        .then(foods => printFoodsCharts(foods))

    function printFoodsCharts(foods) {
        printCaloriesChart(foods, 6)
        printProteinChart(foods, 6)
        printFatChart(foods, 6)
        printCalciumChart(foods, 6)
        printMixedChart(foods, 6)   
    }

    function printCaloriesChart(foods, numberOfItems = 10) {
        const foodItems = foods.slice(0, numberOfItems);
        const foodLabels = foodItems.map(food => food.name);
        const foodKcals = foodItems.map(food => food.kcal);

        const data = {
            labels: foodLabels,
            datasets: [{
                data: foodKcals,
                label: 'kilocalorías',
                borderWidth: 2,
                borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
                backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
            }]
        }

        let options = {
            plugins: {
                legend: {
                    display: false
                }
            }
        }

        new Chart('chart1', { type: 'bar', data, options })
    }

    function printProteinChart(foods, numberOfItems = 10) {
        const foodItems = foods.slice(0, numberOfItems);
        const foodLabels = foodItems.map(food => food.name);
        const foodProteins = foodItems.map(food => food.protein);

        const data = {
            labels: foodLabels,
            datasets: [{
                data: foodProteins,
                label: 'proteínas',
                borderWidth: 2,
                borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
                backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
            }]
        }

        const options = {
            plugins: {
                legend: {
                    position: 'left'
                }
            }
        }

        new Chart('chart2', { type: 'doughnut', data, options })
    }

    function printFatChart(foods, numberOfItems = 10) {
        const foodItems = foods.slice(0, numberOfItems);
        const foodLabels = foodItems.map(food => food.name);
        const foodFats = foodItems.map(food => food.fat);

        const data = {
            labels: foodLabels,
            datasets: [{
                data: foodFats,
                label: 'grasas',
                borderWidth: 2,
                borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
                backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
            }]
        }

        const options = {
            plugins: {
                legend: {
                    position: 'left'
                }
            }
        }

        new Chart('chart3', { type: 'doughnut', data, options })
    }

    function printCalciumChart(foods, numberOfItems = 10) {
        const foodItems = foods.slice(0, numberOfItems);
        const foodLabels = foodItems.map(food => food.name);
        const foodCalcium = foodItems.map(food => food.calcium);

        const data = {
            labels: foodLabels,
            datasets: [{
                data: foodCalcium,
                label: 'calcio',
                borderWidth: 2,
                borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
                backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
            }]
        }

        const options = {
            plugins: {
                legend: {
                    position: 'left'
                }
            }
        }

        new Chart('chart4', { type: 'doughnut', data, options })
    }

    function printMixedChart(foods, numberOfItems = 10) {
        const foodItems = foods.slice(0, numberOfItems);
        const foodLabels = foodItems.map(food => food.name);
        const foodKcals = foodItems.map(food => food.kcal);
        const foodProteins = foodItems.map(food => food.protein);

        const data = {
            labels: foodLabels,
            datasets: [

                {
                    data: foodKcals,
                    label: 'kilocalorías',
                    backgroundColor: 'rgba(33, 192, 215, .4)',
                },
                {
                    data: foodProteins,
                    label: 'proteínas',
                    backgroundColor: 'rgba(217, 158, 43, .4)',
                },
            ]
        }

        const options = {
            plugins: {
                legend: {
                    display: false
                }
            }
        }

        new Chart('chart5', { type: 'bar', data, options })
    }
})();
