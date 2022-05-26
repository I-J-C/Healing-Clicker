

const Upgrade = (props) => {
    return(
        <div className="upgrade" onClick={() => {props.setIdleBones(old => old + props.increase)}}>
            {/* add onclick for upgrade */}
            Upgrade
            {/* Upgrade name here */}
            {props.name}
            <div className="upgrade-image">image here</div>
            {/* <div className="cost">cost here{props.cost}</div> */}
        </div>
    )
}

export default Upgrade;