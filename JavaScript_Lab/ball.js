var Player = (function {
    function Player(x, y) {
        this.position = new Vector2(x, y);
        this.velocity = 2;
        this.width = 40;
        this.height = 40;
        this.animation = new Animation(
            this.width,
            this.height,
            1,
            'ball.png',
            1,
            0,
            0)
        this.boundingBox = new Rectangle(
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
});
