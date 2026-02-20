import Countdown from "../Countdown"
import Stats from "../Stats"
import History from "../History"

export default function Dashboard(props) {
    return (
        <section id="dashboard">
            <Stats {...props} />
            <Countdown {...props} />
            <History {...props} />
        </section>
    )
}
