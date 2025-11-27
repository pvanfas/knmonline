from pathlib import Path

from decouple import config
from django_archive import archivers

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "v%%w1e)#ko7wrg*7m#9&ppny*zcri(rm1%p=sw-bb&ng9%c!3m"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["*"]


# Application definition
INSTALLED_PLUGINS = [
    "admin_interface",
    "colorfield",
    "compressor",
    "crispy_bootstrap5",
    "crispy_forms",
    "django_extensions",
    "django_filters",
    "django_tables2",
    "import_export",
    "registration",
    "tinymce",
    "versatileimagefield",
    "taggit",
    "django_archive",
    "wkhtmltopdf",
    "djangoql",
]
DJANGO_APPS = [
    "django.contrib.admin",
    "django.contrib.humanize",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.sessions",
]

MODULES = [
    "accounts",
    "analytics",
    "articles",
    "banking",
    "committees",
    "core",
    "extensions",
    "helpdesk",
    "membership",
    "institutions",
    "madrasa",
    "publications",
    "shopping",
    "stream",
    "web",
    "umrah",
]
INSTALLED_APPS = INSTALLED_PLUGINS + DJANGO_APPS + MODULES

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django.contrib.admindocs.middleware.XViewMiddleware",
    "django.middleware.locale.LocaleMiddleware",
]

ROOT_URLCONF = "knmonline.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                "core.context_processors.main_context",
            ]
        },
    }
]

WSGI_APPLICATION = "knmonline.wsgi.application"


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": config("DB_ENGINE", default="django.db.backends.sqlite3"),
        "NAME": config("DB_NAME", default=BASE_DIR / "db.sqlite3"),
        "USER": config("DB_USER", default=""),
        "PASSWORD": config("DB_PASSWORD", default=""),
        "HOST": config("DB_HOST", default="localhost"),
        "PORT": "5432",
        "OPTIONS": {},
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    # { 'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    # { 'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',},
]

# Versatileimagefield Settings
# https://django-versatileimagefield.readthedocs.io/en/latest/

VERSATILEIMAGEFIELD_SETTINGS = {
    "cache_length": 2592000,
    "cache_name": "versatileimagefield_cache",
    "jpeg_resize_quality": 70,
    "sized_directory_name": "__sized__",
    "filtered_directory_name": "__filtered__",
    "placeholder_directory_name": "__placeholder__",
    "create_images_on_demand": True,
    "image_key_post_processor": None,
    "progressive_jpeg": True,
}

AUTH_USER_MODEL = "accounts.User"
FORM_RENDERER = "core.renderers.CleanFormRenderer"


X_FRAME_OPTIONS = "SAMEORIGIN"
SILENCED_SYSTEM_CHECKS = ["security.W019"]

ARCHIVE_DIRECTORY = BASE_DIR / "backup"
ARCHIVE_FORMAT = archivers.ZIP

# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/
LANGUAGE_CODE = "en-us"
TIME_ZONE = "Asia/Kolkata"
USE_I18N = True
USE_TZ = True

USE_L10N = False
DATE_INPUT_FORMATS = (
    "%d/%m/%Y",
    "%d-%m-%Y",
    "%d/%m/%y",
    "%d %b %Y",
    "%d %b, %Y",
    "%d %b %Y",
    "%d %b, %Y",
    "%d %B, %Y",
    "%d %B %Y",
)
DATETIME_INPUT_FORMATS = (
    "%d/%m/%Y %H:%M:%S",
    "%d/%m/%Y %H:%M",
    "%d/%m/%Y",
    "%d/%m/%y %H:%M:%S",
    "%d/%m/%y %H:%M",
    "%d/%m/%y",
    "%Y-%m-%d %H:%M:%S",
    "%Y-%m-%d %H:%M",
    "%Y-%m-%d",
)


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"
STATIC_URL = "/static/"
STATIC_FILE_ROOT = BASE_DIR / "static"
STATICFILES_DIRS = ((BASE_DIR / "static"),)
STATIC_ROOT = BASE_DIR / "assets"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

SHORT_DATETIME_FORMAT = "d/m/Y g:i A"
SHORT_DATE_FORMAT = "d/m/Y"

ACCOUNT_ACTIVATION_DAYS = 7
REGISTRATION_AUTO_LOGIN = True
SEND_ACTIVATION_EMAIL = False
REGISTRATION_EMAIL_SUBJECT_PREFIX = ""

REGISTRATION_OPEN = False
LOGIN_URL = "/accounts/login/"
LOGOUT_URL = "/accounts/logout/"
LOGIN_REDIRECT_URL = "/"

CRISPY_ALLOWED_TEMPLATE_PACKS = "bootstrap5"
CRISPY_TEMPLATE_PACK = "bootstrap5"


APP_SETTINGS = {
    "logo": "/static/app/config/logo_black.svg",
    "logo_mini": "/static/app/config/logo_mini.svg",
    "favicon": "/static/app/config/favicon.png",
    "site_name": "KNM Online",
    "site_title": "KNM Online | Kerala Nadwathul Mujahideen",
    "site_description": "Kerala Nadwathul Mujahideen",
    "site_keywords": "Kerala Nadwathul Mujahideen",
    "background_image": "/static/app/config/background.jpg",
}

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


ORG_DATA = {
    "company_name": "KNM Online",
    "company_address": "Kerala, India",
    "company_mobile": "+91 9876543210",
    "company_mail": "info@helpline.com",
}
