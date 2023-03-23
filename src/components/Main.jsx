export default function Main(props) {
    const toggled = props.toggled;
    const data = props.data;

    return (
        <main>
            <div className="box sides">
                <h2>Basic</h2>
                <h3>
                    <span>$</span>
                    {toggled ? (data[0].basic * 10).toFixed(2) : data[0].basic}
                </h3>
                <p className="first">500 GB Storage</p>
                <p>2 Users Allowed</p>
                <p className="last">Send up to 3 GB</p>
                <button>learn more</button>
            </div>
            <div className="box middle">
                <h2>Professional</h2>
                <h3>
                    <span>$</span>
                    {toggled
                        ? (data[0].professional * 10).toFixed(2)
                        : data[0].professional}
                </h3>
                <p className="first">1 TB Storage</p>
                <p>5 Users Allowed</p>
                <p className="last">Send up to 10 GB</p>
                <button>learn more</button>
            </div>
            <div className="box sides">
                <h2>Master</h2>
                <h3>
                    <span>$</span>
                    {toggled
                        ? (data[0].master * 10).toFixed(2)
                        : data[0].master}
                </h3>
                <p className="first">2 TB Storage</p>
                <p>10 Users Allowed</p>
                <p className="last">Send up to 20 GB</p>
                <button>learn more</button>
            </div>
        </main>
    );
}
