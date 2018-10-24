class LoadingCirclePainter {
    // Typed OM
    static get inputProperties() {
        return [
            '--percentage', // Expected to be between 0 and 100
            '--custom-color',
            '--line-width',
        ];
    }

    paint(ctx, geom, props) {
      const lineWidth = geom.width * 0.01;
      let x = geom.width * 0.5;
      let y = geom.height * 0.5;
      ctx.strokeStyle = props.get('--custom-color');
      ctx.lineWidth = props.get('--line-width');
      const percentage = props.get('--percentage') / 50;
      
      ctx.beginPath();
      ctx.arc(x, y, Math.min(geom.width, geom.height) * 0.3, 0, percentage*Math.PI);
      ctx.stroke();
    }
}

registerPaint('loading-circle', LoadingCirclePainter);