class NeckerCubePainter {
    // Typed OM
    static get inputProperties() {
        return [
            '--side-length',
            '--custom-color',
        ];
    }

    paint(ctx, geom, props) {
        const lineWidth = geom.width * 0.01;

        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = props.get('--custom-color');
        let sideLength = props.get('--side-length');

        let x = geom.width * 0.1
        let y = x
        let length = geom.width * 0.35
        let points = [
            x,
            y,
            length,
            length
        ]

        ctx.rect(...points)

        let shiftedPoints = points.map(oldPoint => oldPoint + sideLength * 10)
        ctx.rect(...shiftedPoints)
        let x_prime = shiftedPoints[0]
        let y_prime = shiftedPoints[1]
        let length_prime = shiftedPoints[2]

        // Top left stroke
        ctx.moveTo(x, y);
        ctx.lineTo(x_prime, y_prime);

        // Top right stroke
        ctx.moveTo(x + length, y);
        ctx.lineTo(x_prime + length_prime, y_prime);

        // Bottom left stroke
        ctx.moveTo(x, y + length);
        ctx.lineTo(x_prime, y_prime + length_prime);

        // Bottom right stroke
        ctx.moveTo(x + length, y + length);
        ctx.lineTo(x_prime + length_prime, y_prime + length_prime);
        ctx.stroke()
    }
}

registerPaint('necker-cube', NeckerCubePainter);
