<div class="p-more">
  <p class="p-more__first-p">
    {{ pmore | first | safe }}
  </p>

  <div class="p-more__arrows">
    {% set direction = "bottom" %}
    {% include "../../framework/design/decorations/arrow-with-triangle/arrow-with-triangle.html.swig"  %}
    {% include "../../framework/design/decorations/arrow-with-triangle/arrow-with-triangle.html.swig"  %}
    {% include "../../framework/design/decorations/arrow-with-triangle/arrow-with-triangle.html.swig"  %}
  </div>

  <div class="p-more__other-ps">
    {% for p in pmore %}
      {% if ! loop.first %}
        <p class="p">{{ p | safe }}</p>
      {% endif %}
    {% endfor %}
  </div>
</div>
