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
            <div className="grid grid-cols-1 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-2">
            {Object.entries({
                Days: time / DAY,
                Hours: (time / HOUR) % 24,
                Mins: (time / MINUTE) % 60,
                // Seconds: (time / SECOND) % 60
            }).map(([label, value]) => (
                <Card key={value}>
                  <div className="p-2">
                    <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
                    <span>{label}</span>
                  </div>
                </Card>
            ))}
            </div>
        </div>
    );
};
