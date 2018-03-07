class CWNavbarStatus extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="collapse navbar-collapse">
                <div class="d-flex">
                    <ul class="navbar-nav">
                        <li class="dropdown js-menu-container">
                            <span class="d-inline-block  px-2">
                            <a href="/notifications" aria-label="You have no unread notifications"
                               class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator"
                               data-channel="notification-changed:11550317" data-ga-click="Header, go to notifications, icon:read"
                               data-hotkey="g n">
                                <span class="mail-status "></span>
                                <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16"
                                 width="14">
                                    <path fill-rule="evenodd"
                                          d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z">
                                    </path>
                                </svg>
                            </a>
                            </span>
                        </li>
                        <li class="dropdown js-menu-container">
                            <details class="dropdown-details details-reset js-dropdown-details d-flex px-2 flex-items-center">
                                <summary class="HeaderNavlink" aria-label="Create new…" data-ga-click="Header, create new, icon:add">
                                    <svg aria-hidden="true" class="octicon octicon-plus float-left mr-1 mt-1" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                                        <path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path>
                                    </svg>
                                </summary>
                            </details>
                        </li>
                        <li class="dropdown js-menu-container">
                            <details class="dropdown-details details-reset js-dropdown-details d-flex pl-2 flex-items-center">
                                <summary class="HeaderNavlink name mt-1" aria-label="View profile and more" data-ga-click="Header, show menu, icon:avatar">
                                    <img alt="@afterloe" class="avatar float-left mr-1" src="https://avatars0.githubusercontent.com/u/11550317?s=40&amp;v=4" height="20" width="20" />
                                    <span class="dropdown-caret"></span>
                                </summary>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

/**
 * 导航路由的显示 和 高亮
 */
class CWNavbarRouters extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRouters(index = 0, routeSlice = []) {
        return routeSlice.map((route, i) => index === i ? (
            <li className={"nav-item active"}>
                <a className={"nav-link"} href={route["href"]}>{route["name"]}</a>
            </li>
        ) : (
            <li className={"nav-item"}>
                <a className={"nav-link"} href={route["href"]}>{route["name"]}</a>
            </li>
        ));
    }

    render() {
        const {activeRouter, routers} = this.props.data || {};
        return (
            <div className={"collapse navbar-collapse"}>
                <ul className={"navbar-nav mr-auto"}>
                    {this.renderRouters(activeRouter, routers)}
                </ul>
            </div>
        )
    }
}

/**
 * 搜索框的操作 和 搜索框的提示字段的显示
 */
class CWNavbarInputForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {word = "Search"} = this.props.data || {};
        return (
            <form className={"form-inline my-2 my-lg-0"}>
                <input className={"form-control mr-sm-2"} type={"search"} placeholder={word}
                       aria-label={word}/>
            </form>
        )
    }
}

/**
 * 最左侧云平台内容显示 和 href的跳转路径的设置
 */
class CWNavbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {linkedHref = "/", name = "Cityworks™", cWNavbarInputForm = {},
            cWNavbarRouters = {}} = this.props.data || {};
        return (
            <nav className={"navbar navbar-expand-lg navbar-light"}>
                <a className={"navbar-brand"} href={linkedHref}>{name}</a>
                <CWNavbarInputForm data={cWNavbarInputForm}/>
                <CWNavbarRouters data={cWNavbarRouters}/>
                <CWNavbarStatus />
            </nav>
        )
    }
}
