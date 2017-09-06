// Breakpoints
//
// Used to adapt content and design to devices.
//
// Styleguide breakpoints

{% for breakpoint in breakpoints %}
// {{ breakpoint.description }}
$breakpoint-{{ breakpoint.name }}: {{ breakpoint.value }};
{% endfor %}


{% for mixin in responsive_mixins %}
@mixin {{ mixin.name }} {
  {% if mixin.media_query_prefix %}
    {% set prefix = mixin.media_query_prefix %}
  {% else %}
    {% set prefix = "only screen and" %}
  {% endif %}
  @media {{ prefix}} {{ mixin.media_query }} {
    @content
  }
}
{% endfor %}
