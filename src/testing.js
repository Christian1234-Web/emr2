<div className="top-bar color-scheme-light">
        <div className="fancy-selector-w">
          <div className="fancy-selector-current">
            <div className="fs-img shadowless">
              <img alt="" src="img/company5.png" />
            </div>
            <div className="fs-main-info">
              <div className="fs-name">
                Mail Sender Product
              </div>
              <div className="fs-sub">
                <span>New Tickets:</span><strong>14</strong>
              </div>
            </div>
            <div className="fs-selector-trigger">
              <i className="os-icon os-icon-arrow-down4" />
            </div>
          </div>
          <div className="fancy-selector-options">
            <div className="fancy-selector-option">
              <div className="fs-img shadowless">
                <img alt="" src="img/company1.png" />
              </div>
              <div className="fs-main-info">
                <div className="fs-name">
                  CMS Product
                </div>
                <div className="fs-sub">
                  <span>New Tickets:</span><strong>32</strong>
                </div>
              </div>
            </div>
            <div className="fancy-selector-option active">
              <div className="fs-img shadowless">
                <img alt="" src="img/company5.png" />
              </div>
              <div className="fs-main-info">
                <div className="fs-name">
                  Server Product
                </div>
                <div className="fs-sub">
                  <span>New Tickets:</span><strong>17</strong>
                </div>
              </div>
            </div>
            <div className="fancy-selector-option">
              <div className="fs-img shadowless">
                <img alt="" src="img/company3.png" />
              </div>
              <div className="fs-main-info">
                <div className="fs-name">
                  Compute Engine
                </div>
                <div className="fs-sub">
                  <span>New Tickets:</span><strong>11</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="top-menu-controls">
          <div className="element-search autosuggest-search-activator">
            <input placeholder="Start typing to search..." type="text"onClick={()=>setShow('block')} />
          </div>
       
          <div className="messages-notifications os-dropdown-trigger os-dropdown-position-left">
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
          <div className="top-icon top-settings os-dropdown-trigger os-dropdown-position-left">
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
              START - User avatar and menu in secondary top menu
              ------------------*/}
          <div className="logged-user-w">
            <div className="logged-user-i">
              <div className="avatar-w">
                <img alt="" src="img/avatar1.jpg" />
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
          {/*------------------
              END - User avatar and menu in secondary top menu
              ------------------*/}
        </div>
        {/*------------------
            END - Top Menu Controls
            ------------------*/}
      </div>