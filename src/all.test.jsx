import { IntegarationTests } from './tests/integrationTests'
import { UnitTests } from './tests/unitTests'

const consoleControl = () => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
    jest.spyOn(console, 'error').mockImplementation(() => {})
}
beforeEach(() => consoleControl())
afterEach(() => consoleControl())

describe('All tests', () => {
    describe('Unit-tests', UnitTests)
    describe('Integaration-tests', IntegarationTests)
})
