{% include '../head/head.html.swig' %}
{% include '../icons/icons.html.swig' %}

<div class="container">
  {% include '../../../project/header/header.html.swig' %}
  {% block content %}{% endblock %}
  {% include '../../../project/footer/footer.html.swig' %}
</div>

{% include '../footer/footer.html.swig' %}
{% include '__seo/default__seo.html.swig' %}
