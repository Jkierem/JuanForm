import { JSDOM } from 'jsdom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const dom = new JSDOM('<!doctype html><html><body></body></html>')
global.document = dom.window.document
global.window = dom.window

Enzyme.configure({ adapter: new Adapter() })
