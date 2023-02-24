import ReactDOM from "react-dom";
import {MainApp} from "./App";


test('render without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<MainApp/>, div)
	ReactDOM.unmountComponentAtNode(div)
})