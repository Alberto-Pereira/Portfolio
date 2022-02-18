import React from "react";

class ErrorPage extends React.Component{
    render(){
        return(
            <div className="container-fluid custom-bg-color min">
                <div className="row min-vh-100">
                    <div className="d-flex justify-content-center align-items-center">
                        <h1 className="text-white">Essa página não existe!</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorPage;