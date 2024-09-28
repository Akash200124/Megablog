import React from "react";
import { ColorRing } from "react-loader-spinner";


function Loader() {

    return (
        <>

                <div className="flex justify-center items-center  pt-5">
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#036ffc', '#fc5e03', '#8003fc', '#0373fc', '#fc0331',]}
                />
                </div>

           

                {/* <div className="loader">
                    <div className="spinner"></div>
                    <style jsx>{`
            .loader {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin-top: 40px;
            }
            .spinner {
                border: 4px solid rgba(0, 0, 0, 0.1);
                width: 36px;
                height: 36px;
                border-radius: 50%;
                border-left-color: #09f;
                animation: spin 1s ease infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
                          `} </style>
                </div> */}
         
        </>
    )
}

export default Loader