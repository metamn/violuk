<article class="project-thumb">
  <h3>{{ project.title }}</h3>

  {% for image in project.images %}
    <img class="img" src="{{ site.url }}{{ site.images }}{{ image }}" alt="{{ project.title }}">
  {% endfor %}
</article>
