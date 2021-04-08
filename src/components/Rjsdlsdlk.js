import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "400px",
	"height": "400px",
	"background": "#bb7171"
};
const overrides = {};

const Rjsdlsdlk = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Rjsdlsdlk, { ...Box,
	defaultProps,
	overrides
});
export default Rjsdlsdlk;