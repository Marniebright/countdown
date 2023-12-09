import { useState, useEffect, useMemo} from "react";
import { Card } from "../components/card";
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = ({ deadline = new Date().toString() }) => {
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = useState(parsedDeadline - Date.now());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000,
        );

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center">
            <div className="flex gap-2 sm:grid-cols-3">
            {Object.entries({
                Days: time / DAY,
                Hours: (time / HOUR) % 24,
                Mins: (time / MINUTE) % 60,
                // Secs: (time / SECOND) % 60
            }).map(([label, value]) => (
                <Card key={value}>
                  <div className="p-2 sm:text-1xl md:text-2xl">
                    <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
                    <span>{label}</span>
                  </div>
                </Card>
            ))}
            </div>
        </div>
    );
};
