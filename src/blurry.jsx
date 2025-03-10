import { useEffect, useState } from "react";
import "./blurry.css";

const Blurry = () => {
    const [load, setLoad] = useState(0);

    function scale(num, in_min, in_max, out_min, out_max) {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    useEffect(() => {
        let interval = setInterval(() => {
            setLoad((prevLoad) => {
                if (prevLoad >= 99) {
                    clearInterval(interval);
                    return 100;
                }
                return prevLoad + 1;
            });
        }, 30);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <>
            <section className="bg" style={{ filter: `blur(${scale(load, 0, 100, 30, 0)}px)` }}></section>
            <div className="loading-text" style={{ opacity: scale(load, 0, 100, 1, 0) }}>
                {load}%
            </div>
        </>
    );
};

export default Blurry;
