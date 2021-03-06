import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import classnames from 'classnames'
import { translate } from 'react-i18next'
import PropTypes from 'prop-types'
import AnimateHeight from 'react-animate-height'

const qs = require('query-string')

const shouldDisplayAsActive = (location, idWorkspace, activeIdWorkspace, app) => {
  if (idWorkspace !== activeIdWorkspace) return false

  const filterType = qs.parse(location.search).type

  return filterType
    ? app.slug === `contents/${filterType}`
    : location.pathname.includes(app.route)
}

const WorkspaceListItem = props => {
  return (
    <li className='sidebar__content__navigation__workspace__item'>
      <div
        className='sidebar__content__navigation__workspace__item__wrapper primaryColorBg primaryColorBgDarkenHover primaryColorBorder'
        onClick={props.onClickTitle}
      >
        <div className='sidebar__content__navigation__workspace__item__number'>
          {props.label.substring(0, 2).toUpperCase()}
        </div>

        <div className='sidebar__content__navigation__workspace__item__name' title={props.label}>
          {props.label}
        </div>

        <div className='sidebar__content__navigation__workspace__item__icon'>
          <i className={classnames(props.isOpenInSidebar ? 'fa fa-chevron-up' : 'fa fa-chevron-down')} />
        </div>
      </div>

      <AnimateHeight duration={500} height={props.isOpenInSidebar ? 'auto' : 0}>
        <ul className='sidebar__content__navigation__workspace__item__submenu'>
          { props.allowedApp.map(aa =>
            <li
              // onClick={() => props.onClickContentFilter(props.idWs, aa.slug)}
              key={aa.slug}
            >
              <Link to={aa.route}>
                <div className={classnames(
                  'sidebar__content__navigation__workspace__item__submenu__dropdown primaryColorBgLighten primaryColorBgHover primaryColorBorderDarken',
                  {'activeFilter': shouldDisplayAsActive(props.location, props.idWs, props.activeIdWorkspace, aa)}
                )}>
                  <div className='dropdown__icon'>
                    <i className={classnames(`fa fa-${aa.faIcon}`)} style={{backgroudColor: aa.hexcolor}} />
                  </div>

                  <div className='sidebar__content__navigation__workspace__item__submenu__dropdown__showdropdown'>
                    <div className='dropdown__title' id='navbarDropdown'>
                      <div className='dropdown__title__text'>
                        {props.t(aa.label)}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </AnimateHeight>
    </li>
  )
}

export default withRouter(translate()(WorkspaceListItem))

WorkspaceListItem.propTypes = {
  label: PropTypes.string.isRequired,
  allowedApp: PropTypes.array,
  onClickTitle: PropTypes.func,
  onClickAllContent: PropTypes.func,
  isOpenInSidebar: PropTypes.bool,
  activeFilterList: PropTypes.array,
  activeIdWorkspace: PropTypes.number
}

WorkspaceListItem.defaultProps = {
  onClickTitle: () => {},
  onClickAllContent: () => {},
  isOpenInSidebar: false,
  activeFilterList: [],
  activeIdWorkspace: -1
}
