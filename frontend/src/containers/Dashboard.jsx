import React, { useState } from "react";
import DashNav from "../components/DashNav";
import AddItem from "../components/AddItem";
const Dashboard = () => {

    const [dashboard, setDashboard] = useState('');
   
    return(
        <>
            <DashNav setDashboard={setDashboard}/>
            <>
            {/* {page === 'products' ? (
                <Products/>
            ) : page === 'orders' ? (
                <div>
                <Register/>
                </div>
            ) : page === 'users' ? (
                <SignIn/>
            ) :  */}
            {dashboard === 'add' ? (
                <AddItem setDashobard={setDashboard}/>
            ) : (
                    <div>
                        Page Not Found
                    </div>
                )}
            </>
        </>
    )
}

export default Dashboard