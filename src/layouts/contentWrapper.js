

function ContentWrapper({ children }) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}


export default ContentWrapper;
