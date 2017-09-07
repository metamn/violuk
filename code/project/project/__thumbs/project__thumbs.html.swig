<aside class="project__thumbs">
  <h3>Project thumbs</h3>

  {% for image in project.images %}
    <div class="image">
      <img class="img" src="{{ site.url }}{{ site.images }}{{ image }}" alt="{{ project.title }}">
    </div>
  {% endfor %}
</aside>
