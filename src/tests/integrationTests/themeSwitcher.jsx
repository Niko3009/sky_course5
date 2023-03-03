import { screen, fireEvent } from '@testing-library/react'

import { ThemeSwitcher } from 'app/account/main/nav'

import { customRender } from './themeSwitcher/test-utils'

export const ThemeSwitcherTest = () => {
    it('should change theme by click', () => {
        const testId = 'test-id'
        const cb = jest.fn()
        const test = { on: true, id: testId, func: cb }

        customRender(<ThemeSwitcher test={test} />)

        const btnWrapper = screen.getByTestId(testId)
        const btn = btnWrapper.firstChild

        expect(btn).toBeInTheDocument()

        const color1 = '#ffffff'
        const color2 = '#181818'

        expect(btn).toHaveStyle({
            stroke: color1,
            fill: color1,
        })

        fireEvent.click(btn)
        expect(btn).toHaveStyle({
            stroke: color2,
            fill: color2,
        })
    })
}
