import Icon from '../../Icon/Icon';
import './headerIcons.scss';

const HeaderIcons = () => {
    return (
        <div className="headerIconContainer">
            <div className="headerIconWrap">
                <Icon
                    name='cart'
                    className='headerIcon'
                />
                <div className="headerIconLabel">
                    0
                </div>
            </div>
            <div className="headerIconWrap">
                <Icon
                    name='heart'
                    className='headerIcon'
                />
                <div className="headerIconLabel">
                    14
                </div>
            </div>
        </div>
    )
}

export default HeaderIcons;