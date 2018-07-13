class DancingBarsPainter {
    // Typed OM
    static get inputProperties() {
        return ['--line-color'];
    }

    paint(ctx, geom, props) {
        const lineWidth = geom.width * 0.01;

        ctx.lineWidth = lineWidth;
        // ctx.strokeStyle = 'green';
        ctx.strokeStyle = props.get('--line-color');


        let points = [
            geom.width * 0.1,
            geom.width * 0.1,
            geom.width * 0.4,
            geom.width * 0.4
        ]

        ctx.rect(...points);

        // let shiftedPoints = points.map(p => p + geom.width * 0.1)
        //
        // ctx.rect(...shiftedPoints);

        ctx.stroke();
}

registerPaint('necker-cube', DancingBarsPainter);
