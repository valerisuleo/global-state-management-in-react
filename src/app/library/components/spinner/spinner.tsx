/* eslint-disable-next-line */
import classes from './spinner.module.scss';

export interface ISpinner {
    color: string;
    textContent?: string;
}

const SpinnerComponent = ({ color, textContent }: ISpinner) => {
    return (
        <div
            data-testid="spinner-container"
            className={`${classes.spinnerContainer} d-flex align-items-center justify-content-center text-${color}`}
        >
            <div className="spinner-border" role="status">
                <span className="visually-hidden">{textContent}</span>
            </div>
        </div>
    );
};

export default SpinnerComponent;
