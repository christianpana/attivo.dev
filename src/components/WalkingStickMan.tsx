import {useEffect, useState} from "react";

type WalkingStickManProps = {
    animate: boolean;
}

export const WalkingStickMan: React.FC<WalkingStickManProps> = ({ animate }) => {
    const [position, setPosition] = useState(0);
    const [direction, setDirection] = useState(1);
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        if (!animate) return;

        const interval = setInterval(() => {
            setFrame((prev) => (prev + 1) % 4);

            setPosition((prev) => {
                const newPos = prev + direction;
                if (newPos >= 60) {
                    setDirection(-1);
                    return 60;
                }
                if (newPos <= 0) {
                    setDirection(1);
                    return 0;
                }
                return newPos;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [direction, animate]);

    // Walking animation frames (facing right)
    const walkFramesRight = [
        [' O ', '/|\\_*', '| \\'],
        [' O ', '/|\\_', '/ |'],
        [' O ', '/|\\_*', '| \\'],
        [' O ', '/|\\_', '/ |'],
    ];

    // Walking animation frames (facing left) - properly mirrored
    const walkFramesLeft = [
        ['   O ', ' _/|\\', '  / |'],
        ['   O ', '*_/|\\', '  | \\'],
        ['   O ', ' _/|\\', '  / |'],
        ['   O ', '*_/|\\', '  | \\'],
    ];

    const displayFrame = direction === 1 ? walkFramesRight[frame] : walkFramesLeft[frame];

    return (
        <pre className="font-mono text-green-500 bg-black p-4 rounded-lg overflow-hidden whitespace-pre">
          {displayFrame.map((line, i) => (
              <div key={i}>
                  {' '.repeat(position)}{line}
              </div>
          ))}
        </pre>
    );
}