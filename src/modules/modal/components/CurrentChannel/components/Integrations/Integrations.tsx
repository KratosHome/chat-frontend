import React, {FC} from 'react';
import {IntegrationsType} from "./IntegrationsType";
import "./Integrations.scss"
import img from "./apps-empty@2x.png"

export const Integrations: FC<IntegrationsType> = ({tab, setTab}) => {
    return (
        <div className={tab === 3 ? "containerMembers" : "nowVisible"} onClick={() => setTab(3)}>
            <div className="containerIntegrations">
                <div className="blockIntegrations">
                    <div>
                        <div className="headBlockIntegrations">
                            <h3>Workflows</h3>
                            <div className="proIntegrations">PRO</div>
                        </div>
                        <span>Automate the tasks and processes unique to your team, no coding required.</span>
                        <button>See Upgrade Options</button>
                    </div>
                </div>
                <div className="blockIntegrations">
                    <div>
                        <div className="headBlockIntegrations">
                            <h3>Apps</h3>
                        </div>
                        <span>Bring the tools you need into this channel to pull reports, start calls, file tickets and
                            more.
                        </span>
                        <button>Add an App</button>
                    </div>
                    <img src={img} alt="Workflows"/>
                </div>
                <div className="blockIntegrations">
                    <div>
                        <div className="headBlockIntegrations">
                            <h3>Send emails to this channel</h3>
                            <div className="proIntegrations">PRO</div>
                        </div>
                        <span>Get an email address that posts incoming emails in this channel.</span>
                        <button>See Upgrade Options</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
