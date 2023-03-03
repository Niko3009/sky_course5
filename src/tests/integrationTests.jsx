import { ThemeSwitcherTest } from './integrationTests/themeSwitcher'
import { ApiTests } from './integrationTests/apiTest'

export const IntegarationTests = () => {
    describe('<ThemeSwitcher />', ThemeSwitcherTest)
    describe('<ApiTests />', ApiTests)
}
