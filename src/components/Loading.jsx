import React, { useEffect, useState } from "react";
import "../style/loading.scss";

const Loading = () => {
    return (
        <div className="loading">
            <div className="block white"></div>
            <div className="block pointC"></div>
            <div className="block mainC"></div>
            <div className="block subC"></div>
        </div>
    );
};

export default Loading;