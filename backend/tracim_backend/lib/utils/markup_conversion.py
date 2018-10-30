TEXT_MARKUP = 'text'
HTML_MARKUP = 'html'


def convert_to_another_markup(
        content: str,
        input_markup: str,
        output_markup: str,
) -> str:
    """

    :param content: content as string
    :param input_markup: valid markup langage slug
    :param output_markup: valid markup langage slug
    :return: converted_content as string
    """
    # TODO - G.M - 2018-10-29 - Support for html content, deal correctly
    # with line break.
    if input_markup == TEXT_MARKUP and output_markup == HTML_MARKUP:
        content = content.replace('\n', '<br/>')
    return content
