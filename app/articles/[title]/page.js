export default function Showpage(props) {
    return (
        <div>
            <h1>show params dynamicly</h1>
            <h1>{props.params.title}</h1>
        </div>
    )
}