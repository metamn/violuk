{% import "../../../helpers/link/link.swig" as l  %}

<div class="text-around-circle">
  <span class="text-around-circle__text">
    {% if link %}
      {{ l.link(link) }}{{ text }}
    {% else %}
      {{ text }}
    {% endif %}
  </span>

  <span class="text-around-circle__chars"></span>
</div>
