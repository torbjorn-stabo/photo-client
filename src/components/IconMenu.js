import React, {Component} from 'react';

import IconMenuItem from './IconMenuItem';

import './IconMenu.scss';

const menuItems = [
    {
        name: "Personer",
        icon: 1,
        url: "./person"
    },
    {
        name: "Platser",
        icon: 2,
        url: "./place"
    },
    {
        name: "Händelser",
        icon: 3,
        url: "./event"
    },
    {
        name: "Värden",
        icon: 4,
        url: "./value"
    },
    {
        name: "Katalog",
        icon: 3,
        url: "./folder"
    },
    {
        name: "Mediatyp",
        icon: 5,
        url: "./media"
    },
    {
        name: "Geografisk position",
        icon: 2,
        url: "./geo"
    },
    {
        name: "EXIF-information",
        icon: 6,
        url: "./exif"
    },
    {
        name: "Sök",
        icon: 7,
        url: "./search"
    },
    {
        name: "Bilder utan etikett...",
        icon: 8,
        url: "./unlabeled"
    },
    {
        name: "Visa miniatyrbilder",
        icon: 9,
        url: "./miniature"
    }
];

class IconMenu extends Component {
    render() {
        return (
            <div className={"iconmenu "+(this.props.className||'')}>
                {menuItems.map((v, k) => <IconMenuItem key={k} icon={v.icon} url={v.url}>{v.name}</IconMenuItem>)}
            </div>
        );
    }
}

export default IconMenu;