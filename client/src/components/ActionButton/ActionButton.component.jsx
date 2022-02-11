import './ActionButton.style.scss';

const ActionButton = ({onClick, className, children, otherProps}) => {
    return (
        <button
            className={`action-btn ${className}`}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default ActionButton;