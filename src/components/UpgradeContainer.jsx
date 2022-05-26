import Upgrade from "./Upgrade";

const UpgradeContainer = (props) => {
    let upgrades = props.upgrades.map((upgrade, index) => {
        return (
            <Upgrade upgrade={upgrade}
            setIdleBones={props.setIdleBones}
            setBones={props.setBones}
            bones={props.bones}
            key={index}
            />
            )
    })
    
    return(
        <div className="upgrade-container">
            {upgrades}
        </div>
    )
}

export default UpgradeContainer;