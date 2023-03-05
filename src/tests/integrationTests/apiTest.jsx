import { render, screen } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

import { BASE_API_URL, signApi } from 'back/services/signApi'
import { AllTracks } from 'app/account/main/centerBlock/allTracks'
import { IndieCharge } from 'app/account/main/centerBlock/indieCharge'
import { DanceHits } from 'app/account/main/centerBlock/danceHits'
import { PlaylistOfDay } from 'app/account/main/centerBlock/playlistOfDay'
import { MyPlaylist } from 'app/account/main/centerBlock/myPlaylist'

import { mockTrack1, mockTrack2 } from './apiTest/mockTracks'
import { setupApiStore } from './apiTest/test-utils'

// Описываем endpoint-ы, которые хотим замокировать
export const handlers = [
    rest.get(`${BASE_API_URL}/catalog/selection/1`, (req, res, ctx) => {
        return res(ctx.json(mockTrack1))
    }),
]

const server = setupServer(...handlers) // Готовим моковый сервер
const storeRef = setupApiStore(signApi) // Мокируем api store

const commonApiTest = (Selector, url, mock) => {
    const reqURL = `${BASE_API_URL}/${url}`

    it('should show tracks', async () => {
        server.use(
            rest.get(reqURL, (req, res, ctx) => {
                return res(ctx.json(mock))
            })
        )

        render(<Selector />, { wrapper: storeRef.wrapper })

        // Проверяем начальное состояние компонента
        screen.getByText('Loading...')

        // Ждем ответа от сервера: как придет, будет отрисовка
        expect(await screen.findByText('MockTrack123')).toBeInTheDocument()
        expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })

    it('should show error if request failed', async () => {
        server.use(
            rest.get(reqURL, (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )

        render(<Selector />, { wrapper: storeRef.wrapper })

        expect(
            await screen.findByText('Произоша ошибка при загрузке')
        ).toBeInTheDocument()
    })
}

export const ApiTests = () => {
    beforeAll(() => server.listen()) // Поднимаем тестовый сервер перед запуском тестов
    afterEach(() => server.resetHandlers()) // Чистим обработчики между тестами
    afterAll(() => server.close()) // Отрубаем сервер после тестов (иначе сервер будет работать вхолостую)

    describe('<AllTracks />', () =>
        commonApiTest(AllTracks, `catalog/track/all`, mockTrack2))

    describe('<IndieCharge />', () =>
        commonApiTest(IndieCharge, `catalog/selection/1`, mockTrack1))

    describe('<DanceHits />', () =>
        commonApiTest(DanceHits, `catalog/selection/2`, mockTrack1))

    describe('<PlaylistOfDay />', () =>
        commonApiTest(PlaylistOfDay, `catalog/selection/3`, mockTrack1))

    describe('<MyPlaylist />', () =>
        commonApiTest(MyPlaylist, `catalog/track/favorite/all/`, mockTrack2))
}
