

const Upgrade = (props) => {
    const upgrade = props.upgrade;
    return(
        <div className="upgrade" onClick={() => {
                if (upgrade.currentCost <= props.bones){
                    const purchase = upgrade.currentCost;
                    props.setBones(old => old - purchase)
                    props.setIdleBones(old => old + upgrade.baseProduction)
                    upgrade.incrementAmount();
                    upgrade.setCurrentCost();
                }
            }}>
            <div>{upgrade.name}</div>
            {/* <div className="upgrade-image">image here</div> */}
            <img className="upgrade-image" src={upgrade.imageURL} alt={upgrade.name} />
            <div className="cost">cost: {upgrade.currentCost} bones</div>
        </div>
    )
}

export default Upgrade;