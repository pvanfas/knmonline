from django.conf import settings


def main_context(request):
    current_user = None
    name = None
    app_settings = settings.APP_SETTINGS
    org_data = settings.ORG_DATA

    if request.user.is_authenticated:
        current_user = request.user
        name = current_user.first_name

    return {
        "current_user": current_user,
        "default_user_avatar": f"https://ui-avatars.com/api/?name={name}&background=fdc010&color=fff&size=128",
        "app_settings": app_settings,
        "current_version": "?v=2.0",
        "company_name": org_data.get("company_name"),
        "company_address": org_data.get("company_address"),
        "company_mobile": org_data.get("company_mobile"),
        "company_mail": org_data.get("company_mail"),
    }
