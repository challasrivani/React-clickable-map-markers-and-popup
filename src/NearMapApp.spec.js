import { Provider } from 'react-redux';
import { render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { setupServer } from 'msw/node';

import reducers from './store/reducers';
import NearMapApp from './NearMapApp';

describe('<NearMapApp />', () => {
  const resList = [
    {
        'locationName': 'A Loc',
        'description': 'A Description',
        'coordinates': [10, 30]
    },
    {
        'locationName': 'B Loc',
        'description': 'B Description',
        'coordinates': [100, 35]
    },
    {
        'locationName': 'C Loc',
        'description': 'C Description',
        'coordinates': [45, 80]
    }
];

  const initStore = () => createStore(reducers, applyMiddleware(thunk));

  const handlers = [
    rest.get('/mock/map-data.json', (req, res, ctx) => {

      return res(ctx.json(resList));
    }),
  ];

  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should display loading on init ', async () => {
    const { queryByTestId } = render(
      <Provider store={initStore()}>
        <NearMapApp />
      </Provider>
    );

    await waitFor(() => {
      expect(queryByTestId('loading')).toBeTruthy();
    });
  });
});
