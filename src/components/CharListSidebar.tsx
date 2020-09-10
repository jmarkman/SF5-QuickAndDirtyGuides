import React from 'react';

const CharListSidebar = () => {

    const charNames: string[] = ["Ryu", "Ken", "Chun Li", "Gill", "Urien", "Akuma"];

    return (
        <div className="col-2">
            <div className="sidebar-item">
                <div>
                    <ul className="list-group">
                        {charNames.map(n => <li className="list-group-item">{n}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharListSidebar;