<article class="intro">
  <h3>Intro</h3>

  <div class="text">
    {% for p in intro %}
      <p class="p">{{ p | safe }}</p>
    {% endfor %}
  </div>
</article>
