import React  from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import './styles.css';

//const AnimationWrapperElement = ({children}) => (<fb className="tasksTransitionWrapper no-grow vertical no-shrink">{children}</fb>)

const TaskTransitionGroup = ({children, blockAnimation}) => {
	return (
		<ReactCSSTransitionGroup
			// component={AnimationWrapperElement}
			transitionEnter={!blockAnimation}
			transitionLeave={!blockAnimation}
			transitionName="taskAnimation"
			transitionEnterTimeout={200}
			transitionLeaveTimeout={130}>
			{children}
		</ReactCSSTransitionGroup>
	)
}

export default TaskTransitionGroup;
