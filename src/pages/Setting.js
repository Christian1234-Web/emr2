import React from "react"
const Setting = ()=>{
    return(
    <React.Fragment>
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
          <div className="content-box">
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
            <div className="floated-colors-btn second-floated-btn">
              <div className="os-toggler-w">
                <div className="os-toggler-i">
                  <div className="os-toggler-pill" />
                </div>
              </div>
              <span>Dark </span><span>Colors</span></div>
            <div className="floated-customizer-btn third-floated-btn">
              <div className="icon-w"><i className="os-icon os-icon-ui-46" /></div>
              <span>Customizer</span></div>
            <div className="floated-customizer-panel active">
              <div className="fcp-content">
                <div className="close-customizer-btn"><i className="os-icon os-icon-x" /></div>
                <div className="fcp-group">
                  <div className="fcp-group-header">Menu Settings</div>
                  <div className="fcp-group-contents">
                    <div className="fcp-field"><label htmlFor>Menu Position</label><select className="menu-position-selector">
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                        <option value="top">Top</option>
                      </select></div>
                    <div className="fcp-field"><label htmlFor>Menu Style</label><select className="menu-layout-selector">
                        <option value="compact">Compact</option>
                        <option value="full">Full</option>
                        <option value="mini">Mini</option>
                      </select></div>
                    <div className="fcp-field with-image-selector-w" style={{display: 'none'}}><label htmlFor>With
                        Image</label><select className="with-image-selector">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select></div>
                    <div className="fcp-field"><label htmlFor>Menu Color</label>
                      <div className="fcp-colors menu-color-selector">
                        <div className="color-selector menu-color-selector color-bright selected" />
                        <div className="color-selector menu-color-selector color-dark" />
                        <div className="color-selector menu-color-selector color-light" />
                        <div className="color-selector menu-color-selector color-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fcp-group">
                  <div className="fcp-group-header">Sub Menu</div>
                  <div className="fcp-group-contents">
                    <div className="fcp-field"><label htmlFor>Sub Menu Style</label><select className="sub-menu-style-selector">
                        <option value="flyout">Flyout</option>
                        <option value="inside">Inside/Click</option>
                        <option value="over">Over</option>
                      </select></div>
                    <div className="fcp-field"><label htmlFor>Sub Menu Color</label>
                      <div className="fcp-colors">
                        <div className="color-selector sub-menu-color-selector color-bright selected" />
                        <div className="color-selector sub-menu-color-selector color-dark" />
                        <div className="color-selector sub-menu-color-selector color-light" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fcp-group">
                  <div className="fcp-group-header">Other Settings</div>
                  <div className="fcp-group-contents">
                    <div className="fcp-field"><label htmlFor>Full Screen?</label><select className="full-screen-selector">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select></div>
                    <div className="fcp-field"><label htmlFor>Show Top Bar</label><select className="top-bar-visibility-selector">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select></div>
                    <div className="fcp-field"><label htmlFor>Above Menu?</label><select className="top-bar-above-menu-selector">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select></div>
                    <div className="fcp-field"><label htmlFor>Top Bar Color</label>
                      <div className="fcp-colors">
                        <div className="color-selector top-bar-color-selector color-bright" />
                        <div className="color-selector top-bar-color-selector color-dark" />
                        <div className="color-selector top-bar-color-selector color-light" />
                        <div className="color-selector top-bar-color-selector color-transparent selected" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floated-chat-btn"><i className="os-icon os-icon-mail-07" /><span>Demo Chat</span></div>
            <div className="floated-chat-w">
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
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>)
}