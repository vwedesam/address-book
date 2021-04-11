


function NotFound() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="row no-gutters height-self-center">
                    <div className="col-sm-12 text-center align-self-center">
                        <div className="iq-error position-relative">
                            <img src="../assets/images/error/404.png" className="img-fluid iq-error-img" alt="" />
                            <h2 className="mb-0 mt-4">Oops! This Page is Not Found.</h2>
                            <p>The requested page dose not exist.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
