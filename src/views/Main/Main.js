import React from 'react';
import './Main.scss';
import Chart from "react-apexcharts";
import ErrorImg from './../../assets/images/error.png';
import Avatar from './../../assets/images/avatar.png';

const Main = () => {

  const [chart, setChart] = React.useState({
    options: {
      chart: {
        type: 'line',
        width: '100%',
        // height: '100%',
        toolbar: {
          show: false
        },

      },
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
      },


    },
    series: [
      {
        name: "score-trend",
        data: [36, 37.4, 36.3, 35.9, 37, 36.5, 35.4, 37.1, 36.9, 35.8, 36, 37.4, 36.3, 35.9, 37, 36.5, 35.4, 37.1, 36.9, 35.8, 36, 37.4, 36.3, 35.9, 37, 36.5, 35.4, 37.1, 36.9, 35.8]
      }
    ],
  })

  const [errorMsg, setErrorMsg] = React.useState({
    value: "Hello"
  })

  const [msg, setMsg] = React.useState({
    value: "Employee Entry Admitted."
  })

  const [entryText, setEntryText] = React.useState({
    value: "Accept Entry"
  })

  const [isWaiting, setIsWaiting] = React.useState({
    value: false
  })

  const scan = {
    score: 0.0,
    wearingGear: false,
    isEmployee: false
  }
  const place = {
    maxCapacity: 35,
    maxScore: 0.0,
    employeeCount: 0,
    occupancyCount: 0
  }
  const scoreTrend = [];
  return (
    <div className="Main">
      <div className="info">
        <div className="data">
          <div className="key">
            <p>Occupancy Count: </p>
            <p>Max Occupancy: </p>
            <p>Employee Count: </p>
          </div>
          <div className="value">
            <p>{place.occupancyCount}</p>
            <p>{place.maxCapacity}</p>
            <p>{place.employeeCount}</p>
          </div>
        </div>
        <div className="chart">
          <p className="heading">Score Trend</p>
          <Chart
            options={chart.options}
            series={chart.series}
            type="line"
            height="200"
          />
        </div>
      </div>
      <div className="action">
        {
          errorMsg.value ? (
            <div className="error">
              <div>
                <div>
                  <img src={ErrorImg} alt="" />
                </div>
                <p>
                  {errorMsg.value}
                </p>
              </div>
            </div>
          ) : null

        }
        <div className="avatar">
          <div className="img">
            <div className="img-cont">
              <img src={Avatar} alt="" />
            </div>
          </div>
        </div>
        <div className="control">

          <div className="control-center">
            {
              isWaiting.value ? (
                <div className="loading">
                  <p className="message">
                    {msg.value}
                  </p>
                  <p className="waiting">
                    Awaiting Next Scan.
                  </p>
                </div>
              ) : (
                  <div className="form">
                    <div className="checks">
                      <div className="checks-cont">

                        <div className="key">
                          <p>Score: </p>
                          <p>Wearing Gear: </p>
                          <p>Is Employee: </p>
                        </div>
                        <div className="value">
                          <p>{scan.score}</p>
                          <div className="checkbox">
                            <input type="checkbox" id="wearingGear" />
                            <label htmlFor="wearingGear">
                              <svg viewBox="0,0,50,50">
                                <path d="M5 30 L 20 45 L 45 5">
                                </path>
                              </svg>
                            </label>
                          </div>
                          <div className="checkbox">
                            <input type="checkbox" id="isEmployee" />
                            <label htmlFor="isEmployee">
                              <svg viewBox="0,0,50,50">
                                <path d="M5 30 L 20 45 L 45 5">
                                </path>
                              </svg>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="buttons">
                      <div>
                        <button>{entryText.value}</button>
                      </div>
                      <div>
                        <button>Admit Exit</button>
                      </div>
                      <div>
                        <button>Discard Scan</button>
                      </div>
                    </div>
                  </div>
                )
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main
