<video class="video" preload="metadata" poster="{{ site.url }}{{ site.images }}{{ video.image.name }}{{ video.image.extension }}" {{ video.params }}>
  {% if video.mp4 %}
    <source src="{{ site.url }}{{ site.videos }}{{ video.mp4 }}.mp4" type="video/mp4">
  {% endif %}

  {% if video.webm %}
    <source src="{{ site.url }}{{ site.videos }}{{ video.webm }}.webm" type="video/webm">
  {% endif %}

  {% if video.ogv %}
    <source src="{{ site.url }}{{ site.videos }}{{ video.ogv }}.ogv" type="video/ogg">
  {% endif %}

  <!-- Flash fallback -->
  <object type="application/x-shockwave-flash" data="flash-player.swf?videoUrl={{ site.url }}{{ site.videos }}{{ video.mp4 }}.mp4" width="{{ video.width }}" height="{{ video.height }}">
     <param name="movie" value="flash-player.swf?videoUrl={{ site.url }}{{ site.videos }}{{ video.mp4 }}.mp4" />
     <param name="allowfullscreen" value="true" />
     <param name="wmode" value="transparent" />
     <param name="flashvars" value="controlbar=over&amp;image={{ site.url }}{{ site.images }}{{ video.image.name }}{{ video.image.extension }}&amp;file=flash-player.swf?videoUrl={{ site.url }}{{ site.videos }}{{ video.mp4 }}.mp4" />
     <img alt="{{ video.image.title }}" src="{{ site.url }}{{ site.images }}{{ video.image.name }}{{ video.image.extension }}" width="{{ video.width }}" height="{{ video.height }}" title="No video playback possible, please download the video from the link below" />
  </object>

  <!-- Offer download -->
  <a class="link" href="{{ site.url }}{{ site.videos }}{{ video.mp4 }}.mp4">Download MP4</a>
</video>
