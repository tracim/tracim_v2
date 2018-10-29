from marshmallow.validate import OneOf

from tracim_backend.app_models.contents import content_markup_list
from tracim_backend.app_models.contents import content_type_list

# TODO - G.M - 2018-08-08 - [GlobalVar] Refactor Global var
# of tracim_backend, Be careful all_content_types_validator is a global_var !

all_content_types_validator = OneOf(choices=[])
all_content_markup_validator = OneOf(choices=[])


def update_validators():
    all_content_types_validator.choices = content_type_list.endpoint_allowed_types_slug()  # nopep8
    all_content_markup_validator.choices = content_markup_list.get_all()
