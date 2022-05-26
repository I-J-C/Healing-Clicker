import Upgrade from "./Upgrade";

const UpgradeContainer = (props) => {
    // let upgrades = props.data.map(upgrade=> {
    //     return (
    //         <Upgrade name={upgrade.name} cost={upgrade.cost} src={upgrade.image} />
    //         )
    // })
    return(
        <div className="upgrade-container">
            UpgradeContainer
            <Upgrade name={"bone-shovel"} 
                // cost={1} 
                src={""} 
                setIdleBones = {props.setIdleBones}
                increase = {2}     />
            {/* {upgrades} */}
        </div>
    )
}

export default UpgradeContainer;