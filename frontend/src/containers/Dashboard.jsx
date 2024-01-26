import React, { useState } from "react";
import DashNav from "../components/DashNav";
import AddItem from "../components/AddItem";
import Products from "../components/Products";
const Dashboard = () => {

    const [dashboard, setDashboard] = useState('');
    const [file, setFile] = useState(null);

    return(
        <>
            <DashNav setDashboard={setDashboard}/>
            <>
            { dashboard === 'products' ? (
                <Products file={file} setFile={setFile}/>
            ) : dashboard === 'add' ? (
                <div>
                <AddItem setDashobard={setDashboard} file={file} setFile={setFile} />
                </div>
            ) : 
            (
                    <div>
                        Page Not Found
                    </div>
                )}
            </>
        </>
    )
}

export default Dashboard