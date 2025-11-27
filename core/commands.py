from io import StringIO

from django.core import management


def create_fixture(app_name, filename):
    buf = StringIO()
    management.call_command("dumpdata", app_name, stdout=buf)
    buf.seek(0)
    with open(filename, "w") as f:
        f.write(buf.read())
