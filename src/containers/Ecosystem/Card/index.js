import React from 'react';
import './index.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import variables from '../../../utils/variables';
import { useToast } from '../../../components/Toast/Toast.Provider';
import PaperIcon from '../Icons/PaperIcon';
const Card = ({ lang, name, address, image, tgLink, githubLink, twitterLink, type }) => {
    const { showToast } = useToast();
    let className = 'card_state card_state--contract';
    if (type === 'Tools') { className = 'card_state card_state--tool'; } else if (type === 'Dapp') { className = 'card_state card_state--dapp'; }

    let tooltip = variables[lang].card_contract;
    if (type === 'Tools') { tooltip = variables[lang].card_tools; } else if (type === 'Dapp') { tooltip = variables[lang].card_dapp; }

    const copyAddress = () => {
        navigator.clipboard.writeText(address);
        showToast({ text: 'Address is copied', severity: 'info' });
    };

    const getLink = (link) => {
        if (link.includes('http')) { return link; } else { return 'https://' + link; }
    };

    const openAddress = () => {
        window.open(`https://junoscan.com/contract/${address}`, '_blank');
    };
    return (
        <div className="eco_stym_card">
            <div className="eco_stym_card_image_container" onClick={openAddress}>
                <img alt={name} className="eco_stym_card_image_blur" src={image} />
                <img alt={name} className="eco_stym_card_image" src={image} />
            </div>
            <div className="eco_stym_card_informations">
                <p className="eco_stym_card_name" onClick={openAddress}>{name}
                    <span
                        className={className}
                        title={tooltip}>
                    </span>
                </p>
                {/* <p className="eco_stym_card_address" title={variables[lang].card_copy} onClick={copyAddress}>{address}</p> */}
                <p className="eco_stym_card_type">{type}</p>
                <div className="eco_stym_card_links">
                    {(type === 'Dapp' || type === 'Contracts') && address ? <PaperIcon className="eco_stym_card_icon" color="rgba(255, 255, 255, 0.50)" onClick={copyAddress} onClick={copyAddress} /> : null}
                    {twitterLink ? <a className="eco_stym_card_link" href={getLink(twitterLink)} rel="noreferrer" target="_blank"><TwitterIcon /></a> : null}
                    {tgLink ? <a className="eco_stym_card_link" href={getLink(tgLink)} rel="noreferrer" target="_blank"><TelegramIcon /></a> : null}
                    {githubLink ? <a className="eco_stym_card_link" href={getLink(githubLink)} rel="noreferrer" target="_blank"><GitHubIcon /></a> : null}

                </div>
            </div>
        </div>
    );
};

export default Card;
