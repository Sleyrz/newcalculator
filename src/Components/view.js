import '../App.css';
function Show(props) {
    return (
        <div className="title">
            <h1 className="neon">
                {props.value} kalkulator napisany w react.js
            </h1>
        </div>
    );
}
export default Show;