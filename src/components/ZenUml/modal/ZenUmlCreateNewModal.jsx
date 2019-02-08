import { h, Component } from 'preact';
import { CreateNewModal } from '../../CreateNewModal';
import Modal from '../../Modal';

export class ZenUmlCreateNewModal extends Component {
	isAnonymous() {
		return !this.props.user;
	}

	shouldPromoteToSignUp(){
		return this.isAnonymous() && this.props.savedItems && Object.keys(this.props.savedItems).length >= 3;
	}

	render() {
		let view = null;
		if (this.shouldPromoteToSignUp()) {
			view = (<Modal show={this.props.show}
				closeHandler={this.props.closeHandler}
				smll
			        >
				Anonymous User:
				<hr />
				Please Login/SignUp to unlock more UMLs.
				<hr />
			</Modal>);
		} else {
			view = (<CreateNewModal
				show={this.props.show}
				closeHandler={this.props.closeHandler}
				onBlankTemplateSelect={this.props.onBlankTemplateSelect}
				onTemplateSelect={this.props.onTemplateSelect}
			        />);
		}
		return view;

	}
}
