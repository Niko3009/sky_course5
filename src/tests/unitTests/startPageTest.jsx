import { screen, render, fireEvent } from '@testing-library/react'

import { LoginForm } from 'app/startPage/loginForm'
import { RegistrForm } from 'app/startPage/registrForm'

export const StartPageTest = () => {
    const dataOfLoginForm = { btnText: 'Войти' }
    describe('<LoginForm />', () =>
        testOfStartPageForms(LoginForm, dataOfLoginForm))

    const dataOfRegistrForm = { btnText: 'Зарегистрироваться' }
    describe('<RegistrForm  />', () =>
        testOfStartPageForms(RegistrForm, dataOfRegistrForm))
}

function testOfStartPageForms(Form, data) {
    const testId = 'test-id'
    const cb = jest.fn()
    const test = { on: true, id: testId, func: cb }

    describe('Attributes tests', () => {
        it('should set type="button" by default', () => {
            render(<Form test={test} />)
            const btn = screen.getByText(data.btnText)
            expect(btn).toBeInTheDocument()
            // expect(btn).toHaveAttribute('type', 'button')
        })
    })

    describe('Callbacks tests', () => {
        it('should call `onClick` prop', () => {
            render(<Form test={test} />)
            const btn = screen.getByTestId(testId)
            fireEvent.click(btn)
            expect(cb).toBeCalledTimes(1)
        })
    })
}

// -------------------------------------------------------------------------------
// describe('Snapshots tests', () => {
//     it('should render successfully and match snapshot', () => {
//         const { container } = render(<LoginForm />)
//         expect(container).toMatchSnapshot()
//     })
// })
