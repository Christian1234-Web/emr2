import { useState } from "react";
import Setting from './pages/Setting'
function App() {
  const [show,setShow] = useState('none');
  return (
    <div className="" >
 <div className="all-wrapper with-side-panel solid-bg-all"><div>
    <div aria-hidden="true" className="onboarding-modal modal fade animated show-on-load" role="dialog" tabIndex={-1}>
          <div className="modal-dialog modal-centered" role="document">
            <div className="modal-content text-center">
              <button aria-label="Close" className="close" data-dismiss="modal" type="button"><span className="close-label">Skip Intro</span><span className="os-icon os-icon-close" /></button>
              <div className="onboarding-slider-w">
                <div className="onboarding-slide">
                  <div className="onboarding-media">
                    <img alt="" src="img/bigicon2.png" width="200px" />
                  </div>
                  <div className="onboarding-content with-gradient">
                    <h4 className="onboarding-title">
                      Example of onboarding screen!
                    </h4>
                    <div className="onboarding-text">
                      This is an example of a multistep onboarding screen, you can use it to introduce your customers to your app, or collect additional information from them before they start using your app.
                    </div>
                  </div>
                </div>
                <div className="onboarding-slide">
                  <div className="onboarding-media">
                    <img alt="" src="img/bigicon5.png" width="200px" />
                  </div>
                  <div className="onboarding-content with-gradient">
                    <h4 className="onboarding-title">
                      Example Request Information
                    </h4>
                    <div className="onboarding-text">
                      In this example you can see a form where you can request some additional information from the customer when they land on the app page.
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor>Your Full Name</label><input className="form-control" placeholder="Enter your full name..." type="text" defaultValue />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor>Your Role</label><select className="form-control">
                              <option>
                                Web Developer
                              </option>
                              <option>
                                Business Owner
                              </option>
                              <option>
                                Other
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="onboarding-slide">
                  <div className="onboarding-media">
                    <img alt="" src="img/bigicon6.png" width="200px" />
                  </div>
                  <div className="onboarding-content with-gradient">
                    <h4 className="onboarding-title">
                      Showcase App Features
                    </h4>
                    <div className="onboarding-text">
                      In this example you can showcase some of the features of your application, it is very handy to make new users aware of your hidden features. You can use boostrap columns to split them up.
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="features-list">
                          <li>
                            Fully Responsive design
                          </li>
                          <li>
                            Pre-built app layouts
                          </li>
                          <li>
                            Incredible Flexibility
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="features-list">
                          <li>
                            Boxed &amp; Full Layouts
                          </li>
                          <li>
                            Based on Bootstrap 4
                          </li>
                          <li>
                            Developer Friendly     
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
       
        <div className="search-with-suggestions-w over-search-field" style={{left: '1094px', top: '9.98334px', display: show}}>
        <div className="search-with-suggestions-modal">
          <div className="element-search">
            <input className="search-suggest-input" placeholder="Start typing to search..." type="text" />
            <div className="close-search-suggestions" onClick={()=>setShow('none')}>
              <i className="os-icon os-icon-x" />
            </div>
          </div>
          <div className="search-suggestions-group">
            <div className="ssg-header">
              <div className="ssg-icon">
                <div className="os-icon os-icon-box" />
              </div>
              <div className="ssg-name">
                Projects
              </div>
              <div className="ssg-info">
                24 Total
              </div>
            </div>
            <div className="ssg-content">
              <div className="ssg-items ssg-items-boxed">
                <a className="ssg-item" href="users_profile_big.html">
                  <div className="item-media" style={{backgroundImage: 'url(img/company6.png)'}} />
                  <div className="item-name">
                    Integ<span>ration</span> with API
                  </div>
                </a><a className="ssg-item" href="users_profile_big.html" style={{display: 'none'}}>
                  <div className="item-media" style={{backgroundImage: 'url(img/company7.png)'}} />
                  <div className="item-name">
                    Deve<span>lopm</span>ent Project
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="search-suggestions-group">
            <div className="ssg-header">
              <div className="ssg-icon">
                <div className="os-icon os-icon-users" />
              </div>
              <div className="ssg-name">
                Customers
              </div>
              <div className="ssg-info">
                12 Total
              </div>
            </div>
            <div className="ssg-content">
              <div className="ssg-items ssg-items-list">
                <a className="ssg-item" href="users_profile_big.html">
                  <div className="item-media" style={{backgroundImage: 'url(img/avatar1.jpg)'}} />
                  <div className="item-name">
                    John Ma<span>yer</span>s
                  </div>
                </a><a className="ssg-item" href="users_profile_big.html">
                  <div className="item-media" style={{backgroundImage: 'url(img/avatar2.jpg)'}} />
                  <div className="item-name">
                    Th<span>omas</span> Mullier
                  </div>
                </a><a className="ssg-item" href="users_profile_big.html" style={{display: 'none'}}>
                  <div className="item-media" style={{backgroundImage: 'url(img/avatar3.jpg)'}} />
                  <div className="item-name">
                    Kim C<span>olli</span>ns
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="search-suggestions-group">
            <div className="ssg-header">
              <div className="ssg-icon">
                <div className="os-icon os-icon-folder" />
              </div>
              <div className="ssg-name">
                Files
              </div>
              <div className="ssg-info">
                17 Total
              </div>
            </div>
            <div className="ssg-content">
              <div className="ssg-items ssg-items-blocks" style={{display: 'none'}}>
                <a className="ssg-item" href="#">
                  <div className="item-icon">
                    <i className="os-icon os-icon-file-text" />
                  </div>
                  <div className="item-name">
                    Work<span>Not</span>e.txt
                  </div>
                </a><a className="ssg-item" href="#">
                  <div className="item-icon">
                    <i className="os-icon os-icon-film" />
                  </div>
                  <div className="item-name">
                    V<span>ideo</span>.avi
                  </div>
                </a><a className="ssg-item" href="#">
                  <div className="item-icon">
                    <i className="os-icon os-icon-database" />
                  </div>
                  <div className="item-name">
                    User<span>Tabl</span>e.sql
                  </div>
                </a><a className="ssg-item" href="#" style={{display: 'none'}}>
                  <div className="item-icon">
                    <i className="os-icon os-icon-image" />
                  </div>
                  <div className="item-name">
                    wed<span>din</span>g.jpg
                  </div>
                </a>
              </div>
              <div className="ssg-nothing-found" style={{display: 'block'}}>
                <div className="icon-w">
                  <i className="os-icon os-icon-eye-off" />
                </div>
                <span>No files were found. Try changing your query...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="layout-w">
            {/*------------------
          START - Mobile Menu
          ------------------*/}
            <div className="menu-mobile menu-activated-on-click color-scheme-dark">
              <div className="mm-logo-buttons-w">
                <a className="mm-logo" href="index.html"><img src="img/logo.png" /><span>Clean Admin</span></a>
                <div className="mm-buttons">
                  <div className="content-panel-open">
                    <div className="os-icon os-icon-grid-circles" />
                  </div>
                  <div className="mobile-menu-trigger">
                    <div className="os-icon os-icon-hamburger-menu-1" />
                  </div>
                </div>
              </div>
              <div className="menu-and-user">
                <div className="logged-user-w">
                  <div className="avatar-w">
                    <img alt="" src="img/avatar1.jpg" />
                  </div>
                  <div className="logged-user-info-w">
                    <div className="logged-user-name">
                      Maria Gomez
                    </div>
                    <div className="logged-user-role">
                      Administrator
                    </div>
                  </div>
                </div>
                {/*------------------
              START - Mobile Menu List
              ------------------*/}
                <ul className="main-menu">
                  <li className="has-sub-menu">
                    <a href="index.html">
                      <div className="icon-w">
                        <div className="os-icon os-icon-layout" />
                      </div>
                      <span>Dashboard</span></a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Dashboard 1</a>
                      </li>
                      <li>
                        <a href="apps_crypto.html">Crypto Dashboard <strong className="badge badge-danger">Hot</strong></a>
                      </li>
                      <li>
                        <a href="apps_support_dashboard.html">Dashboard 3</a>
                      </li>
                      <li>
                        <a href="apps_projects.html">Dashboard 4</a>
                      </li>
                      <li>
                        <a href="apps_bank.html">Dashboard 5</a>
                      </li>
                      <li>
                        <a href="layouts_menu_top_image.html">Dashboard 6</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub-menu">
                    <a href="layouts_menu_top_image.html">
                      <div className="icon-w">
                        <div className="os-icon os-icon-layers" />
                      </div>
                      <span>Menu Styles</span></a>
                    <ul className="sub-menu">
                      <li>
                        <a href="layouts_menu_side_full.html">Side Menu Light</a>
                      </li>
                      <li>
                        <a href="layouts_menu_side_full_dark.html">Side Menu Dark</a>
                      </li>
                      <li>
                        <a href="layouts_menu_side_transparent.html">Side Menu Transparent <strong className="badge badge-danger">New</strong></a>
                      </li>
                      <li>
                        <a href="apps_pipeline.html">Side &amp; Top Dark</a>
                      </li>
                      <li>
                        <a href="apps_projects.html">Side &amp; Top</a>
                      </li>
                      <li>
                        <a href="layouts_menu_side_mini.html">Mini Side Menu</a>
                      </li>
                      <li>
                        <a href="layouts_menu_side_mini_dark.html">Mini Menu Dark</a>
                      </li>
                      <li>
                        <a href="layouts_menu_side_compact.html">Compact Side Menu</a>
                      </li>
                      <li>
                        <a href="layouts_menu_side_compact_dark.html">Compact Menu Dark</a>
                      </li>
                      <li>
                        <a href="layouts_menu_right.html">Right Menu</a>
                      </li>
                      <li>
                        <a href="layouts_menu_top.html">Top Menu Light</a>
                      </li>
                      <li>
                        <a href="layouts_menu_top_dark.html">Top Menu Dark</a>
                      </li>
                      <li>
                        <a href="layouts_menu_top_image.html">Top Menu Image <strong className="badge badge-danger">New</strong></a>
                      </li>
                      <li>
                        <a href="layouts_menu_sub_style_flyout.html">Sub Menu Flyout</a>
                      </li>
                      <li>
                        <a href="layouts_menu_sub_style_flyout_dark.html">Sub Flyout Dark</a>
                      </li>
                      <li>
                        <a href="layouts_menu_sub_style_flyout_bright.html">Sub Flyout Bright</a>
                      </li>
                      <li>
                        <a href="layouts_menu_side_compact_click.html">Menu Inside Click</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub-menu">
                    <a href="apps_bank.html">
                      <div className="icon-w">
                        <div className="os-icon os-icon-package" />
                      </div>
                      <span>Applications</span></a>
                    <ul className="sub-menu">
                      <li>
                        <a href="apps_email.html">Email Application</a>
                      </li>
                      <li>
                        <a href="apps_support_dashboard.html">Support Dashboard</a>
                      </li>
                      <li>
                        <a href="apps_support_index.html">Tickets Index</a>
                      </li>
                      <li>
                        <a href="apps_crypto.html">Crypto Dashboard <strong className="badge badge-danger">New</strong></a>
                      </li>
                      <li>
                        <a href="apps_projects.html">Projects List</a>
                      </li>
                      <li>
                        <a href="apps_bank.html">Banking <strong className="badge badge-danger">New</strong></a>
                      </li>
                      <li>
                        <a href="apps_full_chat.html">Chat Application</a>
                      </li>
                      <li>
                        <a href="apps_todo.html">To Do Application <strong className="badge badge-danger">New</strong></a>
                      </li>
                      <li>
                        <a href="misc_chat.html">Popup Chat</a>
                      </li>
                      <li>
                        <a href="apps_pipeline.html">CRM Pipeline</a>
                      </li>
                      <li>
                        <a href="rentals_index_grid.html">Property Listing <strong className="badge badge-danger">New</strong></a>
                      </li>
                      <li>
                        <a href="misc_calendar.html">Calendar</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub-menu">
                    <a href="#">
                      <div className="icon-w">
                        <div className="os-icon os-icon-file-text" />
                      </div>
                      <span>Pages</span></a>
                    <ul className="sub-menu">
                      <li>
                        <a href="misc_invoice.html">Invoice</a>
                      </li>
                      <li>
                        <a href="rentals_index_grid.html">Property Listing <strong className="badge badge-danger">New</strong></a>
                      </li>
                      <li>
                        <a href="misc_charts.html">Charts</a>
                      </li>
                      <li>
                        <a href="auth_login.html">Login</a>
                      </li>
                      <li>
                        <a href="auth_register.html">Register</a>
                      </li>
                      <li>
                        <a href="auth_lock.html">Lock Screen</a>
                      </li>
                      <li>
                        <a href="misc_pricing_plans.html">Pricing Plans</a>
                      </li>
                      <li>
                        <a href="misc_error_404.html">Error 404</a>
                      </li>
                      <li>
                        <a href="misc_error_500.html">Error 500</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub-menu">
                    <a href="#">
                      <div className="icon-w">
                        <div className="os-icon os-icon-life-buoy" />
                      </div>
                      <span>UI Kit</span></a>
                    <ul className="sub-menu">
                      <li>
                        <a href="uikit_modals.html">Modals <strong className="badge badge-danger">New</strong></a>
                      </li>
                      <li>
                        <a href="uikit_alerts.html">Alerts</a>
                      </li>
                      <li>
                        <a href="uikit_grid.html">Grid</a>
                      </li>
                      <li>
                        <a href="uikit_progress.html">Progress</a>
                      </li>
                      <li>
                        <a href="uikit_popovers.html">Popover</a>
                      </li>
                      <li>
                        <a href="uikit_tooltips.html">Tooltips</a>
                      </li>
                      <li>
                        <a href="uikit_buttons.html">Buttons</a>
                      </li>
                      <li>
                        <a href="uikit_dropdowns.html">Dropdowns</a>
                      </li>
                      <li>
                        <a href="uikit_typography.html">Typography</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub-menu">
                    <a href="#">
                      <div className="icon-w">
                        <div className="os-icon os-icon-mail" />
                      </div>
                      <span>Emails</span></a>
                    <ul className="sub-menu">
                      <li>
                        <a href="emails_welcome.html">Welcome Email</a>
                      </li>
                      <li>
                        <a href="emails_order.html">Order Confirmation</a>
                      </li>
                      <li>
                        <a href="emails_payment_due.html">Payment Due</a>
                      </li>
                      <li>
                        <a href="emails_forgot.html">Forgot Password</a>
                      </li>
                      <li>
                        <a href="emails_activate.html">Activate Account</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub-menu">
                    <a href="#">
                      <div className="icon-w">
                        <div className="os-icon os-icon-users" />
                      </div>
                      <span>Users</span></a>
                    <ul className="sub-menu">
                      <li>
                        <a href="users_profile_big.html">Big Profile</a>
                      </li>
                      <li>
                        <a href="users_profile_small.html">Compact Profile</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub-menu">
                    <a href="#">
                      <div className="icon-w">
                        <div className="os-icon os-icon-edit-32" />
                      </div>
                      <span>Forms</span></a>
                    <ul className="sub-menu">
                      <li>
                        <a href="forms_regular.html">Regular Forms</a>
                      </li>
                      <li>
                        <a href="forms_validation.html">Form Validation</a>
                      </li>
                      <li>
                        <a href="forms_wizard.html">Form Wizard</a>
                      </li>
                      <li>
                        <a href="forms_uploads.html">File Uploads</a>
                      </li>
                      <li>
                        <a href="forms_wisiwig.html">Wisiwig Editor</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub-menu">
                    <a href="#">
                      <div className="icon-w">
                        <div className="os-icon os-icon-grid" />
                      </div>
                      <span>Tables</span></a>
                    <ul className="sub-menu">
                      <li>
                        <a href="tables_regular.html">Regular Tables</a>
                      </li>
                      <li>
                        <a href="tables_datatables.html">Data Tables</a>
                      </li>
                      <li>
                        <a href="tables_editable.html">Editable Tables</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub-menu">
                    <a href="#">
                      <div className="icon-w">
                        <div className="os-icon os-icon-zap" />
                      </div>
                      <span>Icons</span></a>
                    <ul className="sub-menu">
                      <li>
                        <a href="icon_fonts_simple_line_icons.html">Simple Line Icons</a>
                      </li>
                      <li>
                        <a href="icon_fonts_feather.html">Feather Icons</a>
                      </li>
                      <li>
                        <a href="icon_fonts_themefy.html">Themefy Icons</a>
                      </li>
                      <li>
                        <a href="icon_fonts_picons_thin.html">Picons Thin</a>
                      </li>
                      <li>
                        <a href="icon_fonts_dripicons.html">Dripicons</a>
                      </li>
                      <li>
                        <a href="icon_fonts_eightyshades.html">Eightyshades</a>
                      </li>
                      <li>
                        <a href="icon_fonts_entypo.html">Entypo</a>
                      </li>
                      <li>
                        <a href="icon_fonts_font_awesome.html">Font Awesome</a>
                      </li>
                      <li>
                        <a href="icon_fonts_foundation_icon_font.html">Foundation Icon Font</a>
                      </li>
                      <li>
                        <a href="icon_fonts_metrize_icons.html">Metrize Icons</a>
                      </li>
                      <li>
                        <a href="icon_fonts_picons_social.html">Picons Social</a>
                      </li>
                      <li>
                        <a href="icon_fonts_batch_icons.html">Batch Icons</a>
                      </li>
                      <li>
                        <a href="icon_fonts_dashicons.html">Dashicons</a>
                      </li>
                      <li>
                        <a href="icon_fonts_typicons.html">Typicons</a>
                      </li>
                      <li>
                        <a href="icon_fonts_weather_icons.html">Weather Icons</a>
                      </li>
                      <li>
                        <a href="icon_fonts_light_admin.html">Light Admin</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/*------------------
              END - Mobile Menu List
              ------------------*/}
                <div className="mobile-menu-magic">
                  <h4>
                    Light Admin
                  </h4>
                  <p>
                    Clean Bootstrap 4 Template
                  </p>
                  <div className="btn-w">
                    <a className="btn btn-white btn-rounded" href="https://themeforest.net/item/light-admin-clean-bootstrap-dashboard-html-template/19760124?ref=Osetin" target="_blank">Purchase Now</a>
                  </div>
                </div>
              </div>
            </div>
            {/*------------------
          END - Mobile Menu
          ------------------*/}{/*------------------
          START - Main Menu
          ------------------*/}
          
            <div className="menu-w selected-menu-color-light menu-activated-on-hover 
            menu-has-selected-link color-scheme-dark color-style-bright sub-menu-color-bright menu-position-side menu-side-left menu-layout-compact sub-menu-style-over">
              <div className="logo-w">
                <a className="logo" href="index.html">
                  <div className="logo-element" />
                  <div className="logo-label">
                    Clean Admin
                  </div>
                </a>
              </div>
              <div className="logged-user-w avatar-inline">
                <div className="logged-user-i">
                  <div className="avatar-w">
                    <img alt="" src="img/avatar1.jpg" />
                  </div>
                  <div className="logged-user-info-w">
                    <div className="logged-user-name">
                      Maria Gomez
                    </div>
                    <div className="logged-user-role">
                      Administrator
                    </div>
                  </div>
                  <div className="logged-user-toggler-arrow">
                    <div className="os-icon os-icon-chevron-down" />
                  </div>
                  <div className="logged-user-menu color-style-bright">
                    <div className="logged-user-avatar-info">
                      <div className="avatar-w">
                        <img alt="" src="img/avatar1.jpg" />
                      </div>
                      <div className="logged-user-info-w">
                        <div className="logged-user-name">
                          Maria Gomez
                        </div>
                        <div className="logged-user-role">
                          Administrator
                        </div>
                      </div>
                    </div>
                    <div className="bg-icon">
                      <i className="os-icon os-icon-wallet-loaded" />
                    </div>
                    <ul>
                      <li>
                        <a href="apps_email.html"><i className="os-icon os-icon-mail-01" /><span>Incoming Mail</span></a>
                      </li>
                      <li>
                        <a href="users_profile_big.html"><i className="os-icon os-icon-user-male-circle2" /><span>Profile Details</span></a>
                      </li>
                      <li>
                        <a href="users_profile_small.html"><i className="os-icon os-icon-coins-4" /><span>Billing Details</span></a>
                      </li>
                      <li>
                        <a href="#"><i className="os-icon os-icon-others-43" /><span>Notifications</span></a>
                      </li>
                      <li>
                        <a href="#"><i className="os-icon os-icon-signs-11" /><span>Logout</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="menu-actions">
                {/*------------------
              START - Messages Link in secondary top menu
              ------------------*/}
                <div className="messages-notifications os-dropdown-trigger os-dropdown-position-right">
                  <i className="os-icon os-icon-mail-14" />
                  <div className="new-messages-count">
                    12
                  </div>
                  <div className="os-dropdown light message-list">
                    <ul>
                      <li>
                        <a href="#">
                          <div className="user-avatar-w">
                            <img alt="" src="img/avatar1.jpg" />
                          </div>
                          <div className="message-content">
                            <h6 className="message-from">
                              John Mayers
                            </h6>
                            <h6 className="message-title">
                              Account Update
                            </h6>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="user-avatar-w">
                            <img alt="" src="img/avatar2.jpg" />
                          </div>
                          <div className="message-content">
                            <h6 className="message-from">
                              Phil Jones
                            </h6>
                            <h6 className="message-title">
                              Secutiry Updates
                            </h6>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="user-avatar-w">
                            <img alt="" src="img/avatar3.jpg" />
                          </div>
                          <div className="message-content">
                            <h6 className="message-from">
                              Bekky Simpson
                            </h6>
                            <h6 className="message-title">
                              Vacation Rentals
                            </h6>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="user-avatar-w">
                            <img alt="" src="img/avatar4.jpg" />
                          </div>
                          <div className="message-content">
                            <h6 className="message-from">
                              Alice Priskon
                            </h6>
                            <h6 className="message-title">
                              Payment Confirmation
                            </h6>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*------------------
              END - Messages Link in secondary top menu
              ------------------*/}{/*------------------
              START - Settings Link in secondary top menu
              ------------------*/}
                <div className="top-icon top-settings os-dropdown-trigger os-dropdown-position-right">
                  <i className="os-icon os-icon-ui-46" />
                  <div className="os-dropdown">
                    <div className="icon-w">
                      <i className="os-icon os-icon-ui-46" />
                    </div>
                    <ul>
                      <li>
                        <a href="users_profile_small.html"><i className="os-icon os-icon-ui-49" /><span>Profile Settings</span></a>
                      </li>
                      <li>
                        <a href="users_profile_small.html"><i className="os-icon os-icon-grid-10" /><span>Billing Info</span></a>
                      </li>
                      <li>
                        <a href="users_profile_small.html"><i className="os-icon os-icon-ui-44" /><span>My Invoices</span></a>
                      </li>
                      <li>
                        <a href="users_profile_small.html"><i className="os-icon os-icon-ui-15" /><span>Cancel Account</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*------------------
              END - Settings Link in secondary top menu
              ------------------*/}{/*------------------
              START - Messages Link in secondary top menu
              ------------------*/}
                <div className="messages-notifications os-dropdown-trigger os-dropdown-position-right">
                  <i className="os-icon os-icon-zap" />
                  <div className="new-messages-count">
                    4
                  </div>
                  <div className="os-dropdown light message-list">
                    <div className="icon-w">
                      <i className="os-icon os-icon-zap" />
                    </div>
                    <ul>
                      <li>
                        <a href="#">
                          <div className="user-avatar-w">
                            <img alt="" src="img/avatar1.jpg" />
                          </div>
                          <div className="message-content">
                            <h6 className="message-from">
                              John Mayers
                            </h6>
                            <h6 className="message-title">
                              Account Update
                            </h6>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="user-avatar-w">
                            <img alt="" src="img/avatar2.jpg" />
                          </div>
                          <div className="message-content">
                            <h6 className="message-from">
                              Phil Jones
                            </h6>
                            <h6 className="message-title">
                              Secutiry Updates
                            </h6>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="user-avatar-w">
                            <img alt="" src="img/avatar3.jpg" />
                          </div>
                          <div className="message-content">
                            <h6 className="message-from">
                              Bekky Simpson
                            </h6>
                            <h6 className="message-title">
                              Vacation Rentals
                            </h6>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="user-avatar-w">
                            <img alt="" src="img/avatar4.jpg" />
                          </div>
                          <div className="message-content">
                            <h6 className="message-from">
                              Alice Priskon
                            </h6>
                            <h6 className="message-title">
                              Payment Confirmation
                            </h6>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*------------------
              END - Messages Link in secondary top menu
              ------------------*/}
              </div>
              <div className="element-search autosuggest-search-activator" onClick={()=>setShow('block')}>
                <input placeholder="Start typing to search..." type="text"  />
              </div>
              <h1 className="menu-page-header">
                Page Header
              </h1>
              <ul className="main-menu">
                <li className="sub-header">
                  <span>Layouts</span>
                </li>
                <li className="selected has-sub-menu">
                  <a href="index.html">
                    <div className="icon-w">
                      <div className="os-icon os-icon-layout" />
                    </div>
                    <span>Dashboard</span></a>
                  <div className="sub-menu-w">
                    <div className="sub-menu-header">
                      Dashboard
                    </div>
                    <div className="sub-menu-icon">
                      <i className="os-icon os-icon-layout" />
                    </div>
                    <div className="sub-menu-i">
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Dashboard 1</a>
                        </li>
                        <li>
                          <a href="apps_crypto.html">Crypto Dashboard <strong className="badge badge-danger">Hot</strong></a>
                        </li>
                        <li>
                          <a href="apps_support_dashboard.html">Dashboard 3</a>
                        </li>
                        <li>
                          <a href="apps_projects.html">Dashboard 4</a>
                        </li>
                        <li>
                          <a href="apps_bank.html">Dashboard 5</a>
                        </li>
                        <li>
                          <a href="layouts_menu_top_image.html">Dashboard 6</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className=" has-sub-menu">
                  <a href="layouts_menu_top_image.html">
                    <div className="icon-w">
                      <div className="os-icon os-icon-layers" />
                    </div>
                    <span>Menu Styles</span></a>
                  <div className="sub-menu-w">
                    <div className="sub-menu-header">
                      Menu Styles
                    </div>
                    <div className="sub-menu-icon">
                      <i className="os-icon os-icon-layers" />
                    </div>
                    <div className="sub-menu-i">
                      <ul className="sub-menu">
                        <li>
                          <a href="layouts_menu_side_full.html">Side Menu Light</a>
                        </li>
                        <li>
                          <a href="layouts_menu_side_full_dark.html">Side Menu Dark</a>
                        </li>
                        <li>
                          <a href="layouts_menu_side_transparent.html">Side Menu Transparent <strong className="badge badge-danger">New</strong></a>
                        </li>
                        <li>
                          <a href="apps_pipeline.html">Side &amp; Top Dark</a>
                        </li>
                        <li>
                          <a href="apps_projects.html">Side &amp; Top</a>
                        </li>
                        <li>
                          <a href="layouts_menu_side_mini.html">Mini Side Menu</a>
                        </li>
                      </ul><ul className="sub-menu">
                        <li>
                          <a href="layouts_menu_side_mini_dark.html">Mini Menu Dark</a>
                        </li>
                        <li>
                          <a href="layouts_menu_side_compact.html">Compact Side Menu</a>
                        </li>
                        <li>
                          <a href="layouts_menu_side_compact_dark.html">Compact Menu Dark</a>
                        </li>
                        <li>
                          <a href="layouts_menu_right.html">Right Menu</a>
                        </li>
                        <li>
                          <a href="layouts_menu_top.html">Top Menu Light</a>
                        </li>
                        <li>
                          <a href="layouts_menu_top_dark.html">Top Menu Dark</a>
                        </li>
                      </ul><ul className="sub-menu">
                        <li>
                          <a href="layouts_menu_top_image.html">Top Menu Image <strong className="badge badge-danger">New</strong></a>
                        </li>
                        <li>
                          <a href="layouts_menu_sub_style_flyout.html">Sub Menu Flyout</a>
                        </li>
                        <li>
                          <a href="layouts_menu_sub_style_flyout_dark.html">Sub Flyout Dark</a>
                        </li>
                        <li>
                          <a href="layouts_menu_sub_style_flyout_bright.html">Sub Flyout Bright</a>
                        </li>
                        <li>
                          <a href="layouts_menu_side_compact_click.html">Menu Inside Click</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="sub-header">
                  <span>Options</span>
                </li>
                <li className=" has-sub-menu">
                  <a href="apps_bank.html">
                    <div className="icon-w">
                      <div className="os-icon os-icon-package" />
                    </div>
                    <span>Applications</span></a>
                  <div className="sub-menu-w">
                    <div className="sub-menu-header">
                      Applications
                    </div>
                    <div className="sub-menu-icon">
                      <i className="os-icon os-icon-package" />
                    </div>
                    <div className="sub-menu-i">
                      <ul className="sub-menu">
                        <li>
                          <a href="apps_email.html">Email Application</a>
                        </li>
                        <li>
                          <a href="apps_support_dashboard.html">Support Dashboard</a>
                        </li>
                        <li>
                          <a href="apps_support_index.html">Tickets Index</a>
                        </li>
                        <li>
                          <a href="apps_crypto.html">Crypto Dashboard <strong className="badge badge-danger">New</strong></a>
                        </li>
                        <li>
                          <a href="apps_projects.html">Projects List</a>
                        </li>
                        <li>
                          <a href="apps_bank.html">Banking <strong className="badge badge-danger">New</strong></a>
                        </li>
                      </ul><ul className="sub-menu">
                        <li>
                          <a href="apps_full_chat.html">Chat Application</a>
                        </li>
                        <li>
                          <a href="apps_todo.html">To Do Application <strong className="badge badge-danger">New</strong></a>
                        </li>
                        <li>
                          <a href="misc_chat.html">Popup Chat</a>
                        </li>
                        <li>
                          <a href="apps_pipeline.html">CRM Pipeline</a>
                        </li>
                        <li>
                          <a href="rentals_index_grid.html">Property Listing <strong className="badge badge-danger">New</strong></a>
                        </li>
                        <li>
                          <a href="misc_calendar.html">Calendar</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className=" has-sub-menu">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-file-text" />
                    </div>
                    <span>Pages</span></a>
                  <div className="sub-menu-w">
                    <div className="sub-menu-header">
                      Pages
                    </div>
                    <div className="sub-menu-icon">
                      <i className="os-icon os-icon-file-text" />
                    </div>
                    <div className="sub-menu-i">
                      <ul className="sub-menu">
                        <li>
                          <a href="misc_invoice.html">Invoice</a>
                        </li>
                        <li>
                          <a href="rentals_index_grid.html">Property Listing <strong className="badge badge-danger">New</strong></a>
                        </li>
                        <li>
                          <a href="misc_charts.html">Charts</a>
                        </li>
                        <li>
                          <a href="auth_login.html">Login</a>
                        </li>
                        <li>
                          <a href="auth_register.html">Register</a>
                        </li>
                      </ul><ul className="sub-menu">
                        <li>
                          <a href="auth_lock.html">Lock Screen</a>
                        </li>
                        <li>
                          <a href="misc_pricing_plans.html">Pricing Plans</a>
                        </li>
                        <li>
                          <a href="misc_error_404.html">Error 404</a>
                        </li>
                        <li>
                          <a href="misc_error_500.html">Error 500</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className=" has-sub-menu">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-life-buoy" />
                    </div>
                    <span>UI Kit</span></a>
                  <div className="sub-menu-w">
                    <div className="sub-menu-header">
                      UI Kit
                    </div>
                    <div className="sub-menu-icon">
                      <i className="os-icon os-icon-life-buoy" />
                    </div>
                    <div className="sub-menu-i">
                      <ul className="sub-menu">
                        <li>
                          <a href="uikit_modals.html">Modals <strong className="badge badge-danger">New</strong></a>
                        </li>
                        <li>
                          <a href="uikit_alerts.html">Alerts</a>
                        </li>
                        <li>
                          <a href="uikit_grid.html">Grid</a>
                        </li>
                        <li>
                          <a href="uikit_progress.html">Progress</a>
                        </li>
                        <li>
                          <a href="uikit_popovers.html">Popover</a>
                        </li>
                      </ul><ul className="sub-menu">
                        <li>
                          <a href="uikit_tooltips.html">Tooltips</a>
                        </li>
                        <li>
                          <a href="uikit_buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="uikit_dropdowns.html">Dropdowns</a>
                        </li>
                        <li>
                          <a href="uikit_typography.html">Typography</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="sub-header">
                  <span>Elements</span>
                </li>
                <li className=" has-sub-menu">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-mail" />
                    </div>
                    <span>Emails</span></a>
                  <div className="sub-menu-w">
                    <div className="sub-menu-header">
                      Emails
                    </div>
                    <div className="sub-menu-icon">
                      <i className="os-icon os-icon-mail" />
                    </div>
                    <div className="sub-menu-i">
                      <ul className="sub-menu">
                        <li>
                          <a href="emails_welcome.html">Welcome Email</a>
                        </li>
                        <li>
                          <a href="emails_order.html">Order Confirmation</a>
                        </li>
                        <li>
                          <a href="emails_payment_due.html">Payment Due</a>
                        </li>
                        <li>
                          <a href="emails_forgot.html">Forgot Password</a>
                        </li>
                        <li>
                          <a href="emails_activate.html">Activate Account</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className=" has-sub-menu">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-users" />
                    </div>
                    <span>Users</span></a>
                  <div className="sub-menu-w">
                    <div className="sub-menu-header">
                      Users
                    </div>
                    <div className="sub-menu-icon">
                      <i className="os-icon os-icon-users" />
                    </div>
                    <div className="sub-menu-i">
                      <ul className="sub-menu">
                        <li>
                          <a href="users_profile_big.html">Big Profile</a>
                        </li>
                        <li>
                          <a href="users_profile_small.html">Compact Profile</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className=" has-sub-menu">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-edit-32" />
                    </div>
                    <span>Forms</span></a>
                  <div className="sub-menu-w">
                    <div className="sub-menu-header">
                      Forms
                    </div>
                    <div className="sub-menu-icon">
                      <i className="os-icon os-icon-edit-32" />
                    </div>
                    <div className="sub-menu-i">
                      <ul className="sub-menu">
                        <li>
                          <a href="forms_regular.html">Regular Forms</a>
                        </li>
                        <li>
                          <a href="forms_validation.html">Form Validation</a>
                        </li>
                        <li>
                          <a href="forms_wizard.html">Form Wizard</a>
                        </li>
                        <li>
                          <a href="forms_uploads.html">File Uploads</a>
                        </li>
                        <li>
                          <a href="forms_wisiwig.html">Wisiwig Editor</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className=" has-sub-menu">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-grid" />
                    </div>
                    <span>Tables</span></a>
                  <div className="sub-menu-w">
                    <div className="sub-menu-header">
                      Tables
                    </div>
                    <div className="sub-menu-icon">
                      <i className="os-icon os-icon-grid" />
                    </div>
                    <div className="sub-menu-i">
                      <ul className="sub-menu">
                        <li>
                          <a href="tables_regular.html">Regular Tables</a>
                        </li>
                        <li>
                          <a href="tables_datatables.html">Data Tables</a>
                        </li>
                        <li>
                          <a href="tables_editable.html">Editable Tables</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className=" has-sub-menu">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-zap" />
                    </div>
                    <span>Icons</span></a>
                  <div className="sub-menu-w">
                    <div className="sub-menu-header">
                      Icons
                    </div>
                    <div className="sub-menu-icon">
                      <i className="os-icon os-icon-zap" />
                    </div>
                    <div className="sub-menu-i">
                      <ul className="sub-menu">
                        <li>
                          <a href="icon_fonts_simple_line_icons.html">Simple Line Icons</a>
                        </li>
                        <li>
                          <a href="icon_fonts_feather.html">Feather Icons</a>
                        </li>
                        <li>
                          <a href="icon_fonts_themefy.html">Themefy Icons</a>
                        </li>
                        <li>
                          <a href="icon_fonts_picons_thin.html">Picons Thin</a>
                        </li>
                        <li>
                          <a href="icon_fonts_dripicons.html">Dripicons</a>
                        </li>
                        <li>
                          <a href="icon_fonts_eightyshades.html">Eightyshades</a>
                        </li>
                      </ul><ul className="sub-menu">
                        <li>
                          <a href="icon_fonts_entypo.html">Entypo</a>
                        </li>
                        <li>
                          <a href="icon_fonts_font_awesome.html">Font Awesome</a>
                        </li>
                        <li>
                          <a href="icon_fonts_foundation_icon_font.html">Foundation Icon Font</a>
                        </li>
                        <li>
                          <a href="icon_fonts_metrize_icons.html">Metrize Icons</a>
                        </li>
                        <li>
                          <a href="icon_fonts_picons_social.html">Picons Social</a>
                        </li>
                        <li>
                          <a href="icon_fonts_batch_icons.html">Batch Icons</a>
                        </li>
                      </ul><ul className="sub-menu">
                        <li>
                          <a href="icon_fonts_dashicons.html">Dashicons</a>
                        </li>
                        <li>
                          <a href="icon_fonts_typicons.html">Typicons</a>
                        </li>
                        <li>
                          <a href="icon_fonts_weather_icons.html">Weather Icons</a>
                        </li>
                        <li>
                          <a href="icon_fonts_light_admin.html">Light Admin</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="side-menu-magic">
                <h4>
                  Light Admin
                </h4>
                <p>
                  Clean Bootstrap 4 Template
                </p>
                <div className="btn-w">
                  <a className="btn btn-white btn-rounded" href="https://themeforest.net/item/light-admin-clean-bootstrap-dashboard-html-template/19760124?ref=Osetin" target="_blank">Purchase Now</a>
                </div>
              </div>
            </div>
            {/*------------------
          END - Main Menu
          ------------------*/}
            <div className="content-w">
              {/*------------------
            START - Top Bar
            ------------------*/}
            <div className="content-w">
        <div className="top-bar d-none color-scheme-transparent">
          <div className="top-menu-controls">
            <div className="element-search autosuggest-search-activator"><input placeholder="Start typing to search..." />
            </div>
            <div className="messages-notifications os-dropdown-trigger os-dropdown-position-left"><i className="os-icon os-icon-mail-14" />
              <div className="new-messages-count">12</div>
              <div className="os-dropdown light message-list">
                <ul>
                  <li><a href="#">
                      <div className="user-avatar-w"><img alt="" src="img/avatar1.jpg" /></div>
                      <div className="message-content"><h6 className="message-from">John Mayers</h6><h6 className="message-title">Account Update</h6></div>
                    </a></li>
                  <li><a href="#">
                      <div className="user-avatar-w"><img alt="" src="img/avatar2.jpg" /></div>
                      <div className="message-content"><h6 className="message-from">Phil Jones</h6><h6 className="message-title">Secutiry Updates</h6></div>
                    </a></li>
                  <li><a href="#">
                      <div className="user-avatar-w"><img alt="" src="img/avatar3.jpg" /></div>
                      <div className="message-content"><h6 className="message-from">Bekky Simpson</h6><h6 className="message-title">Vacation Rentals</h6></div>
                    </a></li>
                  <li><a href="#">
                      <div className="user-avatar-w"><img alt="" src="img/avatar4.jpg" /></div>
                      <div className="message-content"><h6 className="message-from">Alice Priskon</h6><h6 className="message-title">Payment Confirmation</h6></div>
                    </a></li>
                </ul>
              </div>
            </div>
            <div className="top-icon top-settings os-dropdown-trigger os-dropdown-position-left"><i className="os-icon os-icon-ui-46" />
              <div className="os-dropdown">
                <div className="icon-w"><i className="os-icon os-icon-ui-46" /></div>
                <ul>
                  <li><a href="users_profile_small.html"><i className="os-icon os-icon-ui-49" /><span>Profile Settings</span></a>
                  </li>
                  <li><a href="users_profile_small.html"><i className="os-icon os-icon-grid-10" /><span>Billing Info</span></a></li>
                  <li><a href="users_profile_small.html"><i className="os-icon os-icon-ui-44" /><span>My Invoices</span></a></li>
                  <li><a href="users_profile_small.html"><i className="os-icon os-icon-ui-15" /><span>Cancel Account</span></a></li>
                </ul>
              </div>
            </div>
            <div className="logged-user-w">
              <div className="logged-user-i">
                <div className="avatar-w"><img alt="" src="img/avatar1.jpg" /></div>
                <div className="logged-user-menu color-style-bright">
                  <div className="logged-user-avatar-info">
                    <div className="avatar-w"><img alt="" src="img/avatar1.jpg" /></div>
                    <div className="logged-user-info-w">
                      <div className="logged-user-name">Maria Gomez</div>
                      <div className="logged-user-role">Administrator</div>
                    </div>
                  </div>
                  <div className="bg-icon"><i className="os-icon os-icon-wallet-loaded" /></div>
                  <ul>
                    <li><a href="apps_email.html"><i className="os-icon os-icon-mail-01" /><span>Incoming Mail</span></a></li>
                    <li><a href="users_profile_big.html"><i className="os-icon os-icon-user-male-circle2" /><span>Profile Details</span></a>
                    </li>
                    <li><a href="users_profile_small.html"><i className="os-icon os-icon-coins-4" /><span>Billing Details</span></a>
                    </li>
                    <li><a href="#"><i className="os-icon os-icon-others-43" /><span>Notifications</span></a></li>
                    <li><a href="#"><i className="os-icon os-icon-signs-11" /><span>Logout</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-i">
          <div className="">
            <div className="app-email-w">
              <div className="app-email-i">
                <div className="ae-side-menu">
                  <div className="aem-head"><a className="ae-side-menu-toggler" href="#"><i className="os-icon os-icon-hamburger-menu-2" /></a></div>
                  <ul className="ae-main-menu">
                    <li className="active"><a href="#"><i className="os-icon os-icon-phone-21" /><span>Inbox</span></a></li>
                    <li><a href="#"><i className="os-icon os-icon-ui-92" /><span>Sent</span></a></li>
                    <li><a href="#"><i className="os-icon os-icon-documents-03" /><span>Draft</span></a></li>
                    <li><a href="#"><i className="os-icon os-icon-ui-15" /><span>Trash</span></a></li>
                    <li><a href="#"><i className="os-icon os-icon-ui-44" /><span>Archive</span></a></li>
                  </ul>
                  <div className="ae-labels">
                    <div className="ae-labels-header"><i className="os-icon os-icon-ui-54" /><span>Labels</span></div>
                    <a className="ae-label ae-label-red" href="#"><span className="label-pin" /><span className="label-value">Corporate</span></a><a className="ae-label ae-label-green" href="#"><span className="label-pin" /><span className="label-value">Personal</span></a><a className="ae-label ae-label-blue" href="#"><span className="label-pin" /><span className="label-value">Statements</span></a><a className="ae-label ae-label-yellow" href="#"><span className="label-pin" /><span className="label-value">Projects</span></a></div>
                </div>
                <div className="ae-list-w">
                  <div className="ael-head">
                    <div className="actions-left"><select>
                        <option>Sort by date</option>
                      </select></div>
                    <div className="actions-right"><a href="#"><i className="os-icon os-icon-ui-37" /></a><a href="#"><i className="os-icon os-icon-grid-18" /></a></div>
                  </div>
                  <div className="ae-list ps ps--theme_default ps--active-y" data-ps-id="5b112fb3-6cf3-30bb-a558-16eaad81fe4c">
                    <div className="ae-item with-status status-green">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar1.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">1:25pm</div>
                        <h6 className="aei-title">James Morgan</h6>
                        <div className="aei-sub-title">Create new profile request</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ae-item with-status status-green">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar2.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">11:12am</div>
                        <h6 className="aei-title">Kyle Jefferson</h6>
                        <div className="aei-sub-title">Document Verification</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ae-item with-status active status-red">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar3.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">9:07am</div>
                        <h6 className="aei-title">Matt Wallas</h6>
                        <div className="aei-sub-title">Booking Confirmation</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ae-item with-status status-green">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar4.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">6:34am</div>
                        <h6 className="aei-title">Kimerley Markson</h6>
                        <div className="aei-sub-title">Your Statement is available</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ae-item with-status status-blue">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar5.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">Yesterday</div>
                        <h6 className="aei-title">Lora Miller</h6>
                        <div className="aei-sub-title">New comment on your blog post</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ae-item with-status status-blue">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar6.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">Yesterday</div>
                        <h6 className="aei-title">Ivan Moskovits</h6>
                        <div className="aei-sub-title">Diagnostics validation</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ae-item with-status status-green">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar7.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">Yesterday</div>
                        <h6 className="aei-title">Sheldon Kooper</h6>
                        <div className="aei-sub-title">Your trial has ended</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ae-item with-status status-yellow">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar1.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">2 days ago</div>
                        <h6 className="aei-title">Mesut Ozil</h6>
                        <div className="aei-sub-title">New comment received</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ae-item with-status status-red">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar4.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">3 days ago</div>
                        <h6 className="aei-title">Andres Iniesta</h6>
                        <div className="aei-sub-title">Certificate is issued</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ae-item with-status status-blue">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar5.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">Yesterday</div>
                        <h6 className="aei-title">Lora Miller</h6>
                        <div className="aei-sub-title">New comment on your blog post</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ae-item with-status status-blue">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar6.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">Yesterday</div>
                        <h6 className="aei-title">Ivan Moskovits</h6>
                        <div className="aei-sub-title">Diagnostics validation</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ae-item with-status status-green">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar7.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">Yesterday</div>
                        <h6 className="aei-title">Sheldon Kooper</h6>
                        <div className="aei-sub-title">Your trial has ended</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ae-item with-status status-yellow">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar1.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">2 days ago</div>
                        <h6 className="aei-title">Mesut Ozil</h6>
                        <div className="aei-sub-title">New comment received</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ae-item with-status status-green">
                      <div className="aei-image">
                        <div className="user-avatar-w"><img alt="" src="img/avatar2.jpg" /></div>
                      </div>
                      <div className="aei-content">
                        <div className="aei-timestamp">1 week ago</div>
                        <h6 className="aei-title">Anthony Tailor</h6>
                        <div className="aei-sub-title">Create new profile request</div>
                        <div className="aei-text">When the equation, first to ability the forwards, the a but
                          travelling
                        </div>
                      </div>
                    </div>
                    <div className="ps__scrollbar-x-rail" style={{left: '0px', bottom: '0px'}}>
                      <div className="ps__scrollbar-x" tabIndex={0} style={{left: '0px', width: '0px'}} />
                    </div>
                    <div className="ps__scrollbar-y-rail" style={{top: '0px', height: '1000px', right: '0px'}}>
                      <div className="ps__scrollbar-y" tabIndex={0} style={{top: '0px', height: '593px'}} />
                    </div>
                  </div>
                  <a className="ae-load-more" href="#"><span>Load More Messages</span></a></div>
                <div className="ae-content-w">
                  <div className="aec-head">
                    <div className="actions-left"><a className="highlight" href="#"><i className="os-icon os-icon-ui-02" /></a></div>
                    <div className="actions-right">
                      <div className="aeh-actions"><a href="#"><i className="os-icon os-icon-ui-44" /></a><a className="separate" href="#"><i className="os-icon os-icon-ui-15" /></a><a href="#"><i className="os-icon os-icon-common-07" /></a><a href="#"><i className="os-icon os-icon-mail-19" /></a></div>
                      <div className="user-avatar"><img alt="" src="img/avatar3.jpg" /></div>
                    </div>
                  </div>
                  <div className="ae-content">
                    <div className="older-pack">
                      <div className="aec-full-message-w">
                        <div className="aec-full-message">
                          <div className="message-head">
                            <div className="user-w with-status status-green">
                              <div className="user-avatar-w">
                                <div className="user-avatar"><img alt="" src="img/avatar1.jpg" /></div>
                              </div>
                              <div className="user-name"><h6 className="user-title">Bryan Kinskey</h6>
                                <div className="user-role">Registration Question<span>&lt; bryan@solutions.com &gt;</span>
                                </div>
                              </div>
                            </div>
                            <div className="message-info">February 7th, 2017<br />2:27pm</div>
                          </div>
                          <div className="message-content">Greetings Bryan,<br /><br />Classes of there been
                            temple. Rung quite head the may devious usual. A century thing if but
                            support turn start he a subject if what live was become write that suspicion
                            case fundamentals office his her. Earnestly a the and on a phase samples
                            examples, tone.<br /><br />Regards,<br />Mike Mayers
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="aec-full-message-w show-pack">
                      <div className="more-messages">7 Earlier Messages</div>
                      <div className="aec-full-message">
                        <div className="message-head">
                          <div className="user-w with-status status-green">
                            <div className="user-avatar-w">
                              <div className="user-avatar"><img alt="" src="img/avatar1.jpg" /></div>
                            </div>
                            <div className="user-name"><h6 className="user-title">John Mayers</h6>
                              <div className="user-role">Account
                                Manager<span>&lt; john@solutions.com &gt;</span></div>
                            </div>
                          </div>
                          <div className="message-info">January 12th, 2017<br />1:24pm</div>
                        </div>
                        <div className="message-content">Hi Mike,<br /><br />When the equation, first to ability the
                          forwards, the a but travelling, outlines sentinels bad expand to goodness.
                          Behind if have at the even I and how work, completely deference who boss
                          actually designer; Monstrous with geared from far and these, morals, phase rome;
                          Class. Called get amidst of next.<br /><br />Regards,<br />Mike Mayers
                          <div className="message-attachments">
                            <div className="attachments-heading">Attachments</div>
                            <div className="attachments-docs"><a href="#"><i className="os-icon os-icon-ui-51" /><span>Excel Document</span></a><a href="#"><i className="os-icon os-icon-documents-07" /><span>Image File</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="aec-reply">
                      <div className="reply-header"><h5>Reply to &lt;span&gt;John Mayers&lt;/span&gt;</h5></div>
                      <textarea cols={80} id="ckeditorEmail" name="ckeditor1" rows={5} style={{visibility: 'hidden', display: 'none'}} defaultValue={""} />
                      <div id="cke_ckeditorEmail" className="cke_1 cke cke_reset cke_chrome cke_editor_ckeditorEmail cke_ltr cke_browser_webkit" dir="ltr" lang="en" role="application" aria-labelledby="cke_ckeditorEmail_arialbl">
                        <span id="cke_ckeditorEmail_arialbl" className="cke_voice_label">Rich Text Editor, ckeditorEmail</span>
                        <div className="cke_inner cke_reset" role="presentation"><span id="cke_1_top" className="cke_top cke_reset_all" role="presentation" style={{height: 'auto', userSelect: 'none'}}><span id="cke_8" className="cke_voice_label">Editor toolbars</span><span id="cke_1_toolbox" className="cke_toolbox" role="group" aria-labelledby="cke_8" onmousedown="return false;"><span id="cke_9" className="cke_toolbar cke_toolbar_last" role="toolbar"><span className="cke_toolbar_start" /><span className="cke_toolgroup" role="presentation"><a id="cke_10" className="cke_button cke_button__bold cke_button_off" href="javascript:void('Bold')" title="Bold (Ctrl+B)" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_10_label" aria-describedby="cke_10_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(2,event);" onfocus="return CKEDITOR.tools.callFunction(3,event);" onclick="CKEDITOR.tools.callFunction(4,this);return false;"><span className="cke_button_icon cke_button__bold_icon" style={{backgroundImage: 'url("http://light.pinsupreme.com/bower_components/ckeditor/plugins/icons.png?t=JB9B")', backgroundPosition: '0 -24px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_10_label" className="cke_button_label cke_button__bold_label" aria-hidden="false">Bold</span><span id="cke_10_description" className="cke_button_label" aria-hidden="false">Keyboard shortcut Ctrl+B</span></a><a id="cke_11" className="cke_button cke_button__italic cke_button_off" href="javascript:void('Italic')" title="Italic (Ctrl+I)" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_11_label" aria-describedby="cke_11_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(5,event);" onfocus="return CKEDITOR.tools.callFunction(6,event);" onclick="CKEDITOR.tools.callFunction(7,this);return false;"><span className="cke_button_icon cke_button__italic_icon" style={{backgroundImage: 'url("http://light.pinsupreme.com/bower_components/ckeditor/plugins/icons.png?t=JB9B")', backgroundPosition: '0 -48px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_11_label" className="cke_button_label cke_button__italic_label" aria-hidden="false">Italic</span><span id="cke_11_description" className="cke_button_label" aria-hidden="false">Keyboard shortcut Ctrl+I</span></a><span className="cke_toolbar_separator" role="separator" /><a id="cke_12" className="cke_button cke_button__numberedlist cke_button_off" href="javascript:void('Insert/Remove Numbered List')" title="Insert/Remove Numbered List" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_12_label" aria-describedby="cke_12_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(8,event);" onfocus="return CKEDITOR.tools.callFunction(9,event);" onclick="CKEDITOR.tools.callFunction(10,this);return false;"><span className="cke_button_icon cke_button__numberedlist_icon" style={{backgroundImage: 'url("http://light.pinsupreme.com/bower_components/ckeditor/plugins/icons.png?t=JB9B")', backgroundPosition: '0 -1632px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_12_label" className="cke_button_label cke_button__numberedlist_label" aria-hidden="false">Insert/Remove Numbered List</span><span id="cke_12_description" className="cke_button_label" aria-hidden="false" /></a><a id="cke_13" className="cke_button cke_button__bulletedlist cke_button_off" href="javascript:void('Insert/Remove Bulleted List')" title="Insert/Remove Bulleted List" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_13_label" aria-describedby="cke_13_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(11,event);" onfocus="return CKEDITOR.tools.callFunction(12,event);" onclick="CKEDITOR.tools.callFunction(13,this);return false;"><span className="cke_button_icon cke_button__bulletedlist_icon" style={{backgroundImage: 'url("http://light.pinsupreme.com/bower_components/ckeditor/plugins/icons.png?t=JB9B")', backgroundPosition: '0 -1584px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_13_label" className="cke_button_label cke_button__bulletedlist_label" aria-hidden="false">Insert/Remove Bulleted List</span><span id="cke_13_description" className="cke_button_label" aria-hidden="false" /></a><span className="cke_toolbar_separator" role="separator" /><a id="cke_14" className="cke_button cke_button__link cke_button_off" href="javascript:void('Link')" title="Link (Ctrl+K)" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_14_label" aria-describedby="cke_14_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(14,event);" onfocus="return CKEDITOR.tools.callFunction(15,event);" onclick="CKEDITOR.tools.callFunction(16,this);return false;"><span className="cke_button_icon cke_button__link_icon" style={{backgroundImage: 'url("http://light.pinsupreme.com/bower_components/ckeditor/plugins/icons.png?t=JB9B")', backgroundPosition: '0 -1512px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_14_label" className="cke_button_label cke_button__link_label" aria-hidden="false">Link</span><span id="cke_14_description" className="cke_button_label" aria-hidden="false">Keyboard shortcut Ctrl+K</span></a><a id="cke_15" className="cke_button cke_button__unlink cke_button_disabled " href="javascript:void('Unlink')" title="Unlink" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_15_label" aria-describedby="cke_15_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(17,event);" onfocus="return CKEDITOR.tools.callFunction(18,event);" onclick="CKEDITOR.tools.callFunction(19,this);return false;"><span className="cke_button_icon cke_button__unlink_icon" style={{backgroundImage: 'url("http://light.pinsupreme.com/bower_components/ckeditor/plugins/icons.png?t=JB9B")', backgroundPosition: '0 -1536px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_15_label" className="cke_button_label cke_button__unlink_label" aria-hidden="false">Unlink</span><span id="cke_15_description" className="cke_button_label" aria-hidden="false" /></a><span className="cke_toolbar_separator" role="separator" /><a id="cke_16" className="cke_button cke_button__about cke_button_off" href="javascript:void('About CKEditor 4')" title="About CKEditor 4" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_16_label" aria-describedby="cke_16_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(20,event);" onfocus="return CKEDITOR.tools.callFunction(21,event);" onclick="CKEDITOR.tools.callFunction(22,this);return false;"><span className="cke_button_icon cke_button__about_icon" style={{backgroundImage: 'url("http://light.pinsupreme.com/bower_components/ckeditor/plugins/icons.png?t=JB9B")', backgroundPosition: '0 0px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_16_label" className="cke_button_label cke_button__about_label" aria-hidden="false">About CKEditor 4</span><span id="cke_16_description" className="cke_button_label" aria-hidden="false" /></a></span><span className="cke_toolbar_end" /></span></span></span>
                          <div id="cke_1_contents" className="cke_contents cke_reset" role="presentation" style={{height: '110px'}}><span id="cke_20" className="cke_voice_label">Press ALT 0 for help</span>
                            <iframe src frameBorder={0} className="cke_wysiwyg_frame cke_reset" style={{width: '100%', height: '100%'}} title="Rich Text Editor, ckeditorEmail" aria-describedby="cke_20" tabIndex={0} allowTransparency="true" />
                          </div>
                          <span id="cke_1_bottom" className="cke_bottom cke_reset_all" role="presentation" style={{userSelect: 'none'}}><span id="cke_1_resizer" className="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Resize" onmousedown="CKEDITOR.tools.callFunction(1, event)">◢</span><span id="cke_1_path_label" className="cke_voice_label">Elements path</span><span id="cke_1_path" className="cke_path" role="group" aria-labelledby="cke_1_path_label"><span className="cke_path_empty">&nbsp;</span></span></span></div>
                      </div>
                      <div className="buttons-w">
                        <div className="actions-left"><a className="btn btn-link" href="#"><i className="os-icon os-icon-ui-51" /><span>Add Attachment</span></a></div>
                        <div className="actions-right"><a className="btn btn-success" href="#"><i className="os-icon os-icon-mail-18" /><span>Send Message</span></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div className="floated-chat-w">
              <div className="floated-chat-i">
                <div className="chat-close"><i className="os-icon os-icon-close" /></div>
                <div className="chat-head">
                  <div className="user-w with-status status-green">
                    <div className="user-avatar-w">
                      <div className="user-avatar"><img alt="" src="img/avatar1.jpg" /></div>
                    </div>
                    <div className="user-name"><h6 className="user-title">John Mayers</h6>
                      <div className="user-role">Account Manager</div>
                    </div>
                  </div>
                </div>
                <div className="chat-messages ps ps--theme_default" data-ps-id="d7deb07a-e7df-f194-a23a-8b248cf4569e">
                  <div className="message">
                    <div className="message-content">Hi, how can I help you?</div>
                  </div>
                  <div className="date-break">Mon 10:20am</div>
                  <div className="message">
                    <div className="message-content">Hi, my name is Mike, I will be happy to assist you</div>
                  </div>
                  <div className="message self">
                    <div className="message-content">Hi, I tried ordering this product and it keeps showing me error
                      code.
                    </div>
                  </div>
                  <div className="ps__scrollbar-x-rail" style={{left: '0px', bottom: '0px'}}>
                    <div className="ps__scrollbar-x" tabIndex={0} style={{left: '0px', width: '0px'}} />
                  </div>
                  <div className="ps__scrollbar-y-rail" style={{top: '0px', right: '0px'}}>
                    <div className="ps__scrollbar-y" tabIndex={0} style={{top: '0px', height: '0px'}} />
                  </div>
                </div>
                <div className="chat-controls"><input className="message-input" placeholder="Type your message here..." />
                  <div className="chat-extra"><a href="#"><span className="extra-tooltip">Attach Document</span><i className="os-icon os-icon-documents-07" /></a><a href="#"><span className="extra-tooltip">Insert Photo</span><i className="os-icon os-icon-others-29" /></a><a href="#"><span className="extra-tooltip">Upload Video</span><i className="os-icon os-icon-ui-51" /></a></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
              
            </div>
          </div>
    </div>
</div>
   
  );
}

export default App;
