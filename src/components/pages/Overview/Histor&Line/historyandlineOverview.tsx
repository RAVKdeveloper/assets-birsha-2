import React from "react"
import LineBodyOverview from "./Line"
import HistoryOrdersOverview from "./History/history"


const HistoryAndLineOverviewContainer: React.FC = () => {

    return (

        <section style={{ width: '100%' }}>
            <LineBodyOverview/>
            <HistoryOrdersOverview/>
        </section>
    )
}

export default HistoryAndLineOverviewContainer