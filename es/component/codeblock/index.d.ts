import { PureComponent } from 'react';
import PropTypes from 'prop-types';
interface BlogProps {
    value: string;
    language: string | undefined;
}
declare class CodeBlock extends PureComponent<BlogProps> {
    static propTypes: {
        value: PropTypes.Validator<string>;
        language: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        language: null;
    };
    constructor(props: BlogProps);
    render(): JSX.Element;
}
export default CodeBlock;
