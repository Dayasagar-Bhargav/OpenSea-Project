import React from 'react'

function Secondnav() {
    const [active, setActive] = React.useState("1");
    return (
        <>
            <div className="secondnav">
                <div className={ active === "1" ? "active" : "secondnavItems" } onClick={()=>setActive("1")}>All</div>
                <div className={ active === "2" ? "active" : "secondnavItems" } onClick={()=>setActive("2")}>Art</div>
                <div className={ active === "3" ? "active" : "secondnavItems" } onClick={()=>setActive("3")}>Gaming</div>
                <div className={ active === "4" ? "active" : "secondnavItems" } onClick={()=>setActive("4")}>Memberships</div>
                <div className={ active === "5" ? "active" : "secondnavItems" } onClick={()=>setActive("5")}>PFPs</div>
                <div className={ active === "6" ? "active" : "secondnavItems" } onClick={()=>setActive("6")}>Photography</div>
            </div>
        </>
    )
}

export default Secondnav