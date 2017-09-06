# HTML5 Video

## How to make it

1. Create an 1024x768 video with Vokoscreen in a selected area
2. The video will be created in Videos as mp4
3. Covert with https://video.online-convert.com/ to OGV and WEBM


## Bugs, Tweaks

1. IE11 and Edge 13 gives an "Error: unsuported video type or invalid file path" because Github Pages is not able to serve videos for these browsers: http://stackoverflow.com/questions/15951012/can-mime-types-of-github-pages-files-be-configured

2. On Galaxy S2 the entire mobile is freezing, restart needed.


## Poster images

- IE 11, Edge 13, 14, Safari 10 ... needs them
- The video player in the browser resizes the poster image so we don't have to create @2x and fully responsive versions, we can go with a single poster image


## WebM, OGG, MP4

They are all needed to make video work in all browsers.

- webm - FF, Chrome, Opera, Edge 14
- ogg - FF, Chrome, Opera, Android
- mp4 - IE11, FF, Chrome, Opera, Safari, iOS, Android


## Autoplay, Loop

- They are slowing down the page. When there are multiple videos their usage is not recommended.
