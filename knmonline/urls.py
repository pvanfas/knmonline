from django.conf import settings
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.utils.translation import gettext_lazy as _

module_urls = i18n_patterns(
    path("", include("core.urls", namespace="web")),
    path("app/", include("core.urls", namespace="core")),
    path("app/accounts/", include("accounts.urls", namespace="accounts")),
    path("app/articles/", include("articles.urls", namespace="articles")),
    path("app/banking/", include("banking.urls", namespace="banking")),
    path("app/committees/", include("committees.urls", namespace="committees")),
    path("app/extensions/", include("extensions.urls", namespace="extensions")),
    path("app/institutions/", include("institutions.urls", namespace="institutions")),
    path("app/madrasa/", include("madrasa.urls", namespace="madrasa")),
    path("app/publications/", include("publications.urls", namespace="publications")),
    path("app/stream/", include("stream.urls", namespace="stream")),
    path("app/shop/", include("shopping.urls", namespace="shopping")),
    path("app/membership/", include("membership.urls", namespace="membership")),
    path("app/umrah/", include("umrah.urls", namespace="umrah")),
    prefix_default_language=False,
)

plugin_urls = [
    path("admin/", admin.site.urls),
    path("accounts/", include("registration.backends.simple.urls")),
    path("admin/doc/", include("django.contrib.admindocs.urls")),
    path("tinymce/", include("tinymce.urls")),
    path("translate/", include("rosetta.urls")),
    path("i18n/", include("django.conf.urls.i18n")),
]

urlpatterns = module_urls + plugin_urls + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

PROJECT_NAME = settings.APP_SETTINGS.get("site_name")
admin.site.site_header = _("%(project_name)s Administration") % {"project_name": PROJECT_NAME}
admin.site.site_title = _("%(project_name)s Admin Portal") % {"project_name": PROJECT_NAME}
admin.site.index_title = _("Welcome to %(project_name)s Admin Portal") % {"project_name": PROJECT_NAME}
