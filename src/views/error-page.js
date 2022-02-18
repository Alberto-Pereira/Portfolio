import React from "react";

class ErrorPage extends React.Component(){
    render(){
        return(
            <div className="container-fluid custom-bg-color min">
                <div className="row align-items-center min-vh-100">
                    <div className="col custom-portfolio-column-margin">
                        <h1>Essa página não existe!</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorPage;