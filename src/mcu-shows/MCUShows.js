import './MCUShows.css';

// 1b, 5c
function MCUShows({dates}){
    // 1c
    return (
        // 4a
        <div className="MCUShows">
            {/* 3a */}
        <h1 style={{ fontFamily: 'Georgia',  textDecoration: 'underline'}}>Disney+</h1>
        <h2>MCU Show Release Dates</h2>
        {/* 5c */}
        <p>WandaVision: {dates.wandaVision}</p>
        <p>The Falcon and the Winter Soldier: {dates.falconWinter}</p>
        <p>Loki: {dates.loki}</p>
        <p>What If...?: {dates.whatIf}</p>
        <p>Hawkeye: {dates.hawkeye}</p>
        </div>
    );
}

export default MCUShows;