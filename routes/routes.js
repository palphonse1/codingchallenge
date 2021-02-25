const router = app => {

    app.use(function(error, req, res, next) {
        if (error instanceof SyntaxError &&
            error.status >= 400 && error.status < 500 &&
            error.message.indexOf('JSON') !== -1) {
            res.status(400).json({
                error: "Could not decode request: JSON parsing failed"
            });
        } else {
            next();
        }
    });

    app.post("/", (req, res, next) => {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(400).json({
                error: "No payload data"
            });
        }
        var payload = req.body.payload;
        payload = payload.filter(function(show) {
            return (show.drm === true && show.episodeCount > 0);
        });

        var response = [];

        for (var i = 0; i < payload.length; i++) {
            tmp = {
                'image': payload[i].image.showImage,
                'slug': payload[i].slug,
                'title': payload[i].title
            };
            response.push(tmp);
        }
        res.json({
            response: response
        });
    });


}
module.exports = router;