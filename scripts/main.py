from umrah.models import Applicant


def run():
    # change applicant photo file name (both media and db) to applicant.id.extension
    for applicant in Applicant.objects.all():
        if not applicant.photo:
            continue

        import os
        from django.core.files.storage import default_storage
        from django.core.files.base import ContentFile

        old_path = applicant.photo.name
        ext = os.path.splitext(old_path)[1]
        new_filename = f"{applicant.id}{ext}"
        new_path = f"images/umrah/applicants/{new_filename}"

        if old_path == new_path:
            continue  # Nothing to do, already correct

        # Read the old file
        if default_storage.exists(old_path):
            file_content = default_storage.open(old_path, "rb").read()
            # Save to new path
            default_storage.save(new_path, ContentFile(file_content))
            # Remove old file
            default_storage.delete(old_path)
            # Update applicant.photo and save
            applicant.photo.name = new_path
            applicant.save(update_fields=["photo"])
            print(f"applicant {applicant} saved")
