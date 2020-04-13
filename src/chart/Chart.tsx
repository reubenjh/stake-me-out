import React from 'react';
import chartjs from 'chart.js';
import './Chart.css';

export default function Chart() {

    document.addEventListener("DOMContentLoaded", (): void => {
        // Get canvas element
        let canvas: HTMLCanvasElement = document.getElementById('chart') as HTMLCanvasElement;
        
        if (canvas) {
            // Get canvas context
            var context: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
            // Create chart
            new chartjs.Chart(context, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    });

    return (
        <div data-testid="chart" className="chart">
            <canvas id="chart"></canvas>
        </div>
    );
}