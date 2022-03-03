import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


const ConversionRate = () => {
    const [year, setYear] = useState({
        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        }, {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
        }, {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
        }],
        options: {
            chart: {
                height: 350,
                type: 'radar',
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                }
            },
            title: {
                text: 'Current Year',
                
            },
            stroke: {
                width: 2
            },
            fill: {
                opacity: 0.1
            },
            markers: {
                size: 0
            },
            xaxis: {
                categories: [  '2016', '2017', '2018', '2019', '2020', '2021']
            }
        },



    })
    const [rate, setRate] = useState({
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,

            },
            colors: ['#add8e6'],


            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,

                }
            },
            dataLabels: {
                enabled: false,

            },
            xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                    'United States', 'China', 'Germany'
                ],

            }
        },


    })
    return (
        <div>
            <div className='row'>
                <div  className='col-12 col-lg-7 col-md-7'>
                    <div style={{ backgroundColor: 'white', height:'380px' }} className="p-1 ">
                        <h6 className='text-start m-2 fw-bold '>Current Country</h6>
                        <div className='mt-2' id="chart">
                            <ReactApexChart options={rate.options} series={rate.series} type="bar" height={250} />
                        </div>
                    </div>

                </div>
                <div className='col-12 col-lg-5 col-md-5'>
                    <div style={{ backgroundColor: 'white' }} className="p-2 ">
                        <div id="chart">
                            <div id="chart">
                                <ReactApexChart options={year.options} series={year.series} type="radar" height={350} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ConversionRate;