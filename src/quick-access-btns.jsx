
function QuickAccessBtns(props){
    
    return (
        <div className="quick-access-item">
            <div className="quick-access-icon">{props.icon}</div>
            <div className="quick-access-Name">{props.desc}</div>
        </div>

    )

}

export default QuickAccessBtns