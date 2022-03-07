import React from "react";

import { Trans } from "react-i18next"

class ErrorPage extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row min-vh-100">
                    <div className="d-flex justify-content-center align-items-center">
                        <h1 className="text-white"><Trans i18nKey="error.pagina"></Trans></h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorPage;