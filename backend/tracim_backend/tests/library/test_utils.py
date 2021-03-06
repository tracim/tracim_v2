import pytest

from tracim_backend.lib.utils.utils import ALLOWED_AUTOGEN_PASSWORD_CHAR
from tracim_backend.lib.utils.utils import DEFAULT_PASSWORD_GEN_CHAR_LENGTH
from tracim_backend.lib.utils.utils import ExtendedColor
from tracim_backend.lib.utils.utils import clamp
from tracim_backend.lib.utils.utils import password_generator


class TestPasswordGenerator(object):

    def test_password_generator_ok_nominal_case(self):
        password = password_generator()
        assert len(password) == DEFAULT_PASSWORD_GEN_CHAR_LENGTH
        for char in password:
            assert char in ALLOWED_AUTOGEN_PASSWORD_CHAR


class TestClamp(object):

    def test_clamp_ok_nominal_case(self):
        # min
        assert clamp(-0.1, 0.0, 255.0) == 0.0
        # max
        assert clamp(255.1, 0.0, 255.0) == 255.0
        # normla
        assert clamp(126.1, 0.0, 255.0) == 126.1


class TestExtendedColor(object):

    def test_extended_color__init__ok_nominal_case(self):
        color = ExtendedColor('#FFFFFF')
        assert color.web == 'white'

    def test_extended_color__lighten_darken__nominal_case(self):
        color = ExtendedColor('#9f6644')
        color_darken = color.darken
        assert isinstance(color_darken, ExtendedColor)
        assert color_darken != color
        assert color_darken.web != color.web

        color_lighten = color.lighten
        assert isinstance(color_lighten, ExtendedColor)
        assert color_lighten != color
        assert color_lighten.web != color.web

        assert color_lighten != color_darken
        assert color_lighten.web != color_darken.web

    def test_extended_color__lighten_darken__white(self):
        color = ExtendedColor('#FFFFFF')
        assert color.web == 'white'
        color_darken = color.darken
        color_lighten = color.lighten
        assert color_lighten == color
        assert color_lighten != color_darken
        assert color_lighten.web == color.web

    def test_extended_color__lighten_darken__black(self):
        color = ExtendedColor('#000000')
        assert color.web == 'black'
        color_darken = color.darken
        color_lighten = color.lighten
        assert color_darken == color
        # INFO - G.M - 2018-09-12 - lighten can not
        # add X% more light to something already dark.
        assert color_darken == color_lighten
        assert color_darken.web == color.web
