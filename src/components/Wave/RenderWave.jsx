"use client"
import '../Wave/WaveStyle.css';

export default function RenderWave() {
    return (
        <div>
            <div className="see"></div>
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <path id='sineWave' fill="#0099ff" fillOpacity="0.7" d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 V0 H0" />
                </defs>
                <use className="wave" href="#sineWave" />
                <use className="wave" x="-100%" href="#sineWave" />
                <use className="wave1" href="#sineWave" />
                <use className="wave1" x="-100%" href="#sineWave" />
                <use className="wave2" href="#sineWave" />
                <use className="wave2" x="-100%" href="#sineWave" />
            </svg>
        </div>
    )
}
