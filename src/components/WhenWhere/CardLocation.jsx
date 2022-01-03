import React from 'react'

const CardLocation = ({bg, title, time, date,number,button, place}) => {
    return (
        <>
          <div className="col-md-4 ">
              <div
                className="place img"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <div className="text text-center">
                  <span className="icon flaticon-reception-bell" />
                  <h3>{title}</h3>
                  <p>
                    <span>{date}</span>
                    <br />
                    <span>{time}</span>
                  </p>
                  <p>
                    <span>
                      {place}
                    </span>
                  </p>
                  <p>
                    <a href="/#">{number}</a>
                  </p>
                  <p>
                    <a href="/#" className="btn-custom">
                      {button}
                    </a>
                  </p>
                </div>
              </div>
            </div>  
        </>
    )
}

export default CardLocation
