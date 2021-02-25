const chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../index'),
    should = chai.should();

chai.use(chaiHttp);

describe('/POST API test', function() {

    it('Test the call without a payload', function(done) {
        chai.request(server).post('/').send({}).end((err, res) => {
            should.not.exist(err);
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            res.body.should.have.property('error').eql('No payload data');
            done();
        })
    });

    it('Test the call with a valid JSON payload', function(done) {
        var payload = [];
        firstShow = {
            "country": "UK",
            "description": "What's life like when you have enough children to field your own football team?",
            "drm": true,
            "episodeCount": 3,
            "genre": "Reality",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
            },
            "language": "English",
            "nextEpisode": null,
            "primaryColour": "#ff7800",
            "seasons": [{
                "slug": "show/16kidsandcounting/season/1"
            }],
            "slug": "show/16kidsandcounting",
            "title": "16 Kids and Counting",
            "tvChannel": "GEM"
        };

        secondShow = {
            "country": "USA",
            "description": "Another year of bachelorhood brought many new adventures for roommates Walden Schmidt and Alan Harper. After his girlfriend turned down his marriage proposal, Walden was thrown back into the dating world in a serious way. The guys may have thought things were going to slow down once Jake got transferred to Japan, but they're about to be proven wrong when a niece of Alan's, who shares more than a few characteristics with her father, shows up at the beach house.",
            "drm": true,
            "episodeCount": 0,
            "genre": "Comedy",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/TwoandahHalfMen_V2.jpg"
            },
            "language": "English",
            "nextEpisode": {
                "channel": null,
                "channelLogo": "http://mybeautifulcatchupservice.com/img/player/Ch9_new_logo.gif",
                "date": null,
                "html": "Next episode airs: <span> 10:00pm Monday on<br><span class=\"visit\">Visit the Official Website</span></span>",
                "url": "http://channelnine.ninemsn.com.au/twoandahalfmen/"
            },
            "primaryColour": "#ff7800",
            "seasons": null,
            "slug": "show/twoandahalfmen",
            "title": "Two and a Half Men",
            "tvChannel": "Channel 9"
        };

        thirdShow = {
            "country": "AUS",
            "description": "Join the most dynamic TV judging panel Australia has ever seen as they uncover the next breed of superstars every Sunday night. UK comedy royalty Dawn French, international pop superstar Geri Halliwell, (in) famous Aussie straight-talking radio jock Kyle Sandilands, and chart -topping former AGT alumni Timomatic.",
            "drm": false,
            "episodeCount": 5,
            "genre": "Reality",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/AGT.jpg"
            },
            "language": "English",
            "nextEpisode": {
                "channel": null,
                "channelLogo": "http://mybeautifulcatchupservice.com/img/player/Ch9_new_logo.gif",
                "date": null,
                "html": "Next episode airs:<span>6:30pm Sunday on<br><span class=\"visit\">Visit the Official Website</span></span>",
                "url": "http://agt.ninemsn.com.au"
            },
            "primaryColour": "#df0000",
            "seasons": null,
            "slug": "show/australiasgottalent",
            "title": "Australia's Got Talent",
            "tvChannel": "Channel 9"
        };

        payload.push(firstShow);
        payload.push(secondShow);
        payload.push(thirdShow);

        chai.request(server).post('/').send({
            payload
        }).end((err, res) => {
            should.not.exist(err);
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('response');
            done();
        })
    });


    it('Test the call with an invalid JSON payload', function(done) {

        chai.request(server).post('/').send('{"invalid"}').type('json').end((err, res) => {
            console.log(res.body);
            should.not.exist(err);
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            res.body.should.have.property('error').eql('Could not decode request: JSON parsing failed');
            done();
        })
    });

});