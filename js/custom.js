---
---
{% capture images %}
[
	{% for images in site.static_files %}
		{% if image.path contains '/img/sponsors/' %}
		{
			"image": "{{ image.name }}"
		}
		{% endif %}
	{% endfor %}
]
{% endcapture %}


var allImages = {{ image | strip_newlines }}

console.log( allImages );
JSON.stringify(obj, null, 4);
