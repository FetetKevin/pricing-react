export default function Header(props) {
    return (
        <header>
            <h1>Our Pricing</h1>
            <div className="btn">
                <label>Annually</label>
                <div className={props.toggled ? 'slider' : 'slider toggled'} onClick={props.toggle}>
                    <div className="circle"></div>
                </div>
                <label>Monthly</label>
            </div>
        </header>
    );
}
