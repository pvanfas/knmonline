from django.forms.renderers import DjangoTemplates


class CleanFormRenderer(DjangoTemplates):
    def render(self, template_name, context, request=None):
        html = super().render(template_name, context, request)
        return html.replace("[]", "")
