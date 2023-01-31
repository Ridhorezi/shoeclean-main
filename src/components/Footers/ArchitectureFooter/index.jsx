
const Footer = ({ hideTop }) => {
  return (
    <footer className="sub-bg">
      <div className={`container ${hideTop ? '':'pt-10'}`}>
        <div className={`sub-f ${hideTop ? '':'mt-10'}`}>
          <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-9">
              <div className="copyrights d-flex justify-content-end">
                <p>
                  © 2023 ShoeClean™ All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer