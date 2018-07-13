class DancingBarsPainter {
    // Typed OM
    static get inputProperties() {
        return ['--bar-color', '--side-length'];
    }

    paint(ctx, geom, props) {
        const lineWidth = geom.width * 0.01;

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = props.get('--box-color');
        let sideLength = props.get('--side-length');

        console.log(props.get('--side-length'))

        let points = [
            geom.width * 0.1,
            geom.width * 0.1,
            geom.width * 0.5,
            geom.width * 0.5,
        ]

        ctx.rect(...points)

        let shiftedPoints = []

        for (let i = 0; i < 4; ++i) {
            let newPoint = points[i] + (sideLength * 10)
            shiftedPoints.push(newPoint)
        }

        ctx.rect(...shiftedPoints)

        ctx.stroke()
    }
}

registerPaint('dancing-bars', DancingBarsPainter);
