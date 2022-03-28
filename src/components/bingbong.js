import React from "react";
import { Stage, Layer, Circle } from 'react-konva'

export default function Balls(numBalls) {
    const balls = new Array(numBalls)

    function fillArray() {
        for (let i = 0; i < numBalls; i++) {
            balls.push(<Circle key={i} x={i} y={0} radius={20} color="red" />)
        }
    }

    return (
        <div>
            {fillArray()}
            <Stage>
                <Layer>
                    {balls}
                </Layer>
            </Stage>
        </div>
    )
}