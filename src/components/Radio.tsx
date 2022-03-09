import React from 'react';

export interface IRadioProps extends React.ComponentPropsWithoutRef<'input'> {
	label?: string;
}

const Radio: React.FC<IRadioProps> = ({ label, disabled = false, ...rest }) => {
	return (
		<label
			className={`form-control${disabled ? ' form-control--disabled' : ''}`}
		>
			<input type='radio' name='radio' {...rest} />
			{label}
		</label>
	);
};

export default Radio;
