# codingchallenge
## Description

A Nodejs API that accepts json data containing TV shows. The service filters them, and returns a json response with the title, slug, and image of the shows that have DRM enabled and contain episodes.

## Requirements
latest version of Nodejs and npm

## Installation
After cloning the repo, navigate to the directory containing the code in your command line terminal and run the following
```bash
npm install
npm start
```

## Usage
Afer the Nodejs server is started it can accept post requests in raw json format on
http://localhost:3000/

### Sample Request:
```json
{
    "payload": [
        {
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
            "seasons": [
                {
                    "slug": "show/16kidsandcounting/season/1"
                }
            ],
            "slug": "show/16kidsandcounting",
            "title": "16 Kids and Counting",
            "tvChannel": "GEM"
        },
        {
            "slug": "show/seapatrol",
            "title": "Sea Patrol",
            "tvChannel": "Channel 9"
        }
    ],
    "skip": 0,
    "take": 10,
    "totalRecords": 75
}
```
### Sample Response:
```json
{
    "response": [
        {
            "image": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg",
            "slug": "show/16kidsandcounting",
            "title": "16 Kids and Counting"
        }
    ]
}
```

## Testing
The tests can be found in ````test/index.js````

To run the tests:

````
npm test
````
