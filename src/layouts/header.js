

function Header({ title }) {
    return (
        <>
        <div className="container-fluid">
          <div className="desktop-header">
              <div className="card card-block topnav-left">
                  <div className="card-body d-flex align-items-center">
                      <div className="d-flex justify-content-between">
                          { !(/list/ig).test(title) ?
                          <button onClick={()=>{
                              window.history.go(-1);
                          }} className="btn btn-default"> <strong>&laquo;&laquo;&laquo; </strong></button>
                         : ''}
                          <h4 className="text-capitalize"> {title} </h4>
                      </div>
                  </div>
              </div>
          </div>        
        </div>
        </>
    )
}

export default Header;
